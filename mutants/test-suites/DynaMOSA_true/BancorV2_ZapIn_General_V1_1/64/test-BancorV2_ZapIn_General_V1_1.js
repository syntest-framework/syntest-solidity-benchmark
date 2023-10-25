const BancorV2_ZapIn_General_V1_1 = artifacts.require("BancorV2_ZapIn_General_V1_1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BancorV2_ZapIn_General_V1_1', (accounts) => {
	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintsZ59DQt = BigInt("1331")
		const BancorV2_ZapIn_General_V1_1LaeF6ag = await BancorV2_ZapIn_General_V1_1.new(uintsZ59DQt, {from: accounts[1]});
//		await BancorV2_ZapIn_General_V1_1LaeF6ag.stopInEmergency.call({from: accounts[3]});
//		const addresssT1L7bQ = await BancorV2_ZapIn_General_V1_1LaeF6ag.owner.call({from: accounts[0]});
//		const addressgHb7vdc = await BancorV2_ZapIn_General_V1_1LaeF6ag.owner.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1LaeF6ag.nonReentrant.call({from: accounts[4]});
//		const bool9NoB0J = await BancorV2_ZapIn_General_V1_1LaeF6ag.isOwner.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1LaeF6ag.renounceOwnership.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1LaeF6ag.stopInEmergency.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintbRrfnG = BigInt("1436")
		const BancorV2_ZapIn_General_V1_1qBDET1 = await BancorV2_ZapIn_General_V1_1.new(uintbRrfnG, {from: accounts[0]});
		const addressS0h3E2l = accounts[1]
		const uintadEEZKr = BigInt("11")
		const addressCD0DrEc = "0x0000000000000000000000000000000000000001"
//		const addressnFZrfTA = await BancorV2_ZapIn_General_V1_1qBDET1.inCaseTokengetsStuck.call(addressS0h3E2l, {from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1qBDET1.toggleContractActive.call({from: accounts[1]});
//		const addresspSDBeQA = await BancorV2_ZapIn_General_V1_1qBDET1.owner.call({from: accounts[4]});
//		const uint16C9Vgag = await BancorV2_ZapIn_General_V1_1qBDET1.set_new_goodwill.call(uintadEEZKr, {from: accounts[2]});
//		await BancorV2_ZapIn_General_V1_1qBDET1.onlyOwner.call({from: accounts[2]});
//		const addressBik3u4n = await BancorV2_ZapIn_General_V1_1qBDET1.transferOwnership.call(addressCD0DrEc, {from: accounts[2]});

		await expect(BancorV2_ZapIn_General_V1_1qBDET1.inCaseTokengetsStuck.call(addressS0h3E2l, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintZquNEwG = BigInt("431")
		const BancorV2_ZapIn_General_V1_1isXSTUd = await BancorV2_ZapIn_General_V1_1.new(uintZquNEwG, {from: accounts[5]});
		const byteJspB0uO = "0x0f000e081d0d18121c0b1812050d"
		const addressq3FgZEL = accounts[0]
		const addressrl8ICa = accounts[2]
		const uintLeqq7lq = BigInt("1701")
		const uintiAYEYi1 = BigInt("401")
		const addresswRF3C9A = "0x0000000000000000000000000000000000000001"
		const addressKbOJ1Rr = accounts[3]
		const addressdUoLoK = accounts[4]
		const addresssyhy36q = await BancorV2_ZapIn_General_V1_1isXSTUd.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1isXSTUd.renounceOwnership.call({from: accounts[2]});
//		const uint256urRF9Y5 = await BancorV2_ZapIn_General_V1_1isXSTUd.ZapInSingleSided.call(addressdUoLoK, addressKbOJ1Rr, addresswRF3C9A, uintiAYEYi1, uintLeqq7lq, addressrl8ICa, addressq3FgZEL, byteJspB0uO, {from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1isXSTUd.stopInEmergency.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1isXSTUd.stopInEmergency.call({from: accounts[1]});

		assert.equal(addresssyhy36q, 0xdDf1A826fe0B64a8F48aaDbd9A67F6bc99F7C289)
		await expect(BancorV2_ZapIn_General_V1_1isXSTUd.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintP4EaOKL = BigInt("1036")
		const BancorV2_ZapIn_General_V1_1lXBBTQ = await BancorV2_ZapIn_General_V1_1.new(uintP4EaOKL, {from: accounts[5]});
		const uintf7NiIob = BigInt("418")
		const addressLq9ykZr = accounts[0]
		const boolB0W86ii = await BancorV2_ZapIn_General_V1_1lXBBTQ.isOwner.call({from: accounts[2]});
		const uint16sOvm5J = await BancorV2_ZapIn_General_V1_1lXBBTQ.set_new_goodwill.call(uintf7NiIob, {from: accounts[5]});
//		const addressyKgZEFG = await BancorV2_ZapIn_General_V1_1lXBBTQ.transferOwnership.call(addressLq9ykZr, {from: accounts[1]});

		assert.equal(boolB0W86ii, false)
		await expect(BancorV2_ZapIn_General_V1_1lXBBTQ.transferOwnership.call(addressLq9ykZr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintgqaCCo = BigInt("431")
		const BancorV2_ZapIn_General_V1_1isXSTUd = await BancorV2_ZapIn_General_V1_1.new(uintgqaCCo, {from: accounts[5]});
		const bytenxDSl7O = "0x0f000e081d0d18121c0b1812050d"
		const addressJ1R6Auv = accounts[0]
		const addressrsAlOS7 = accounts[2]
		const uintP6xBR9r = BigInt("1701")
		const uintCUsQYge = BigInt("401")
		const addresss9gxUHZ = "0x0000000000000000000000000000000000000001"
		const addressdMsmri = accounts[3]
		const addressP7ipmk6 = accounts[4]
		const addresssyhy36q = await BancorV2_ZapIn_General_V1_1isXSTUd.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256urRF9Y5 = await BancorV2_ZapIn_General_V1_1isXSTUd.ZapInSingleSided.call(addressP7ipmk6, addressdMsmri, addresss9gxUHZ, uintCUsQYge, uintP6xBR9r, addressrsAlOS7, addressJ1R6Auv, bytenxDSl7O, {from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1isXSTUd.stopInEmergency.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1isXSTUd.stopInEmergency.call({from: accounts[1]});

		assert.equal(addresssyhy36q, 0xdDf1A826fe0B64a8F48aaDbd9A67F6bc99F7C289)
		await expect(BancorV2_ZapIn_General_V1_1isXSTUd.ZapInSingleSided.call(addressP7ipmk6, addressdMsmri, addresss9gxUHZ, uintCUsQYge, uintP6xBR9r, addressrsAlOS7, addressJ1R6Auv, bytenxDSl7O, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintRShG5Dy = BigInt("1672")
		const BancorV2_ZapIn_General_V1_1HDFtCg = await BancorV2_ZapIn_General_V1_1.new(uintRShG5Dy, {from: accounts[0]});
		const addressiYVb28g = accounts[0]
		const addressIc2SIEc = accounts[4]
		const addressKqCPxQc = await BancorV2_ZapIn_General_V1_1HDFtCg.transferOwnership.call(addressiYVb28g, {from: accounts[0]});
//		const addresspmS0V7b = await BancorV2_ZapIn_General_V1_1HDFtCg.transferOwnership.call(addressIc2SIEc, {from: accounts[3]});
//		const addressPE40PP = await BancorV2_ZapIn_General_V1_1HDFtCg.owner.call({from: accounts[0]});
//		await BancorV2_ZapIn_General_V1_1HDFtCg.toggleContractActive.call({from: accounts[3]});
//		await BancorV2_ZapIn_General_V1_1HDFtCg.stopInEmergency.call({from: accounts[4]});
//		const booloy5DFnC = await BancorV2_ZapIn_General_V1_1HDFtCg.isOwner.call({from: accounts[4]});

		await expect(BancorV2_ZapIn_General_V1_1HDFtCg.transferOwnership.call(addressIc2SIEc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintvbcSj7i = BigInt("431")
		const BancorV2_ZapIn_General_V1_1isXSTUd = await BancorV2_ZapIn_General_V1_1.new(uintvbcSj7i, {from: accounts[5]});
		const byteRkEJ9AV = "0x0f000e081d0d18121c0b1812050d"
		const address9abrCk = accounts[0]
		const addressiM1EiGR = accounts[2]
		const uintc0QVaLr = BigInt("1701")
		const uintcM5q1vS = BigInt("401")
		const addresswfXhJlA = "0x0000000000000000000000000000000000000001"
		const addressrUxKiL8 = accounts[3]
		const addressw9RSCAS = accounts[4]
		const addresssyhy36q = await BancorV2_ZapIn_General_V1_1isXSTUd.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1isXSTUd.renounceOwnership.call({from: accounts[5]});
//		const uint256urRF9Y5 = await BancorV2_ZapIn_General_V1_1isXSTUd.ZapInSingleSided.call(addressw9RSCAS, addressrUxKiL8, addresswfXhJlA, uintcM5q1vS, uintc0QVaLr, addressiM1EiGR, address9abrCk, byteRkEJ9AV, {from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1isXSTUd.stopInEmergency.call({from: accounts[1]});

		assert.equal(addresssyhy36q, 0xdDf1A826fe0B64a8F48aaDbd9A67F6bc99F7C289)
		await expect(BancorV2_ZapIn_General_V1_1isXSTUd.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintJsdls7 = BigInt("166")
		const BancorV2_ZapIn_General_V1_1EQcFQ9F = await BancorV2_ZapIn_General_V1_1.new(uintJsdls7, {from: "0x0000000000000000000000000000000000000001"});
		const byteH2wFKWJ = "0x060a060a06161d170e20100b"
		const addressbLkgMe = accounts[3]
		const addressuFwWMPm = accounts[4]
		const uintUptG5kF = BigInt("1881")
		const uintXYSj1m = BigInt("440")
		const addressANbXPnG = accounts[1]
		const addresshtdzRe = accounts[1]
		const addressqEg37w = accounts[2]
		await BancorV2_ZapIn_General_V1_1EQcFQ9F.toggleContractActive.call({from: accounts[4]});
		await BancorV2_ZapIn_General_V1_1EQcFQ9F.onlyOwner.call({from: accounts[2]});
		await BancorV2_ZapIn_General_V1_1EQcFQ9F.nonReentrant.call({from: accounts[1]});
		const uint256ncciEZ = await BancorV2_ZapIn_General_V1_1EQcFQ9F.ZapInSingleSided.call(addressqEg37w, addresshtdzRe, addressANbXPnG, uintXYSj1m, uintUptG5kF, addressuFwWMPm, addressbLkgMe, byteH2wFKWJ, {from: accounts[3]});
		const boolVVBovBr = await BancorV2_ZapIn_General_V1_1EQcFQ9F.isOwner.call({from: accounts[5]});
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintJxHZVmP = BigInt("431")
		const BancorV2_ZapIn_General_V1_1isXSTUd = await BancorV2_ZapIn_General_V1_1.new(uintJxHZVmP, {from: accounts[5]});
		const byteOH0homN = "0x0f000e081d0d18121c0b1812050d"
		const addressndH8K44 = accounts[0]
		const addressVbaiax = accounts[2]
		const uintuVVqNjl = BigInt("1713")
		const uintcisWg9d = BigInt("396")
		const addressFofsyoW = "0x0000000000000000000000000000000000000001"
		const addressYD3Zhdq = accounts[3]
		const addressOIZCr1x = accounts[4]
//		await BancorV2_ZapIn_General_V1_1isXSTUd.toggleContractActive.call({from: accounts[5]});
//		const addresssyhy36q = await BancorV2_ZapIn_General_V1_1isXSTUd.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const booltu7vyex = await BancorV2_ZapIn_General_V1_1isXSTUd.isOwner.call({from: accounts[3]});
//		const boolMJzwCfy = await BancorV2_ZapIn_General_V1_1isXSTUd.isOwner.call({from: accounts[3]});
//		const uint256urRF9Y5 = await BancorV2_ZapIn_General_V1_1isXSTUd.ZapInSingleSided.call(addressOIZCr1x, addressYD3Zhdq, addressFofsyoW, uintcisWg9d, uintuVVqNjl, addressVbaiax, addressndH8K44, byteOH0homN, {from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1isXSTUd.stopInEmergency.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1isXSTUd.stopInEmergency.call({from: accounts[1]});

		await expect(BancorV2_ZapIn_General_V1_1isXSTUd.toggleContractActive.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BancorV2_ZapIn_General_V1_1', async () => {
		const uintQOoaqsK = BigInt("431")
		const BancorV2_ZapIn_General_V1_1isXSTUd = await BancorV2_ZapIn_General_V1_1.new(uintQOoaqsK, {from: accounts[5]});
		const addressGv5r1tg = accounts[3]
		const byteevspoFl = "0x0f000e081d0d18121c0b1812050d"
		const addressAJ1bZtO = accounts[0]
		const addresse4mWliB = accounts[3]
		const uintI08dDAi = BigInt("1701")
		const uintHhGr277 = BigInt("401")
		const addressI5ImZTs = "0x0000000000000000000000000000000000000001"
		const addressaw4velM = accounts[3]
		const addressZKMQDHb = accounts[4]
		const addresssyhy36q = await BancorV2_ZapIn_General_V1_1isXSTUd.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressNLiTAde = await BancorV2_ZapIn_General_V1_1isXSTUd.inCaseTokengetsStuck.call(addressGv5r1tg, {from: accounts[5]});
//		const uint256urRF9Y5 = await BancorV2_ZapIn_General_V1_1isXSTUd.ZapInSingleSided.call(addressZKMQDHb, addressaw4velM, addressI5ImZTs, uintHhGr277, uintI08dDAi, addresse4mWliB, addressAJ1bZtO, byteevspoFl, {from: "0x0000000000000000000000000000000000000001"});
//		await BancorV2_ZapIn_General_V1_1isXSTUd.onlyOwner.call({from: accounts[5]});
//		await BancorV2_ZapIn_General_V1_1isXSTUd.stopInEmergency.call({from: accounts[4]});
//		await BancorV2_ZapIn_General_V1_1isXSTUd.stopInEmergency.call({from: accounts[1]});

		assert.equal(addresssyhy36q, 0xdDf1A826fe0B64a8F48aaDbd9A67F6bc99F7C289)
		await expect(BancorV2_ZapIn_General_V1_1isXSTUd.inCaseTokengetsStuck.call(addressGv5r1tg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})