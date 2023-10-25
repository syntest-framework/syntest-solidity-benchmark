const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPools61nKCt = await ETFXPool.new({from: accounts[5]});
		const uintR0tjCh = BigInt("1266")
		const uintV3Z3pq8 = BigInt("991")
		const addresswcYb6er = accounts[0]
		const uintc5WN2T = BigInt("1084")
		const addressxB0q5MQ = accounts[3]
		const addressBemvAQw = accounts[0]
		const addresstFdazZb = accounts[0]
		const addresszUD6FBk = accounts[0]
		const uint256s1IzGxr = await ETFXPools61nKCt.withdraw.call(uintR0tjCh, {from: accounts[3]});
		const boolHDrLYcr = await ETFXPools61nKCt.decreaseAllowance.call(addresswcYb6er, uintV3Z3pq8, {from: "0x0000000000000000000000000000000000000001"});
		const booldLLAUU8 = await ETFXPools61nKCt.approve.call(addressxB0q5MQ, uintc5WN2T, {from: accounts[3]});
		const uint256OAbIl7 = await ETFXPools61nKCt.earned.call(addressBemvAQw, {from: accounts[5]});
		const uint256Tnrejx9 = await ETFXPools61nKCt.rewardPerToken.call({from: accounts[0]});
		const uint256D0xSimi = await ETFXPools61nKCt.allowance.call(addresszUD6FBk, addresstFdazZb, {from: accounts[2]});

		await expect(ETFXPools61nKCt.withdraw.call(uintR0tjCh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolPA1ljXv = await ETFXPool.new({from: accounts[0]});
		const addressZIBMVEp = accounts[4]
		await ETFXPoolPA1ljXv.nonReentrant.call({from: accounts[2]});
		const address15gjeG = await ETFXPoolPA1ljXv.transferOwnership.call(addressZIBMVEp, {from: accounts[3]});
		const uint256bCg7umK = await ETFXPoolPA1ljXv.totalSupply.call({from: accounts[1]});
		const addressfo26ksr = await ETFXPoolPA1ljXv.owner.call({from: accounts[5]});
		const stringqlVxbSS = await ETFXPoolPA1ljXv.symbol.call({from: accounts[4]});

		await expect(ETFXPoolPA1ljXv.nonReentrant.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringXdaaiDt = "Rup7R4sV6VpSHF6pXjUee7StIHjnvDMXckDF9lEK44Op4wbnSN263K"
		const stringLaX1DwJ = "SPV6SX8mNnBOgf5hRmtv2ltaKp6mu9yqfL16nUl1V7SLv76qLYq2bFBNzAnmc5zvXRs"
		const uintWnCL77 = BigInt("100")
		const ETFXPooljlbWMKE = await ETFXPool.new(stringXdaaiDt, stringLaX1DwJ, uintWnCL77, {from: accounts[1]});
		const uintKUbpuN4 = BigInt("727")
		const addressI6kaXy3 = accounts[3]
		const uintDbWEujE = BigInt("1985")
		await ETFXPooljlbWMKE.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const boolpqndcK4 = await ETFXPooljlbWMKE.decreaseAllowance.call(addressI6kaXy3, uintKUbpuN4, {from: "0x0000000000000000000000000000000000000001"});
		const uint256sFDYw4 = await ETFXPooljlbWMKE.withdraw.call(uintDbWEujE, {from: accounts[1]});
		await ETFXPooljlbWMKE.getReward.call({from: accounts[0]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPooljqF9HJ = await ETFXPool.new({from: accounts[2]});
		const addressKJPbvwu = await ETFXPooljqF9HJ.owner.call({from: accounts[3]});
		const uint2568D70Ra = await ETFXPooljqF9HJ.rewardPerToken.call({from: accounts[4]});

		assert.equal(addressKJPbvwu, 0xB4641F55f8c312E5345E3c926d278C64Db39CBDb)
		assert.equal(uint2568D70Ra, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolPhqQhMs = await ETFXPool.new({from: accounts[3]});
		const addressPpKXwlZ = accounts[2]
		const uint8yI92ZBR = await ETFXPoolPhqQhMs.decimals.call({from: accounts[3]});
		const addressdMyg9UD = await ETFXPoolPhqQhMs.owner.call({from: accounts[4]});
		const uint256TSAbbs = await ETFXPoolPhqQhMs.balanceOf.call(addressPpKXwlZ, {from: accounts[4]});

		assert.equal(addressdMyg9UD, 0xb0FBef08a420544c421ab2f1E75a2cdfc225b6C4)
		assert.equal(uint256TSAbbs, BigInt("0"))
		assert.equal(uint8yI92ZBR, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolMJ07P51 = await ETFXPool.new({from: accounts[5]});
		const uintQ5JePks = BigInt("1026")
		const addressd2iq2tw = accounts[2]
		const uintsMz3ysp = BigInt("1210")
		const addressXA0k6rR = accounts[5]
		const addressrP6i5rp = accounts[0]
		const stringq2IwklL = await ETFXPoolMJ07P51.symbol.call({from: accounts[2]});
		const boolsFekJYl = await ETFXPoolMJ07P51.transfer.call(addressd2iq2tw, uintQ5JePks, {from: accounts[0]});
		const boolr1sTlxO = await ETFXPoolMJ07P51.transferFrom.call(addressrP6i5rp, addressXA0k6rR, uintsMz3ysp, {from: accounts[2]});

		assert.equal(stringq2IwklL, "FETFX")
		await expect(ETFXPoolMJ07P51.transfer.call(addressd2iq2tw, uintQ5JePks, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolQIRkn3O = await ETFXPool.new({from: accounts[4]});
		const addressA9TycmE = accounts[3]
		const addresskh645Ps = accounts[3]
		const uintlNAfazv = BigInt("934")
		await ETFXPoolQIRkn3O.renounceOwnership.call({from: accounts[5]});
		const uint256XroP2dh = await ETFXPoolQIRkn3O.allowance.call(addresskh645Ps, addressA9TycmE, {from: accounts[0]});
		const uint256T7q5oKM = await ETFXPoolQIRkn3O.stake.call(uintlNAfazv, {from: accounts[0]});

		await expect(ETFXPoolQIRkn3O.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooljqF9HJ = await ETFXPool.new({from: accounts[2]});
		const addressKJPbvwu = await ETFXPooljqF9HJ.owner.call({from: accounts[3]});
		const stringRlMuEAn = await ETFXPooljqF9HJ.symbol.call({from: accounts[3]});
		await ETFXPooljqF9HJ.exit.call({from: accounts[0]});
		const uint2568D70Ra = await ETFXPooljqF9HJ.rewardPerToken.call({from: accounts[4]});

		assert.equal(addressKJPbvwu, 0xB4641F55f8c312E5345E3c926d278C64Db39CBDb)
		assert.equal(stringRlMuEAn, "FETFX")
		await expect(ETFXPooljqF9HJ.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooljqF9HJ = await ETFXPool.new({from: accounts[2]});
		const uintYQ2pt3q = BigInt("497")
		const addressfNgV4eg = accounts[0]
		const booltpmvxp5 = await ETFXPooljqF9HJ.approve.call(addressfNgV4eg, uintYQ2pt3q, {from: accounts[0]});
		const addressKJPbvwu = await ETFXPooljqF9HJ.owner.call({from: accounts[3]});
		const uint2568D70Ra = await ETFXPooljqF9HJ.rewardPerToken.call({from: accounts[4]});

		assert.equal(addressKJPbvwu, 0xB4641F55f8c312E5345E3c926d278C64Db39CBDb)
		assert.equal(booltpmvxp5, true)
		assert.equal(uint2568D70Ra, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolEzySm4i = await ETFXPool.new({from: accounts[4]});
		const addressckqdkk = "0x0000000000000000000000000000000000000001"
		const addressnzyaRfa = accounts[0]
		const uintGpWOG5N = BigInt("1455")
		const uint256dn0TEkp = await ETFXPoolEzySm4i.allowance.call(addressnzyaRfa, addressckqdkk, {from: accounts[5]});
		const uint256WdEIflW = await ETFXPoolEzySm4i.withdraw.call(uintGpWOG5N, {from: accounts[0]});

		assert.equal(uint256dn0TEkp, BigInt("0"))
		await expect(ETFXPoolEzySm4i.withdraw.call(uintGpWOG5N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooljqF9HJ = await ETFXPool.new({from: accounts[2]});
		const addressJ5GVmvr = accounts[0]
		await ETFXPooljqF9HJ.renounceOwnership.call({from: accounts[2]});
		const uint2568D70Ra = await ETFXPooljqF9HJ.rewardPerToken.call({from: accounts[4]});
		const addressntZX5u = await ETFXPooljqF9HJ.transferOwnership.call(addressJ5GVmvr, {from: accounts[0]});

		await expect(ETFXPooljqF9HJ.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooljqF9HJ = await ETFXPool.new({from: accounts[2]});
		const uintG4XEYAO = BigInt("96")
		const addresslvnnWet = accounts[3]
		const uint2568D70Ra = await ETFXPooljqF9HJ.rewardPerToken.call({from: accounts[4]});
		const booltzSa9Bm = await ETFXPooljqF9HJ.decreaseAllowance.call(addresslvnnWet, uintG4XEYAO, {from: "0x0000000000000000000000000000000000000001"});
		await ETFXPooljqF9HJ.onlyOwner.call({from: accounts[3]});

		assert.equal(uint2568D70Ra, BigInt("0"))
		await expect(ETFXPooljqF9HJ.decreaseAllowance.call(addresslvnnWet, uintG4XEYAO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooljqF9HJ = await ETFXPool.new({from: accounts[2]});
		const uintxI25nEw = BigInt("1744")
		const addressg0jf8Su = accounts[1]
		const uint8lWO0xKX = await ETFXPooljqF9HJ.decimals.call({from: accounts[3]});
		const uint2568D70Ra = await ETFXPooljqF9HJ.rewardPerToken.call({from: accounts[4]});
		const boolKK2N8e2 = await ETFXPooljqF9HJ.increaseAllowance.call(addressg0jf8Su, uintxI25nEw, {from: accounts[1]});

		assert.equal(boolKK2N8e2, true)
		assert.equal(uint2568D70Ra, BigInt("0"))
		assert.equal(uint8lWO0xKX, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolyCvF4ZP = await ETFXPool.new({from: accounts[1]});
		const addressI5QQmrZ = accounts[4]
		const uintPQnxMo7 = BigInt("1322")
		const uint256Jf99LjL = await ETFXPoolyCvF4ZP.balanceOf.call(addressI5QQmrZ, {from: accounts[1]});
		const uint256C8ytg0n = await ETFXPoolyCvF4ZP.stake.call(uintPQnxMo7, {from: accounts[3]});
		await ETFXPoolyCvF4ZP.renounceOwnership.call({from: accounts[4]});
		await ETFXPoolyCvF4ZP.exit.call({from: accounts[4]});
		const stringhkb72TK = await ETFXPoolyCvF4ZP.symbol.call({from: accounts[1]});

		assert.equal(uint256Jf99LjL, BigInt("0"))
		await expect(ETFXPoolyCvF4ZP.stake.call(uintPQnxMo7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooljqF9HJ = await ETFXPool.new({from: accounts[2]});
		const addresssi0GJY1 = accounts[3]
		const uint2568D70Ra = await ETFXPooljqF9HJ.rewardPerToken.call({from: accounts[4]});
		await ETFXPooljqF9HJ.getReward.call({from: accounts[3]});
		const addressQLQOKMP = await ETFXPooljqF9HJ.transferOwnership.call(addresssi0GJY1, {from: accounts[5]});

		assert.equal(uint2568D70Ra, BigInt("0"))
		await expect(ETFXPooljqF9HJ.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooljqF9HJ = await ETFXPool.new({from: accounts[2]});
		const uintAydAcMy = BigInt("249")
		const addressEB37bX = "0x0000000000000000000000000000000000000001"
		const addressPIin27r = accounts[4]
		const uintaIigfyd = BigInt("1070")
		const addressJwPFZj = accounts[1]
		const boolxSvxeCR = await ETFXPooljqF9HJ.transferFrom.call(addressPIin27r, addressEB37bX, uintAydAcMy, {from: accounts[1]});
		const uint2568D70Ra = await ETFXPooljqF9HJ.rewardPerToken.call({from: accounts[4]});
		const booldDfmGBv = await ETFXPooljqF9HJ.transfer.call(addressJwPFZj, uintaIigfyd, {from: accounts[4]});

		await expect(ETFXPooljqF9HJ.transferFrom.call(addressPIin27r, addressEB37bX, uintAydAcMy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooljqF9HJ = await ETFXPool.new({from: accounts[2]});
		const stringnRstZr9 = await ETFXPooljqF9HJ.name.call({from: accounts[1]});
		const uint2568D70Ra = await ETFXPooljqF9HJ.rewardPerToken.call({from: accounts[4]});

		assert.equal(stringnRstZr9, "ETFX-FARM")
		assert.equal(uint2568D70Ra, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPooljqF9HJ = await ETFXPool.new({from: accounts[2]});
		const addressDkPrsLm = accounts[2]
		const uint2568D70Ra = await ETFXPooljqF9HJ.rewardPerToken.call({from: accounts[4]});
		const addresskg5S8Vq = await ETFXPooljqF9HJ.transferOwnership.call(addressDkPrsLm, {from: accounts[2]});

		assert.equal(uint2568D70Ra, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTBGjxLC = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQvngzmG = BigInt("745")
		const addressKl4OGNU = accounts[4]
		const uintqVgmtiM = BigInt("1543")
		const addressZ9s83I = accounts[4]
		const addresslSeoDz7 = accounts[0]
		const boolKtcsaOz = await ETFXPoolTBGjxLC.approve.call(addressKl4OGNU, uintQvngzmG, {from: accounts[2]});
		const uint256mvEf1Oo = await ETFXPoolTBGjxLC.totalSupply.call({from: accounts[0]});
		const booldAxRwGt = await ETFXPoolTBGjxLC.transfer.call(addressZ9s83I, uintqVgmtiM, {from: accounts[4]});
		const addressirecqFb = await ETFXPoolTBGjxLC.transferOwnership.call(addresslSeoDz7, {from: accounts[0]});
	});
})