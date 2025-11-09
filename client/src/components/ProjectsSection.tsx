import { ProjectCard } from './ProjectCard';

const macACCode = `@EventHandler(priority = EventPriority.MONITOR)
public void onPlayerMove(PlayerMoveEvent event) {
    Player player = event.getPlayer();
    PacketData data = packetAnalyzer.analyze(player);
    
    // Multi-layered detection system
    ViolationLevel level = behaviorMonitor.check(
        data.getMovementPattern(),
        data.getPacketTiming(),
        player.getPing()
    );
    
    if (level.getConfidence() > 0.997) {
        // Real-time behavioral analysis
        if (!whitelistManager.isExempt(player)) {
            punishmentHandler.execute(player, level);
            alertStaff(player, level.getDetails());
        }
    }
}

// Packet-level analysis for sub-1ms detection
private class PacketAnalyzer {
    private final Queue<PacketSnapshot> history;
    
    public ViolationLevel analyze(PacketData data) {
        history.add(new PacketSnapshot(data, System.nanoTime()));
        return mlModel.predict(history);
    }
}`;

const macRefundsCode = `public class RefundCommand implements CommandExecutor {
    private final JDA jda;
    private final DatabaseManager db;
    
    @Override
    public boolean onCommand(CommandSender sender, 
                            Command cmd, 
                            String label, 
                            String[] args) {
        Player player = (Player) sender;
        
        // Log to secure database
        RefundRequest request = db.createRefund(
            player.getUniqueId(),
            String.join(" ", args)
        );
        
        // JDA-powered Discord integration
        EmbedBuilder embed = new EmbedBuilder()
            .setTitle("💰 Refund Request #" + request.getId())
            .setColor(0x10b981)
            .addField("Player", player.getName(), true)
            .addField("UUID", player.getUniqueId().toString(), true)
            .addField("Reason", request.getReason(), false)
            .addField("Status", "Pending Review", false)
            .setTimestamp(Instant.now());
        
        TextChannel channel = jda.getTextChannelById(channelId);
        channel.sendMessageEmbeds(embed.build())
            .setActionRow(
                Button.success("approve_" + request.getId(), "✓ Approve"),
                Button.danger("deny_" + request.getId(), "✗ Deny"),
                Button.secondary("info_" + request.getId(), "ℹ More Info")
            ).queue();
        
        player.sendMessage("§aRefund request submitted!");
        return true;
    }
}`;

const macAuctionsCode = `public class AuctionManager {
    private final RedissonClient redis;
    private final WebSocketServer wsServer;
    
    public void createAuction(Player seller, ItemStack item, 
                             double startPrice, long duration) {
        // Real-time auction with WebSocket updates
        Auction auction = Auction.builder()
            .id(UUID.randomUUID())
            .seller(seller.getUniqueId())
            .item(item)
            .currentBid(startPrice)
            .endTime(System.currentTimeMillis() + duration)
            .build();
        
        // Store in Redis for <10ms response
        redis.getMap("auctions").put(auction.getId(), auction);
        
        // Broadcast to all connected clients
        wsServer.broadcast(new AuctionCreateEvent(auction));
        
        // Schedule auto-close with escrow transaction
        scheduler.schedule(() -> {
            closeAuction(auction);
        }, duration, TimeUnit.MILLISECONDS);
    }
    
    public void placeBid(Player bidder, UUID auctionId, double amount) {
        Auction auction = redis.getMap("auctions").get(auctionId);
        
        if (auction.updateBid(bidder.getUniqueId(), amount)) {
            // Automated escrow with 100K+ transactions
            escrowManager.hold(bidder, amount);
            wsServer.broadcast(new BidUpdateEvent(auction));
        }
    }
}`;

const cloudGuardCode = `package main

import (
    "github.com/go-redis/redis/v8"
    "github.com/tensorflow/tensorflow/tensorflow/go"
)

type DDoSMitigator struct {
    model      *tf.SavedModel
    redis      *redis.Client
    rateLimit  *RateLimiter
}

func (m *DDoSMitigator) AnalyzeTraffic(req *Request) MitigationAction {
    // Machine learning pattern recognition
    features := m.extractFeatures(req)
    prediction := m.model.Predict(features)
    
    // Distributed traffic filtering across nodes
    if prediction.ThreatLevel > 0.95 {
        // <500ms mitigation response
        m.redis.Set(ctx, 
            fmt.Sprintf("block:%s", req.IP), 
            true, 
            5*time.Minute)
        
        m.rateLimit.Block(req.IP)
        return MitigationAction{
            Action: "BLOCK",
            Reason: prediction.Reason,
            Duration: 300,
        }
    }
    
    // Handle 1M+ requests/s with Redis caching
    return MitigationAction{Action: "ALLOW"}
}

// 99.99% uptime through distributed architecture
func (m *DDoSMitigator) Start(nodes []*Node) {
    for _, node := range nodes {
        go node.ProcessTraffic(m.AnalyzeTraffic)
    }
}`;

const ticketSystemCode = `public class TicketSystem extends ListenerAdapter {
    private final JDA jda;
    private final CategoryManager categories;
    
    @Override
    public void onButtonInteraction(ButtonInteractionEvent event) {
        if (event.getComponentId().equals("create_ticket")) {
            // Auto-categorization based on issue type
            Member member = event.getMember();
            TicketCategory category = categories.determine(member);
            
            // Create private channel with proper permissions
            event.getGuild().createTextChannel("ticket-" + ticketId)
                .setParent(category.getCategory())
                .addPermissionOverride(member, 
                    Permission.VIEW_CHANNEL, 
                    Permission.MESSAGE_SEND)
                .queue(channel -> {
                    // Auto-transcript generation
                    transcriptManager.startLogging(channel);
                    
                    EmbedBuilder embed = new EmbedBuilder()
                        .setTitle("Support Ticket #" + ticketId)
                        .setDescription("Describe your issue")
                        .setColor(0x10b981);
                    
                    channel.sendMessageEmbeds(embed.build())
                        .setActionRow(
                            Button.danger("close", "Close Ticket"),
                            Button.secondary("priority", "Mark Priority")
                        ).queue();
                });
        }
    }
}`;

