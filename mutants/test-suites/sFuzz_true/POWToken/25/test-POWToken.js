const POWToken = artifacts.require("POWToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('POWToken', (accounts) => {
	it('test for POWToken', async () => {
		const POWTokenSkpqBTe = await POWToken.new({from: accounts[3]});
		const uintWkX0KGc = BigInt("970")
		const addressNRahYgy = accounts[2]
		const uint4WOXiS = BigInt("728")
		const uintGY5wR9A = BigInt("1445")
		const uintZptmuME = BigInt("302")
//		const addressKJBWehi = await POWTokenSkpqBTe.claimIncome.call(addressNRahYgy, uintWkX0KGc, {from: accounts[1]});
//		const uint256fNcClft = await POWTokenSkpqBTe.addHashRate.call(uint4WOXiS, {from: accounts[0]});
//		const uint256rSuKRE6 = await POWTokenSkpqBTe.setStakingRewardRatio.call(uintGY5wR9A, {from: accounts[0]});
//		const uint256qQRBadw = await POWTokenSkpqBTe.setStakingRewardRatio.call(uintZptmuME, {from: accounts[2]});

		await expect(POWTokenSkpqBTe.claimIncome.call(addressNRahYgy, uintWkX0KGc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenPkd2a6q = await POWToken.new({from: accounts[1]});
		const uintlTK7ReZ = BigInt("1327")
		const addressvm5ocDC = "0x0000000000000000000000000000000000000001"
//		const addressVcZnBYV = await POWTokenPkd2a6q.inCaseTokensGetStuck.call(addressvm5ocDC, uintlTK7ReZ, {from: accounts[1]});
//		const uint256gGU9xZd = await POWTokenPkd2a6q.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]});
//		await POWTokenPkd2a6q.whenPaused.call({from: accounts[0]});

		await expect(POWTokenPkd2a6q.inCaseTokensGetStuck.call(addressvm5ocDC, uintlTK7ReZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenZPU6ws = await POWToken.new({from: "0x0000000000000000000000000000000000000001"});
		const addressnE5EOTP = accounts[4]
		const uintwQWelVg = BigInt("467")
		const addresswq2YEkI = accounts[2]
		const uintuD19jim = BigInt("434")
		const addressOJc7hzA = accounts[1]
		const uintQbmvpIL = BigInt("834")
		const addressUCWRGdg = accounts[2]
		const uintKuEn4Gd = BigInt("38")
		const addressWCQyl2H = "0x0000000000000000000000000000000000000001"
		const addressmEUYGxH = await POWTokenZPU6ws.setParamSetter.call(addressnE5EOTP, {from: accounts[2]});
		const addressnJB6JB = await POWTokenZPU6ws.mint.call(addresswq2YEkI, uintwQWelVg, {from: accounts[0]});
		const addresseT3TiuX = await POWTokenZPU6ws.claimReward.call(addressOJc7hzA, uintuD19jim, {from: accounts[3]});
		const boolgVWR36T = await POWTokenZPU6ws.approve.call(addressUCWRGdg, uintQbmvpIL, {from: accounts[3]});
		const addressQdV62jT = await POWTokenZPU6ws.claimReward.call(addressWCQyl2H, uintKuEn4Gd, {from: accounts[1]});
	});

	it('test for POWToken', async () => {
		const POWTokennNAqDuF = await POWToken.new({from: accounts[1]});
		const uintgv0bxQA = BigInt("209")
		const uint256cpkWBdl = await POWTokennNAqDuF.remainingAmount.call({from: accounts[4]});
//		const uint256dIvf1a = await POWTokennNAqDuF.setMinerPoolFeeNumerator.call(uintgv0bxQA, {from: accounts[3]});
//		await POWTokennNAqDuF.updateIncomeRate.call({from: "0x0000000000000000000000000000000000000001"});
//		await POWTokennNAqDuF.whenNotPaused.call({from: accounts[3]});

		assert.equal(uint256cpkWBdl, BigInt("0"))
		await expect(POWTokennNAqDuF.setMinerPoolFeeNumerator.call(uintgv0bxQA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennKHavI = await POWToken.new({from: accounts[3]});
		const uintcKEqcTA = BigInt("890")
		const addressXayeSsl = "0x0000000000000000000000000000000000000001"
		const uintHEExIrd = BigInt("1785")
		const uintW8QXAYN = BigInt("1877")
		const addresskT7cG3 = accounts[3]
//		const booloixVWuS = await POWTokennKHavI.transfer.call(addressXayeSsl, uintcKEqcTA, {from: accounts[2]});
//		const uint256pibulZt = await POWTokennKHavI.setElectricCharge.call(uintHEExIrd, {from: accounts[2]});
//		const uint256mIyOaIO = await POWTokennKHavI.getIncomeBTCInWeiPerSec.call({from: accounts[5]});
//		const addressI7fAksf = await POWTokennKHavI.claimReward.call(addresskT7cG3, uintW8QXAYN, {from: accounts[1]});

		await expect(POWTokennKHavI.transfer.call(addressXayeSsl, uintcKEqcTA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenZyh9ZIy = await POWToken.new({from: accounts[3]});
//		await POWTokenZyh9ZIy.onlyOwner.call({from: accounts[1]});
//		await POWTokenZyh9ZIy.unpause.call({from: accounts[0]});
		await POWTokenZyh9ZIy.onlyOwner.call({from: accounts[1]});

		await expect(POWTokenZyh9ZIy.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenPkd2a6q = await POWToken.new({from: accounts[1]});
		const uintxYlChP9 = BigInt("1327")
		const addresshwAQv4D = "0x0000000000000000000000000000000000000001"
//		await POWTokenPkd2a6q.updateIncomeRate.call({from: accounts[5]});
//		const uint256jCBeQNI = await POWTokenPkd2a6q.getCurWorkingRate.call({from: accounts[2]});
//		const addressVcZnBYV = await POWTokenPkd2a6q.inCaseTokensGetStuck.call(addresshwAQv4D, uintxYlChP9, {from: accounts[1]});
//		const uint256gGU9xZd = await POWTokenPkd2a6q.getPowerConsumptionBTCInWeiPerSec.call({from: accounts[2]});
//		await POWTokenPkd2a6q.whenPaused.call({from: accounts[0]});

		await expect(POWTokenPkd2a6q.updateIncomeRate.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennNAqDuF = await POWToken.new({from: accounts[1]});
		const uintlgggFFX = BigInt("964")
		const uint256cpkWBdl = await POWTokennNAqDuF.remainingAmount.call({from: accounts[4]});
		const booliimjQhv = await POWTokennNAqDuF.paused.call({from: accounts[4]});
//		const uint256Qa6vuUE = await POWTokennNAqDuF.setStartMiningTime.call(uintlgggFFX, {from: accounts[1]});
//		await POWTokennNAqDuF.updateIncomeRate.call({from: "0x0000000000000000000000000000000000000001"});
//		await POWTokennNAqDuF.whenNotPaused.call({from: accounts[3]});

		assert.equal(booliimjQhv, false)
		assert.equal(uint256cpkWBdl, BigInt("0"))
		await expect(POWTokennNAqDuF.setStartMiningTime.call(uintlgggFFX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokenSCqhKpT = await POWToken.new({from: accounts[2]});
		const uint5UEPk4 = BigInt("568")
		const addressUlzSvKw = accounts[4]
		const addressPS8NZr0 = "0x0000000000000000000000000000000000000001"
		const uinttu1CqXd = BigInt("1813")
		const addressfONbLF = accounts[1]
		const addressUUJR5W3 = accounts[2]
		const uintT7dsO5 = BigInt("985")
		const addressck5fk5w = accounts[1]
		const addressiqro9mU = accounts[5]
//		const boolwA7nqII = await POWTokenSCqhKpT.transferFrom.call(addressPS8NZr0, addressUlzSvKw, uint5UEPk4, {from: accounts[3]});
//		const boolNzN7uu = await POWTokenSCqhKpT.transferFrom.call(addressUUJR5W3, addressfONbLF, uinttu1CqXd, {from: accounts[5]});
//		const boolkzUDM4z = await POWTokenSCqhKpT.transferFrom.call(addressiqro9mU, addressck5fk5w, uintT7dsO5, {from: accounts[3]});

		await expect(POWTokenSCqhKpT.transferFrom.call(addressPS8NZr0, addressUlzSvKw, uint5UEPk4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennNAqDuF = await POWToken.new({from: accounts[1]});
		const boolGzS7dTl = await POWTokennNAqDuF.paused.call({from: accounts[0]});
//		const uint256eiZm718 = await POWTokennNAqDuF.getCurWorkingRate.call({from: accounts[0]});
//		await POWTokennNAqDuF.updateIncomeRate.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolGzS7dTl, false)
		await expect(POWTokennNAqDuF.getCurWorkingRate.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennNAqDuF = await POWToken.new({from: accounts[1]});
//		const uint256RsGWmWq = await POWTokennNAqDuF.getIncomeBTCInWeiPerSec.call({from: accounts[5]});
//		await POWTokennNAqDuF.updateIncomeRate.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(POWTokennNAqDuF.getIncomeBTCInWeiPerSec.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennXWIbJB = await POWToken.new({from: accounts[2]});
		const uintWIR93Lm = BigInt("481")
		const addressoRY1nIn = accounts[0]
//		const addressnJK1MHs = await POWTokennXWIbJB.mint.call(addressoRY1nIn, uintWIR93Lm, {from: accounts[4]});
//		const uint256ghNxqpp = await POWTokennXWIbJB.getHistoryWorkingRate.call({from: accounts[4]});
//		await POWTokennXWIbJB.whenPaused.call({from: accounts[2]});
//		await POWTokennXWIbJB.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await POWTokennXWIbJB.onlyOwner.call({from: accounts[3]});

		await expect(POWTokennXWIbJB.mint.call(addressoRY1nIn, uintWIR93Lm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennNAqDuF = await POWToken.new({from: accounts[1]});
		const uintYLW8vJU = BigInt("990")
		const addresslJGgZzR = accounts[1]
		const uintflEfpQB = BigInt("1680")
		const addressP5yZeIw = accounts[1]
		const boolTh9BAII = await POWTokennNAqDuF.approve.call(addresslJGgZzR, uintYLW8vJU, {from: accounts[3]});
//		const addressPZrZRFd = await POWTokennNAqDuF.claimReward.call(addressP5yZeIw, uintflEfpQB, {from: accounts[0]});
//		await POWTokennNAqDuF.updateIncomeRate.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolTh9BAII, true)
		await expect(POWTokennNAqDuF.claimReward.call(addressP5yZeIw, uintflEfpQB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennNAqDuF = await POWToken.new({from: accounts[1]});
		const byteYi1mPaG = "0x011801120413121f180f1a191909071d0703030e1f1a1b1d160a060205081304"
		const bytewnC9hhI = "0x0c0a19010e191a0c031f030e1913180d130a0211010610141f200a100f170111"
		const uintN5xqlix = BigInt("78")
		const uintKK6CFhS = BigInt("607")
		const uintUT3GWku = BigInt("862")
		const addressriodJ3i = accounts[1]
		const addresszwi9gW = accounts[1]
		const bytetyNaTd9 = "0x0514061b1209011a080f1604021205011c0e1602081b0a070d0f101f0c09080c"
		const byteuyDHLY = "0x1b151a130517070a08041c18061c021b00081b040e0712081115101b0b1c1c1b"
		const uintozOwhjz = BigInt("134")
		const uintg6kFeqx = BigInt("1156")
		const uintCXiQWG = BigInt("821")
		const addresspuDNaiM = accounts[3]
		const addressyFNfyB2 = accounts[4]
		const uint256cpkWBdl = await POWTokennNAqDuF.remainingAmount.call({from: accounts[4]});
//		const addressL4X1k2E = await POWTokennNAqDuF.permit.call(addresszwi9gW, addressriodJ3i, uintUT3GWku, uintKK6CFhS, uintN5xqlix, bytewnC9hhI, byteYi1mPaG, {from: "0x0000000000000000000000000000000000000001"});
//		const addressbFJOuV7 = await POWTokennNAqDuF.permit.call(addressyFNfyB2, addresspuDNaiM, uintCXiQWG, uintg6kFeqx, uintozOwhjz, byteuyDHLY, bytetyNaTd9, {from: accounts[0]});

		assert.equal(uint256cpkWBdl, BigInt("0"))
		await expect(POWTokennNAqDuF.permit.call(addresszwi9gW, addressriodJ3i, uintUT3GWku, uintKK6CFhS, uintN5xqlix, bytewnC9hhI, byteYi1mPaG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennNAqDuF = await POWToken.new({from: accounts[1]});
		const uintj4hpRzl = BigInt("641")
		const addresstD4Ll8D = accounts[0]
		const uint256SbtGl3i = await POWTokennNAqDuF.stakingRewardRate.call({from: accounts[3]});
		const uint256cpkWBdl = await POWTokennNAqDuF.remainingAmount.call({from: accounts[4]});
//		const boolyTDAI4Q = await POWTokennNAqDuF.transfer.call(addresstD4Ll8D, uintj4hpRzl, {from: accounts[3]});
//		const uint256GFuXoJD = await POWTokennNAqDuF.remainingAmount.call({from: accounts[0]});

		assert.equal(uint256SbtGl3i, BigInt("0"))
		assert.equal(uint256cpkWBdl, BigInt("0"))
		await expect(POWTokennNAqDuF.transfer.call(addresstD4Ll8D, uintj4hpRzl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennNAqDuF = await POWToken.new({from: accounts[1]});
		const uintWpj2wl = BigInt("797")
		const uintxmLjFxX = BigInt("528")
		const uinttlpDAZr = BigInt("841")
		const uintBgIqybP = BigInt("1727")
		const uintgG98F4R = BigInt("1300")
		const addressKPQNfc = accounts[4]
		const addressvG6Iu8N = accounts[0]
		const addressewH6deF = accounts[1]
		const address4Gw8WA = accounts[1]
		const address8MZ0gm = accounts[2]
		const addressQgR8Gue = accounts[4]
		const addressxC3FijG = accounts[2]
		const addressRRZQlz5 = accounts[4]
		const stringRzSFkR7 = "YkM2wroJ"
		const stringOK0iTIm = "bMwUroN07O0DkeUeBQE5ZFBqo7l4CgfIqWMbchnPqyhnwJVCa6jYmVRM"
		const uinttW2P98F = BigInt("1840")
		const byteCW1I4EQ = "0x011801120413121f180f1a191909071d0703030e1f1a1b1d160a060205081304"
		const byteCTW5wyk = "0x0c0a19010e191a0c031f030e1913180d130a0211010610141f200a100f170111"
		const uintflVWDYQ = BigInt("78")
		const uintXss4tA0 = BigInt("607")
		const uintdxrCrA = BigInt("862")
		const addressYkaQaQe = accounts[1]
		const addressi5oHnfA = accounts[1]
		const bytes42BKNH = "0x0514061b1209011a080f1604021205011c0e1602081b0a070d0f101f0c09080c"
		const bytedbVnf9o = "0x1b151a130517070a08041c18061c021b00081b040e0712081115101b0b1c1c1b"
		const uintLCQC41H = BigInt("134")
		const uintd2MNcA5 = BigInt("1156")
		const uintOEvLuiJ = BigInt("821")
		const addressZRZbKUG = accounts[3]
		const addressv53O88T = accounts[4]
//		const stringI7xp1Jz = await POWTokennNAqDuF.initialize.call(stringOK0iTIm, stringRzSFkR7, addressRRZQlz5, addressxC3FijG, addressQgR8Gue, address8MZ0gm, address4Gw8WA, addressewH6deF, addressvG6Iu8N, addressKPQNfc, uintgG98F4R, uintBgIqybP, uinttlpDAZr, uintxmLjFxX, uintWpj2wl, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256cpkWBdl = await POWTokennNAqDuF.remainingAmount.call({from: accounts[4]});
//		const uint256Vun08xY = await POWTokennNAqDuF.setStakingRewardRatio.call(uinttW2P98F, {from: accounts[1]});
//		const addressL4X1k2E = await POWTokennNAqDuF.permit.call(addressi5oHnfA, addressYkaQaQe, uintdxrCrA, uintXss4tA0, uintflVWDYQ, byteCTW5wyk, byteCW1I4EQ, {from: "0x0000000000000000000000000000000000000001"});
//		const addressbFJOuV7 = await POWTokennNAqDuF.permit.call(addressv53O88T, addressZRZbKUG, uintOEvLuiJ, uintd2MNcA5, uintLCQC41H, bytedbVnf9o, bytes42BKNH, {from: accounts[0]});

		await expect(POWTokennNAqDuF.initialize.call(stringOK0iTIm, stringRzSFkR7, addressRRZQlz5, addressxC3FijG, addressQgR8Gue, address8MZ0gm, address4Gw8WA, addressewH6deF, addressvG6Iu8N, addressKPQNfc, uintgG98F4R, uintBgIqybP, uinttlpDAZr, uintxmLjFxX, uintWpj2wl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennNAqDuF = await POWToken.new({from: accounts[1]});
		const uint256cpkWBdl = await POWTokennNAqDuF.remainingAmount.call({from: accounts[4]});
		const uint256bNl0G6I = await POWTokennNAqDuF.lpStakingRewardRate.call({from: accounts[5]});
//		await POWTokennNAqDuF.whenNotPaused.call({from: accounts[4]});

		assert.equal(uint256bNl0G6I, BigInt("0"))
		assert.equal(uint256cpkWBdl, BigInt("0"))
		await expect(POWTokennNAqDuF.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennXWIbJB = await POWToken.new({from: accounts[2]});
		const uintuCUh98 = BigInt("625")
//		const uint256ghNxqpp = await POWTokennXWIbJB.getHistoryWorkingRate.call({from: accounts[4]});
//		const uint256KzVIOuX = await POWTokennXWIbJB.setStakingRewardRatio.call(uintuCUh98, {from: accounts[2]});
//		await POWTokennXWIbJB.whenPaused.call({from: accounts[2]});
//		await POWTokennXWIbJB.onlyOwner.call({from: accounts[3]});

		await expect(POWTokennXWIbJB.getHistoryWorkingRate.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennNAqDuF = await POWToken.new({from: accounts[1]});
		const byteL5K6RBk = "0x011801120413121f180f1a191909071d0703030e1f1a1b1d160a06ffffffff05081304"
		const byteoHc6HQL = "0x0c0a1b010e191a0c031f030e1913180d130a0211010610141f200a100f170111"
		const uintk4sJJyK = BigInt("210")
		const uintfEwkYU = BigInt("643")
		const uintnyd1Coh = BigInt("862")
		const addressDQ4GuXa = accounts[1]
		const addressiCzF8Fl = accounts[1]
//		const addressL4X1k2E = await POWTokennNAqDuF.permit.call(addressiCzF8Fl, addressDQ4GuXa, uintnyd1Coh, uintfEwkYU, uintk4sJJyK, byteoHc6HQL, byteL5K6RBk, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256emRdhiq = await POWTokennNAqDuF.getHistoryWorkingRate.call({from: accounts[3]});

		await expect(POWTokennNAqDuF.permit.call(addressiCzF8Fl, addressDQ4GuXa, uintnyd1Coh, uintfEwkYU, uintk4sJJyK, byteoHc6HQL, byteL5K6RBk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for POWToken', async () => {
		const POWTokennXWIbJB = await POWToken.new({from: accounts[2]});
		const uint3V7PHb = BigInt("373")
		const uintSANy5mz = BigInt("633")
		const uintXIET7T3 = BigInt("1458")
		const uintLpdTGaN = BigInt("1343")
		const uintw0YCf9E = BigInt("244")
		const addresshdUtiZ = accounts[2]
		const addressz1YYCz4 = accounts[2]
		const addressFp51Zu9 = accounts[2]
		const addressW4KK5U2 = accounts[4]
		const addressCfgfdgI = accounts[2]
		const addressl1OWYjE = "0x0000000000000000000000000000000000000001"
		const addressU2ypylU = "0x0000000000000000000000000000000000000000"
		const addresssNYpsR9 = accounts[3]
		const stringebQuujU = "5rhEultaUFQBwOfZsXEXJvJUjBfKORu"
		const stringk9peYs = "5fGEwn6dsXHQUGnhP2cuXyGvmmuK3kw44hceBYhBhGR3aCsVlsBMynaA8cuMloBERCH0SNxJzi"
//		const stringTjx0me = await POWTokennXWIbJB.initialize.call(stringk9peYs, stringebQuujU, addresssNYpsR9, addressU2ypylU, addressl1OWYjE, addressCfgfdgI, addressW4KK5U2, addressFp51Zu9, addressz1YYCz4, addresshdUtiZ, uintw0YCf9E, uintLpdTGaN, uintXIET7T3, uintSANy5mz, uint3V7PHb, {from: accounts[0]});

		await expect(POWTokennXWIbJB.initialize.call(stringk9peYs, stringebQuujU, addresssNYpsR9, addressU2ypylU, addressl1OWYjE, addressCfgfdgI, addressW4KK5U2, addressFp51Zu9, addressz1YYCz4, addresshdUtiZ, uintw0YCf9E, uintLpdTGaN, uintXIET7T3, uintSANy5mz, uint3V7PHb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})