const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinKrGmfaM = await EdenCoin.new({from: accounts[4]});
		const addressDt2bym = accounts[3]
		const uintVHFEWyz = BigInt("1629")
		const addresso1zqvOJ = accounts[1]
		const addressCOfj5FZ = accounts[5]
		const uintkP7kIQA = BigInt("13")
		const addressQXyFQn = accounts[0]
		const uint256F3N1dF = await EdenCoinKrGmfaM.balanceOf.call(addressDt2bym, {from: accounts[0]});
//		const boolqNR2XUh = await EdenCoinKrGmfaM.transfer.call(addresso1zqvOJ, uintVHFEWyz, {from: accounts[2]});
//		const uint256hSrD0ff = await EdenCoinKrGmfaM.balanceOf.call(addressCOfj5FZ, {from: accounts[2]});
//		const boolKSMTF2y = await EdenCoinKrGmfaM.transfer.call(addressQXyFQn, uintkP7kIQA, {from: accounts[2]});

		assert.equal(uint256F3N1dF, BigInt("0"))
		await expect(EdenCoinKrGmfaM.transfer.call(addresso1zqvOJ, uintVHFEWyz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinKI5peBp = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintC04nwj3 = BigInt("1673")
		const addressVLpRuWD = "0x0000000000000000000000000000000000000001"
		const address723DXd = accounts[0]
		const uintG35ZyDS = BigInt("27")
		const addressfsW6ZiW = "0x0000000000000000000000000000000000000001"
		const uintJMPY4Gc = BigInt("2038")
		const addressE1V4gay = accounts[0]
		const boolJPMGLVZ = await EdenCoinKI5peBp.transferFrom.call(address723DXd, addressVLpRuWD, uintC04nwj3, {from: accounts[1]});
		const boolj61B5RN = await EdenCoinKI5peBp.transfer.call(addressfsW6ZiW, uintG35ZyDS, {from: accounts[5]});
		const boolVrJBgFt = await EdenCoinKI5peBp.increaseApproval.call(addressE1V4gay, uintJMPY4Gc, {from: accounts[2]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinxBAcnyx = await EdenCoin.new({from: accounts[5]});
		const uintrC3paLN = BigInt("1695")
		const addressYL6rcv = accounts[1]
		const uintlucFQQZ = BigInt("545")
		const addressTP4wjrC = accounts[5]
		const addressL8fwQAB = accounts[0]
		const addressPobCRPL = accounts[0]
		const addressNac0s0x = accounts[0]
		const uintkjzD2NL = BigInt("566")
		const addressbL86dL = accounts[4]
		const boolsyUEIrZ = await EdenCoinxBAcnyx.increaseApproval.call(addressYL6rcv, uintrC3paLN, {from: accounts[4]});
//		const boolppxrddp = await EdenCoinxBAcnyx.transferFrom.call(addressL8fwQAB, addressTP4wjrC, uintlucFQQZ, {from: accounts[4]});
//		const uint256fNY2BTJ = await EdenCoinxBAcnyx.allowance.call(addressNac0s0x, addressPobCRPL, {from: accounts[3]});
//		const boolSq4qkZv = await EdenCoinxBAcnyx.increaseApproval.call(addressbL86dL, uintkjzD2NL, {from: accounts[1]});

		assert.equal(boolsyUEIrZ, true)
		await expect(EdenCoinxBAcnyx.transferFrom.call(addressL8fwQAB, addressTP4wjrC, uintlucFQQZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinwyu7jkq = await EdenCoin.new({from: accounts[4]});
		const uintu9oPBhe = BigInt("10")
		const addressq0oH9b = accounts[0]
		const uint4zgUI6 = BigInt("1904")
		const addressYSs4dG6 = accounts[3]
		const uintTvHo2HV = BigInt("125")
		const addressTT3qmm = accounts[1]
		const uintoVsfroR = BigInt("1631")
		const addressf8xHCZj = accounts[1]
		const addressq60y6Mz = accounts[2]
		const boolxRIthu4 = await EdenCoinwyu7jkq.approve.call(addressq0oH9b, uintu9oPBhe, {from: accounts[2]});
		const boolK9UYyjA = await EdenCoinwyu7jkq.transfer.call(addressYSs4dG6, uint4zgUI6, {from: accounts[4]});
		const boolBX15BxK = await EdenCoinwyu7jkq.approve.call(addressTT3qmm, uintTvHo2HV, {from: accounts[5]});
//		const boolZDtLDW = await EdenCoinwyu7jkq.transferFrom.call(addressq60y6Mz, addressf8xHCZj, uintoVsfroR, {from: accounts[1]});

		assert.equal(boolBX15BxK, true)
		assert.equal(boolK9UYyjA, true)
		assert.equal(boolxRIthu4, true)
		await expect(EdenCoinwyu7jkq.transferFrom.call(addressq60y6Mz, addressf8xHCZj, uintoVsfroR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinYFgYRJ = await EdenCoin.new({from: accounts[3]});
		const uintXDlYAsJ = BigInt("1147")
		const addressrHuALAa = "0x0000000000000000000000000000000000000001"
		const uintMF5TOV = BigInt("1053")
		const addressQdbEkwr = accounts[2]
		const addressloX8ZYy = accounts[2]
		const addressnnDfuI4 = "0x0000000000000000000000000000000000000001"
		const boolj0pD5Yy = await EdenCoinYFgYRJ.transfer.call(addressrHuALAa, uintXDlYAsJ, {from: accounts[3]});
		const boolmHnqVwf = await EdenCoinYFgYRJ.increaseApproval.call(addressQdbEkwr, uintMF5TOV, {from: accounts[5]});
		const uint256VogmJqt = await EdenCoinYFgYRJ.allowance.call(addressnnDfuI4, addressloX8ZYy, {from: accounts[4]});

		assert.equal(boolj0pD5Yy, true)
		assert.equal(boolmHnqVwf, true)
		assert.equal(uint256VogmJqt, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinwX8qhO = await EdenCoin.new({from: accounts[3]});
		const uintTUYnPSd = BigInt("1839")
		const addressyCUeXky = accounts[2]
		const addressGpUVFK = accounts[3]
		const addressbndWuBJ = accounts[0]
		const addressMf1zZwo = accounts[0]
		const addressWrbIUDD = accounts[1]
		const addressRJ5Y57l = "0x0000000000000000000000000000000000000001"
//		const boolQSAYeZP = await EdenCoinwX8qhO.transferFrom.call(addressGpUVFK, addressyCUeXky, uintTUYnPSd, {from: accounts[3]});
//		const uint256l9Mg6q5 = await EdenCoinwX8qhO.allowance.call(addressMf1zZwo, addressbndWuBJ, {from: accounts[1]});
//		const uint256I1UXtz0 = await EdenCoinwX8qhO.allowance.call(addressRJ5Y57l, addressWrbIUDD, {from: accounts[2]});

		await expect(EdenCoinwX8qhO.transferFrom.call(addressGpUVFK, addressyCUeXky, uintTUYnPSd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinwGEisSa = await EdenCoin.new({from: accounts[4]});
		const uintfC3oUbd = BigInt("8")
		const addressZwq0kII = "0x0000000000000000000000000000000000000001"
		const uintMZxmQKP = BigInt("1913")
		const addressY9BBBsB = accounts[2]
		const boolfKzNqOT = await EdenCoinwGEisSa.increaseApproval.call(addressZwq0kII, uintfC3oUbd, {from: accounts[4]});
		const boolXdvUgNa = await EdenCoinwGEisSa.decreaseApproval.call(addressY9BBBsB, uintMZxmQKP, {from: accounts[0]});

		assert.equal(boolXdvUgNa, true)
		assert.equal(boolfKzNqOT, true)
	});

	it('test for EdenCoin', async () => {
		const EdenCoinwGEisSa = await EdenCoin.new({from: accounts[4]});
		const uintK198fV = BigInt("0")
		const addressF1Rbg5d = accounts[3]
		const uintZmYCHaE = BigInt("574")
		const addressOJVpCTJ = accounts[5]
		const uintagdFwy8 = BigInt("714")
		const addressRbTdyxF = accounts[4]
		const addressaLQyIhm = accounts[0]
		const boolXdvUgNa = await EdenCoinwGEisSa.decreaseApproval.call(addressF1Rbg5d, uintK198fV, {from: accounts[0]});
		const boolqwd2mQt = await EdenCoinwGEisSa.approve.call(addressOJVpCTJ, uintZmYCHaE, {from: accounts[1]});
//		const boolWuBNK2f = await EdenCoinwGEisSa.transferFrom.call(addressaLQyIhm, addressRbTdyxF, uintagdFwy8, {from: accounts[3]});

		assert.equal(boolXdvUgNa, true)
		assert.equal(boolqwd2mQt, true)
		await expect(EdenCoinwGEisSa.transferFrom.call(addressaLQyIhm, addressRbTdyxF, uintagdFwy8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})