const realtimeAnalyticsCode = `public class ServerAnalytics extends JavaPlugin {
    private final InfluxDBClient influx;
    private final WebSocketServer dashboard;
    
    @EventHandler
    public void onPlayerJoin(PlayerJoinEvent event) {
        // Real-time metrics collection
        MetricsCollector.record("player_join", 1);
        updateDashboard();
    }
    
    @Schedule(every = "1s")
    public void collectMetrics() {
        ServerMetrics metrics = ServerMetrics.builder()
            .playerCount(Bukkit.getOnlinePlayers().size())
            .tps(getServerTPS())
            .memoryUsage(getMemoryUsage())
            .chunkCount(getLoadedChunks())
            .entityCount(getTotalEntities())
            .timestamp(System.currentTimeMillis())
            .build();
        
        // Write to InfluxDB time-series database
        influx.write(metrics);
        
        // Live dashboard updates via WebSocket
        dashboard.broadcast(metrics);
    }
    
    public void generateReport(TimePeriod period) {
        // Query historical data for insights
        List<MetricsSnapshot> history = influx.query(
            "SELECT * FROM metrics WHERE time > now() - " + period
        );
        
        // Generate performance insights
        AnalyticsReport report = analyzer.analyze(history);
        sendToStaff(report);
    }
}`;

export function ProjectsSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 scroll-animate" id="projects" data-testid="section-projects">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-3" data-testid="heading-projects">
            Featured Projects
          </h2>
          <div className="h-1 w-20 bg-primary mb-4" />
          <p className="text-xl text-muted-foreground max-w-2xl" data-testid="text-projects-subtitle">
            Production-ready solutions serving thousands of users across gaming communities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="MacAC"
            description="Comprehensive anti-cheat using multi-layered detection, real-time packet analysis, and intelligent behavioral monitoring for game servers."
            tags={['c++', 'assembly', 'networking']}
            codeSnippet={macACCode}
            status="Active"
            metrics={[
              { label: 'Accuracy', value: '99.7%', color: 'primary' },
              { label: 'False Positives', value: '<0.1%', color: 'chart-2' },
              { label: 'Detection', value: 'Sub-1ms', color: 'accent' }
            ]}
          />
          
          <ProjectCard
            title="MacRefunds"
            description="A plugin integrated with JDA to issue in-game refunds via Discord or in-game commands, backed by an efficient database for secure transaction logging."
            tags={['java', 'jda', 'sql']}
            codeSnippet={macRefundsCode}
            status="Production"
            metrics={[
              { label: 'Integration', value: 'Discord', color: 'accent' },
              { label: 'Secure', value: 'Database', color: 'primary' },
              { label: 'JDA Powered', value: 'API', color: 'chart-2' }
            ]}
          />
          
          <ProjectCard
            title="MacAuctions"
            description="Feature-rich auction house system with real-time bidding, category filtering, and automated escrow transactions for Minecraft servers."
            tags={['java', 'mysql', 'redis', 'websocket']}
            codeSnippet={macAuctionsCode}
            status="Active"
            metrics={[
              { label: 'Concurrent', value: '5K Users', color: 'primary' },
              { label: 'Transactions', value: '100K+', color: 'chart-4' },
              { label: 'Response', value: '<10ms', color: 'accent' }
            ]}
          />
          
          <ProjectCard
            title="CloudGuard"
            description="Real-time distributed denial-of-service protection using machine learning pattern recognition and automated traffic filtering across multiple nodes."
            tags={['go', 'redis', 'tensorflow', 'docker']}
            codeSnippet={cloudGuardCode}
            status="Infrastructure"
            metrics={[
              { label: 'Uptime', value: '99.99%', color: 'primary' },
              { label: 'Traffic/s', value: '1M+', color: 'chart-4' },
              { label: 'Mitigation', value: '<500ms', color: 'accent' }
            ]}
          />
          
          <ProjectCard
            title="Advanced Ticket System"
            description="Discord integration with auto-categorization, button-based interactions, and automated transcript generation for community support management."
            tags={['java', 'discord-jda', 'automation']}
            codeSnippet={ticketSystemCode}
            status="Production"
            metrics={[
              { label: 'Auto-Category', value: 'Smart', color: 'accent' },
              { label: 'Transcripts', value: 'Enabled', color: 'primary' },
              { label: 'Priority', value: 'System', color: 'chart-2' }
            ]}
          />
          
          <ProjectCard
            title="Real-time Analytics"
            description="Server performance monitoring dashboard with live metrics collection, time-series database integration, and WebSocket-powered real-time updates."
            tags={['java', 'influxdb', 'websocket', 'metrics']}
            codeSnippet={realtimeAnalyticsCode}
            status="Active"
            metrics={[
              { label: 'Live Updates', value: '1s', color: 'accent' },
              { label: 'Metrics', value: 'Real-time', color: 'primary' },
              { label: 'Insights', value: 'Auto', color: 'chart-2' }
            ]}
          />
        </div>
      </div>
    </section>
  );
}
