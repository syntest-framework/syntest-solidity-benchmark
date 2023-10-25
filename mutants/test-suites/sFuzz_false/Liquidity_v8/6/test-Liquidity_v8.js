const Liquidity_v8 = artifacts.require("Liquidity_v8");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Liquidity_v8', (accounts) => {
	it('test for Liquidity_v8', async () => {
		const stringioAvHSu = "cnq4VIbb6y1Bnnlynj8N2I09NJCF3pnyg3YgQkDEeI2k7Hegv6spZdtSK2Smk3o1ltjHU"
		const addressoa74u9 = accounts[2]
		const addressCvjuPjL = accounts[3]
		const uintikB5zbW = BigInt("1701")
		const uintAuOiFdr = BigInt("1780")
		const Liquidity_v8NaU294Z = await Liquidity_v8.new(stringioAvHSu, addressoa74u9, addressCvjuPjL, uintikB5zbW, uintAuOiFdr, {from: "0x0000000000000000000000000000000000000001"});
		const uintfm27pS0 = BigInt("576")
		const addressQtjD35R = accounts[4]
		const uintos0ySiK = BigInt("906")
		const addressu8GATaD = accounts[2]
		const boolP5xvMuD = await Liquidity_v8NaU294Z.stake.call(uintfm27pS0, {from: accounts[4]});
		const 
Z29w11A = await Liquidity_v8NaU294Z.userDeposits.call(addressQtjD35R, {from: "0x0000000000000000000000000000000000000001"});
		const boolmmdwNYD = await Liquidity_v8NaU294Z.addReward.call(uintos0ySiK, {from: accounts[2]});
		const addresszUfnROk = await Liquidity_v8NaU294Z.transferOwnership.call(addressu8GATaD, {from: accounts[1]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQGAvPZn = "Q6nEVulTkq8b5KYSywKekcmLmPgGPQ6mYq0HIgsVrD3eoPnnvkmUJ2TycayJDW00Jvs1AQcKMzrwKxJ0C"
		const addresszVN47F0 = accounts[5]
		const addressumD0OEg = accounts[0]
		const uintdRqXQXW = BigInt("1982")
		const uintYUMm4ku = BigInt("1834")
		const Liquidity_v8SWkBMHI = await Liquidity_v8.new(stringQGAvPZn, addresszVN47F0, addressumD0OEg, uintdRqXQXW, uintYUMm4ku, {from: accounts[1]});
		const uintw8MMNZD = BigInt("1147")
		const addressPzcsoX = accounts[4]
		const uintBElHoQy = BigInt("433")
		const uint64wCGR1xZ = await Liquidity_v8SWkBMHI.setRate.call(uintw8MMNZD, {from: accounts[1]});
		const 
qa0VSd6 = await Liquidity_v8SWkBMHI.userDeposits.call(addressPzcsoX, {from: accounts[0]});
		const addressBwnwNov = await Liquidity_v8SWkBMHI.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const booliv8ZT0N = await Liquidity_v8SWkBMHI.withdraw.call({from: accounts[1]});
		const uint256Ry9KwVM = await Liquidity_v8SWkBMHI.changeLockDuration.call(uintBElHoQy, {from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQSTV9oP = "7CawdRwJFut6PFFa2Vt7W9wbo4G3J9Ad1tk"
		const addressfKeyMpe = accounts[1]
		const addressAnc1Zba = accounts[0]
		const uintxlZWcgP = BigInt("471")
		const uintDu4KkP = BigInt("828")
		const Liquidity_v8ERlvQt8 = await Liquidity_v8.new(stringQSTV9oP, addressfKeyMpe, addressAnc1Zba, uintxlZWcgP, uintDu4KkP, {from: accounts[2]});
		const uinte02n7QT = BigInt("1075")
		const boolJzTTtD = await Liquidity_v8ERlvQt8.stake.call(uinte02n7QT, {from: accounts[4]});
		await Liquidity_v8ERlvQt8.renounceOwnership.call({from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringO92Chjq = "21vfXKAHY3YPhWyoi47eMOYfA5fr3krzL9Skb6uWvaKN1UMJJYiu4I3AOWOWBhTj6QG"
		const addresslLBRRGB = accounts[1]
		const addressBKD9H0W = accounts[0]
		const uintGK8Xkc3 = BigInt("815")
		const uintGtPZX8U = BigInt("473")
		const Liquidity_v8eDOfwZk = await Liquidity_v8.new(stringO92Chjq, addresslLBRRGB, addressBKD9H0W, uintGK8Xkc3, uintGtPZX8U, {from: accounts[3]});
		const addressVMCcXAW = accounts[3]
		const addressI5mtV1E = accounts[4]
		const addresshnrC1YK = accounts[1]
		const uint256J19VERa = await Liquidity_v8eDOfwZk.calculate.call(addressVMCcXAW, {from: accounts[0]});
		const uint256YVGU9L3 = await Liquidity_v8eDOfwZk.calculate.call(addressI5mtV1E, {from: accounts[2]});
		const uint256qcgFEH0 = await Liquidity_v8eDOfwZk.calculate.call(addresshnrC1YK, {from: accounts[2]});
		const addressroHNpyz = await Liquidity_v8eDOfwZk.owner.call({from: accounts[0]});
	});

	it('test for Liquidity_v8', async () => {
		const stringHpXS1sH = "XMVCRWhFEoOwQpZIbzyTJE67CPJrYI4S1FB52N0Ykhx14xbvfBJO1tAkd1un"
		const address32ZMlp = accounts[2]
		const addressaFUuzK = "0x0000000000000000000000000000000000000001"
		const uintxMB1jQ2 = BigInt("733")
		const uintDzn82VT = BigInt("1810")
		const Liquidity_v8hyebD7i = await Liquidity_v8.new(stringHpXS1sH, address32ZMlp, addressaFUuzK, uintxMB1jQ2, uintDzn82VT, {from: accounts[5]});
		const addressjChGFLA = accounts[5]
		const uintIkGp8qG = BigInt("1629")
		await Liquidity_v8hyebD7i.onlyOwner.call({from: accounts[0]});
		const addressxdGOXY = await Liquidity_v8hyebD7i.transferOwnership.call(addressjChGFLA, {from: accounts[1]});
		const boolZ9OThLd = await Liquidity_v8hyebD7i.isOwner.call({from: accounts[2]});
		const uint256CxkU86u = await Liquidity_v8hyebD7i.changeLockDuration.call(uintIkGp8qG, {from: accounts[3]});
		await Liquidity_v8hyebD7i.renounceOwnership.call({from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringlrYBbcc = "qiH9tPTK4PBkWJDzOpTyAPNyEwV7acdjrc1UMEKfotpj8BxGp1gIVlgpi"
		const addressTLGyzPO = accounts[0]
		const addresseY3cDHb = accounts[4]
		const uintyjUIXZN = BigInt("1309")
		const uintBApOEJa = BigInt("687")
		const Liquidity_v8ul7dxdK = await Liquidity_v8.new(stringlrYBbcc, addressTLGyzPO, addresseY3cDHb, uintyjUIXZN, uintBApOEJa, {from: accounts[2]});
		const addressdFFySX0 = accounts[2]
		const addressEvReOhG = accounts[3]
		const addressa5I7ZYU = accounts[0]
		const addressppD17Ta = accounts[2]
		const boolF3yCWSh = await Liquidity_v8ul7dxdK.emergencyWithdraw.call({from: accounts[0]});
		const addressFCfEbNS = await Liquidity_v8ul7dxdK.transferOwnership.call(addressdFFySX0, {from: accounts[2]});
		const uint256nPQPOHS = await Liquidity_v8ul7dxdK.calculate.call(addressEvReOhG, {from: accounts[5]});
		await Liquidity_v8ul7dxdK.renounceOwnership.call({from: accounts[1]});
		const 
cwgkGG5 = await Liquidity_v8ul7dxdK.userDeposits.call(addressa5I7ZYU, {from: accounts[4]});
		const uint256dzedIhG = await Liquidity_v8ul7dxdK.calculate.call(addressppD17Ta, {from: accounts[3]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQSTV9oP = "7CawdRwJFut6PFFa2Vt7W9wbo4G3J9Ad1tk"
		const addressrJ4XWJu = accounts[1]
		const addressWRMaSA4 = accounts[0]
		const uintBUTlIjZ = BigInt("471")
		const uintFbvHS6y = BigInt("828")
		const Liquidity_v8ERlvQt8 = await Liquidity_v8.new(stringQSTV9oP, addressrJ4XWJu, addressWRMaSA4, uintBUTlIjZ, uintFbvHS6y, {from: accounts[2]});
		const uintzN8q8Gs = BigInt("1074")
		await Liquidity_v8ERlvQt8.renounceOwnership.call({from: accounts[5]});
		const boolJzTTtD = await Liquidity_v8ERlvQt8.stake.call(uintzN8q8Gs, {from: accounts[4]});
		await Liquidity_v8ERlvQt8.renounceOwnership.call({from: accounts[5]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQJl4597 = "NHk4qLyXHVs1dqueNDsgadTauKtGi0qulda"
		const addressPAJ3Tvh = accounts[3]
		const addressAgqUZy0 = accounts[4]
		const uintYu7p6l = BigInt("1580")
		const uintyKEeA6 = BigInt("1826")
		const Liquidity_v8BPtsFaY = await Liquidity_v8.new(stringQJl4597, addressPAJ3Tvh, addressAgqUZy0, uintYu7p6l, uintyKEeA6, {from: accounts[0]});
		const addressBWooSjY = accounts[4]
		const addressYlrnwcB = accounts[2]
		const addressApykHn6 = accounts[0]
		const uintVSlLLD = BigInt("1899")
		const 
dO9Iyn = await Liquidity_v8BPtsFaY.userDeposits.call(addressBWooSjY, {from: accounts[3]});
		const addresst1QARWg = await Liquidity_v8BPtsFaY.owner.call({from: accounts[0]});
		const uint256OHtlPXd = await Liquidity_v8BPtsFaY.calculate.call(addressYlrnwcB, {from: accounts[1]});
		const addressKdIb00 = await Liquidity_v8BPtsFaY.transferOwnership.call(addressApykHn6, {from: accounts[0]});
		const uint64dWSGmBo = await Liquidity_v8BPtsFaY.setRate.call(uintVSlLLD, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringQJl4597 = "NHk4qLyXHVs1dqueNDsgadTauKtGi0qulda"
		const addressCilUioY = accounts[3]
		const addresst5jtL9c = accounts[4]
		const uintLdlIMDG = BigInt("1580")
		const uintwurwAah = BigInt("1826")
		const Liquidity_v8BPtsFaY = await Liquidity_v8.new(stringQJl4597, addressCilUioY, addresst5jtL9c, uintLdlIMDG, uintwurwAah, {from: accounts[0]});
		const uintprtft9k = BigInt("1938")
		await Liquidity_v8BPtsFaY.renounceOwnership.call({from: accounts[0]});
		await Liquidity_v8BPtsFaY.renounceOwnership.call({from: accounts[3]});
		const uint64dWSGmBo = await Liquidity_v8BPtsFaY.setRate.call(uintprtft9k, {from: accounts[2]});
	});

	it('test for Liquidity_v8', async () => {
		const stringOytoFk = "2bMcRtqXrRXUdgvujUPSG8AZDqPoelhgP6jF2pRHTIlqAQsc8Ft3DyVLsZFo0TbCkblSd5O2"
		const addressGIC7wTn = accounts[4]
		const addressokjY7AO = accounts[0]
		const uintMIcdHeE = BigInt("2030")
		const uintYjIPaRh = BigInt("799")
		const Liquidity_v8Z8522ag = await Liquidity_v8.new(stringOytoFk, addressGIC7wTn, addressokjY7AO, uintMIcdHeE, uintYjIPaRh, {from: accounts[1]});
		const uintPFych5e = BigInt("1083")
		const uint256I56S6mO = await Liquidity_v8Z8522ag.changeLockDuration.call(uintPFych5e, {from: accounts[1]});
		const boolYUqK1IE = await Liquidity_v8Z8522ag.isOwner.call({from: accounts[3]});
		const boolKrpxQR = await Liquidity_v8Z8522ag.isOwner.call({from: accounts[1]});
	});
})