const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenSbcmXrQ = await POWToken.new({from: accounts[4]});
		const uintxfkaMHt = BigInt("94")
		const uint256j4InSeA = await POWTokenSbcmXrQ.setDepreciationNumerator.call(uintxfkaMHt, {from: accounts[5]});
		const uint256L9PFO0G = await POWTokenSbcmXrQ.getHistoryWorkingRate.call({from: accounts[1]});

		await expect(POWTokenSbcmXrQ.setDepreciationNumerator.call(uintxfkaMHt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenLmzgYSf = await POWToken.new({from: accounts[3]});
		const addressnAvG1kQ = accounts[3]
		const uintMQBbXav = BigInt("839")
		const uintazmeqM = BigInt("1848")
		const uintWu2LnTa = BigInt("538")
		const uintH633SWy = BigInt("34")
		const uintYjLlGK = BigInt("137")
		const addressmgC3rFx = accounts[1]
		const addressctVaPKe = accounts[0]
		const addressgZvVaaY = accounts[4]
		const addressk0Irodb = "0x0000000000000000000000000000000000000001"
		const addressKWnsSRx = accounts[4]
		const addressgZDjtow = accounts[5]
		const addressMCtNRkF = accounts[4]
		const address8lqBDx = accounts[1]
		const stringpFF5YPP = "pRHJA0hzPN66gTQP8qlInl92U25f3y1l1XRlgJA1x3JyJbs577mHWP"
		const stringuiPF0ai = "Di6mIInyjtNjgQY1zfnOaaOxo7N5i4Vdb"
		await POWTokenLmzgYSf.unpause.call({from: accounts[0]});
		const uint256AKSjlQW = await POWTokenLmzgYSf.getHistoryWorkingRate.call({from: accounts[4]});
		const addressRh7vXJ = await POWTokenLmzgYSf.transferOwnership.call(addressnAvG1kQ, {from: accounts[2]});
		const stringOonGq3c = await POWTokenLmzgYSf.initialize.call(stringuiPF0ai, stringpFF5YPP, address8lqBDx, addressMCtNRkF, addressgZDjtow, addressKWnsSRx, addressk0Irodb, addressgZvVaaY, addressctVaPKe, addressmgC3rFx, uintYjLlGK, uintH633SWy, uintWu2LnTa, uintazmeqM, uintMQBbXav, {from: accounts[2]});

		await expect(POWTokenLmzgYSf.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenri5GNSY = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256yg7Bho4 = await POWTokenri5GNSY.remainingAmount.call({from: accounts[1]});
		await POWTokenri5GNSY.updateIncomeRate.call({from: accounts[3]});
		await POWTokenri5GNSY.unpause.call({from: accounts[1]});
		const uint256FJJsch8 = await POWTokenri5GNSY.stakingRewardRate.call({from: accounts[4]});
		const uint256xvB9M8S = await POWTokenri5GNSY.lpStakingRewardRate.call({from: accounts[1]});
	});

	it('test for POWToken', async () => {
		const POWTokengBTgjtt = await POWToken.new({from: accounts[4]});
		const uintOGPAQPR = BigInt("1779")
		const uint256hYRqQ8U = await POWTokengBTgjtt.getCurWorkingRate.call({from: accounts[2]});
		await POWTokengBTgjtt.unpause.call({from: accounts[1]});
		const uint256p5M9Esf = await POWTokengBTgjtt.getIncomeBTCInWeiPerSec.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Deudvxi = await POWTokengBTgjtt.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[3]});
		const uint256srcPj7C = await POWTokengBTgjtt.addHashRate.call(uintOGPAQPR, {from: accounts[4]});

		await expect(POWTokengBTgjtt.getCurWorkingRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenSZhWfTI = await POWToken.new({from: accounts[3]});
		const uintysFOnuV = BigInt("532")
		const uintEoTSAX = BigInt("87")
		const uinte3vCQMA = BigInt("1735")
		const uintlrEb6jK = BigInt("1287")
		const uintV0W1AUE = BigInt("93")
		const addressO3G5zC4 = accounts[0]
		const addressQ8crqRk = accounts[3]
		const addressmvtkaVF = accounts[5]
		const addressZaK0op = accounts[3]
		const addresspEdeOX = accounts[2]
		const addresst1P0tfH = accounts[2]
		const addressSgN4WQt = accounts[1]
		const addresspE3Muka = accounts[4]
		const stringD4oJfGA = "7TLL81w6S9AC7LPrcAE3vb4y23VxSzwQdYfsX6KE3AI5IufnMJdD9"
		const stringYsNM6qH = "U6RghImteMaeT1oWtl4znadLkRQVA3MdXFQrG8zY986WWiP63gi2ELsAbwSsiIANMqB7whJo1GJBE1f"
		const addressAkV1eMa = accounts[1]
		const uintXbKI5sy = BigInt("641")
		const uint8UvmNl = BigInt("95")
		const stringimPC40X = await POWTokenSZhWfTI.initialize.call(stringYsNM6qH, stringD4oJfGA, addresspE3Muka, addressSgN4WQt, addresst1P0tfH, addresspEdeOX, addressZaK0op, addressmvtkaVF, addressQ8crqRk, addressO3G5zC4, uintV0W1AUE, uintlrEb6jK, uinte3vCQMA, uintEoTSAX, uintysFOnuV, {from: accounts[4]});
		await POWTokenSZhWfTI.pause.call({from: accounts[0]});
		const uint256QBVInf8 = await POWTokenSZhWfTI.getCurWorkingRate.call({from: accounts[2]});
		const addresszXRGKO3 = await POWTokenSZhWfTI.setBtcParam.call(addressAkV1eMa, {from: accounts[4]});
		const uint256gAcWQy9 = await POWTokenSZhWfTI.addHashRate.call(uintXbKI5sy, {from: accounts[3]});
		const uint256fwCrjRn = await POWTokenSZhWfTI.setStartMiningTime.call(uint8UvmNl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenSZhWfTI.initialize.call(stringYsNM6qH, stringD4oJfGA, addresspE3Muka, addressSgN4WQt, addresst1P0tfH, addresspEdeOX, addressZaK0op, addressmvtkaVF, addressQ8crqRk, addressO3G5zC4, uintV0W1AUE, uintlrEb6jK, uinte3vCQMA, uintEoTSAX, uintysFOnuV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenUbWQfyj = await POWToken.new({from: accounts[0]});
		const uintDHQ3MCY = BigInt("1632")
		const uintHVhSPG9 = BigInt("289")
		const uintqfdz4qZ = BigInt("1292")
		const uintlvXW8hH = BigInt("2014")
		const uintvne35E2 = BigInt("1420")
		const addressxXncPJm = accounts[5]
		const addressCai5uub = accounts[4]
		const addressr1wVFaN = accounts[0]
		const addressCyotubw = accounts[2]
		const addressTDJ2XC6 = accounts[2]
		const addressO81uFxE = "0x0000000000000000000000000000000000000001"
		const addresscuW8zCc = accounts[5]
		const addressRbMnT24 = accounts[5]
		const stringNClFbjO = "9z4rjN2T4v7UR"
		const stringmHjv7nA = "ODYYgHNx8zY2udHz71bkTja4DxNioJ7DfRqBdj0kZzq7GDj4"
		const uintoLw0koH = BigInt("750")
		const addressG520aHP = "0x0000000000000000000000000000000000000001"
		await POWTokenUbWQfyj.onlyParamSetter.call({from: "0x0000000000000000000000000000000000000001"});
		const stringz0XAzNd = await POWTokenUbWQfyj.initialize.call(stringmHjv7nA, stringNClFbjO, addressRbMnT24, addresscuW8zCc, addressO81uFxE, addressTDJ2XC6, addressCyotubw, addressr1wVFaN, addressCai5uub, addressxXncPJm, uintvne35E2, uintlvXW8hH, uintqfdz4qZ, uintHVhSPG9, uintDHQ3MCY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256eD58BGv = await POWTokenUbWQfyj.getHistoryWorkingRate.call({from: accounts[2]});
		const uint256RKbheGJ = await POWTokenUbWQfyj.setMinerPoolFeeNumerator.call(uintoLw0koH, {from: accounts[4]});
		const addressXZvEJRq = await POWTokenUbWQfyj.transferOwnership.call(addressG520aHP, {from: accounts[1]});

		await expect(POWTokenUbWQfyj.onlyParamSetter.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenTsWuK7F = await POWToken.new({from: accounts[4]});
		const byteFxS9sWI = "0x0a1a05010106010e10081f1904071908140e04020c18180e1e0b1f08061f150e"
		const bytegy6dlXh = "0x010d05010a0a04020c0a100211101b10171b1a0a19060a1f1d09120217031017"
		const uintLW96r1W = BigInt("116")
		const uintFwqdS7n = BigInt("610")
		const uintr5hcdLI = BigInt("1523")
		const addressWaH14Vl = accounts[4]
		const addressmC2Rph = accounts[2]
		const addresscV3JEpe = accounts[0]
		const addresss7nbBk = "0x0000000000000000000000000000000000000001"
		const uintZW7dJHk = BigInt("827")
		const addressz2CNWMi = accounts[3]
		const uintaL0vlOP = BigInt("636")
		const addresskDC8ejx = accounts[1]
		const addressUX0IqfO = await POWTokenTsWuK7F.permit.call(addressmC2Rph, addressWaH14Vl, uintr5hcdLI, uintFwqdS7n, uintLW96r1W, bytegy6dlXh, byteFxS9sWI, {from: accounts[0]});
		const addressIp2KRoi = await POWTokenTsWuK7F.transferOwnership.call(addresscV3JEpe, {from: accounts[1]});
		const uint256Fgi8nKu = await POWTokenTsWuK7F.getCurWorkingRate.call({from: accounts[1]});
		const addressoDfRhUc = await POWTokenTsWuK7F.transferOwnership.call(addresss7nbBk, {from: accounts[1]});
		const uint256hbZHS9M = await POWTokenTsWuK7F.setElectricCharge.call(uintZW7dJHk, {from: accounts[3]});
		const addressjS3C0Sm = await POWTokenTsWuK7F.transferOwnership.call(addressz2CNWMi, {from: accounts[1]});
		const boolV30Uq3z = await POWTokenTsWuK7F.transfer.call(addresskDC8ejx, uintaL0vlOP, {from: accounts[3]});

		await expect(POWTokenTsWuK7F.permit.call(addressmC2Rph, addressWaH14Vl, uintr5hcdLI, uintFwqdS7n, uintLW96r1W, bytegy6dlXh, byteFxS9sWI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenOW4DEBs = await POWToken.new({from: accounts[2]});
		const uinteYon6F9 = BigInt("191")
		const uint256vqmJX78 = await POWTokenOW4DEBs.stakingRewardRate.call({from: accounts[1]});
		await POWTokenOW4DEBs.unpause.call({from: accounts[3]});
		await POWTokenOW4DEBs.onlyParamSetter.call({from: accounts[2]});
		const uint256sbOE3k3 = await POWTokenOW4DEBs.setStartMiningTime.call(uinteYon6F9, {from: accounts[1]});
		await POWTokenOW4DEBs.whenNotPaused.call({from: accounts[5]});

		assert.equal(uint256vqmJX78, BigInt("0"))
		await expect(POWTokenOW4DEBs.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenLmzgYSf = await POWToken.new({from: accounts[3]});
		const addressU5fLe27 = accounts[3]
		const uintqBHn9PM = BigInt("839")
		const uintq0rSIbc = BigInt("1848")
		const uinthtHLbGp = BigInt("538")
		const uintvnEWN0F = BigInt("34")
		const uintzYZDRDz = BigInt("137")
		const addressc6KH9oJ = accounts[1]
		const addressZdFNPzc = accounts[0]
		const addressAwLOEmB = accounts[4]
		const addressdsWqoQh = "0x0000000000000000000000000000000000000001"
		const addressxQaJbee = accounts[4]
		const addressC0X6fHV = accounts[5]
		const addressA48WgGQ = accounts[4]
		const addressT9PWH9 = accounts[1]
		const stringpFF5YPP = "pRHJA0hzPN66gTQP8qlInl92U25f3y1l1XRlgJA1x3JyJbs577mHWP"
		const stringuiPF0ai = "Di6mIInyjtNjgQY1zfnOaaOxo7N5i4Vdb"
		const uint256AKSjlQW = await POWTokenLmzgYSf.getHistoryWorkingRate.call({from: accounts[4]});
		const addressRh7vXJ = await POWTokenLmzgYSf.transferOwnership.call(addressU5fLe27, {from: accounts[2]});
		const stringOonGq3c = await POWTokenLmzgYSf.initialize.call(stringuiPF0ai, stringpFF5YPP, addressT9PWH9, addressA48WgGQ, addressC0X6fHV, addressxQaJbee, addressdsWqoQh, addressAwLOEmB, addressZdFNPzc, addressc6KH9oJ, uintzYZDRDz, uintvnEWN0F, uinthtHLbGp, uintq0rSIbc, uintqBHn9PM, {from: accounts[2]});

		await expect(POWTokenLmzgYSf.getHistoryWorkingRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenOW4DEBs = await POWToken.new({from: accounts[2]});
		const uintRgXvBCd = BigInt("211")
		const uint256vqmJX78 = await POWTokenOW4DEBs.stakingRewardRate.call({from: accounts[1]});
		const uint256fc7Uz2B = await POWTokenOW4DEBs.getIncomeBTCInWeiPerSec.call({from: accounts[3]});
		await POWTokenOW4DEBs.unpause.call({from: accounts[3]});
		await POWTokenOW4DEBs.onlyParamSetter.call({from: accounts[2]});
		const uint256sbOE3k3 = await POWTokenOW4DEBs.setStartMiningTime.call(uintRgXvBCd, {from: accounts[1]});
		await POWTokenOW4DEBs.whenNotPaused.call({from: accounts[5]});

		assert.equal(uint256vqmJX78, BigInt("0"))
		await expect(POWTokenOW4DEBs.getIncomeBTCInWeiPerSec.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenOW4DEBs = await POWToken.new({from: accounts[2]});
		const uint256vqmJX78 = await POWTokenOW4DEBs.stakingRewardRate.call({from: accounts[1]});
		const uint256J2kGhqn = await POWTokenOW4DEBs.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});
		const uint256HdxNXH = await POWTokenOW4DEBs.getCurWorkingRate.call({from: accounts[3]});
		await POWTokenOW4DEBs.unpause.call({from: accounts[3]});
		await POWTokenOW4DEBs.onlyParamSetter.call({from: accounts[2]});
		await POWTokenOW4DEBs.whenNotPaused.call({from: accounts[5]});

		assert.equal(uint256vqmJX78, BigInt("0"))
		await expect(POWTokenOW4DEBs.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenOW4DEBs = await POWToken.new({from: accounts[2]});
		const uintVbopHTV = BigInt("734")
		const addressKS7VWW8 = accounts[2]
		const uintr8LdIpH = BigInt("211")
		const address7iaBnh = await POWTokenOW4DEBs.mint.call(addressKS7VWW8, uintVbopHTV, {from: accounts[1]});
		const uint256vqmJX78 = await POWTokenOW4DEBs.stakingRewardRate.call({from: accounts[1]});
		const uint256fc7Uz2B = await POWTokenOW4DEBs.getIncomeBTCInWeiPerSec.call({from: accounts[3]});
		await POWTokenOW4DEBs.unpause.call({from: accounts[3]});
		await POWTokenOW4DEBs.onlyParamSetter.call({from: accounts[2]});
		const uint256sbOE3k3 = await POWTokenOW4DEBs.setStartMiningTime.call(uintr8LdIpH, {from: accounts[1]});

		await expect(POWTokenOW4DEBs.mint.call(addressKS7VWW8, uintVbopHTV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenAtQRysi = await POWToken.new({from: accounts[5]});
		const uintSKgvftZ = BigInt("752")
		const uintSNaz8Zy = BigInt("1680")
		const addressBQduYlY = accounts[0]
		const uint256UTRv5U0 = await POWTokenAtQRysi.stakingRewardRate.call({from: accounts[1]});
		const uint256invpmU2 = await POWTokenAtQRysi.lpStakingRewardRate.call({from: accounts[5]});
		const uint256rnvsWti = await POWTokenAtQRysi.setStartMiningTime.call(uintSKgvftZ, {from: accounts[2]});
		const addresss5KLeVF = await POWTokenAtQRysi.claimIncome.call(addressBQduYlY, uintSNaz8Zy, {from: accounts[5]});
		const uint256yCOecPl = await POWTokenAtQRysi.getCurWorkingRate.call({from: accounts[4]});

		assert.equal(uint256UTRv5U0, BigInt("0"))
		assert.equal(uint256invpmU2, BigInt("0"))
		await expect(POWTokenAtQRysi.setStartMiningTime.call(uintSKgvftZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenLsJNYk = await POWToken.new({from: accounts[0]});
		const addressIyJOr5b = accounts[1]
		const uint256XPu2t3d = await POWTokenLsJNYk.remainingAmount.call({from: accounts[1]});
		const addressYf6V7v5 = await POWTokenLsJNYk.setParamSetter.call(addressIyJOr5b, {from: accounts[1]});

		assert.equal(uint256XPu2t3d, BigInt("0"))
		await expect(POWTokenLsJNYk.setParamSetter.call(addressIyJOr5b, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenOW4DEBs = await POWToken.new({from: accounts[2]});
		const uintk2YXpS = BigInt("392")
		const addresstrYQXT8 = accounts[4]
		const addressZXm5O4U = accounts[5]
		const bytecBiRvir = "0x0a1e101808201c08061d1c130c01040817081d141805111f04091a0e0c000504"
		const byteL7psXd = "0x1b04121f00100b1b0f07131d051519100301071b181819121a02051005111105"
		const uintrIpRws = BigInt("253")
		const uintSLwrGfI = BigInt("2046")
		const uintAbczgf = BigInt("1489")
		const addressWO8YMxQ = accounts[0]
		const addressxs6yTxz = accounts[0]
		const uintEv30rSP = BigInt("207")
		const uintDIYWiTc = BigInt("794")
		const uint256vqmJX78 = await POWTokenOW4DEBs.stakingRewardRate.call({from: accounts[1]});
		const boolatb26Z7 = await POWTokenOW4DEBs.transferFrom.call(addressZXm5O4U, addresstrYQXT8, uintk2YXpS, {from: accounts[4]});
		const addresskjQkyIX = await POWTokenOW4DEBs.permit.call(addressxs6yTxz, addressWO8YMxQ, uintAbczgf, uintSLwrGfI, uintrIpRws, byteL7psXd, bytecBiRvir, {from: accounts[3]});
		const uint256sbOE3k3 = await POWTokenOW4DEBs.setStartMiningTime.call(uintEv30rSP, {from: accounts[1]});
		await POWTokenOW4DEBs.whenNotPaused.call({from: accounts[5]});
		const uint256rFfRVaH = await POWTokenOW4DEBs.addHashRate.call(uintDIYWiTc, {from: accounts[2]});

		assert.equal(uint256vqmJX78, BigInt("0"))
		await expect(POWTokenOW4DEBs.transferFrom.call(addressZXm5O4U, addresstrYQXT8, uintk2YXpS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken7d251Y = await POWToken.new({from: accounts[5]});
		const bool5A4DtJ = await POWToken7d251Y.paused.call({from: accounts[4]});
		await POWToken7d251Y.updateIncomeRate.call({from: "0x0000000000000000000000000000000000000001"});
		await POWToken7d251Y.pause.call({from: accounts[0]});
		await POWToken7d251Y.whenPaused.call({from: accounts[2]});
		await POWToken7d251Y.whenNotPaused.call({from: accounts[1]});

		assert.equal(bool5A4DtJ, false)
		await expect(POWToken7d251Y.updateIncomeRate.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenOW4DEBs = await POWToken.new({from: accounts[2]});
		const uintnQEdOXy = BigInt("819")
		const addresswacncuV = "0x0000000000000000000000000000000000000001"
		const addressDGN8rSP = await POWTokenOW4DEBs.claimReward.call(addresswacncuV, uintnQEdOXy, {from: accounts[3]});
		const uint256vqmJX78 = await POWTokenOW4DEBs.stakingRewardRate.call({from: accounts[1]});
		const uint256J2kGhqn = await POWTokenOW4DEBs.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});
		const uint256HdxNXH = await POWTokenOW4DEBs.getCurWorkingRate.call({from: accounts[3]});
		await POWTokenOW4DEBs.unpause.call({from: accounts[3]});
		await POWTokenOW4DEBs.onlyParamSetter.call({from: accounts[2]});
		await POWTokenOW4DEBs.whenNotPaused.call({from: accounts[5]});

		await expect(POWTokenOW4DEBs.claimReward.call(addresswacncuV, uintnQEdOXy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken7d251Y = await POWToken.new({from: accounts[5]});
		const uintOX8CKNF = BigInt("1802")
		const addressveWyfQr = accounts[2]
		const uintW6tyDoL = BigInt("1235")
		const addressanNDvqP = accounts[4]
		const boolEZ8hkft = await POWToken7d251Y.transfer.call(addressveWyfQr, uintOX8CKNF, {from: accounts[4]});
		const bool5A4DtJ = await POWToken7d251Y.paused.call({from: accounts[4]});
		await POWToken7d251Y.updateIncomeRate.call({from: "0x0000000000000000000000000000000000000001"});
		const boolBTPLS2w = await POWToken7d251Y.approve.call(addressanNDvqP, uintW6tyDoL, {from: accounts[5]});
		await POWToken7d251Y.pause.call({from: accounts[0]});
		await POWToken7d251Y.whenPaused.call({from: accounts[2]});
		await POWToken7d251Y.whenNotPaused.call({from: accounts[1]});

		await expect(POWToken7d251Y.transfer.call(addressveWyfQr, uintOX8CKNF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenL1jVU3G = await POWToken.new({from: accounts[0]});
		const uintDHSBHk5 = BigInt("701")
		const addressZpDSAvd = accounts[3]
		const uintYwt8D9Q = BigInt("639")
		const uintVneQ8Ax = BigInt("1245")
		const uintzhyA6nT = BigInt("1869")
		const uintqq81850 = BigInt("72")
		const addressQm7SK6 = accounts[1]
		const addressemByIAj = await POWTokenL1jVU3G.claimIncome.call(addressZpDSAvd, uintDHSBHk5, {from: accounts[3]});
		const uint256uRTpCnX = await POWTokenL1jVU3G.setStakingRewardRatio.call(uintYwt8D9Q, {from: accounts[5]});
		const uint256pPszIAu = await POWTokenL1jVU3G.setStakingRewardRatio.call(uintVneQ8Ax, {from: accounts[2]});
		const uint256Ub2JNaW = await POWTokenL1jVU3G.setStartMiningTime.call(uintzhyA6nT, {from: accounts[4]});
		const uint256Tr6Ej2r = await POWTokenL1jVU3G.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[4]});
		const addressc44ky4I = await POWTokenL1jVU3G.claimReward.call(addressQm7SK6, uintqq81850, {from: accounts[3]});

		await expect(POWTokenL1jVU3G.claimIncome.call(addressZpDSAvd, uintDHSBHk5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenOW4DEBs = await POWToken.new({from: accounts[2]});
		const uintmpGbdV7 = BigInt("847")
		const addressotgkaDn = accounts[3]
		const boolrPkMXL8 = await POWTokenOW4DEBs.approve.call(addressotgkaDn, uintmpGbdV7, {from: accounts[1]});
		const uint256vqmJX78 = await POWTokenOW4DEBs.stakingRewardRate.call({from: accounts[1]});
		const uint256ODnnbRF = await POWTokenOW4DEBs.getCurWorkingRate.call({from: accounts[2]});
		const uint256J2kGhqn = await POWTokenOW4DEBs.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});
		const uint256HdxNXH = await POWTokenOW4DEBs.getCurWorkingRate.call({from: accounts[3]});
		await POWTokenOW4DEBs.unpause.call({from: accounts[3]});
		await POWTokenOW4DEBs.onlyParamSetter.call({from: accounts[2]});
		await POWTokenOW4DEBs.whenNotPaused.call({from: accounts[5]});

		assert.equal(boolrPkMXL8, true)
		assert.equal(uint256vqmJX78, BigInt("0"))
		await expect(POWTokenOW4DEBs.getCurWorkingRate.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})