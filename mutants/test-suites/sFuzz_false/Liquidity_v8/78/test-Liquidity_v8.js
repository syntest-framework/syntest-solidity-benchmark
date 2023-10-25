const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringeDuQHwd = "wXOSMuKjvqBV8sddsjcnawRJrjHNnM6XR9EEPRlI"
		const addressPMAW4G2 = accounts[3]
		const addressg4jgkbg = accounts[3]
		const uintcpiNtCJ = BigInt("984")
		const uintrckObjO = BigInt("921")
		const Liquidity_v8RvgbZVk = await Liquidity_v8.new(stringeDuQHwd, addressPMAW4G2, addressg4jgkbg, uintcpiNtCJ, uintrckObjO, {from: accounts[2]});
		const boolgDzmchg = await Liquidity_v8RvgbZVk.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boollH0DLAW = await Liquidity_v8RvgbZVk.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringnwmrR96 = "epfoOOrYLBICWz9"
		const addressDucfBJE = accounts[2]
		const addressBbXs6Ze = accounts[3]
		const uintbl2b29e = BigInt("1014")
		const uintcEyYUvk = BigInt("991")
		const Liquidity_v8AXxfGt2 = await Liquidity_v8.new(stringnwmrR96, addressDucfBJE, addressBbXs6Ze, uintbl2b29e, uintcEyYUvk, {from: accounts[3]});
		const addressLaBaxhw = accounts[1]
		const addressei0ZVT = accounts[4]
		const boolobhJiKf = await Liquidity_v8AXxfGt2.isOwner.call({from: accounts[1]});
		const uint256NH8nv56 = await Liquidity_v8AXxfGt2.calculate.call(addressLaBaxhw, {from: accounts[1]});
		const uint256ezideya = await Liquidity_v8AXxfGt2.calculate.call(addressei0ZVT, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringZYDJwLg = "dD7NLmi7wDEDNqoKkiJxeE5pOHRgoZfwdhYfvPAqfFESDmspj4LNwe5Fiks9pso3Sv"
		const addresshm02oSt = accounts[4]
		const addressEIVCTVN = accounts[5]
		const uinteGiuTE3 = BigInt("1493")
		const uintdlL1lLX = BigInt("1883")
		const Liquidity_v8yLJdDnj = await Liquidity_v8.new(stringZYDJwLg, addresshm02oSt, addressEIVCTVN, uinteGiuTE3, uintdlL1lLX, {from: accounts[0]});
		const addressQAgjb3p = accounts[2]
		const addressc1ks5CT = accounts[3]
		const uintMK4zau = BigInt("1412")
		const addresswQRFqPZ = await Liquidity_v8yLJdDnj.transferOwnership.call(addressQAgjb3p, {from: accounts[4]});
		const uint256tCXfEdB = await Liquidity_v8yLJdDnj.calculate.call(addressc1ks5CT, {from: accounts[4]});
		const boolAtOodsT = await Liquidity_v8yLJdDnj.addReward.call(uintMK4zau, {from: accounts[1]});
		const addressOeVR4tT = await Liquidity_v8yLJdDnj.owner.call({from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringDAGzgTk = "6"
		const addressGQgDbZ8 = accounts[2]
		const addresstdeUwtQ = accounts[5]
		const uintyFTBDTe = BigInt("528")
		const uintOrYeX3s = BigInt("1435")
		const Liquidity_v8wt2IQ9e = await Liquidity_v8.new(stringDAGzgTk, addressGQgDbZ8, addresstdeUwtQ, uintyFTBDTe, uintOrYeX3s, {from: "0x0000000000000000000000000000000000000001"});
		const uinthu4Y97 = BigInt("1462")
		const booloqqsOqD = await Liquidity_v8wt2IQ9e.emergencyWithdraw.call({from: "0x0000000000000000000000000000000000000001"});
		const boolmMOa5gg = await Liquidity_v8wt2IQ9e.stake.call(uinthu4Y97, {from: accounts[4]});
		const boolLbM2E6 = await Liquidity_v8wt2IQ9e.emergencyWithdraw.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const string3OaCbq = "MEfW2rF2clHyyfLxjCnmdjP2YoFBCtSLg835WkpfuceAO6XWd2CYPK4Qywc7fw3eQKHozIFq"
		const addresso2PUVf0 = accounts[5]
		const addressDkkEfAh = accounts[3]
		const uintCkwU88m = BigInt("1734")
		const uintSz4zk2i = BigInt("21")
		const Liquidity_v8H2owr1X = await Liquidity_v8.new(string3OaCbq, addresso2PUVf0, addressDkkEfAh, uintCkwU88m, uintSz4zk2i, {from: accounts[1]});
		const addresswhThb3 = accounts[3]
		const uintKtZrUU2 = BigInt("795")
		const uintJPEwzbE = BigInt("1887")
		const addresstw4kMZu = accounts[4]
		const uint256YSdScQE = await Liquidity_v8H2owr1X.calculate.call(addresswhThb3, {from: accounts[0]});
		const uint256cTeDPCn = await Liquidity_v8H2owr1X.changeLockDuration.call(uintKtZrUU2, {from: accounts[1]});
		const uint64Hbumsyo = await Liquidity_v8H2owr1X.setRate.call(uintJPEwzbE, {from: "0x0000000000000000000000000000000000000001"});
		const boolbbDDdwz = await Liquidity_v8H2owr1X.withdraw.call({from: accounts[3]});
		const 
QYiFEOO = await Liquidity_v8H2owr1X.userDeposits.call(addresstw4kMZu, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringJmvdxdx = "blMNzOQWiwziI3jLTXPWLrMettW4SYLeVrq2BdcX5xmwXlJ17Bv"
		const addressQ4u4ChS = accounts[3]
		const addressPKgvFZj = "0x0000000000000000000000000000000000000001"
		const uintiztREg = BigInt("2029")
		const uint8aio3H = BigInt("1969")
		const Liquidity_v8wR0zil8 = await Liquidity_v8.new(stringJmvdxdx, addressQ4u4ChS, addressPKgvFZj, uintiztREg, uint8aio3H, {from: accounts[1]});
		const uintIGFGckp = BigInt("1754")
		const uintdZBwcNU = BigInt("412")
		await Liquidity_v8wR0zil8.onlyOwner.call({from: accounts[1]});
		await Liquidity_v8wR0zil8.onlyOwner.call({from: accounts[1]});
		const addresscd4CA5X = await Liquidity_v8wR0zil8.owner.call({from: accounts[2]});
		const boolTY5BDNq = await Liquidity_v8wR0zil8.stake.call(uintIGFGckp, {from: accounts[1]});
		const boolhmF5N8 = await Liquidity_v8wR0zil8.addReward.call(uintdZBwcNU, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringeDuQHwd = "wXOSMuKjvqBV8sddsjcnawRJrjHNnM6XR9EEPRlI"
		const addressGwRz0mP = accounts[3]
		const addresst4zIKiQ = accounts[3]
		const uintK0DamTF = BigInt("984")
		const uintm4gMv2x = BigInt("921")
		const Liquidity_v8RvgbZVk = await Liquidity_v8.new(stringeDuQHwd, addressGwRz0mP, addresst4zIKiQ, uintK0DamTF, uintm4gMv2x, {from: accounts[2]});
		const addresswKw2Fqd = accounts[2]
		await Liquidity_v8RvgbZVk.renounceOwnership.call({from: accounts[2]});
		const 
UysomCM = await Liquidity_v8RvgbZVk.userDeposits.call(addresswKw2Fqd, {from: "0x0000000000000000000000000000000000000001"});
		const boolgDzmchg = await Liquidity_v8RvgbZVk.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const boollH0DLAW = await Liquidity_v8RvgbZVk.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringZxmngcv = "leXJBzBpklBBoHp5n6aYR8EIL34w5hqRdF3uWQ65RVuire46HjuNmYJh5JXRNNLyinDb3LCLDdldsODH3ApK7Qb6ZNyGlEGYu"
		const addressXujaU5z = accounts[1]
		const addressg5jRhs0 = accounts[1]
		const uintaIRwYBg = BigInt("142")
		const uintkdOtem6 = BigInt("987")
		const Liquidity_v8MR8DOG = await Liquidity_v8.new(stringZxmngcv, addressXujaU5z, addressg5jRhs0, uintaIRwYBg, uintkdOtem6, {from: accounts[0]});
		const uintq2JteHv = BigInt("987")
		const boolphE4GbQ = await Liquidity_v8MR8DOG.withdraw.call({from: accounts[4]});
		const uint64NVHUeKr = await Liquidity_v8MR8DOG.setRate.call(uintq2JteHv, {from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringeDuQHwd = "wXOSMuKjvqBV8sddsjcnawRJrjHNnM6XR9EEPRlI"
		const addressta7yRWB = accounts[3]
		const addressflYw2o7 = accounts[3]
		const uintbpk6eRj = BigInt("984")
		const uintCFyll3o = BigInt("921")
		const Liquidity_v8RvgbZVk = await Liquidity_v8.new(stringeDuQHwd, addressta7yRWB, addressflYw2o7, uintbpk6eRj, uintCFyll3o, {from: accounts[2]});
		const addressnhe3vvO = accounts[0]
		const 
FW2KnZM = await Liquidity_v8RvgbZVk.userDeposits.call(addressnhe3vvO, {from: accounts[5]});
		const addresscRLAyvm = await Liquidity_v8RvgbZVk.owner.call({from: accounts[5]});
		const boolmz14QW3 = await Liquidity_v8RvgbZVk.withdraw.call({from: accounts[2]});
		const boollH0DLAW = await Liquidity_v8RvgbZVk.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringeDuQHwd = "wXOSMuKjvqBV8sddsjcnawRJrjHNnM6XR9EEPRlI"
		const addressX9jICjH = accounts[3]
		const addressEoNqna = accounts[3]
		const uintb5YnmeW = BigInt("984")
		const uintD45nvfS = BigInt("921")
		const Liquidity_v8RvgbZVk = await Liquidity_v8.new(stringeDuQHwd, addressX9jICjH, addressEoNqna, uintb5YnmeW, uintD45nvfS, {from: accounts[2]});
		const uintV6sU6Un = BigInt("179")
		const addressduuqT0F = accounts[3]
		const uintCdwrv92 = BigInt("221")
		const boolvry6LCF = await Liquidity_v8RvgbZVk.addReward.call(uintV6sU6Un, {from: accounts[1]});
		const 
UysomCM = await Liquidity_v8RvgbZVk.userDeposits.call(addressduuqT0F, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jg448a6 = await Liquidity_v8RvgbZVk.changeLockDuration.call(uintCdwrv92, {from: accounts[5]});
		const boolgDzmchg = await Liquidity_v8RvgbZVk.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Liquidity_v8', async () => {
		const stringeDuQHwd = "wXOSMuKjvqBV8sddsjcnawRJrjHNnM6XR9EEPRlI"
		const addressRo6RmfS = accounts[3]
		const addressQ1fKUm = accounts[3]
		const uintxvSS7pR = BigInt("984")
		const uintIe6s9fw = BigInt("921")
		const Liquidity_v8RvgbZVk = await Liquidity_v8.new(stringeDuQHwd, addressRo6RmfS, addressQ1fKUm, uintxvSS7pR, uintIe6s9fw, {from: accounts[2]});
		const addressrIg1Tl4 = accounts[5]
		const addressUTZzL46 = await Liquidity_v8RvgbZVk.transferOwnership.call(addressrIg1Tl4, {from: accounts[2]});
		const boolCxceCyw = await Liquidity_v8RvgbZVk.isOwner.call({from: accounts[3]});
		const boollH0DLAW = await Liquidity_v8RvgbZVk.emergencyWithdraw.call({from: accounts[4]});
	});

	it('test for Liquidity_v8', async () => {
		const stringeDuQHwd = "wXOSMuKjvqBV8sddsjcnawRJrjHNnM6XR9EEPRlI"
		const addresstJ85sOH = accounts[3]
		const addressFzCRPAL = accounts[3]
		const uintxuAwrx = BigInt("984")
		const uintJrwr79 = BigInt("921")
		const Liquidity_v8RvgbZVk = await Liquidity_v8.new(stringeDuQHwd, addresstJ85sOH, addressFzCRPAL, uintxuAwrx, uintJrwr79, {from: accounts[2]});
		const uintnlCe0SX = BigInt("1122")
		const addressbZeFezE = accounts[4]
		const uint64C8JAKS5 = await Liquidity_v8RvgbZVk.setRate.call(uintnlCe0SX, {from: accounts[2]});
		const 
UysomCM = await Liquidity_v8RvgbZVk.userDeposits.call(addressbZeFezE, {from: "0x0000000000000000000000000000000000000001"});
	});
})