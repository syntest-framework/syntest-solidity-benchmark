const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolywZtBid = await ETFXPool.new({from: accounts[0]});
		const addressFskRit = accounts[4]
		const uintzBs2IEk = BigInt("2031")
		const addressRudXQG = accounts[0]
		const uintmpmuqYl = BigInt("1847")
		const addressyOQFwVd = accounts[2]
		const uinthVqipHu = BigInt("523")
		const addressESEXdl = "0x0000000000000000000000000000000000000001"
		const uintcJYsiL = BigInt("2046")
		const addressCcjHTj3 = accounts[2]
		const addressSq1T4KB = accounts[4]
		const addressj3fe3Z = accounts[2]
		const addressPKSJcqq = await ETFXPoolywZtBid.transferOwnership.call(addressFskRit, {from: accounts[1]});
		const boolpklV1c7 = await ETFXPoolywZtBid.transfer.call(addressRudXQG, uintzBs2IEk, {from: accounts[4]});
		const booltOGxwvl = await ETFXPoolywZtBid.transfer.call(addressyOQFwVd, uintmpmuqYl, {from: accounts[0]});
		const booljNOftjt = await ETFXPoolywZtBid.approve.call(addressESEXdl, uinthVqipHu, {from: accounts[1]});
		const boolb6LdJx1 = await ETFXPoolywZtBid.transferFrom.call(addressSq1T4KB, addressCcjHTj3, uintcJYsiL, {from: accounts[2]});
		const uint256XB1T07l = await ETFXPoolywZtBid.balanceOf.call(addressj3fe3Z, {from: accounts[3]});

		await expect(ETFXPoolywZtBid.transferOwnership.call(addressFskRit, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolk9yM0Qi = await ETFXPool.new({from: accounts[4]});
		const addressfSENIFL = accounts[4]
		const uintOfH9G8B = BigInt("172")
		const uintUK4GbZ1 = BigInt("1554")
		const addressJGYFL4o = accounts[3]
		const uint256SSowMoe = await ETFXPoolk9yM0Qi.balanceOf.call(addressfSENIFL, {from: accounts[1]});
		const uint256b8EedvZ = await ETFXPoolk9yM0Qi.stake.call(uintOfH9G8B, {from: accounts[3]});
		const boolEWufhbD = await ETFXPoolk9yM0Qi.approve.call(addressJGYFL4o, uintUK4GbZ1, {from: accounts[0]});

		assert.equal(uint256SSowMoe, BigInt("0"))
		await expect(ETFXPoolk9yM0Qi.stake.call(uintOfH9G8B, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolg5TFnc = await ETFXPool.new({from: accounts[4]});
		const uintAl1N3nX = BigInt("1248")
		const addressyEEXAvV = accounts[5]
		await ETFXPoolg5TFnc.onlyOwner.call({from: accounts[4]});
		const boolgQgOOt = await ETFXPoolg5TFnc.approve.call(addressyEEXAvV, uintAl1N3nX, {from: accounts[4]});
		await ETFXPoolg5TFnc.onlyOwner.call({from: accounts[0]});
		const addresskUm3zqF = await ETFXPoolg5TFnc.owner.call({from: accounts[0]});

		await expect(ETFXPoolg5TFnc.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringMUUYP7o = "bLZt2k2IH0TmoGIfMpAqwCGt4LcpvTIxNo"
		const stringPeeGtQi = "Ts5dVZHJ2v9e3oN"
		const uintLaGGmVU = BigInt("157")
		const ETFXPoolYQzc4Y = await ETFXPool.new(stringMUUYP7o, stringPeeGtQi, uintLaGGmVU, {from: "0x0000000000000000000000000000000000000001"});
		const uintNZ1wU7v = BigInt("1483")
		const addressBaw0N5P = accounts[3]
		const uintF5Qa5PE = BigInt("301")
		const addressGv7B4SQ = accounts[4]
		const addressHdWqXcM = accounts[0]
		const boolmA8Uf3l = await ETFXPoolYQzc4Y.decreaseAllowance.call(addressBaw0N5P, uintNZ1wU7v, {from: accounts[4]});
		await ETFXPoolYQzc4Y.exit.call({from: accounts[3]});
		const uint256xSCHzQ6 = await ETFXPoolYQzc4Y.rewardPerToken.call({from: accounts[0]});
		const boolUOKiBG8 = await ETFXPoolYQzc4Y.transferFrom.call(addressHdWqXcM, addressGv7B4SQ, uintF5Qa5PE, {from: accounts[1]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolvznd8D = await ETFXPool.new({from: accounts[2]});
		const uintKTUZ93 = BigInt("716")
		const addressJJ7Qs4j = accounts[4]
		const uint256qnjGvNA = await ETFXPoolvznd8D.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const stringgJALjip = await ETFXPoolvznd8D.symbol.call({from: accounts[3]});
		await ETFXPoolvznd8D.nonReentrant.call({from: accounts[2]});
		const boolVgbnWor = await ETFXPoolvznd8D.transfer.call(addressJJ7Qs4j, uintKTUZ93, {from: accounts[3]});
		const stringCvDODhT = await ETFXPoolvznd8D.symbol.call({from: accounts[2]});

		assert.equal(stringgJALjip, "FETFX")
		assert.equal(uint256qnjGvNA, BigInt("0"))
		await expect(ETFXPoolvznd8D.nonReentrant.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolGHeithW = await ETFXPool.new({from: accounts[2]});
		const uintcGRfomD = BigInt("1626")
		const addressPkjIesW = accounts[5]
		const addressWRyFzxo = accounts[1]
		const uint256cDqo7sR = await ETFXPoolGHeithW.rewardPerToken.call({from: accounts[2]});
		const uint8XrbxPES = await ETFXPoolGHeithW.decimals.call({from: accounts[1]});
		const boolkCExQR9 = await ETFXPoolGHeithW.transferFrom.call(addressWRyFzxo, addressPkjIesW, uintcGRfomD, {from: accounts[2]});
		await ETFXPoolGHeithW.exit.call({from: accounts[2]});

		assert.equal(uint256cDqo7sR, BigInt("0"))
		assert.equal(uint8XrbxPES, BigInt("8"))
		await expect(ETFXPoolGHeithW.transferFrom.call(addressWRyFzxo, addressPkjIesW, uintcGRfomD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolCfpq9tf = await ETFXPool.new({from: accounts[3]});
		const uintLnYSvzx = BigInt("419")
		const address38GuAB = accounts[2]
		const addresswDLiatd = accounts[3]
		const uint256XfPU7gh = await ETFXPoolCfpq9tf.totalSupply.call({from: accounts[4]});
		const addressswriQhq = await ETFXPoolCfpq9tf.owner.call({from: accounts[5]});
		const uint256aunGtjn = await ETFXPoolCfpq9tf.totalSupply.call({from: accounts[1]});
		const addressQ5eV6vF = await ETFXPoolCfpq9tf.owner.call({from: accounts[5]});
		const booliDdqpU = await ETFXPoolCfpq9tf.transferFrom.call(addresswDLiatd, address38GuAB, uintLnYSvzx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressQ5eV6vF, 0xb6B89A6fAcf9c76570CE6fdE647395fa09A04e4b)
		assert.equal(addressswriQhq, 0xb6B89A6fAcf9c76570CE6fdE647395fa09A04e4b)
		assert.equal(uint256XfPU7gh, BigInt("0"))
		assert.equal(uint256aunGtjn, BigInt("0"))
		await expect(ETFXPoolCfpq9tf.transferFrom.call(addresswDLiatd, address38GuAB, uintLnYSvzx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolk9yM0Qi = await ETFXPool.new({from: accounts[4]});
		const addresshj1XXPM = accounts[4]
		const uintyTWmnc8 = BigInt("2036")
		const addressqeT5Yhm = accounts[1]
		const uintVXqNrh3 = BigInt("1934")
		const uintDwaAu2b = BigInt("1554")
		const addresseMUOSgW = accounts[3]
		const uint256SSowMoe = await ETFXPoolk9yM0Qi.balanceOf.call(addresshj1XXPM, {from: accounts[1]});
		const boolmAXuzTk = await ETFXPoolk9yM0Qi.increaseAllowance.call(addressqeT5Yhm, uintyTWmnc8, {from: accounts[0]});
		const uint256b8EedvZ = await ETFXPoolk9yM0Qi.stake.call(uintVXqNrh3, {from: accounts[3]});
		const boolEWufhbD = await ETFXPoolk9yM0Qi.approve.call(addresseMUOSgW, uintDwaAu2b, {from: accounts[0]});

		assert.equal(boolmAXuzTk, true)
		assert.equal(uint256SSowMoe, BigInt("0"))
		await expect(ETFXPoolk9yM0Qi.stake.call(uintVXqNrh3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolGHeithW = await ETFXPool.new({from: accounts[2]});
		const address8RCQaE = accounts[3]
		const addresssjDv5pn = accounts[0]
		const uintLY0SGf1 = BigInt("1626")
		const addressOo56Npj = accounts[5]
		const addressIC7GaBv = accounts[1]
		const uint256cDqo7sR = await ETFXPoolGHeithW.rewardPerToken.call({from: accounts[2]});
		const uint8XrbxPES = await ETFXPoolGHeithW.decimals.call({from: accounts[1]});
		const uint256srDTnnO = await ETFXPoolGHeithW.allowance.call(addresssjDv5pn, address8RCQaE, {from: accounts[5]});
		const string3xW8hJ = await ETFXPoolGHeithW.symbol.call({from: accounts[4]});
		const boolkCExQR9 = await ETFXPoolGHeithW.transferFrom.call(addressIC7GaBv, addressOo56Npj, uintLY0SGf1, {from: accounts[2]});
		await ETFXPoolGHeithW.exit.call({from: accounts[2]});

		assert.equal(string3xW8hJ, "FETFX")
		assert.equal(uint256cDqo7sR, BigInt("0"))
		assert.equal(uint256srDTnnO, BigInt("0"))
		assert.equal(uint8XrbxPES, BigInt("8"))
		await expect(ETFXPoolGHeithW.transferFrom.call(addressIC7GaBv, addressOo56Npj, uintLY0SGf1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolGHeithW = await ETFXPool.new({from: accounts[2]});
		const uintpYUX8KP = BigInt("1626")
		const addressSOS6Gbu = accounts[5]
		const addressV8DWZWM = accounts[1]
		const uintq8A3tMi = BigInt("214")
		const addressJH9TN6Q = "0x0000000000000000000000000000000000000001"
		const uint256cDqo7sR = await ETFXPoolGHeithW.rewardPerToken.call({from: accounts[2]});
		await ETFXPoolGHeithW.renounceOwnership.call({from: accounts[2]});
		const uint8XrbxPES = await ETFXPoolGHeithW.decimals.call({from: accounts[1]});
		const boolkCExQR9 = await ETFXPoolGHeithW.transferFrom.call(addressV8DWZWM, addressSOS6Gbu, uintpYUX8KP, {from: accounts[2]});
		await ETFXPoolGHeithW.exit.call({from: accounts[2]});
		const boolDtJR9YS = await ETFXPoolGHeithW.approve.call(addressJH9TN6Q, uintq8A3tMi, {from: accounts[4]});
		const stringts6h4CO = await ETFXPoolGHeithW.symbol.call({from: accounts[1]});

		assert.equal(uint256cDqo7sR, BigInt("0"))
		await expect(ETFXPoolGHeithW.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolGHeithW = await ETFXPool.new({from: accounts[2]});
		const uintAVOeMHW = BigInt("214")
		const addressGK55hLd = "0x0000000000000000000000000000000000000001"
		const uint256cDqo7sR = await ETFXPoolGHeithW.rewardPerToken.call({from: accounts[2]});
		const uint8XrbxPES = await ETFXPoolGHeithW.decimals.call({from: accounts[1]});
		await ETFXPoolGHeithW.exit.call({from: accounts[2]});
		const boolDtJR9YS = await ETFXPoolGHeithW.approve.call(addressGK55hLd, uintAVOeMHW, {from: accounts[4]});
		const stringts6h4CO = await ETFXPoolGHeithW.symbol.call({from: accounts[1]});
		await ETFXPoolGHeithW.exit.call({from: accounts[1]});

		assert.equal(uint256cDqo7sR, BigInt("0"))
		assert.equal(uint8XrbxPES, BigInt("8"))
		await expect(ETFXPoolGHeithW.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolGHeithW = await ETFXPool.new({from: accounts[2]});
		const uintSKth7nH = BigInt("775")
		const addresscVCOfmg = accounts[2]
		const uintnQJDSb = BigInt("1626")
		const addressfR1ytx6 = accounts[5]
		const addresspgSEccZ = accounts[1]
		const boolotBbmor = await ETFXPoolGHeithW.approve.call(addresscVCOfmg, uintSKth7nH, {from: accounts[4]});
		const uint256cDqo7sR = await ETFXPoolGHeithW.rewardPerToken.call({from: accounts[2]});
		const uint8XrbxPES = await ETFXPoolGHeithW.decimals.call({from: accounts[1]});
		const boolkCExQR9 = await ETFXPoolGHeithW.transferFrom.call(addresspgSEccZ, addressfR1ytx6, uintnQJDSb, {from: accounts[2]});
		await ETFXPoolGHeithW.exit.call({from: accounts[2]});

		assert.equal(boolotBbmor, true)
		assert.equal(uint256cDqo7sR, BigInt("0"))
		assert.equal(uint8XrbxPES, BigInt("8"))
		await expect(ETFXPoolGHeithW.transferFrom.call(addresspgSEccZ, addressfR1ytx6, uintnQJDSb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolGHeithW = await ETFXPool.new({from: accounts[2]});
		const uintfBHD2a = BigInt("1881")
		const addressobzzEvW = accounts[2]
		const addresslwnwo6R = accounts[4]
		const addressmQMcu6E = accounts[0]
		const uintq5sHsAg = BigInt("1626")
		const addressH5Arw8 = accounts[5]
		const address28owFA = accounts[1]
		const uint256cDqo7sR = await ETFXPoolGHeithW.rewardPerToken.call({from: accounts[2]});
		const uint8XrbxPES = await ETFXPoolGHeithW.decimals.call({from: accounts[1]});
		const boolnX94coO = await ETFXPoolGHeithW.decreaseAllowance.call(addressobzzEvW, uintfBHD2a, {from: accounts[5]});
		const uint256srDTnnO = await ETFXPoolGHeithW.allowance.call(addressmQMcu6E, addresslwnwo6R, {from: accounts[5]});
		const string3xW8hJ = await ETFXPoolGHeithW.symbol.call({from: accounts[4]});
		const boolkCExQR9 = await ETFXPoolGHeithW.transferFrom.call(address28owFA, addressH5Arw8, uintq5sHsAg, {from: accounts[2]});
		await ETFXPoolGHeithW.exit.call({from: accounts[2]});

		assert.equal(uint256cDqo7sR, BigInt("0"))
		assert.equal(uint8XrbxPES, BigInt("8"))
		await expect(ETFXPoolGHeithW.decreaseAllowance.call(addressobzzEvW, uintfBHD2a, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolGHeithW = await ETFXPool.new({from: accounts[2]});
		const uintRBKQUBp = BigInt("2019")
		const uintQ2X0ysg = BigInt("1626")
		const addressAkowu1W = accounts[7]
		const addressSZXUsx6 = accounts[2]
		const uint256cDqo7sR = await ETFXPoolGHeithW.rewardPerToken.call({from: accounts[2]});
		const uint256TZJLWnm = await ETFXPoolGHeithW.withdraw.call(uintRBKQUBp, {from: accounts[0]});
		const boolkCExQR9 = await ETFXPoolGHeithW.transferFrom.call(addressSZXUsx6, addressAkowu1W, uintQ2X0ysg, {from: accounts[2]});
		await ETFXPoolGHeithW.exit.call({from: accounts[2]});

		assert.equal(uint256cDqo7sR, BigInt("0"))
		await expect(ETFXPoolGHeithW.withdraw.call(uintRBKQUBp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPool0eDBSP = await ETFXPool.new({from: accounts[0]});
		const uintuVmMCK5 = BigInt("1619")
		const addressyyjbO98 = accounts[0]
		await ETFXPool0eDBSP.renounceOwnership.call({from: accounts[0]});
		const boolDeGsEU4 = await ETFXPool0eDBSP.transfer.call(addressyyjbO98, uintuVmMCK5, {from: "0x0000000000000000000000000000000000000001"});
		await ETFXPool0eDBSP.exit.call({from: accounts[2]});

		await expect(ETFXPool0eDBSP.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolQIGxzOo = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJ561xrc = BigInt("697")
		const addressMLqRJzH = accounts[1]
		const addressfpf0lIc = accounts[0]
		const uintOgQkrFB = BigInt("302")
		const addressZPwznTL = accounts[4]
		const uintMhX7Zo6 = BigInt("311")
		const uintnUXTxUz = BigInt("353")
		const boolPFfdvWY = await ETFXPoolQIGxzOo.transferFrom.call(addressfpf0lIc, addressMLqRJzH, uintJ561xrc, {from: accounts[4]});
		const bool28DXDm = await ETFXPoolQIGxzOo.approve.call(addressZPwznTL, uintOgQkrFB, {from: accounts[2]});
		const uint256p0cdGi7 = await ETFXPoolQIGxzOo.stake.call(uintMhX7Zo6, {from: accounts[3]});
		await ETFXPoolQIGxzOo.renounceOwnership.call({from: accounts[3]});
		const uint2561aK0v2 = await ETFXPoolQIGxzOo.stake.call(uintnUXTxUz, {from: accounts[5]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolGHeithW = await ETFXPool.new({from: accounts[2]});
		const uintoRdHvVF = BigInt("257")
		const addressS2RGit = "0x0000000000000000000000000000000000000001"
		const uintzliP7BR = BigInt("1626")
		const addressRfEUO6g = accounts[7]
		const addressya4b7W = accounts[1]
		const uintrWeq7hW = BigInt("297")
		const addressOLimYZi = accounts[3]
		const addressH6itIES = accounts[2]
		const uint256cDqo7sR = await ETFXPoolGHeithW.rewardPerToken.call({from: accounts[2]});
		await ETFXPoolGHeithW.getReward.call({from: accounts[3]});
		const boolpjOKaPs = await ETFXPoolGHeithW.decreaseAllowance.call(addressS2RGit, uintoRdHvVF, {from: accounts[5]});
		const boolkCExQR9 = await ETFXPoolGHeithW.transferFrom.call(addressya4b7W, addressRfEUO6g, uintzliP7BR, {from: accounts[2]});
		const boolLzizjvn = await ETFXPoolGHeithW.transferFrom.call(addressH6itIES, addressOLimYZi, uintrWeq7hW, {from: accounts[1]});

		assert.equal(uint256cDqo7sR, BigInt("0"))
		await expect(ETFXPoolGHeithW.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolGHeithW = await ETFXPool.new({from: accounts[2]});
		const uint256cDqo7sR = await ETFXPoolGHeithW.rewardPerToken.call({from: accounts[2]});
		const stringhzwhZiS = await ETFXPoolGHeithW.name.call({from: accounts[5]});
		await ETFXPoolGHeithW.exit.call({from: accounts[2]});

		assert.equal(stringhzwhZiS, "ETFX-FARM")
		assert.equal(uint256cDqo7sR, BigInt("0"))
		await expect(ETFXPoolGHeithW.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolvsBSze2 = await ETFXPool.new({from: accounts[5]});
		const addresshaNTpt6 = accounts[4]
		const addressziAL1HR = accounts[3]
		const uintBQ2pvXI = BigInt("452")
		const addresskbjMRES = accounts[4]
		const uint256kOteRbm = await ETFXPoolvsBSze2.balanceOf.call(addresshaNTpt6, {from: "0x0000000000000000000000000000000000000001"});
		const addressVHuLi0 = await ETFXPoolvsBSze2.transferOwnership.call(addressziAL1HR, {from: accounts[5]});
		const boolkJhh35K = await ETFXPoolvsBSze2.decreaseAllowance.call(addresskbjMRES, uintBQ2pvXI, {from: accounts[0]});

		assert.equal(uint256kOteRbm, BigInt("0"))
		await expect(ETFXPoolvsBSze2.decreaseAllowance.call(addresskbjMRES, uintBQ2pvXI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})