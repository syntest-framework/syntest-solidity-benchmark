const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressnjyRlC1 = accounts[2]
		const addressx9IhUD9 = accounts[4]
		const StakingDextokenobD38P = await StakingDextoken.new(addressnjyRlC1, addressx9IhUD9, {from: accounts[4]});
		const uintGY2zeS2 = BigInt("571")
		await StakingDextokenobD38P.claim.call({from: accounts[5]});
		const uintf3FgpBa = await StakingDextokenobD38P.withdraw.call(uintGY2zeS2, {from: accounts[4]});
		const uintW3pv6BH = await StakingDextokenobD38P.getStartTimestamp.call({from: accounts[3]});

		await expect(StakingDextokenobD38P.claim.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressVtjiafI = accounts[1]
		const addresszWAKEFq = accounts[3]
		const StakingDextokenrL2NyU = await StakingDextoken.new(addressVtjiafI, addresszWAKEFq, {from: accounts[4]});
		const addressKlPT6Fr = accounts[3]
		const addressalAYpcs = "0x0000000000000000000000000000000000000001"
		const uintPbMPbNk = await StakingDextokenrL2NyU.rewardPerToken.call({from: accounts[5]});
		const uint5icvWG = await StakingDextokenrL2NyU.rewardOf.call(addressKlPT6Fr, {from: accounts[0]});
		const uintNSkNW7 = await StakingDextokenrL2NyU.rewardOf.call(addressalAYpcs, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint5icvWG, BigInt("0"))
		assert.equal(uintNSkNW7, BigInt("0"))
		assert.equal(uintPbMPbNk, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressweT6PeB = "0x0000000000000000000000000000000000000001"
		const addressFhade2 = accounts[0]
		const StakingDextokenxagJ5lX = await StakingDextoken.new(addressweT6PeB, addressFhade2, {from: accounts[0]});
		const addressZUPzy3 = accounts[0]
		const uintO4lwck = BigInt("307")
		const uintFTmqiJc = await StakingDextokenxagJ5lX.getWithdrawalOf.call(addressZUPzy3, {from: accounts[0]});
		const uintRRuLQAP = await StakingDextokenxagJ5lX.withdraw.call(uintO4lwck, {from: accounts[0]});
		const uintPpAm2V = await StakingDextokenxagJ5lX.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(uintFTmqiJc, BigInt("0"))
		await expect(StakingDextokenxagJ5lX.withdraw.call(uintO4lwck, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressO8kkYi = accounts[2]
		const addressIANRumg = accounts[1]
		const StakingDextokenGdSHD67 = await StakingDextoken.new(addressO8kkYi, addressIANRumg, {from: accounts[4]});
		const addressDtH2tRG = accounts[5]
		const uintWIYOHkR = await StakingDextokenGdSHD67.getEndTimestamp.call({from: accounts[3]});
		const uintFND55f7 = await StakingDextokenGdSHD67.remainingRewards.call({from: accounts[3]});
		const uintEIWzlHn = await StakingDextokenGdSHD67.remainingRewards.call({from: accounts[2]});
		await StakingDextokenGdSHD67.notifyRewards.call({from: accounts[0]});
		const uintF53hUyU = await StakingDextokenGdSHD67.rewardOf.call(addressDtH2tRG, {from: accounts[1]});
		const uintOhXZgIv = await StakingDextokenGdSHD67.rewardPerToken.call({from: accounts[4]});

		assert.equal(uintEIWzlHn, BigInt("0"))
		assert.equal(uintFND55f7, BigInt("0"))
		assert.equal(uintWIYOHkR, BigInt("0"))
		await expect(StakingDextokenGdSHD67.notifyRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressCUAgloa = accounts[2]
		const addressVnZTV4D = accounts[0]
		const StakingDextokenaydPOQE = await StakingDextoken.new(addressCUAgloa, addressVnZTV4D, {from: accounts[1]});
		const addressHjFE43R = "0x0000000000000000000000000000000000000001"
		const address8aQHWJ = accounts[2]
		const uintt8KYOp7 = await StakingDextokenaydPOQE.rewardOf.call(addressHjFE43R, {from: accounts[2]});
		const addressTaFv2Fz = await StakingDextokenaydPOQE.setBeneficial.call(address8aQHWJ, {from: accounts[1]});
		const uintYzvHCjj = await StakingDextokenaydPOQE.totalRewards.call({from: accounts[1]});

		assert.equal(uintYzvHCjj, BigInt("0"))
		assert.equal(uintt8KYOp7, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressd8BjDwo = accounts[1]
		const addressajXhDCw = "0x0000000000000000000000000000000000000001"
		const StakingDextokenznzC3cV = await StakingDextoken.new(addressd8BjDwo, addressajXhDCw, {from: "0x0000000000000000000000000000000000000001"});
		const addressKRXw8no = accounts[2]
		const addressXDESyrb = accounts[3]
		const addressIQzu88u = await StakingDextokenznzC3cV.setBeneficial.call(addressKRXw8no, {from: accounts[1]});
		await StakingDextokenznzC3cV.claim.call({from: accounts[2]});
		const uintkp2FcX = await StakingDextokenznzC3cV.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const addressOnG8qL = await StakingDextokenznzC3cV.setBeneficial.call(addressXDESyrb, {from: accounts[3]});
		const uintINns3kO = await StakingDextokenznzC3cV.totalRewards.call({from: accounts[2]});
	});

	it('test for StakingDextoken', async () => {
		const addressPEzBqE = "0x0000000000000000000000000000000000000001"
		const addressDVKp3Zw = accounts[4]
		const StakingDextokenitGKaLn = await StakingDextoken.new(addressPEzBqE, addressDVKp3Zw, {from: accounts[1]});
		const uintTy1HSO = BigInt("1889")
		const uintgY0C58y = BigInt("244")
		const addressTbYnVyg = accounts[0]
		const addresstg7GlPv = accounts[4]
		const uintq4hpIDw = await StakingDextokenitGKaLn.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uintzGlZEL6 = await StakingDextokenitGKaLn.deposit.call(uintTy1HSO, {from: accounts[4]});
		const uintKV5APrc = await StakingDextokenitGKaLn.deposit.call(uintgY0C58y, {from: accounts[4]});
		const uintcnMUJ3 = await StakingDextokenitGKaLn.balanceOf.call(addressTbYnVyg, {from: accounts[4]});
		const addressDEd02wq = await StakingDextokenitGKaLn.updateReward.call(addresstg7GlPv, {from: accounts[5]});

		assert.equal(uintq4hpIDw, BigInt("0"))
		await expect(StakingDextokenitGKaLn.deposit.call(uintTy1HSO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressjGZJObF = accounts[2]
		const addressnsifBJg = accounts[4]
		const StakingDextokenobD38P = await StakingDextoken.new(addressjGZJObF, addressnsifBJg, {from: accounts[4]});
		const addressKUqVllW = accounts[2]
		const uintbe3Alrc = BigInt("585")
		const addressRoacmV = await StakingDextokenobD38P.updateReward.call(addressKUqVllW, {from: accounts[5]});
		await StakingDextokenobD38P.claim.call({from: accounts[5]});
		const uintYzSz7VL = await StakingDextokenobD38P.lastTimeRewardApplicable.call({from: accounts[3]});
		await StakingDextokenobD38P.claim.call({from: accounts[4]});
		const uintf3FgpBa = await StakingDextokenobD38P.withdraw.call(uintbe3Alrc, {from: accounts[4]});
		const uintW3pv6BH = await StakingDextokenobD38P.getStartTimestamp.call({from: accounts[3]});

		await expect(StakingDextokenobD38P.updateReward.call(addressKUqVllW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressHnqT3X = accounts[1]
		const addresskljysba = accounts[2]
		const StakingDextokeniw3D7Y9 = await StakingDextoken.new(addressHnqT3X, addresskljysba, {from: accounts[2]});
		const uintMREqYya = BigInt("1595")
		const uinttnPDHr1 = BigInt("853")
		const uintmCtikk = BigInt("147")
		const uintcxs17wt = BigInt("821")
		const uinte1kNIRa = await StakingDextokeniw3D7Y9.remainingRewards.call({from: accounts[4]});
		const uintgsTJe3h = await StakingDextokeniw3D7Y9.totalRewards.call({from: accounts[1]});
		const uintNi57Kwf = await StakingDextokeniw3D7Y9.setRewardRound.call(uintcxs17wt, uintmCtikk, uinttnPDHr1, uintMREqYya, {from: accounts[2]});

		assert.equal(uinte1kNIRa, BigInt("0"))
		assert.equal(uintgsTJe3h, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressxKRAAS = "0x0000000000000000000000000000000000000001"
		const addressI6jDw65 = accounts[4]
		const StakingDextokenitGKaLn = await StakingDextoken.new(addressxKRAAS, addressI6jDw65, {from: accounts[1]});
		const addressSaOOPY = accounts[2]
		const uintp1hj7pf = BigInt("1889")
		const uintbm7dbUs = BigInt("278")
		const addressaxyWNmJ = accounts[2]
		const addresssDZ2mtz = accounts[4]
		const uintq4hpIDw = await StakingDextokenitGKaLn.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const boolCuCs4B5 = await StakingDextokenitGKaLn.unfreezeAccount.call(addressSaOOPY, {from: accounts[1]});
		const uintzGlZEL6 = await StakingDextokenitGKaLn.deposit.call(uintp1hj7pf, {from: accounts[4]});
		const uintKV5APrc = await StakingDextokenitGKaLn.deposit.call(uintbm7dbUs, {from: accounts[4]});
		const uintcnMUJ3 = await StakingDextokenitGKaLn.balanceOf.call(addressaxyWNmJ, {from: accounts[4]});
		const addressDEd02wq = await StakingDextokenitGKaLn.updateReward.call(addresssDZ2mtz, {from: accounts[5]});

		assert.equal(uintq4hpIDw, BigInt("0"))
		await expect(StakingDextokenitGKaLn.unfreezeAccount.call(addressSaOOPY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressYJl3NBC = accounts[3]
		const addressxIcsAY4 = accounts[3]
		const StakingDextokenftihOcd = await StakingDextoken.new(addressYJl3NBC, addressxIcsAY4, {from: accounts[3]});
		const addressXt6NndQ = accounts[4]
		const addressq6AmhR = accounts[1]
		const addressekIBW7 = accounts[2]
		const uintQY3St8z = await StakingDextokenftihOcd.getClaimOf.call(addressXt6NndQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolLG0aDjf = await StakingDextokenftihOcd.freezeAccount.call(addressq6AmhR, {from: accounts[3]});
		const uintLaz5xxj = await StakingDextokenftihOcd.rewardOf.call(addressekIBW7, {from: accounts[4]});

		assert.equal(boolLG0aDjf, true)
		assert.equal(uintLaz5xxj, BigInt("0"))
		assert.equal(uintQY3St8z, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressk9f3wI = accounts[5]
		const addressnQzKB9 = accounts[0]
		const StakingDextokenoonOgMR = await StakingDextoken.new(addressk9f3wI, addressnQzKB9, {from: accounts[2]});
		const addressSJtxKc = accounts[1]
		const addressPD00UHi = accounts[3]
		const uintgr5U3Y = await StakingDextokenoonOgMR.getStartTimestamp.call({from: accounts[3]});
		const uinthgX2nl = await StakingDextokenoonOgMR.getWithdrawalOf.call(addressSJtxKc, {from: "0x0000000000000000000000000000000000000001"});
		const uintZ4ubTSJ = await StakingDextokenoonOgMR.rewardOf.call(addressPD00UHi, {from: accounts[4]});

		assert.equal(uintZ4ubTSJ, BigInt("0"))
		assert.equal(uintgr5U3Y, BigInt("0"))
		assert.equal(uinthgX2nl, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressAQ71OIO = "0x0000000000000000000000000000000000000001"
		const addressiWt5WZ = accounts[0]
		const StakingDextokenxagJ5lX = await StakingDextoken.new(addressAQ71OIO, addressiWt5WZ, {from: accounts[0]});
		const uintgV161zI = BigInt("284")
		const addressGq9GGdk = accounts[5]
		const uintmvhUBnJ = BigInt("307")
		const addresspmU2Iyh = await StakingDextokenxagJ5lX.capture.call(addressGq9GGdk, uintgV161zI, {from: accounts[0]});
		const uintRRuLQAP = await StakingDextokenxagJ5lX.withdraw.call(uintmvhUBnJ, {from: accounts[0]});

		await expect(StakingDextokenxagJ5lX.capture.call(addressGq9GGdk, uintgV161zI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressSa9pk7 = "0x0000000000000000000000000000000000000001"
		const addressDq0MvHP = accounts[0]
		const StakingDextokenxagJ5lX = await StakingDextoken.new(addressSa9pk7, addressDq0MvHP, {from: accounts[0]});
		const addresslLBrHvJ = accounts[2]
		const addresstUQfeMz = accounts[0]
		const uintw3EEbBL = BigInt("1806")
		const uintRL4fPIU = BigInt("642")
		const uintJWVx5oQ = BigInt("1677")
		const uintUvEjl8j = BigInt("493")
		const uintSGLeH7T = BigInt("307")
		const uintwSj78xZ = await StakingDextokenxagJ5lX.stakeOf.call(addresslLBrHvJ, {from: accounts[3]});
		const uintFTmqiJc = await StakingDextokenxagJ5lX.getWithdrawalOf.call(addresstUQfeMz, {from: accounts[0]});
		const uintO9cakyl = await StakingDextokenxagJ5lX.setRewardRound.call(uintUvEjl8j, uintJWVx5oQ, uintRL4fPIU, uintw3EEbBL, {from: "0x0000000000000000000000000000000000000001"});
		const uintI7IMUyj = await StakingDextokenxagJ5lX.rewardPerToken.call({from: accounts[5]});
		const uintRRuLQAP = await StakingDextokenxagJ5lX.withdraw.call(uintSGLeH7T, {from: accounts[0]});

		assert.equal(uintFTmqiJc, BigInt("0"))
		assert.equal(uintwSj78xZ, BigInt("0"))
		await expect(StakingDextokenxagJ5lX.setRewardRound.call(uintUvEjl8j, uintJWVx5oQ, uintRL4fPIU, uintw3EEbBL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressEeEUUem = accounts[1]
		const addressclbnnf7 = accounts[2]
		const StakingDextokenyzaGDzd = await StakingDextoken.new(addressEeEUUem, addressclbnnf7, {from: accounts[3]});
		const uintm3htsg0 = await StakingDextokenyzaGDzd.getStartTimestamp.call({from: accounts[4]});
		await StakingDextokenyzaGDzd.notifyRewards.call({from: accounts[3]});
		await StakingDextokenyzaGDzd.claim.call({from: accounts[0]});
		const uintRp0QnYR = await StakingDextokenyzaGDzd.rewardPerToken.call({from: accounts[1]});

		assert.equal(uintm3htsg0, BigInt("0"))
		await expect(StakingDextokenyzaGDzd.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresslI271J6 = accounts[1]
		const addressJ3DBzHm = accounts[2]
		const StakingDextokenyzaGDzd = await StakingDextoken.new(addresslI271J6, addressJ3DBzHm, {from: accounts[3]});
		const addressc8wI8iO = accounts[3]
		const uintbjuaacB = BigInt("1911")
		const addressk9w9NHw = accounts[2]
		const uintm3htsg0 = await StakingDextokenyzaGDzd.getStartTimestamp.call({from: accounts[4]});
		await StakingDextokenyzaGDzd.notifyRewards.call({from: accounts[3]});
		const uintvjZyCK2 = await StakingDextokenyzaGDzd.stakeOf.call(addressc8wI8iO, {from: accounts[0]});
		const uintuA8TeLW = await StakingDextokenyzaGDzd.lastTimeRewardApplicable.call({from: accounts[5]});
		const uintpxXn5E = await StakingDextokenyzaGDzd.remainingRewards.call({from: accounts[4]});
		const addressbTRsj3U = await StakingDextokenyzaGDzd.capture.call(addressk9w9NHw, uintbjuaacB, {from: accounts[3]});
		const uintjRpiBEb = await StakingDextokenyzaGDzd.getTotalStakes.call({from: accounts[0]});
		const uintRp0QnYR = await StakingDextokenyzaGDzd.rewardPerToken.call({from: accounts[1]});

		assert.equal(uintm3htsg0, BigInt("0"))
		await expect(StakingDextokenyzaGDzd.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresslYWTBni = accounts[0]
		const addressoHYmwA = accounts[2]
		const StakingDextokenMt8BOtV = await StakingDextoken.new(addresslYWTBni, addressoHYmwA, {from: accounts[5]});
		const uintRxI0vep = BigInt("569")
		const uintWgUSmZ = BigInt("642")
		const uintKSfQptN = BigInt("1777")
		const uintYcUNF0o = BigInt("460")
		const uint8FVnUx = BigInt("804")
		const uintywoM0aK = BigInt("102")
		const uintP3Iu7YI = BigInt("453")
		const uintB03V7St = BigInt("886")
		const addressHmfx1rm = accounts[1]
		const uintXaf0Mx3 = await StakingDextokenMt8BOtV.setRewardRound.call(uintYcUNF0o, uintKSfQptN, uintWgUSmZ, uintRxI0vep, {from: accounts[5]});
		await StakingDextokenMt8BOtV.notifyRewards.call({from: accounts[0]});
		const uintT7mbxjs = await StakingDextokenMt8BOtV.setRewardRound.call(uintB03V7St, uintP3Iu7YI, uintywoM0aK, uint8FVnUx, {from: accounts[2]});
		const uintGMRzKXv = await StakingDextokenMt8BOtV.stakeOf.call(addressHmfx1rm, {from: accounts[0]});

		await expect(StakingDextokenMt8BOtV.setRewardRound.call(uintYcUNF0o, uintKSfQptN, uintWgUSmZ, uintRxI0vep, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresstrdHjY2 = accounts[1]
		const addressjfKpTij = accounts[2]
		const StakingDextokenyzaGDzd = await StakingDextoken.new(addresstrdHjY2, addressjfKpTij, {from: accounts[3]});
		const uintnIzBgOZ = BigInt("1444")
		const addresspu60lKO = accounts[1]
		const addressYh6hi9B = await StakingDextokenyzaGDzd.capture.call(addresspu60lKO, uintnIzBgOZ, {from: accounts[3]});
		await StakingDextokenyzaGDzd.notifyRewards.call({from: accounts[3]});

		await expect(StakingDextokenyzaGDzd.capture.call(addresspu60lKO, uintnIzBgOZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})