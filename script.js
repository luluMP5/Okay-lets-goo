const ADMIN_IDS = ["admin123"]; // à adapter

function isAdmin(player) {
    return ADMIN_IDS.includes(player.id);
}

// 🎁 Commande GIVE sécurisée
function handleCommand(player, command) {
    const args = command.split(" ");

    if (args[0] === "/give") {
        if (!isAdmin(player)) {
            flag(player, "Unauthorized give command");
            return;
        }

        const item = args[1];
        const amount = parseInt(args[2]) || 1;

        giveItem(player, item, amount);
    }
}

function giveItem(player, item, amount) {
    if (amount > 100) {
        console.log("❌ Trop d'items");
        return;
    }

    console.log(`🎁 ${player.name} reçoit ${amount} ${item}`);
    player.inventory[item] = (player.inventory[item] || 0) + amount;
}
