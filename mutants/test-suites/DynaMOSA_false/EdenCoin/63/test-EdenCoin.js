const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinqVg4OB = await EdenCoin.new({from: accounts[4]});
		const uintmVd090L = BigInt("1847")
		const addressAjbdc6q = accounts[0]
		const uintwhuTYrz = BigInt("189")
		const addressF7s8XuQ = accounts[1]
		const uintUB66HbN = BigInt("450")
		const addressaPycFUb = accounts[0]
		const boolErc193g = await EdenCoinqVg4OB.decreaseApproval.call(addressAjbdc6q, uintmVd090L, {from: accounts[3]});
		const boolXVl0Xik = await EdenCoinqVg4OB.decreaseApproval.call(addressF7s8XuQ, uintwhuTYrz, {from: accounts[0]});
		const boolOp08tA1 = await EdenCoinqVg4OB.increaseApproval.call(addressaPycFUb, uintUB66HbN, {from: accounts[5]});

		assert.equal(boolErc193g, true)
		assert.equal(boolOp08tA1, true)
		assert.equal(boolXVl0Xik, true)
	});

	it('test for EdenCoin', async () => {
		const EdenCoinqRI3keV = await EdenCoin.new({from: accounts[0]});
		const addressMqgjgox = accounts[2]
		const addressh9oMNBM = accounts[4]
		const uintb6DBoQL = BigInt("1371")
		const addressWsEMj2H = accounts[3]
		const uintNa2hJlC = BigInt("1006")
		const addresswuAL2qu = accounts[0]
		const uintjnvSOzL = BigInt("715")
		const addressa06cdSG = accounts[3]
		const uint256am00yqq = await EdenCoinqRI3keV.allowance.call(addressh9oMNBM, addressMqgjgox, {from: accounts[1]});
		const boolQh8qim = await EdenCoinqRI3keV.increaseApproval.call(addressWsEMj2H, uintb6DBoQL, {from: accounts[0]});
		const boolZZ8saI0 = await EdenCoinqRI3keV.increaseApproval.call(addresswuAL2qu, uintNa2hJlC, {from: accounts[0]});
		const boolsfOXNNV = await EdenCoinqRI3keV.decreaseApproval.call(addressa06cdSG, uintjnvSOzL, {from: accounts[1]});

		assert.equal(boolQh8qim, true)
		assert.equal(boolZZ8saI0, true)
		assert.equal(boolsfOXNNV, true)
		assert.equal(uint256am00yqq, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoingvVVIxS = await EdenCoin.new({from: accounts[3]});
		const uintokvPAKI = BigInt("1993")
		const addressYyESjeh = accounts[0]
		const uintZsH6PSx = BigInt("1719")
		const addressGZRCxXC = accounts[1]
		const uintNl6BEhQ = BigInt("1131")
		const addressetV4vd = accounts[0]
		const addressqrB30lI = accounts[2]
		const uintAQPKenZ = BigInt("961")
		const addressQXwFzw1 = accounts[2]
		const uintjN3xrvl = BigInt("347")
		const address2cvxGN = accounts[5]
		const boolOFY1D5j = await EdenCoingvVVIxS.approve.call(addressYyESjeh, uintokvPAKI, {from: accounts[0]});
		const boolUQtzQxf = await EdenCoingvVVIxS.decreaseApproval.call(addressGZRCxXC, uintZsH6PSx, {from: accounts[0]});
//		const boolCiAIgWl = await EdenCoingvVVIxS.transferFrom.call(addressqrB30lI, addressetV4vd, uintNl6BEhQ, {from: accounts[3]});
//		const boolgghXunj = await EdenCoingvVVIxS.transfer.call(addressQXwFzw1, uintAQPKenZ, {from: accounts[5]});
//		const boolotIf23 = await EdenCoingvVVIxS.decreaseApproval.call(address2cvxGN, uintjN3xrvl, {from: accounts[4]});

		assert.equal(boolOFY1D5j, true)
		assert.equal(boolUQtzQxf, true)
		await expect(EdenCoingvVVIxS.transferFrom.call(addressqrB30lI, addressetV4vd, uintNl6BEhQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinYFyAfis = await EdenCoin.new({from: accounts[0]});
		const uintwzeQ5BW = BigInt("1093")
		const addressi6erSZI = accounts[0]
		const addresssbPWP4 = accounts[4]
		const uinta5QQyBw = BigInt("498")
		const addressOqWs7AQ = accounts[4]
		const uinteBD16hC = BigInt("519")
		const addressrMHCciu = accounts[0]
		const addresssqWK8Wd = accounts[1]
		const addressQfYsnEh = accounts[3]
		const booliOFOS2k = await EdenCoinYFyAfis.increaseApproval.call(addressi6erSZI, uintwzeQ5BW, {from: accounts[0]});
		const uint256EPQkaGh = await EdenCoinYFyAfis.balanceOf.call(addresssbPWP4, {from: accounts[4]});
		const boolyb0US1u = await EdenCoinYFyAfis.increaseApproval.call(addressOqWs7AQ, uinta5QQyBw, {from: accounts[0]});
		const boolzY4ofuy = await EdenCoinYFyAfis.decreaseApproval.call(addressrMHCciu, uinteBD16hC, {from: accounts[2]});
		const uint2564yGBGd = await EdenCoinYFyAfis.allowance.call(addressQfYsnEh, addresssqWK8Wd, {from: accounts[5]});

		assert.equal(booliOFOS2k, true)
		assert.equal(boolyb0US1u, true)
		assert.equal(boolzY4ofuy, true)
		assert.equal(uint2564yGBGd, BigInt("0"))
		assert.equal(uint256EPQkaGh, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinu526q0g = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJBB3zyh = BigInt("1437")
		const addressEP1gPec = accounts[4]
		const addressEWrXiRE = accounts[0]
		const addressR4rQhN = accounts[2]
		const addressgcgMMG8 = "0x0000000000000000000000000000000000000001"
		const uinttzdupPx = BigInt("1646")
		const addressOtL2s2y = accounts[3]
		const addressvIcbm1W = accounts[1]
		const addressUpZRP0w = accounts[2]
		const uintM1yAdwA = BigInt("2036")
		const address1d46UZ = accounts[2]
		const boolkgIXcU = await EdenCoinu526q0g.transferFrom.call(addressEWrXiRE, addressEP1gPec, uintJBB3zyh, {from: accounts[1]});
		const uint256JRWgCi1 = await EdenCoinu526q0g.allowance.call(addressgcgMMG8, addressR4rQhN, {from: accounts[3]});
		const boolcT39nG2 = await EdenCoinu526q0g.increaseApproval.call(addressOtL2s2y, uinttzdupPx, {from: accounts[5]});
		const uint256LyV7voG = await EdenCoinu526q0g.allowance.call(addressUpZRP0w, addressvIcbm1W, {from: accounts[3]});
		const boolNFJkY5f = await EdenCoinu526q0g.decreaseApproval.call(address1d46UZ, uintM1yAdwA, {from: accounts[3]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinIYUy1y3 = await EdenCoin.new({from: accounts[4]});
		const uinttYOSM12 = BigInt("1247")
		const addresscBGN8l = accounts[2]
		const addressfj3LsV3 = accounts[3]
		const addressxw46imp = accounts[5]
		const uintGXVwjIP = BigInt("1153")
		const addressVM0tqOh = accounts[3]
		const uintAbygun8 = BigInt("7")
		const addressj3Jq5Bo = accounts[2]
		const uinti22lQrb = BigInt("1002")
		const addressFM5O8s = accounts[2]
		const uintypx8AP0 = BigInt("469")
		const addressMJpgnzs = accounts[5]
		const addressSmAnjMR = accounts[2]
		const boolf1OPczZ = await EdenCoinIYUy1y3.approve.call(addresscBGN8l, uinttYOSM12, {from: accounts[0]});
		const uint256hE3qlZg = await EdenCoinIYUy1y3.allowance.call(addressxw46imp, addressfj3LsV3, {from: accounts[0]});
//		const boolD3pTYxd = await EdenCoinIYUy1y3.transfer.call(addressVM0tqOh, uintGXVwjIP, {from: accounts[0]});
//		const boolV6KC9D = await EdenCoinIYUy1y3.approve.call(addressj3Jq5Bo, uintAbygun8, {from: accounts[4]});
//		const booliXRtzxA = await EdenCoinIYUy1y3.approve.call(addressFM5O8s, uinti22lQrb, {from: accounts[3]});
//		const boolHLwvcjx = await EdenCoinIYUy1y3.transferFrom.call(addressSmAnjMR, addressMJpgnzs, uintypx8AP0, {from: accounts[3]});

		assert.equal(boolf1OPczZ, true)
		assert.equal(uint256hE3qlZg, BigInt("0"))
		await expect(EdenCoinIYUy1y3.transfer.call(addressVM0tqOh, uintGXVwjIP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinqVg4OB = await EdenCoin.new({from: accounts[4]});
		const addressHvI3ePg = accounts[5]
		const address7qeASF = accounts[4]
		const uintNWufPbw = BigInt("0")
		const addressc79gu8Z = accounts[2]
		const addressBfr1VYI = accounts[4]
		const uintzrhflfe = BigInt("1773")
		const addressTERRx8c = accounts[4]
		const uint256IVnKLI = await EdenCoinqVg4OB.allowance.call(address7qeASF, addressHvI3ePg, {from: accounts[2]});
		const boolCmff15R = await EdenCoinqVg4OB.decreaseApproval.call(addressc79gu8Z, uintNWufPbw, {from: accounts[5]});
		const uint256zxOFmn4 = await EdenCoinqVg4OB.balanceOf.call(addressBfr1VYI, {from: accounts[3]});
		const boolES8ik56 = await EdenCoinqVg4OB.increaseApproval.call(addressTERRx8c, uintzrhflfe, {from: accounts[0]});

		assert.equal(boolCmff15R, true)
		assert.equal(boolES8ik56, true)
		assert.equal(uint256IVnKLI, BigInt("0"))
		assert.equal(uint256zxOFmn4, BigInt("1000000000000000000000000000"))
	});
})