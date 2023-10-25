const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokentxEg0aX = await POWToken.new({from: accounts[0]});
		const uintp2k8McZ = BigInt("1842")
		const addressW825tE = accounts[4]
		const uint256XvsbXp = await POWTokentxEg0aX.lpStakingRewardRate.call({from: accounts[5]});
		const uint256lkpMF9b = await POWTokentxEg0aX.getIncomeBTCInWeiPerSec.call({from: accounts[0]});
		const addressBwHDB5 = await POWTokentxEg0aX.inCaseTokensGetStuck.call(addressW825tE, uintp2k8McZ, {from: accounts[0]});
		await POWTokentxEg0aX.whenPaused.call({from: accounts[4]});
		const uint256jLXUNIl = await POWTokentxEg0aX.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});

		assert.equal(uint256XvsbXp, BigInt("0"))
		await expect(POWTokentxEg0aX.getIncomeBTCInWeiPerSec.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenvkX9NxS = await POWToken.new({from: accounts[5]});
		const uintFU6b7yI = BigInt("1153")
		const addressVo5Upkn = accounts[1]
		const uintG1XFHhD = BigInt("1667")
		const addressIhRtYox = accounts[3]
		const addresszXic3At = await POWTokenvkX9NxS.mint.call(addressVo5Upkn, uintFU6b7yI, {from: accounts[1]});
		const addressOwc2IKN = await POWTokenvkX9NxS.mint.call(addressIhRtYox, uintG1XFHhD, {from: accounts[2]});
		await POWTokenvkX9NxS.onlyOwner.call({from: accounts[1]});

		await expect(POWTokenvkX9NxS.mint.call(addressVo5Upkn, uintFU6b7yI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokensQoMAje = await POWToken.new({from: accounts[1]});
		const uintUH8nN39 = BigInt("1377")
		const uintY00MdjT = BigInt("799")
		const uintGx5vmPA = BigInt("747")
		const addressDsVW2i = accounts[2]
		const uinteG5oEuX = BigInt("1652")
		const address8fqCAS = accounts[1]
		const addressuNxEECG = accounts[0]
		const uintEc0ab9 = BigInt("227")
		const uint256aZvGVxz = await POWTokensQoMAje.remainingAmount.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256veZV1sG = await POWTokensQoMAje.setElectricCharge.call(uintUH8nN39, {from: accounts[4]});
		const uint256ZgEKIJY = await POWTokensQoMAje.addHashRate.call(uintY00MdjT, {from: accounts[1]});
		const addressz39eiQs = await POWTokensQoMAje.claimReward.call(addressDsVW2i, uintGx5vmPA, {from: accounts[4]});
		const booliBwQbyh = await POWTokensQoMAje.transferFrom.call(addressuNxEECG, address8fqCAS, uinteG5oEuX, {from: accounts[0]});
		const uint256jULoJdU = await POWTokensQoMAje.notifyRewardAmount.call(uintEc0ab9, {from: accounts[3]});

		assert.equal(uint256aZvGVxz, BigInt("0"))
		await expect(POWTokensQoMAje.setElectricCharge.call(uintUH8nN39, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQC5mjP = await POWToken.new({from: accounts[1]});
		const addressaBiElTe = accounts[3]
		const addressz2iVp6p = accounts[2]
		const addressZ16xesK = accounts[5]
		const addressSuVpWGC = await POWTokenQC5mjP.setParamSetter.call(addressaBiElTe, {from: accounts[0]});
		const addressGqLQL1w = await POWTokenQC5mjP.setBtcParam.call(addressz2iVp6p, {from: accounts[5]});
		const uint256vwf5Kkf = await POWTokenQC5mjP.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[4]});
		const addressLHy8yHf = await POWTokenQC5mjP.setBtcParam.call(addressZ16xesK, {from: accounts[3]});

		await expect(POWTokenQC5mjP.setParamSetter.call(addressaBiElTe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenFONEt06 = await POWToken.new({from: accounts[2]});
		const uintZyllsmD = BigInt("361")
		const uintyafOFJ6 = BigInt("1543")
		const addressAu3Buq = accounts[1]
		await POWTokenFONEt06.whenNotPaused.call({from: accounts[5]});
		const uint256iac8RuH = await POWTokenFONEt06.setStakingRewardRatio.call(uintZyllsmD, {from: accounts[4]});
		const addressDJIY36J = await POWTokenFONEt06.claimReward.call(addressAu3Buq, uintyafOFJ6, {from: accounts[1]});

		await expect(POWTokenFONEt06.whenNotPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenoiSgFkY = await POWToken.new({from: accounts[5]});
		const uintFLgJjUt = BigInt("826")
		const addresseEqyDx5 = accounts[0]
		const uintG63Hnt = BigInt("850")
		const addressaax0tcW = accounts[3]
		const addressGxqZfhk = await POWTokenoiSgFkY.claimReward.call(addresseEqyDx5, uintFLgJjUt, {from: accounts[3]});
		const addresszLihXV = await POWTokenoiSgFkY.claimReward.call(addressaax0tcW, uintG63Hnt, {from: accounts[2]});
		await POWTokenoiSgFkY.updateIncomeRate.call({from: accounts[1]});
		const uint256xX2hKbv = await POWTokenoiSgFkY.remainingAmount.call({from: accounts[2]});
		const uint256bxyqvC8 = await POWTokenoiSgFkY.getCurWorkingRate.call({from: accounts[3]});

		await expect(POWTokenoiSgFkY.claimReward.call(addresseEqyDx5, uintFLgJjUt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokens4bQuyi = await POWToken.new({from: accounts[5]});
		const uintDOWGIgZ = BigInt("685")
		const addressJrTSXbs = accounts[4]
		const uinthopx0PV = BigInt("1239")
		const addresss60josi = accounts[1]
		const booles5jb25 = await POWTokens4bQuyi.approve.call(addressJrTSXbs, uintDOWGIgZ, {from: accounts[5]});
		const uint256dFzuVFV = await POWTokens4bQuyi.setWorkingHashRate.call(uinthopx0PV, {from: accounts[4]});
		const addressYCWljsn = await POWTokens4bQuyi.setParamSetter.call(addresss60josi, {from: accounts[4]});

		assert.equal(booles5jb25, true)
		await expect(POWTokens4bQuyi.setWorkingHashRate.call(uinthopx0PV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenYdfADfE = await POWToken.new({from: accounts[4]});
		const addressUQpwKyM = accounts[2]
		const addressi0eJ6Z = accounts[1]
		const uintI3edmXn = BigInt("680")
		const addressF3M4aQU = accounts[1]
		const uint256ZFIoxg = await POWTokenYdfADfE.getHistoryWorkingRate.call({from: "0x0000000000000000000000000000000000000001"});
		const addressqC2mJ8e = await POWTokenYdfADfE.transferOwnership.call(addressUQpwKyM, {from: "0x0000000000000000000000000000000000000001"});
		await POWTokenYdfADfE.unpause.call({from: accounts[0]});
		const addressO1FHMIq = await POWTokenYdfADfE.setParamSetter.call(addressi0eJ6Z, {from: accounts[4]});
		const addressVRKQ6la = await POWTokenYdfADfE.inCaseTokensGetStuck.call(addressF3M4aQU, uintI3edmXn, {from: accounts[4]});

		await expect(POWTokenYdfADfE.getHistoryWorkingRate.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenHQzipd = await POWToken.new({from: accounts[1]});
		const uintuKPTcBB = BigInt("850")
		const addressrm7SfIC = accounts[2]
		const uinteM0q8oW = BigInt("1527")
		const addressQtBIsaE = await POWTokenHQzipd.claimIncome.call(addressrm7SfIC, uintuKPTcBB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Hs8cQz = await POWTokenHQzipd.notifyRewardAmount.call(uinteM0q8oW, {from: accounts[4]});
		const uint256hGc9e5T = await POWTokenHQzipd.getHistoryWorkingRate.call({from: accounts[2]});

		await expect(POWTokenHQzipd.claimIncome.call(addressrm7SfIC, uintuKPTcBB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenBMADWNg = await POWToken.new({from: accounts[4]});
		const uintokkxgOV = BigInt("540")
		const addresseYFpMvN = accounts[3]
		const uint202Ous = BigInt("1204")
		const addressQ1OZRHN = accounts[2]
		const uintEjxek8q = BigInt("1584")
		const addressV20EjLN = accounts[2]
		const uintCkDvB1 = BigInt("445")
		const boolsl7Hasi = await POWTokenBMADWNg.approve.call(addresseYFpMvN, uintokkxgOV, {from: accounts[0]});
		const boolzEEJfdx = await POWTokenBMADWNg.transfer.call(addressQ1OZRHN, uint202Ous, {from: accounts[4]});
		const addressIlhTpuA = await POWTokenBMADWNg.claimIncome.call(addressV20EjLN, uintEjxek8q, {from: accounts[0]});
		const uint256jXCN5jW = await POWTokenBMADWNg.notifyRewardAmount.call(uintCkDvB1, {from: accounts[3]});

		assert.equal(boolsl7Hasi, true)
		await expect(POWTokenBMADWNg.transfer.call(addressQ1OZRHN, uint202Ous, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenDa2YZGa = await POWToken.new({from: accounts[1]});
		const uintzirzrNn = BigInt("1334")
		const uint256KIq4BH6 = await POWTokenDa2YZGa.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});
		const uint256JoImiKd = await POWTokenDa2YZGa.notifyRewardAmount.call(uintzirzrNn, {from: accounts[1]});
		const uint256eaBfqML = await POWTokenDa2YZGa.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});
		await POWTokenDa2YZGa.onlyOwner.call({from: accounts[3]});

		await expect(POWTokenDa2YZGa.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokentxEg0aX = await POWToken.new({from: accounts[0]});
		const uintwE0CeU8 = BigInt("533")
		const uintV2HXkfO = BigInt("808")
		const uintQGMggSh = BigInt("201")
		const uintNbWGAX0 = BigInt("1329")
		const uintAhJjcEf = BigInt("1770")
		const addressU7QPj73 = accounts[3]
		const addressEk7lwt9 = accounts[2]
		const addresszwQ6bKg = accounts[0]
		const address3BX9qm = accounts[0]
		const addressLujtW6U = accounts[0]
		const addresszB7yZ3Q = accounts[0]
		const addressMKwDXq = accounts[4]
		const addressN4Y2u8o = accounts[4]
		const stringek84bZ5 = "hxr6OO2HsmMyvwSikPJ8JIFK4Acpj3ATRwyriSnqJm"
		const stringtCwcg9H = "BtYuv1NYrxGqLc6VWKc1UQO"
		const uintfFkzQgL = BigInt("1873")
		const addresskmKrKBy = accounts[4]
		const bytejSwSZkJ = "0x0b10130c1e0e0f151d091b001d1a1218051b050d050c140c0e090d0b06071a09"
		const byteY32algb = "0x1f0c0c16071000141a2007181f0d1b112005060e1d160e04010312040e05190a"
		const uintyLcLIeI = BigInt("78")
		const uintz1ChtLV = BigInt("886")
		const uintsy0ismV = BigInt("1505")
		const addressXgMhjLo = accounts[4]
		const addressLuRHRvH = accounts[3]
		const uint256XvsbXp = await POWTokentxEg0aX.lpStakingRewardRate.call({from: accounts[5]});
		const stringyv4aF1W = await POWTokentxEg0aX.initialize.call(stringtCwcg9H, stringek84bZ5, addressN4Y2u8o, addressMKwDXq, addresszB7yZ3Q, addressLujtW6U, address3BX9qm, addresszwQ6bKg, addressEk7lwt9, addressU7QPj73, uintAhJjcEf, uintNbWGAX0, uintQGMggSh, uintV2HXkfO, uintwE0CeU8, {from: accounts[4]});
		const addressBwHDB5 = await POWTokentxEg0aX.inCaseTokensGetStuck.call(addresskmKrKBy, uintfFkzQgL, {from: accounts[0]});
		const addressqbQATh = await POWTokentxEg0aX.permit.call(addressLuRHRvH, addressXgMhjLo, uintsy0ismV, uintz1ChtLV, uintyLcLIeI, byteY32algb, bytejSwSZkJ, {from: accounts[4]});
		const uint256jLXUNIl = await POWTokentxEg0aX.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[1]});

		assert.equal(uint256XvsbXp, BigInt("0"))
		await expect(POWTokentxEg0aX.initialize.call(stringtCwcg9H, stringek84bZ5, addressN4Y2u8o, addressMKwDXq, addresszB7yZ3Q, addressLujtW6U, address3BX9qm, addresszwQ6bKg, addressEk7lwt9, addressU7QPj73, uintAhJjcEf, uintNbWGAX0, uintQGMggSh, uintV2HXkfO, uintwE0CeU8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokentzSxfYQ = await POWToken.new({from: accounts[2]});
		const bytebgxnDFj = "0x1607111e0305170a1c090c0b021b1e021d1e110d1b09100f191e1c180c1a0f1b"
		const byteaEBLVpG = "0x021503000e07051b1e091d1400010a1617081d021c010f08180406170c0a0211"
		const uintBvqFTUd = BigInt("22")
		const uintn8xeQ5X = BigInt("1116")
		const uintL943cKY = BigInt("2009")
		const addressvTYGhQY = accounts[1]
		const addresspHUmn3C = accounts[1]
		const addressYle1ir = accounts[3]
		const addressULI6u8D = await POWTokentzSxfYQ.permit.call(addresspHUmn3C, addressvTYGhQY, uintL943cKY, uintn8xeQ5X, uintBvqFTUd, byteaEBLVpG, bytebgxnDFj, {from: accounts[0]});
		const addresscwPjJ65 = await POWTokentzSxfYQ.setParamSetter.call(addressYle1ir, {from: accounts[0]});
		await POWTokentzSxfYQ.pause.call({from: accounts[2]});

		await expect(POWTokentzSxfYQ.permit.call(addresspHUmn3C, addressvTYGhQY, uintL943cKY, uintn8xeQ5X, uintBvqFTUd, byteaEBLVpG, bytebgxnDFj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenOkg9UTi = await POWToken.new({from: accounts[2]});
		const uintAMdlPH1 = BigInt("10")
		const addressdGbiISm = accounts[0]
		const addresskLTKCw = accounts[2]
		const uintZeNYlN = BigInt("1473")
		const uintn5SddOx = BigInt("2011")
		const uinteH89MSi = BigInt("1350")
		const boolgH5jQq = await POWTokenOkg9UTi.transferFrom.call(addresskLTKCw, addressdGbiISm, uintAMdlPH1, {from: accounts[0]});
		const uint256HOUc1nx = await POWTokenOkg9UTi.notifyRewardAmount.call(uintZeNYlN, {from: accounts[0]});
		const uint256RDGILcF = await POWTokenOkg9UTi.setStakingRewardRatio.call(uintn5SddOx, {from: accounts[3]});
		const uint256Xom5qOL = await POWTokenOkg9UTi.notifyRewardAmount.call(uinteH89MSi, {from: accounts[3]});

		await expect(POWTokenOkg9UTi.transferFrom.call(addresskLTKCw, addressdGbiISm, uintAMdlPH1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken2C6FBH = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfBcyJYB = BigInt("1496")
		const uintdroqt1b = BigInt("1105")
		const addressFH8dxcr = accounts[0]
		const uintUWTRVX = BigInt("1970")
		const addressODflf26 = accounts[2]
		const uint256YmwWiGg = await POWToken2C6FBH.remainingAmount.call({from: accounts[4]});
		const uint256JewB02g = await POWToken2C6FBH.setWorkingHashRate.call(uintfBcyJYB, {from: accounts[3]});
		const addressp5akTbV = await POWToken2C6FBH.claimIncome.call(addressFH8dxcr, uintdroqt1b, {from: accounts[2]});
		const addressai0wOfw = await POWToken2C6FBH.mint.call(addressODflf26, uintUWTRVX, {from: accounts[2]});
	});

	it('test for POWToken', async () => {
		const POWTokentxEg0aX = await POWToken.new({from: accounts[0]});
		await POWTokentxEg0aX.updateIncomeRate.call({from: accounts[4]});
		const uint256XvsbXp = await POWTokentxEg0aX.lpStakingRewardRate.call({from: accounts[5]});
		await POWTokentxEg0aX.onlyOwner.call({from: accounts[1]});

		await expect(POWTokentxEg0aX.updateIncomeRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokentxEg0aX = await POWToken.new({from: accounts[0]});
		const uint256XvsbXp = await POWTokentxEg0aX.lpStakingRewardRate.call({from: accounts[5]});
		const boolm2qYwi = await POWTokentxEg0aX.paused.call({from: accounts[5]});
		const boolePn8QJw = await POWTokentxEg0aX.paused.call({from: accounts[3]});

		assert.equal(boolePn8QJw, false)
		assert.equal(boolm2qYwi, false)
		assert.equal(uint256XvsbXp, BigInt("0"))
	});
})