const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoingzaPu0B = await EdenCoin.new({from: accounts[2]});
		const uintnO1ljHb = BigInt("2001")
		const addressxGiqDY5 = accounts[4]
		const uintvs8Mcfv = BigInt("447")
		const addressgop0QYB = accounts[3]
		const addressXTRfQ6v = accounts[1]
//		const boolxq3KuJz = await EdenCoingzaPu0B.transfer.call(addressxGiqDY5, uintnO1ljHb, {from: accounts[1]});
//		const boolYJlvYf9 = await EdenCoingzaPu0B.transferFrom.call(addressXTRfQ6v, addressgop0QYB, uintvs8Mcfv, {from: accounts[3]});

		await expect(EdenCoingzaPu0B.transfer.call(addressxGiqDY5, uintnO1ljHb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCointgPqsYN = await EdenCoin.new({from: accounts[3]});
		const uintLkzTYNg = BigInt("690")
		const addressF2FuWni = accounts[4]
		const addressWWKYUCn = accounts[1]
		const addressA3E7z8 = accounts[1]
		const addresscR9U0Nc = accounts[4]
		const uintDC0A68h = BigInt("139")
		const addressjw5KK2F = accounts[2]
		const addressJNy1bFb = accounts[1]
//		const boolM1sVgm = await EdenCointgPqsYN.transferFrom.call(addressWWKYUCn, addressF2FuWni, uintLkzTYNg, {from: accounts[3]});
//		const uint256J1Cn75k = await EdenCointgPqsYN.allowance.call(addresscR9U0Nc, addressA3E7z8, {from: accounts[0]});
//		const boolYuTS92 = await EdenCointgPqsYN.transferFrom.call(addressJNy1bFb, addressjw5KK2F, uintDC0A68h, {from: accounts[2]});

		await expect(EdenCointgPqsYN.transferFrom.call(addressWWKYUCn, addressF2FuWni, uintLkzTYNg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoino9nzViV = await EdenCoin.new({from: accounts[4]});
		const uinthiL3eeW = BigInt("492")
		const addressHSJlapS = accounts[5]
		const uintezRvdcC = BigInt("335")
		const addressmWMIdEE = accounts[0]
		const addressAqL13IG = accounts[4]
		const uintJF2CmqW = BigInt("137")
		const addressnbeWqX3 = accounts[0]
		const addressONXajN = accounts[2]
		const uintMOiY31M = BigInt("1843")
		const addressKJJS7WY = accounts[2]
		const boolcAdZVJ = await EdenCoino9nzViV.approve.call(addressHSJlapS, uinthiL3eeW, {from: accounts[4]});
//		const boolIl3oWar = await EdenCoino9nzViV.transferFrom.call(addressAqL13IG, addressmWMIdEE, uintezRvdcC, {from: accounts[3]});
//		const boolO49Mjx = await EdenCoino9nzViV.transferFrom.call(addressONXajN, addressnbeWqX3, uintJF2CmqW, {from: accounts[4]});
//		const boolPrwkaoV = await EdenCoino9nzViV.transfer.call(addressKJJS7WY, uintMOiY31M, {from: accounts[5]});

		assert.equal(boolcAdZVJ, true)
		await expect(EdenCoino9nzViV.transferFrom.call(addressAqL13IG, addressmWMIdEE, uintezRvdcC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinnUcofzY = await EdenCoin.new({from: accounts[1]});
		const uintCNqYZ32 = BigInt("1379")
		const addresshGfw830 = accounts[4]
		const uintRHhIEjs = BigInt("1603")
		const addressXvXOG7e = "0x0000000000000000000000000000000000000001"
		const addressS2RiUt = accounts[4]
		const addressE4JGeM0 = accounts[1]
		const boolm9Y0gVG = await EdenCoinnUcofzY.decreaseApproval.call(addresshGfw830, uintCNqYZ32, {from: accounts[5]});
		const boolWkNAlsS = await EdenCoinnUcofzY.increaseApproval.call(addressXvXOG7e, uintRHhIEjs, {from: accounts[5]});
		const uint256nZdO2s3 = await EdenCoinnUcofzY.allowance.call(addressE4JGeM0, addressS2RiUt, {from: accounts[0]});

		assert.equal(boolWkNAlsS, true)
		assert.equal(boolm9Y0gVG, true)
		assert.equal(uint256nZdO2s3, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinP9xxNzm = await EdenCoin.new({from: accounts[5]});
		const uintRHxRaC = BigInt("1749")
		const addressSeaR009 = accounts[4]
		const addressAvi0PC = accounts[4]
		const addressINqjBy4 = accounts[3]
		const addresssT0d2u = accounts[1]
		const uintg2Bz5U = BigInt("1286")
		const addressjQ8yMIp = accounts[1]
		const boolIOiu0qg = await EdenCoinP9xxNzm.increaseApproval.call(addressSeaR009, uintRHxRaC, {from: accounts[0]});
		const uint256GGWr9jE = await EdenCoinP9xxNzm.balanceOf.call(addressAvi0PC, {from: accounts[3]});
		const uint256zRLUiZI = await EdenCoinP9xxNzm.allowance.call(addresssT0d2u, addressINqjBy4, {from: "0x0000000000000000000000000000000000000001"});
		const boolwkqMnnr = await EdenCoinP9xxNzm.transfer.call(addressjQ8yMIp, uintg2Bz5U, {from: accounts[5]});

		assert.equal(boolIOiu0qg, true)
		assert.equal(boolwkqMnnr, true)
		assert.equal(uint256GGWr9jE, BigInt("0"))
		assert.equal(uint256zRLUiZI, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinplt1Iy = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxYaMnRy = accounts[3]
		const uintvBprKdl = BigInt("1117")
		const addressqbpals6 = accounts[4]
		const uint256mplFYdA = await EdenCoinplt1Iy.balanceOf.call(addressxYaMnRy, {from: accounts[0]});
		const booldmgW86 = await EdenCoinplt1Iy.approve.call(addressqbpals6, uintvBprKdl, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinKzxznS = await EdenCoin.new({from: accounts[0]});
		const uintDHJdgs4 = BigInt("1817")
		const addressOsvu72Q = accounts[3]
		const uintr54TS3y = BigInt("746")
		const addresspsvDVjv = "0x00000000000000000000000000000000000000-1"
		const uintdXtfwOc = BigInt("291")
		const addressw3OiXC4 = accounts[1]
		const uintdjKSE9 = BigInt("361")
		const addresssoJZXPN = accounts[3]
		const boolBbRT8Ev = await EdenCoinKzxznS.increaseApproval.call(addressOsvu72Q, uintDHJdgs4, {from: accounts[3]});
//		const boolRxbebId = await EdenCoinKzxznS.decreaseApproval.call(addresspsvDVjv, uintr54TS3y, {from: accounts[0]});
//		const boollUI5uaB = await EdenCoinKzxznS.decreaseApproval.call(addressw3OiXC4, uintdXtfwOc, {from: accounts[3]});
//		const boolA3n2Odh = await EdenCoinKzxznS.transfer.call(addresssoJZXPN, uintdjKSE9, {from: accounts[4]});

		assert.equal(boolBbRT8Ev, true)
		await expect(EdenCoinKzxznS.decreaseApproval.call(addresspsvDVjv, uintr54TS3y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinKzxznS = await EdenCoin.new({from: accounts[0]});
		const uintx4kR22D = BigInt("0")
		const addressLtyWhVd = accounts[2]
		const uintg9mFVzx = BigInt("1047")
		const addressT8RIgB3 = accounts[0]
		const boollJzc9nl = await EdenCoinKzxznS.decreaseApproval.call(addressLtyWhVd, uintx4kR22D, {from: "0x0000000000000000000000000000000000000001"});
		const boolrCxVq2i = await EdenCoinKzxznS.increaseApproval.call(addressT8RIgB3, uintg9mFVzx, {from: accounts[4]});

		assert.equal(boollJzc9nl, true)
		assert.equal(boolrCxVq2i, true)
	});
})