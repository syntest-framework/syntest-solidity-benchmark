const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinKZ6wnOK = await MetaCoin.new({from: accounts[4]});
		const uintKm6p6PK = BigInt("1405")
		const addressLNmcV2T = accounts[2]
		const uintd5IWBEa = BigInt("1128")
		const addressyq61Gi4 = accounts[1]
		const uintSx4sBMB = BigInt("253")
		const addressZu9zlb = accounts[2]
		const uintDDPwhQP = BigInt("797")
		const addresst2lq5hi = accounts[0]
		const uintAmLMedM = BigInt("1253")
		const addressji7eiep = accounts[2]
		const boolrW2dTAy = await MetaCoinKZ6wnOK.sendCoin.call(addressLNmcV2T, uintKm6p6PK, {from: accounts[3]});
		const booll4X5y4V = await MetaCoinKZ6wnOK.sendCoin.call(addressyq61Gi4, uintd5IWBEa, {from: accounts[0]});
		const boolRpmlY91 = await MetaCoinKZ6wnOK.sendCoin.call(addressZu9zlb, uintSx4sBMB, {from: accounts[4]});
		const boolWU1kLVN = await MetaCoinKZ6wnOK.sendCoin.call(addresst2lq5hi, uintDDPwhQP, {from: accounts[0]});
		const boolPfTdVLD = await MetaCoinKZ6wnOK.sendCoin.call(addressji7eiep, uintAmLMedM, {from: accounts[3]});

		assert.equal(boolPfTdVLD, false)
		assert.equal(boolRpmlY91, true)
		assert.equal(boolWU1kLVN, false)
		assert.equal(booll4X5y4V, false)
		assert.equal(boolrW2dTAy, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinZ65F9Mj = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintT05OXgX = BigInt("112")
		const addressPTbCeXP = accounts[3]
		const uintLgn5HI = BigInt("990")
		const addressQqqxKkx = "0x0000000000000000000000000000000000000001"
		const uintO0YdwYr = BigInt("166")
		const addressXcZMLQt = accounts[4]
		const boolYEgRMDD = await MetaCoinZ65F9Mj.sendCoin.call(addressPTbCeXP, uintT05OXgX, {from: accounts[3]});
		const boolTARIzAK = await MetaCoinZ65F9Mj.sendCoin.call(addressQqqxKkx, uintLgn5HI, {from: accounts[1]});
		const boolBH53qd = await MetaCoinZ65F9Mj.sendCoin.call(addressXcZMLQt, uintO0YdwYr, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinSkhxPew = await MetaCoin.new({from: accounts[4]});
		const uintpZt7XXw = BigInt("3")
		const addressB8F1SAu = accounts[2]
		const uintip7tI8 = BigInt("805")
		const addresshIPkp9 = accounts[3]
		const boolmxpay2 = await MetaCoinSkhxPew.sendCoin.call(addressB8F1SAu, uintpZt7XXw, {from: accounts[4]});
		const boolMhqtKWR = await MetaCoinSkhxPew.sendCoin.call(addresshIPkp9, uintip7tI8, {from: accounts[5]});

		assert.equal(boolMhqtKWR, false)
		assert.equal(boolmxpay2, true)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinSkhxPew = await MetaCoin.new({from: accounts[4]});
		const uintzyJAfZ0 = BigInt("2903")
		const addresslchfOPq = accounts[10]
		const uintr1Ytls1 = BigInt("1342")
		const addresscrMayhL = accounts[0]
//		const boolYsqYD3U = await MetaCoinSkhxPew.sendCoin.call(addresslchfOPq, uintzyJAfZ0, {from: accounts[4]});
//		const boolfNbZnsj = await MetaCoinSkhxPew.sendCoin.call(addresscrMayhL, uintr1Ytls1, {from: accounts[3]});

		await expect(MetaCoinSkhxPew.sendCoin.call(addresslchfOPq, uintzyJAfZ0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})