const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITP5D6qxK = await RIT.new({from: accounts[4]});
		const uintns1kecc = BigInt("963")
		const addresslN0eR5F = accounts[4]
		const uintJntZYkB = BigInt("1711")
		const addresshXnnPkY = accounts[3]
		const uintx440hd7 = BigInt("278")
		const addressuX1VKgz = accounts[3]
		const uintH00iAoH = BigInt("1688")
		const addressS7lxbve = accounts[3]
		const addressichLE3K = accounts[4]
		const boolK08PUYB = await RITP5D6qxK.approve.call(addresslN0eR5F, uintns1kecc, {from: accounts[4]});
		const boolFv4kGpo = await RITP5D6qxK.increaseAllowance.call(addresshXnnPkY, uintJntZYkB, {from: "0x0000000000000000000000000000000000000001"});
//		const boolGjPBVGI = await RITP5D6qxK.decreaseAllowance.call(addressuX1VKgz, uintx440hd7, {from: accounts[0]});
//		const booltfcErRg = await RITP5D6qxK.transferFrom.call(addressichLE3K, addressS7lxbve, uintH00iAoH, {from: accounts[1]});

		assert.equal(boolFv4kGpo, true)
		assert.equal(boolK08PUYB, true)
		await expect(RITP5D6qxK.decreaseAllowance.call(addressuX1VKgz, uintx440hd7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITKre47Mp = await RIT.new({from: accounts[2]});
		const uintSoOtelt = BigInt("1456")
		const addressDI43Cmj = accounts[1]
		const addressMFD3AvE = accounts[3]
		const uintsdTWzVz = BigInt("2020")
		const addresshpemQvy = accounts[2]
//		const boolwg4fpyh = await RITKre47Mp.transferFrom.call(addressMFD3AvE, addressDI43Cmj, uintSoOtelt, {from: accounts[3]});
//		const boolNOy1qlW = await RITKre47Mp.approve.call(addresshpemQvy, uintsdTWzVz, {from: accounts[0]});

		await expect(RITKre47Mp.transferFrom.call(addressMFD3AvE, addressDI43Cmj, uintSoOtelt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITDNV4Uuw = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxgw4YDm = BigInt("12")
		const addressdyvEYIq = accounts[3]
		const uintVot3KI2 = BigInt("1352")
		const addressmZ6N29H = accounts[4]
		const boolIl58uXP = await RITDNV4Uuw.approve.call(addressdyvEYIq, uintxgw4YDm, {from: accounts[2]});
		const boolGV5MpBY = await RITDNV4Uuw.increaseAllowance.call(addressmZ6N29H, uintVot3KI2, {from: accounts[0]});
	});

	it('test for RIT', async () => {
		const RITkKWc7FC = await RIT.new({from: accounts[0]});
		const addressgBxx3AL = accounts[2]
		const addresslEZGGCH = accounts[1]
		const uintoTpEbFS = BigInt("532")
		const addressqoDYqNs = accounts[1]
		const uintpRt6UOl = BigInt("1737")
		const addressA9Aklsh = accounts[1]
		const uint256Ry9rQy6 = await RITkKWc7FC.allowance.call(addresslEZGGCH, addressgBxx3AL, {from: accounts[5]});
//		const booleizroP = await RITkKWc7FC.decreaseAllowance.call(addressqoDYqNs, uintoTpEbFS, {from: accounts[0]});
//		const boolrwQLe7R = await RITkKWc7FC.decreaseAllowance.call(addressA9Aklsh, uintpRt6UOl, {from: accounts[3]});

		assert.equal(uint256Ry9rQy6, BigInt("0"))
		await expect(RITkKWc7FC.decreaseAllowance.call(addressqoDYqNs, uintoTpEbFS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITV1bYko = await RIT.new({from: accounts[2]});
		const uintBJeLQL = BigInt("1382")
		const addressdoMlLiV = accounts[1]
		const addresss5jqm47 = accounts[3]
		const uintmwp5MqM = BigInt("1345")
		const uintpKuwk3N = BigInt("1009")
		const address7s0xkE = accounts[1]
		const stringRCMDqK = await RITV1bYko.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolY8l842U = await RITV1bYko.increaseAllowance.call(addressdoMlLiV, uintBJeLQL, {from: accounts[4]});
		const uint256LxTo6Wk = await RITV1bYko.balanceOf.call(addresss5jqm47, {from: accounts[1]});
//		const uint256vLTn3JB = await RITV1bYko._burn.call(uintmwp5MqM, {from: accounts[0]});
//		const boolmyl98dg = await RITV1bYko.approve.call(address7s0xkE, uintpKuwk3N, {from: accounts[3]});

		assert.equal(boolY8l842U, true)
		assert.equal(stringRCMDqK, "RIT 2.0")
		assert.equal(uint256LxTo6Wk, BigInt("0"))
		await expect(RITV1bYko._burn.call(uintmwp5MqM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITudeul2O = await RIT.new({from: accounts[4]});
		const uint4HqAzU = BigInt("459")
		const addressF4wmiSw = "0x0000000000000000000000000000000000000001"
		const uintwi6fT4S = BigInt("995")
		const uinti1msAQ8 = BigInt("511")
		const addresswnJYI1C = accounts[3]
		const stringh6t3wfF = await RITudeul2O.symbol.call({from: accounts[3]});
		const uint8BFRbMyo = await RITudeul2O.decimals.call({from: accounts[0]});
//		const boolhSwVLcK = await RITudeul2O.decreaseAllowance.call(addressF4wmiSw, uint4HqAzU, {from: accounts[2]});
//		const uint256C0VfP8N = await RITudeul2O._burn.call(uintwi6fT4S, {from: "0x0000000000000000000000000000000000000001"});
//		const boolEdaAvv5 = await RITudeul2O.transfer.call(addresswnJYI1C, uinti1msAQ8, {from: accounts[5]});

		assert.equal(stringh6t3wfF, "RIT 2.0")
		assert.equal(uint8BFRbMyo, BigInt("18"))
		await expect(RITudeul2O.decreaseAllowance.call(addressF4wmiSw, uint4HqAzU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITkOLlOfK = await RIT.new({from: accounts[4]});
		const uintHfycRbk = BigInt("1126")
		const addressgJnFi5G = "0x0000000000000000000000000000000000000001"
		const addresshuNsh2d = accounts[1]
		const uintRDtVCT = BigInt("235")
		const addressRhN8sVS = accounts[0]
		const addressdmdznv8 = accounts[5]
		const addressxDEISa = accounts[4]
		const boolarpqEvX = await RITkOLlOfK.increaseAllowance.call(addressgJnFi5G, uintHfycRbk, {from: accounts[3]});
		const uint256Q8lwEzI = await RITkOLlOfK.balanceOf.call(addresshuNsh2d, {from: "0x0000000000000000000000000000000000000001"});
		const uint256l4VM9h = await RITkOLlOfK.totalSupply.call({from: accounts[1]});
		const boolOGWukr = await RITkOLlOfK.increaseAllowance.call(addressRhN8sVS, uintRDtVCT, {from: accounts[1]});
		const uint256s4Jb0bh = await RITkOLlOfK.allowance.call(addressxDEISa, addressdmdznv8, {from: accounts[3]});
		const uint256sqk3S69 = await RITkOLlOfK.totalSupply.call({from: accounts[4]});

		assert.equal(boolOGWukr, true)
		assert.equal(boolarpqEvX, true)
		assert.equal(uint256Q8lwEzI, BigInt("0"))
		assert.equal(uint256l4VM9h, BigInt("500000000000000000000000000"))
		assert.equal(uint256s4Jb0bh, BigInt("0"))
		assert.equal(uint256sqk3S69, BigInt("500000000000000000000000000"))
	});

	it('test for RIT', async () => {
		const RITIgpbclB = await RIT.new({from: accounts[1]});
		const uintnKFeBoI = BigInt("1760")
		const addresspEIkJeu = accounts[1]
		const uintlLGKJVD = BigInt("1143")
		const addressc0sYwjv = accounts[2]
		const uintNS6MAP4 = BigInt("521")
//		const boolLfp3XP2 = await RITIgpbclB.transfer.call(addresspEIkJeu, uintnKFeBoI, {from: accounts[4]});
//		const boolIPrA21g = await RITIgpbclB.increaseAllowance.call(addressc0sYwjv, uintlLGKJVD, {from: accounts[4]});
//		const uint256c6n4Gk = await RITIgpbclB._burn.call(uintNS6MAP4, {from: accounts[4]});

		await expect(RITIgpbclB.transfer.call(addresspEIkJeu, uintnKFeBoI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITbDi3m5P = await RIT.new({from: accounts[4]});
		const uintmmm5AUX = BigInt("1193")
		const addresse0vPnZ = accounts[2]
		const uinthAKFipZ = BigInt("1457")
		const addressnZO1GcU = accounts[5]
		const uintB04t5m = BigInt("1572")
		const addresstpiA9bs = accounts[1]
		const boolYQHjrUW = await RITbDi3m5P.approve.call(addresse0vPnZ, uintmmm5AUX, {from: accounts[3]});
		const stringKZmjGdT = await RITbDi3m5P.name.call({from: accounts[1]});
//		const boollFNpqvI = await RITbDi3m5P.decreaseAllowance.call(addressnZO1GcU, uinthAKFipZ, {from: accounts[3]});
//		const boolOlrfeEo = await RITbDi3m5P.increaseAllowance.call(addresstpiA9bs, uintB04t5m, {from: accounts[3]});

		assert.equal(boolYQHjrUW, true)
		assert.equal(stringKZmjGdT, "Real Estate Investment Token")
		await expect(RITbDi3m5P.decreaseAllowance.call(addressnZO1GcU, uinthAKFipZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})