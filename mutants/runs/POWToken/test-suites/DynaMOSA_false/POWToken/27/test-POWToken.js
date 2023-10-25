const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenN3n6Nn = await POWToken.new({from: accounts[0]});
		const uintxRge5WR = BigInt("1408")
		const addressYhtxZY = accounts[1]
		const uintoqCSgrQ = BigInt("1926")
		const uint256BR1puj3 = await POWTokenN3n6Nn.getIncomeBTCInWeiPerSec.call({from: accounts[5]});
		const addressKi7J7Ku = await POWTokenN3n6Nn.claimIncome.call(addressYhtxZY, uintxRge5WR, {from: "0x0000000000000000000000000000000000000001"});
		await POWTokenN3n6Nn.onlyParamSetter.call({from: accounts[4]});
		const uint256ZtKCx3O = await POWTokenN3n6Nn.notifyRewardAmount.call(uintoqCSgrQ, {from: accounts[2]});

		await expect(POWTokenN3n6Nn.getIncomeBTCInWeiPerSec.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenoyiFAM5 = await POWToken.new({from: accounts[1]});
		const uintTFqcDO = BigInt("1164")
		const addressQTk9e4r = accounts[2]
		const addressMDdg6H9 = accounts[0]
		const addressS1hhPUs = accounts[3]
		await POWTokenoyiFAM5.whenNotPaused.call({from: accounts[2]});
		await POWTokenoyiFAM5.onlyOwner.call({from: accounts[0]});
		const boolio4uNC = await POWTokenoyiFAM5.transferFrom.call(addressMDdg6H9, addressQTk9e4r, uintTFqcDO, {from: accounts[3]});
		const addressibPSfDN = await POWTokenoyiFAM5.setBtcParam.call(addressS1hhPUs, {from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokenoyiFAM5.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenP9mjkLg = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintM5hQJpA = BigInt("1246")
		const uintCqNYZru = BigInt("68")
		const uint256JAtuhWI = await POWTokenP9mjkLg.setStartMiningTime.call(uintM5hQJpA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nTQJ1H4 = await POWTokenP9mjkLg.stakingRewardRate.call({from: accounts[0]});
		const uint256yNHaG7h = await POWTokenP9mjkLg.addHashRate.call(uintCqNYZru, {from: accounts[0]});
	});

	it('test for POWToken', async () => {
		const POWTokenj5l5TTy = await POWToken.new({from: accounts[1]});
		const addressws6m8l = accounts[0]
		const uintAAyyPz8 = BigInt("2006")
		const uint256N3Tm2wC = await POWTokenj5l5TTy.stakingRewardRate.call({from: accounts[4]});
		const addressmXbkXGg = await POWTokenj5l5TTy.setBtcParam.call(addressws6m8l, {from: accounts[0]});
		await POWTokenj5l5TTy.updateIncomeRate.call({from: accounts[4]});
		const uint256Xh0Y5Tj = await POWTokenj5l5TTy.setDepreciationNumerator.call(uintAAyyPz8, {from: accounts[3]});

		assert.equal(uint256N3Tm2wC, BigInt("0"))
		await expect(POWTokenj5l5TTy.setBtcParam.call(addressws6m8l, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenEE9FWaI = await POWToken.new({from: accounts[1]});
		const uintNBS02ny = BigInt("98")
		const uintzMp2ldQ = BigInt("574")
		const addressctZ2CeW = accounts[3]
		const uintgd2tZNx = BigInt("1208")
		const addressP5RMFH = accounts[2]
		const addresslImHeT9 = accounts[4]
		const uint256RsO33bX = await POWTokenEE9FWaI.setStakingRewardRatio.call(uintNBS02ny, {from: accounts[2]});
		const addressrjcNW2i = await POWTokenEE9FWaI.claimReward.call(addressctZ2CeW, uintzMp2ldQ, {from: accounts[5]});
		const boolMtHfRc = await POWTokenEE9FWaI.transferFrom.call(addresslImHeT9, addressP5RMFH, uintgd2tZNx, {from: accounts[1]});

		await expect(POWTokenEE9FWaI.setStakingRewardRatio.call(uintNBS02ny, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenewDyLra = await POWToken.new({from: accounts[1]});
		const uintFuR4UJ = BigInt("561")
		const addressfB3xYy = accounts[4]
		const uintZuy0tn = BigInt("67")
		const uintcQf9Aza = BigInt("67")
		const addressP2EaB6X = accounts[4]
		const addressZHumjWJ = accounts[1]
		const addressmsMM95q = accounts[4]
		const addressVhgr5N3 = await POWTokenewDyLra.mint.call(addressfB3xYy, uintFuR4UJ, {from: accounts[1]});
		const uint256cwFAAb1 = await POWTokenewDyLra.setStakingRewardRatio.call(uintZuy0tn, {from: "0x0000000000000000000000000000000000000001"});
		const bool2tLG1j = await POWTokenewDyLra.transferFrom.call(addressZHumjWJ, addressP2EaB6X, uintcQf9Aza, {from: accounts[3]});
		const uint256dujceBe = await POWTokenewDyLra.getHistoryWorkingRate.call({from: accounts[3]});
		const addresseEhv7Ff = await POWTokenewDyLra.transferOwnership.call(addressmsMM95q, {from: accounts[3]});

		await expect(POWTokenewDyLra.mint.call(addressfB3xYy, uintFuR4UJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenCVp2Ewr = await POWToken.new({from: accounts[1]});
		const uintLU11ucU = BigInt("807")
		const uintWA8y5Xw = BigInt("1244")
		const uintv5gsGV = BigInt("185")
		const uintuwIURko = BigInt("1146")
		const uintBdbI8Kt = BigInt("1774")
		const address9YTaRb = accounts[0]
		const addressdmVlTUS = accounts[4]
		const addresszLDlwhK = accounts[0]
		const addressw4konqn = accounts[1]
		const addresseY5v1ju = accounts[0]
		const addressE9xE1q = accounts[2]
		const addresskutUhJI = accounts[3]
		const addressviMms8M = accounts[0]
		const stringLWqedkw = "2b1GDOozklk3R3MJNjpJahth2qK5GLSeyYoTDt64Yzfu4XCLx2fW4E"
		const stringtudZHvv = "meY3zYoyze6uM2mDYjW8NsUsRPXIYGfB2r6ndAFtdstcAEJI7rj2LCZv"
		const uintNdXfY7 = BigInt("51")
		const uintCOjFKTm = BigInt("1711")
		const uintupFgX5M = BigInt("451")
		const uintpx9UJpN = BigInt("1285")
		const uintc3lFq7Y = BigInt("677")
		const addressRZrjYkp = accounts[3]
		const addressrGsZRPW = accounts[4]
		const addressXJADit3 = "0x0000000000000000000000000000000000000001"
		const addressmfVseJ1 = accounts[3]
		const addressezxy1DW = accounts[1]
		const addressGlWFz9F = accounts[0]
		const addresshR8B0AH = accounts[4]
		const addresswF5YoO = accounts[0]
		const stringPsa6ehs = "oazKdtJjJHN8gT53wKswXrO84w7wf0"
		const stringV1qjnnW = "246w9I2tsYhbJGkrQbSU63IY5WMgrlGPy1PCtKvA7DqgFCRKO"
		const uintFnTHc6z = BigInt("1481")
		const addressfgGgTDc = "0x0000000000000000000000000000000000000001"
		const uintksozUpW = BigInt("1240")
		const uintIGm37FL = BigInt("735")
		const addressUGFqhAr = accounts[0]
		const stringBYvcsIy = await POWTokenCVp2Ewr.initialize.call(stringtudZHvv, stringLWqedkw, addressviMms8M, addresskutUhJI, addressE9xE1q, addresseY5v1ju, addressw4konqn, addresszLDlwhK, addressdmVlTUS, address9YTaRb, uintBdbI8Kt, uintuwIURko, uintv5gsGV, uintWA8y5Xw, uintLU11ucU, {from: accounts[4]});
		const stringI6IUga4 = await POWTokenCVp2Ewr.initialize.call(stringV1qjnnW, stringPsa6ehs, addresswF5YoO, addresshR8B0AH, addressGlWFz9F, addressezxy1DW, addressmfVseJ1, addressXJADit3, addressrGsZRPW, addressRZrjYkp, uintc3lFq7Y, uintpx9UJpN, uintupFgX5M, uintCOjFKTm, uintNdXfY7, {from: accounts[1]});
		const addressOCvnv6S = await POWTokenCVp2Ewr.mint.call(addressfgGgTDc, uintFnTHc6z, {from: accounts[3]});
		const uint256JTv7uro = await POWTokenCVp2Ewr.setStartMiningTime.call(uintksozUpW, {from: accounts[2]});
		const addressKa8Gw5W = await POWTokenCVp2Ewr.claimReward.call(addressUGFqhAr, uintIGm37FL, {from: accounts[5]});

		await expect(POWTokenCVp2Ewr.initialize.call(stringtudZHvv, stringLWqedkw, addressviMms8M, addresskutUhJI, addressE9xE1q, addresseY5v1ju, addressw4konqn, addresszLDlwhK, addressdmVlTUS, address9YTaRb, uintBdbI8Kt, uintuwIURko, uintv5gsGV, uintWA8y5Xw, uintLU11ucU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken9wPfKL = await POWToken.new({from: accounts[2]});
		const uintwduBfJa = BigInt("1012")
		const addressRuRZZns = accounts[5]
		const uintLy8kj5 = BigInt("801")
		const uintcfP9bs = BigInt("481")
		const boolktvkWip = await POWToken9wPfKL.transfer.call(addressRuRZZns, uintwduBfJa, {from: "0x0000000000000000000000000000000000000001"});
		const uint256B7O8EJc = await POWToken9wPfKL.getIncomeBTCInWeiPerSec.call({from: accounts[4]});
		await POWToken9wPfKL.unpause.call({from: accounts[0]});
		const uint256PmhEaTn = await POWToken9wPfKL.setStakingRewardRatio.call(uintLy8kj5, {from: accounts[3]});
		const uint256i2hcgoK = await POWToken9wPfKL.addHashRate.call(uintcfP9bs, {from: accounts[2]});

		await expect(POWToken9wPfKL.transfer.call(addressRuRZZns, uintwduBfJa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenKRJQyhO = await POWToken.new({from: accounts[0]});
		const uintTwfpK08 = BigInt("1103")
		const addressI6pvm3x = accounts[3]
		const uintLqlkYE1 = BigInt("27")
		const addressdng0v9g = accounts[4]
		const boolb8kFgV = await POWTokenKRJQyhO.approve.call(addressI6pvm3x, uintTwfpK08, {from: accounts[2]});
		const uint256oEAmMAH = await POWTokenKRJQyhO.remainingAmount.call({from: accounts[4]});
		const addresst7ap8aZ = await POWTokenKRJQyhO.inCaseTokensGetStuck.call(addressdng0v9g, uintLqlkYE1, {from: accounts[4]});

		assert.equal(boolb8kFgV, true)
		assert.equal(uint256oEAmMAH, BigInt("0"))
		await expect(POWTokenKRJQyhO.inCaseTokensGetStuck.call(addressdng0v9g, uintLqlkYE1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenN3n6Nn = await POWToken.new({from: accounts[0]});
		const uintC2ddX8n = BigInt("1408")
		const addressxVlcIM4 = accounts[1]
		const uinty5ZRGY4 = BigInt("1929")
		const addressC6Dmn2R = accounts[5]
		const boolHmph2h7 = await POWTokenN3n6Nn.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256BR1puj3 = await POWTokenN3n6Nn.getIncomeBTCInWeiPerSec.call({from: accounts[5]});
		const addressKi7J7Ku = await POWTokenN3n6Nn.claimIncome.call(addressxVlcIM4, uintC2ddX8n, {from: "0x0000000000000000000000000000000000000001"});
		await POWTokenN3n6Nn.onlyParamSetter.call({from: accounts[4]});
		const uint256ZtKCx3O = await POWTokenN3n6Nn.notifyRewardAmount.call(uinty5ZRGY4, {from: accounts[2]});
		const addressKZdAKon = await POWTokenN3n6Nn.setParamSetter.call(addressC6Dmn2R, {from: accounts[3]});

		assert.equal(boolHmph2h7, false)
		await expect(POWTokenN3n6Nn.getIncomeBTCInWeiPerSec.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenj5l5TTy = await POWToken.new({from: accounts[1]});
		const uintkSu38P = BigInt("897")
		const uintEGDLr3 = BigInt("12")
		const uint256N3Tm2wC = await POWTokenj5l5TTy.stakingRewardRate.call({from: accounts[4]});
		await POWTokenj5l5TTy.updateIncomeRate.call({from: accounts[4]});
		const uint256f8rkOTr = await POWTokenj5l5TTy.setMinerPoolFeeNumerator.call(uintkSu38P, {from: accounts[4]});
		const uint256Xh0Y5Tj = await POWTokenj5l5TTy.setDepreciationNumerator.call(uintEGDLr3, {from: accounts[3]});

		assert.equal(uint256N3Tm2wC, BigInt("0"))
		await expect(POWTokenj5l5TTy.updateIncomeRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenTLZK26 = await POWToken.new({from: accounts[5]});
		const uintmMQcr66 = BigInt("39")
		const addressvkDSw58 = accounts[2]
		const uint256CSZc03N = await POWTokenTLZK26.remainingAmount.call({from: accounts[5]});
		const addressvRsNqB9 = await POWTokenTLZK26.claimReward.call(addressvkDSw58, uintmMQcr66, {from: accounts[2]});
		await POWTokenTLZK26.onlyOwner.call({from: accounts[4]});
		const uint256EUo7BJp = await POWTokenTLZK26.getCurWorkingRate.call({from: accounts[3]});
		await POWTokenTLZK26.updateIncomeRate.call({from: accounts[5]});

		assert.equal(uint256CSZc03N, BigInt("0"))
		await expect(POWTokenTLZK26.claimReward.call(addressvkDSw58, uintmMQcr66, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenj5l5TTy = await POWToken.new({from: accounts[1]});
		const uintEWAsUqu = BigInt("897")
		const uintTM2QUJP = BigInt("12")
		const uint256N3Tm2wC = await POWTokenj5l5TTy.stakingRewardRate.call({from: accounts[4]});
		const uint256ZClXQQh = await POWTokenj5l5TTy.lpStakingRewardRate.call({from: accounts[1]});
		await POWTokenj5l5TTy.updateIncomeRate.call({from: accounts[4]});
		const uint256f8rkOTr = await POWTokenj5l5TTy.setMinerPoolFeeNumerator.call(uintEWAsUqu, {from: accounts[4]});
		const uint256Xh0Y5Tj = await POWTokenj5l5TTy.setDepreciationNumerator.call(uintTM2QUJP, {from: accounts[3]});

		assert.equal(uint256N3Tm2wC, BigInt("0"))
		assert.equal(uint256ZClXQQh, BigInt("0"))
		await expect(POWTokenj5l5TTy.updateIncomeRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenj5l5TTy = await POWToken.new({from: accounts[1]});
		const uintbhGzgA = BigInt("1526")
		const addressWHOVL0G = accounts[5]
		const addressyulXK2f = accounts[0]
		const uintUCfYFH1 = BigInt("26")
		const uinttfKfFkz = BigInt("12")
		const uint256N3Tm2wC = await POWTokenj5l5TTy.stakingRewardRate.call({from: accounts[4]});
		const addressLfd2ucQ = await POWTokenj5l5TTy.claimIncome.call(addressWHOVL0G, uintbhGzgA, {from: accounts[0]});
		const addressmXbkXGg = await POWTokenj5l5TTy.setBtcParam.call(addressyulXK2f, {from: accounts[0]});
		await POWTokenj5l5TTy.updateIncomeRate.call({from: accounts[4]});
		const uint256f8rkOTr = await POWTokenj5l5TTy.setMinerPoolFeeNumerator.call(uintUCfYFH1, {from: accounts[4]});
		const uint256Xh0Y5Tj = await POWTokenj5l5TTy.setDepreciationNumerator.call(uinttfKfFkz, {from: accounts[3]});

		assert.equal(uint256N3Tm2wC, BigInt("0"))
		await expect(POWTokenj5l5TTy.claimIncome.call(addressWHOVL0G, uintbhGzgA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenj5l5TTy = await POWToken.new({from: accounts[1]});
		const uintad67Ce9 = BigInt("907")
		const uintzzNJwd = BigInt("12")
		const uint256N3Tm2wC = await POWTokenj5l5TTy.stakingRewardRate.call({from: accounts[4]});
		const uint256n5znQZg = await POWTokenj5l5TTy.getCurWorkingRate.call({from: accounts[5]});
		await POWTokenj5l5TTy.updateIncomeRate.call({from: accounts[4]});
		const uint256iJr54r = await POWTokenj5l5TTy.getIncomeBTCInWeiPerSec.call({from: accounts[1]});
		const uint256f8rkOTr = await POWTokenj5l5TTy.setMinerPoolFeeNumerator.call(uintad67Ce9, {from: accounts[4]});
		const uint256Xh0Y5Tj = await POWTokenj5l5TTy.setDepreciationNumerator.call(uintzzNJwd, {from: accounts[3]});

		assert.equal(uint256N3Tm2wC, BigInt("0"))
		await expect(POWTokenj5l5TTy.getCurWorkingRate.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenj5l5TTy = await POWToken.new({from: accounts[1]});
		const uintKuTSJVr = BigInt("897")
		const uintAzIoaIk = BigInt("12")
		const uint256N3Tm2wC = await POWTokenj5l5TTy.stakingRewardRate.call({from: accounts[4]});
		const uint256k49a5fm = await POWTokenj5l5TTy.getHistoryWorkingRate.call({from: accounts[3]});
		await POWTokenj5l5TTy.updateIncomeRate.call({from: accounts[4]});
		const uint256f8rkOTr = await POWTokenj5l5TTy.setMinerPoolFeeNumerator.call(uintKuTSJVr, {from: accounts[4]});
		const uint256Xh0Y5Tj = await POWTokenj5l5TTy.setDepreciationNumerator.call(uintAzIoaIk, {from: accounts[3]});

		assert.equal(uint256N3Tm2wC, BigInt("0"))
		await expect(POWTokenj5l5TTy.getHistoryWorkingRate.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenj5l5TTy = await POWToken.new({from: accounts[1]});
		const bytepOErCO = "0x170e051317020016061a0304060515120f02051707170b05061d1004130f1e0a"
		const byteQNOxCO = "0x11141a1d1a1a12051111171a1203020a091b030a0e03140807020e0f1d081420"
		const uintHzFKkwm = BigInt("125")
		const uintAVqfk03 = BigInt("1095")
		const uintpllu5Fa = BigInt("144")
		const addressUDuZEmu = accounts[0]
		const addresspKC4pAX = accounts[0]
		const uintV2ADA6a = BigInt("273")
		const addressVhr45GR = "0x0000000000000000000000000000000000000001"
		const uintwAL0reV = BigInt("850")
		const uint1m0qvh = BigInt("12")
		const addressHM7MAG2 = await POWTokenj5l5TTy.permit.call(addresspKC4pAX, addressUDuZEmu, uintpllu5Fa, uintAVqfk03, uintHzFKkwm, byteQNOxCO, bytepOErCO, {from: accounts[2]});
		const uint256N3Tm2wC = await POWTokenj5l5TTy.stakingRewardRate.call({from: accounts[4]});
		await POWTokenj5l5TTy.updateIncomeRate.call({from: accounts[4]});
		const boolfjV9GKn = await POWTokenj5l5TTy.transfer.call(addressVhr45GR, uintV2ADA6a, {from: accounts[5]});
		const uint256f8rkOTr = await POWTokenj5l5TTy.setMinerPoolFeeNumerator.call(uintwAL0reV, {from: accounts[4]});
		const uint256Xh0Y5Tj = await POWTokenj5l5TTy.setDepreciationNumerator.call(uint1m0qvh, {from: accounts[3]});

		await expect(POWTokenj5l5TTy.permit.call(addresspKC4pAX, addressUDuZEmu, uintpllu5Fa, uintAVqfk03, uintHzFKkwm, byteQNOxCO, bytepOErCO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenDUtjmc3 = await POWToken.new({from: accounts[4]});
		const uinta8Npnq6 = BigInt("1026")
		const addressM1AuXYU = accounts[5]
		const addressHOQ2zjl = accounts[5]
		const uintc9vPp0V = BigInt("599")
		const addressfPmpV0z = "0x0000000000000000000000000000000000000001"
		const addressLgzx3XE = accounts[4]
		const addressHnUZW9K = accounts[4]
		const bool3Es7oK = await POWTokenDUtjmc3.transferFrom.call(addressHOQ2zjl, addressM1AuXYU, uinta8Npnq6, {from: accounts[4]});
		const uint256X13ZHic = await POWTokenDUtjmc3.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]});
		const addressmMoG4uv = await POWTokenDUtjmc3.claimIncome.call(addressfPmpV0z, uintc9vPp0V, {from: accounts[2]});
		const addressBfxfIwl = await POWTokenDUtjmc3.setBtcParam.call(addressLgzx3XE, {from: accounts[2]});
		const addresskjKY0Mh = await POWTokenDUtjmc3.setBtcParam.call(addressHnUZW9K, {from: accounts[2]});
		await POWTokenDUtjmc3.whenNotPaused.call({from: accounts[4]});

		await expect(POWTokenDUtjmc3.transferFrom.call(addressHOQ2zjl, addressM1AuXYU, uinta8Npnq6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})