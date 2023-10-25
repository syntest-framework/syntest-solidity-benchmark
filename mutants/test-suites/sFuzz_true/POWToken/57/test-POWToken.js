const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenCNQXaZ2 = await POWToken.new({from: accounts[4]});
		const uintIGyQWb3 = BigInt("1873")
		const addressudc7yXf = accounts[0]
		const addressxm5brvm = accounts[2]
		const uintaoKEPRN = BigInt("148")
		const addresszbvAYqG = accounts[2]
//		const uint256mkiqWQy = await POWTokenCNQXaZ2.getCurWorkingRate.call({from: accounts[4]});
//		const boolpAYVwtq = await POWTokenCNQXaZ2.transferFrom.call(addressxm5brvm, addressudc7yXf, uintIGyQWb3, {from: accounts[2]});
//		const booldmVHyqW = await POWTokenCNQXaZ2.transfer.call(addresszbvAYqG, uintaoKEPRN, {from: accounts[3]});

		await expect(POWTokenCNQXaZ2.getCurWorkingRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenss4LjU9 = await POWToken.new({from: accounts[3]});
		const addressL5fdvE = accounts[3]
		const uintiYcVstk = BigInt("449")
		const uintoQ7IXYt = BigInt("1506")
//		const addressWCUfx60 = await POWTokenss4LjU9.transferOwnership.call(addressL5fdvE, {from: accounts[5]});
//		const uint256FbOZs5 = await POWTokenss4LjU9.getHistoryWorkingRate.call({from: accounts[0]});
//		const uint256Gew0b2i = await POWTokenss4LjU9.setDepreciationNumerator.call(uintiYcVstk, {from: accounts[0]});
//		await POWTokenss4LjU9.unpause.call({from: accounts[4]});
//		await POWTokenss4LjU9.whenPaused.call({from: accounts[3]});
//		const uint256B3OV8xH = await POWTokenss4LjU9.notifyRewardAmount.call(uintoQ7IXYt, {from: accounts[1]});

		await expect(POWTokenss4LjU9.transferOwnership.call(addressL5fdvE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenQnBIDk = await POWToken.new({from: accounts[3]});
		const uintYHWX04 = BigInt("1725")
		const addressI0FOfk7 = accounts[0]
		const uintmu59oQn = BigInt("1884")
		const addressZa7nzbj = accounts[4]
		const uintce0wOgs = BigInt("849")
		const addressGu5dxUF = accounts[4]
//		const addressYiY26Ow = await POWTokenQnBIDk.claimReward.call(addressI0FOfk7, uintYHWX04, {from: accounts[0]});
//		const addresscRSx7rJ = await POWTokenQnBIDk.claimIncome.call(addressZa7nzbj, uintmu59oQn, {from: "0x0000000000000000000000000000000000000001"});
//		const boolDeO3CwS = await POWTokenQnBIDk.approve.call(addressGu5dxUF, uintce0wOgs, {from: accounts[3]});
//		const uint256HIL7FNf = await POWTokenQnBIDk.getCurWorkingRate.call({from: accounts[1]});
//		await POWTokenQnBIDk.unpause.call({from: accounts[4]});

		await expect(POWTokenQnBIDk.claimReward.call(addressI0FOfk7, uintYHWX04, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenSGoZ52Q = await POWToken.new({from: accounts[1]});
		const uintbCC8UaK = BigInt("1725")
		const addresszXACeVz = accounts[4]
		const uintAyafS0o = BigInt("997")
		const addressuwGkz2u = accounts[0]
		const addressw8BYV6I = accounts[3]
//		const addressPn83oB = await POWTokenSGoZ52Q.mint.call(addresszXACeVz, uintbCC8UaK, {from: accounts[3]});
//		const booll52a07d = await POWTokenSGoZ52Q.transferFrom.call(addressw8BYV6I, addressuwGkz2u, uintAyafS0o, {from: accounts[4]});

		await expect(POWTokenSGoZ52Q.mint.call(addresszXACeVz, uintbCC8UaK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenpulqsRT = await POWToken.new({from: accounts[0]});
		const uintauxPn2x = BigInt("1097")
		const uintyn1GiN3 = BigInt("1338")
		const uintLvpWWPv = BigInt("1887")
		const addressnWmZfkt = accounts[4]
		const uint256W1BxDXh = await POWTokenpulqsRT.stakingRewardRate.call({from: accounts[0]});
//		const uint256c42lPcP = await POWTokenpulqsRT.setDepreciationNumerator.call(uintauxPn2x, {from: accounts[0]});
//		const uint256cJNhaz3 = await POWTokenpulqsRT.setStartMiningTime.call(uintyn1GiN3, {from: accounts[3]});
//		const addresskvFowrV = await POWTokenpulqsRT.claimIncome.call(addressnWmZfkt, uintLvpWWPv, {from: accounts[0]});

		assert.equal(uint256W1BxDXh, BigInt("0"))
		await expect(POWTokenpulqsRT.setDepreciationNumerator.call(uintauxPn2x, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenBuFnkWg = await POWToken.new({from: accounts[2]});
//		await POWTokenBuFnkWg.onlyOwner.call({from: accounts[5]});
//		await POWTokenBuFnkWg.unpause.call({from: accounts[2]});

		await expect(POWTokenBuFnkWg.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWToken0AMYL1 = await POWToken.new({from: accounts[5]});
		const addressadRkrhw = accounts[4]
		const uintKYcZqZH = BigInt("1639")
		const boolYTSykC = await POWToken0AMYL1.paused.call({from: accounts[3]});
//		await POWToken0AMYL1.onlyParamSetter.call({from: accounts[2]});
//		const uint256qBBFHhf = await POWToken0AMYL1.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[4]});
//		const addressAQYhY2O = await POWToken0AMYL1.setBtcParam.call(addressadRkrhw, {from: accounts[1]});
//		const uint256fOG4XzB = await POWToken0AMYL1.setElectricCharge.call(uintKYcZqZH, {from: accounts[0]});

		assert.equal(boolYTSykC, false)
		await expect(POWToken0AMYL1.onlyParamSetter.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhToMsgP = await POWToken.new({from: accounts[3]});
		const uint256lSuDsy = await POWTokenhToMsgP.stakingRewardRate.call({from: accounts[0]});
		const uint256kqEELH4 = await POWTokenhToMsgP.remainingAmount.call({from: accounts[0]});

		assert.equal(uint256kqEELH4, BigInt("0"))
		assert.equal(uint256lSuDsy, BigInt("0"))
	});

	it('test for POWToken', async () => {
		const POWTokenSGoZ52Q = await POWToken.new({from: accounts[1]});
		const uintqgZujWV = BigInt("997")
		const addressJxsXySI = accounts[0]
		const addressZberzoE = accounts[3]
//		const booll52a07d = await POWTokenSGoZ52Q.transferFrom.call(addressZberzoE, addressJxsXySI, uintqgZujWV, {from: accounts[4]});

		await expect(POWTokenSGoZ52Q.transferFrom.call(addressZberzoE, addressJxsXySI, uintqgZujWV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenXSfvSMo = await POWToken.new({from: accounts[2]});
		const uintjSEzhxS = BigInt("1606")
		const uintUb0UveR = BigInt("1591")
//		const uint256rOXUPDz = await POWTokenXSfvSMo.getIncomeBTCInWeiPerSec.call({from: accounts[5]});
//		const uint256cOTfsDU = await POWTokenXSfvSMo.setDepreciationNumerator.call(uintjSEzhxS, {from: accounts[0]});
//		const uint256JTNMzqu = await POWTokenXSfvSMo.getCurWorkingRate.call({from: accounts[0]});
//		const uint256Sr9dyzd = await POWTokenXSfvSMo.addHashRate.call(uintUb0UveR, {from: accounts[5]});
//		const uint256H6ooutV = await POWTokenXSfvSMo.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[0]});

		await expect(POWTokenXSfvSMo.getIncomeBTCInWeiPerSec.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhToMsgP = await POWToken.new({from: accounts[3]});
		const uint9NUO0E = BigInt("722")
		const uintWYWF5l = BigInt("1519")
		const uintIJJIwTf = BigInt("1489")
		const uintD51iwem = BigInt("316")
		const uintNohjD8o = BigInt("1334")
		const addressbsPIVhf = accounts[5]
		const addresslxDdUoU = accounts[4]
		const addressYoQkUc = accounts[2]
		const addressfHd1PSI = accounts[3]
		const address0vM6Dz = accounts[1]
		const addressq74wbzW = accounts[5]
		const addressMKbAMUs = accounts[3]
		const addressPGTSZfF = accounts[0]
		const stringtzuj1qP = "39mvgQVjHyD4rwafH8aXYYlltDpUiaUuy5kxdGNnGt5FYCXQP9AKBq7Ke7BB0FutJQIl4dbThGT3HeA5iH"
		const stringhiYb4B = "rfG7"
		const uint256lSuDsy = await POWTokenhToMsgP.stakingRewardRate.call({from: accounts[0]});
		const uint256kqEELH4 = await POWTokenhToMsgP.remainingAmount.call({from: accounts[0]});
//		const stringX5SJSF5 = await POWTokenhToMsgP.initialize.call(stringhiYb4B, stringtzuj1qP, addressPGTSZfF, addressMKbAMUs, addressq74wbzW, address0vM6Dz, addressfHd1PSI, addressYoQkUc, addresslxDdUoU, addressbsPIVhf, uintNohjD8o, uintD51iwem, uintIJJIwTf, uintWYWF5l, uint9NUO0E, {from: accounts[5]});

		assert.equal(uint256kqEELH4, BigInt("0"))
		assert.equal(uint256lSuDsy, BigInt("0"))
		await expect(POWTokenhToMsgP.initialize.call(stringhiYb4B, stringtzuj1qP, addressPGTSZfF, addressMKbAMUs, addressq74wbzW, address0vM6Dz, addressfHd1PSI, addressYoQkUc, addresslxDdUoU, addressbsPIVhf, uintNohjD8o, uintD51iwem, uintIJJIwTf, uintWYWF5l, uint9NUO0E, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhToMsgP = await POWToken.new({from: accounts[3]});
		const bytebdlaa5 = "0x120e121b1118190312031e190d1f12021a0c17070d0412030b0d07150802080e"
		const byteXP2OPQ4 = "0x19121f0418091e13160d0620150d13171919110a0a051e15160e1b03061f0f11"
		const uinthyvMkN = BigInt("2")
		const uintE7oEs1 = BigInt("627")
		const uintH9R6k2 = BigInt("263")
		const addressmkEVvQb = accounts[3]
		const addressdnABq7z = accounts[3]
//		const addressCoMgbIK = await POWTokenhToMsgP.permit.call(addressdnABq7z, addressmkEVvQb, uintH9R6k2, uintE7oEs1, uinthyvMkN, byteXP2OPQ4, bytebdlaa5, {from: accounts[5]});
//		const uint256lSuDsy = await POWTokenhToMsgP.stakingRewardRate.call({from: accounts[0]});

		await expect(POWTokenhToMsgP.permit.call(addressdnABq7z, addressmkEVvQb, uintH9R6k2, uintE7oEs1, uinthyvMkN, byteXP2OPQ4, bytebdlaa5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenSGoZ52Q = await POWToken.new({from: accounts[1]});
		const uintl9vX3bY = BigInt("1719")
		const addressRPPqUmI = accounts[3]
		const uint256AtAa1qO = await POWTokenSGoZ52Q.lpStakingRewardRate.call({from: accounts[1]});
//		const uint256HIiB3va = await POWTokenSGoZ52Q.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]});
//		const addressPn83oB = await POWTokenSGoZ52Q.mint.call(addressRPPqUmI, uintl9vX3bY, {from: accounts[3]});

		assert.equal(uint256AtAa1qO, BigInt("0"))
		await expect(POWTokenSGoZ52Q.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhToMsgP = await POWToken.new({from: accounts[3]});
		const uintc8x6YUb = BigInt("1274")
		const byteNfdJ5zw = "0x120e121b1118190312031e190d1f12021a0c17070d0412030b0d07150802080e"
		const byteihXVhJ = "0x19121f0418091e13160d0620150d13171919110a0a051e15160e1b03061f0f11"
		const uintMJomn3o = BigInt("2")
		const uintpeclaVl = BigInt("627")
		const uintzusCJxf = BigInt("263")
		const addressATqmIRk = accounts[3]
		const addresswDsu4lp = accounts[3]
//		await POWTokenhToMsgP.updateIncomeRate.call({from: accounts[0]});
//		const uint256WjECn7h = await POWTokenhToMsgP.notifyRewardAmount.call(uintc8x6YUb, {from: accounts[1]});
//		const addressCoMgbIK = await POWTokenhToMsgP.permit.call(addresswDsu4lp, addressATqmIRk, uintzusCJxf, uintpeclaVl, uintMJomn3o, byteihXVhJ, byteNfdJ5zw, {from: accounts[5]});

		await expect(POWTokenhToMsgP.updateIncomeRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenFuAPmKx = await POWToken.new({from: accounts[0]});
		const uintgOinN44 = BigInt("306")
		const addressHLj2Hi = accounts[5]
		const uintykxDVNF = BigInt("897")
		const addressgQkHQH2 = accounts[4]
		const uintiWIgx8 = BigInt("1396")
		const addressrcdYniA = "0x0000000000000000000000000000000000000001"
		const uintI3faPbS = BigInt("863")
		const boolNQnjeqD = await POWTokenFuAPmKx.approve.call(addressHLj2Hi, uintgOinN44, {from: accounts[4]});
//		const boolvzTy8R = await POWTokenFuAPmKx.transfer.call(addressgQkHQH2, uintykxDVNF, {from: accounts[1]});
//		const addressEJy3Ybd = await POWTokenFuAPmKx.claimReward.call(addressrcdYniA, uintiWIgx8, {from: accounts[0]});
//		const uint256xSXQHm = await POWTokenFuAPmKx.notifyRewardAmount.call(uintI3faPbS, {from: accounts[2]});
//		const uint256Dq0ckAG = await POWTokenFuAPmKx.getCurWorkingRate.call({from: accounts[0]});

		assert.equal(boolNQnjeqD, true)
		await expect(POWTokenFuAPmKx.transfer.call(addressgQkHQH2, uintykxDVNF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhToMsgP = await POWToken.new({from: accounts[3]});
		const uintDYBRbXm = BigInt("1505")
		const uint256bVUSTSV = await POWTokenhToMsgP.lpStakingRewardRate.call({from: accounts[5]});
//		const uint256CBfqllH = await POWTokenhToMsgP.getHistoryWorkingRate.call({from: accounts[5]});
//		const uint256t5bGGeo = await POWTokenhToMsgP.getCurWorkingRate.call({from: accounts[3]});
//		const uint256RcU0WhY = await POWTokenhToMsgP.addHashRate.call(uintDYBRbXm, {from: accounts[3]});
//		const uint256lSuDsy = await POWTokenhToMsgP.stakingRewardRate.call({from: accounts[0]});

		assert.equal(uint256bVUSTSV, BigInt("0"))
		await expect(POWTokenhToMsgP.getHistoryWorkingRate.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenhToMsgP = await POWToken.new({from: accounts[3]});
		const uintQECO5Og = BigInt("204")
		const addressRef1MfN = accounts[2]
		const byteVZMlem4 = "0x120e121b1118190312031e190d1f12021a0c17070d0412030b0d07150802080e"
		const byteM0etxE = "0x19121f0418091e13160d0620150d13171919110a0a051e15160e1b03061f0f11"
		const uintREIoZD9 = BigInt("141")
		const uintyYxIb2M = BigInt("627")
		const uintVnKFeWz = BigInt("416")
		const addressDgWNoZj = accounts[3]
		const addresse9VwQ1X = accounts[3]
//		const addressasxSVaQ = await POWTokenhToMsgP.claimIncome.call(addressRef1MfN, uintQECO5Og, {from: accounts[3]});
//		const uint256jK4ROLB = await POWTokenhToMsgP.getIncomeBTCInWeiPerSec.call({from: accounts[1]});
//		await POWTokenhToMsgP.pause.call({from: accounts[1]});
//		const addressCoMgbIK = await POWTokenhToMsgP.permit.call(addresse9VwQ1X, addressDgWNoZj, uintVnKFeWz, uintyYxIb2M, uintREIoZD9, byteM0etxE, byteVZMlem4, {from: accounts[5]});

		await expect(POWTokenhToMsgP.claimIncome.call(addressRef1MfN, uintQECO5Og, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenxWmzkWE = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintbYCrf1 = BigInt("1983")
		const addressyQkQ9rp = accounts[0]
		const uintUhKaZox = BigInt("1003")
		const addressMzE70Us = await POWTokenxWmzkWE.claimReward.call(addressyQkQ9rp, uintbYCrf1, {from: accounts[3]});
		const uint256m3PCqz = await POWTokenxWmzkWE.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[4]});
		await POWTokenxWmzkWE.unpause.call({from: accounts[1]});
		const uint256o1ou7qi = await POWTokenxWmzkWE.setMinerPoolFeeNumerator.call(uintUhKaZox, {from: accounts[3]});
	});
})