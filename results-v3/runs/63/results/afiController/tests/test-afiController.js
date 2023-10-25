const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressSQzn6fY = accounts[3]
		const afiControllerp5awPVx = await afiController.new(addressSQzn6fY, {from: accounts[4]});
		const addressqwXG1Ar = "0x0000000000000000000000000000000000000001"
		const addressro9xTN9 = accounts[3]
		const addressbDpPjbL = accounts[5]
		const addressKdh1inW = accounts[5]
		const uintO0xFERo = BigInt("1513")
		const addressc9cRuBR = accounts[2]
		const uintY8ZrUfa = BigInt("1049")
		const address9KyJOl = accounts[0]
		const addresskkxMVMe = accounts[1]
		const addressZMFNXzb = accounts[0]
		const addressepo27Xo = accounts[0]
		const addressiDzbPp8 = await afiControllerp5awPVx.revokeStrategy.call(addressro9xTN9, addressqwXG1Ar, {from: accounts[0]});
		const addressay9laL = await afiControllerp5awPVx.revokeStrategy.call(addressKdh1inW, addressbDpPjbL, {from: "0x0000000000000000000000000000000000000001"});
		const addressRIDmRL = await afiControllerp5awPVx.earn.call(addressc9cRuBR, uintO0xFERo, {from: accounts[2]});
		const uintAh2Aeav = await afiControllerp5awPVx.getExpectedReturn.call(addresskkxMVMe, address9KyJOl, uintY8ZrUfa, {from: accounts[3]});
		const addressHZH2Hd = await afiControllerp5awPVx.approveStrategy.call(addressepo27Xo, addressZMFNXzb, {from: accounts[3]});

		await expect(afiControllerp5awPVx.revokeStrategy.call(addressro9xTN9, addressqwXG1Ar, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressgM0nGip = accounts[1]
		const afiControllerSEtuoq = await afiController.new(addressgM0nGip, {from: accounts[0]});
		const addressi5z7IuI = accounts[3]
		const addressY9mm6AB = accounts[4]
		const addressPCzIv2X = accounts[4]
		const addressYeDVrCp = accounts[5]
		const addresshSfwi7O = await afiControllerSEtuoq.withdrawAll.call(addressi5z7IuI, {from: accounts[0]});
		const addressSLmuhT8 = await afiControllerSEtuoq.approveStrategy.call(addressPCzIv2X, addressY9mm6AB, {from: "0x0000000000000000000000000000000000000001"});
		const addressyUjTKLN = await afiControllerSEtuoq.setStrategist.call(addressYeDVrCp, {from: accounts[0]});

		await expect(afiControllerSEtuoq.withdrawAll.call(addressi5z7IuI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressPp7FOnr = "0x0000000000000000000000000000000000000001"
		const afiControllerDqgRsWv = await afiController.new(addressPp7FOnr, {from: accounts[2]});
		const uintBX5dBFN = BigInt("1331")
		const uintRK52nPy = BigInt("1082")
		const addressC9yfZ42 = accounts[1]
		const uintqNFf05x = BigInt("506")
		const addressxlJwcAk = accounts[4]
		const uintyhZO3f = BigInt("1632")
		const addressfcOWX38 = accounts[4]
		const addressMUdfA52 = accounts[2]
		const addressr1KMFll = accounts[5]
		const addressTnVJFnI = accounts[5]
		const uintC1bIXk = await afiControllerDqgRsWv.setSplit.call(uintBX5dBFN, {from: accounts[4]});
		const addresscONM37V = await afiControllerDqgRsWv.withdraw.call(addressC9yfZ42, uintRK52nPy, {from: accounts[0]});
		const addressIek2Oas = await afiControllerDqgRsWv.earn.call(addressxlJwcAk, uintqNFf05x, {from: accounts[1]});
		const addressZih9y10 = await afiControllerDqgRsWv.yearn.call(addressMUdfA52, addressfcOWX38, uintyhZO3f, {from: accounts[1]});
		const addressKkbxeSY = await afiControllerDqgRsWv.setStrategist.call(addressr1KMFll, {from: accounts[0]});
		const addressbw1Q0Mo = await afiControllerDqgRsWv.setOneSplit.call(addressTnVJFnI, {from: accounts[4]});

		await expect(afiControllerDqgRsWv.setSplit.call(uintBX5dBFN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressj3CDoL = accounts[2]
		const afiControllerRXYtBoO = await afiController.new(addressj3CDoL, {from: accounts[1]});
		const addressPPhSsL = accounts[3]
		const addressDQja0GS = accounts[3]
		const addressI6GzvZM = "0x0000000000000000000000000000000000000001"
		const addressqbNk96w = accounts[3]
		const addresswa7gjSO = accounts[1]
		const uintAELnREW = BigInt("1844")
		const addressZDwV54P = accounts[1]
		const addresspvFm9Le = accounts[1]
		const addressJAPLqnf = accounts[3]
		const addresspNBmYQs = accounts[5]
		const addressQ424dZI = accounts[1]
		const addressW4pzzYo = await afiControllerRXYtBoO.setStrategy.call(addressDQja0GS, addressPPhSsL, {from: accounts[3]});
		const addressOKbqqdl = await afiControllerRXYtBoO.setOneSplit.call(addressI6GzvZM, {from: accounts[2]});
		const addresskdDfWSJ = await afiControllerRXYtBoO.setVault.call(addresswa7gjSO, addressqbNk96w, {from: "0x0000000000000000000000000000000000000001"});
		const uinthHqCfe = await afiControllerRXYtBoO.getExpectedReturn.call(addresspvFm9Le, addressZDwV54P, uintAELnREW, {from: accounts[4]});
		const addresshVYS3vC = await afiControllerRXYtBoO.setConverter.call(addressQ424dZI, addresspNBmYQs, addressJAPLqnf, {from: accounts[4]});

		await expect(afiControllerRXYtBoO.setStrategy.call(addressDQja0GS, addressPPhSsL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressFfUbvY = accounts[1]
		const afiControllerEjjpl16 = await afiController.new(addressFfUbvY, {from: accounts[3]});
		const addressdsgiDu4 = accounts[3]
		const uintyZFl2YF = BigInt("760")
		const addresscgpAlnX = accounts[2]
		const uintYEriWQ1 = BigInt("1793")
		const addresse84NxlZ = accounts[0]
		const uintIUBVmX0 = BigInt("601")
		const addressE2krjCG = "0x0000000000000000000000000000000000000001"
		const addresskQXCQn = accounts[1]
		const addressi9aNAw = accounts[4]
		const addressCcHePf5 = await afiControllerEjjpl16.setOneSplit.call(addressdsgiDu4, {from: accounts[0]});
		const addressKZhS59g = await afiControllerEjjpl16.inCaseTokensGetStuck.call(addresscgpAlnX, uintyZFl2YF, {from: accounts[2]});
		const addressVVK4eG = await afiControllerEjjpl16.inCaseTokensGetStuck.call(addresse84NxlZ, uintYEriWQ1, {from: accounts[0]});
		const addressSbDjmg = await afiControllerEjjpl16.inCaseTokensGetStuck.call(addressE2krjCG, uintIUBVmX0, {from: accounts[2]});
		const addressFhnRzRJ = await afiControllerEjjpl16.setVault.call(addressi9aNAw, addresskQXCQn, {from: accounts[0]});

		await expect(afiControllerEjjpl16.setOneSplit.call(addressdsgiDu4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresszhRvHlA = "0x0000000000000000000000000000000000000001"
		const afiControllerVUGTRu3 = await afiController.new(addresszhRvHlA, {from: accounts[2]});
		const uintKEeaw75 = BigInt("1713")
		const addressxoL3oU = accounts[3]
		const uintrtYqbMV = BigInt("850")
		const addressAxCs2cd = accounts[1]
		const addressC0ms5Dd = accounts[5]
		const addresshPOaxC4 = await afiControllerVUGTRu3.earn.call(addressxoL3oU, uintKEeaw75, {from: accounts[5]});
		const addresssN3Wkyw = await afiControllerVUGTRu3.yearn.call(addressC0ms5Dd, addressAxCs2cd, uintrtYqbMV, {from: accounts[2]});

		await expect(afiControllerVUGTRu3.earn.call(addressxoL3oU, uintKEeaw75, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressEJgVDgo = accounts[1]
		const afiControllerUFBjnNR = await afiController.new(addressEJgVDgo, {from: accounts[0]});
		const addresspY00Yk = accounts[3]
		const addressPllIZEi = accounts[5]
		const uintYGiWJTv = BigInt("3")
		const addressV5cGdBj = accounts[3]
		const uintsMkbTvb = BigInt("1999")
		const addressyyQf7OM = accounts[1]
		const addressFhE0TMW = accounts[3]
		const addressRF42WlH = accounts[4]
		const addressCmOGgr = await afiControllerUFBjnNR.inCaseStrategyTokenGetStuck.call(addressPllIZEi, addresspY00Yk, {from: accounts[1]});
		const addresspg0X3z4 = await afiControllerUFBjnNR.inCaseTokensGetStuck.call(addressV5cGdBj, uintYGiWJTv, {from: "0x0000000000000000000000000000000000000001"});
		const addresscC6rFx6 = await afiControllerUFBjnNR.yearn.call(addressFhE0TMW, addressyyQf7OM, uintsMkbTvb, {from: accounts[4]});
		const uintkSnsKRZ = await afiControllerUFBjnNR.balanceOf.call(addressRF42WlH, {from: accounts[1]});

		await expect(afiControllerUFBjnNR.inCaseStrategyTokenGetStuck.call(addressPllIZEi, addresspY00Yk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresswbLCfDe = accounts[3]
		const afiControllern764Kt0 = await afiController.new(addresswbLCfDe, {from: accounts[2]});
		const addresszAUoBg4 = accounts[3]
		const addressjqrGZzh = accounts[5]
		const addressePelauj = await afiControllern764Kt0.setGovernance.call(addresszAUoBg4, {from: accounts[1]});
		const addressadiFwp = await afiControllern764Kt0.withdrawAll.call(addressjqrGZzh, {from: accounts[3]});

		await expect(afiControllern764Kt0.setGovernance.call(addresszAUoBg4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressXTfLpL = accounts[3]
		const afiControllern764Kt0 = await afiController.new(addressXTfLpL, {from: accounts[2]});
		const addressed4OlOV = accounts[4]
		const addressAP4ZbAy = "0x0000000000000000000000000000000000000001"
		const addressEWJHY9 = accounts[4]
		const addresstGsep5l = await afiControllern764Kt0.setVault.call(addressAP4ZbAy, addressed4OlOV, {from: accounts[4]});
		const addressePelauj = await afiControllern764Kt0.setGovernance.call(addressEWJHY9, {from: accounts[1]});

		await expect(afiControllern764Kt0.setVault.call(addressAP4ZbAy, addressed4OlOV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIQl3DmC = accounts[1]
		const afiControllerUFBjnNR = await afiController.new(addressIQl3DmC, {from: accounts[0]});
		const uintlxgowgX = BigInt("3")
		const addresshpOSw3T = accounts[3]
		const uintshC2xBt = BigInt("1999")
		const addressadTvP2R = accounts[1]
		const addressYlgPs3V = accounts[3]
		const addresszQYk0NS = accounts[4]
		const addresspg0X3z4 = await afiControllerUFBjnNR.inCaseTokensGetStuck.call(addresshpOSw3T, uintlxgowgX, {from: "0x0000000000000000000000000000000000000001"});
		const addresscC6rFx6 = await afiControllerUFBjnNR.yearn.call(addressYlgPs3V, addressadTvP2R, uintshC2xBt, {from: accounts[4]});
		const uintkSnsKRZ = await afiControllerUFBjnNR.balanceOf.call(addresszQYk0NS, {from: accounts[1]});

		await expect(afiControllerUFBjnNR.inCaseTokensGetStuck.call(addresshpOSw3T, uintlxgowgX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressXQYmebl = accounts[1]
		const afiControllerSEtuoq = await afiController.new(addressXQYmebl, {from: accounts[0]});
		const addressw2y4zDa = accounts[4]
		const addressnYXxVKH = accounts[4]
		const addressbuaSi8b = accounts[5]
		const uintAI57z5 = BigInt("1050")
		const addressIJDRHtt = accounts[0]
		const uintj1xFy1p = BigInt("950")
		const addressEwNOPZ6 = accounts[1]
		const addressScSYpvO = accounts[1]
		const addressSLmuhT8 = await afiControllerSEtuoq.approveStrategy.call(addressnYXxVKH, addressw2y4zDa, {from: "0x0000000000000000000000000000000000000001"});
		const addressyUjTKLN = await afiControllerSEtuoq.setStrategist.call(addressbuaSi8b, {from: accounts[0]});
		const addressoOdQe4Q = await afiControllerSEtuoq.earn.call(addressIJDRHtt, uintAI57z5, {from: accounts[2]});
		const uintmglH6Rc = await afiControllerSEtuoq.getExpectedReturn.call(addressScSYpvO, addressEwNOPZ6, uintj1xFy1p, {from: accounts[4]});

		await expect(afiControllerSEtuoq.approveStrategy.call(addressnYXxVKH, addressw2y4zDa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresscMULB1x = accounts[4]
		const afiControllertjAcUJ7 = await afiController.new(addresscMULB1x, {from: accounts[1]});
		const addresskOARZ8I = accounts[2]
		const addressNH3pbg2 = accounts[5]
		const uintLENVoHV = BigInt("1501")
		const addressIvLtjbF = accounts[4]
		const uintH46QHsb = BigInt("1234")
		const addressXdx4KV = accounts[5]
		const uintxx1iMRH = BigInt("475")
		const addressouJTEBv = accounts[4]
		const uintWcmOAy = await afiControllertjAcUJ7.balanceOf.call(addresskOARZ8I, {from: accounts[1]});
		const addressMQd2ZYl = await afiControllertjAcUJ7.setRewards.call(addressNH3pbg2, {from: accounts[0]});
		const addressrjx7zIG = await afiControllertjAcUJ7.inCaseTokensGetStuck.call(addressIvLtjbF, uintLENVoHV, {from: accounts[3]});
		const addressMGuk36L = await afiControllertjAcUJ7.withdraw.call(addressXdx4KV, uintH46QHsb, {from: accounts[0]});
		const addressQAVftBX = await afiControllertjAcUJ7.inCaseTokensGetStuck.call(addressouJTEBv, uintxx1iMRH, {from: accounts[1]});

		await expect(afiControllertjAcUJ7.balanceOf.call(addresskOARZ8I, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressaTQPfdP = "0x0000000000000000000000000000000000000001"
		const afiControllerVUGTRu3 = await afiController.new(addressaTQPfdP, {from: accounts[2]});
		const addressYvR614 = accounts[1]
		const uint8zpxWi = BigInt("1703")
		const addressyqRI2zv = accounts[3]
		const uintDgxFNvG = BigInt("850")
		const addresssMulq13 = accounts[1]
		const addressEddYMk = accounts[5]
		const addressIN1bmFq = await afiControllerVUGTRu3.setRewards.call(addressYvR614, {from: accounts[3]});
		const addresshPOaxC4 = await afiControllerVUGTRu3.earn.call(addressyqRI2zv, uint8zpxWi, {from: accounts[5]});
		const addresssN3Wkyw = await afiControllerVUGTRu3.yearn.call(addressEddYMk, addresssMulq13, uintDgxFNvG, {from: accounts[2]});

		await expect(afiControllerVUGTRu3.setRewards.call(addressYvR614, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressdYQcawO = accounts[1]
		const afiControllerSEtuoq = await afiController.new(addressdYQcawO, {from: accounts[0]});
		const uintLnpURX = BigInt("1242")
		const addresssJ33R8r = accounts[4]
		const address2FqxYP = accounts[1]
		const uintroEMnIj = BigInt("766")
		const addresswRfRxF = accounts[1]
		const addresskqQwtyO = accounts[4]
		const addressbDl1654 = accounts[2]
		const addressaAdg3qT = accounts[2]
		const addressATiQvMJ = accounts[4]
		const addresskqvFYV2 = accounts[4]
		const addresshrXemvv = accounts[5]
		const addressHV8ZRA = await afiControllerSEtuoq.yearn.call(address2FqxYP, addresssJ33R8r, uintLnpURX, {from: accounts[2]});
		const addresskpS66c4 = await afiControllerSEtuoq.earn.call(addresswRfRxF, uintroEMnIj, {from: accounts[4]});
		const addresshSfwi7O = await afiControllerSEtuoq.withdrawAll.call(addresskqQwtyO, {from: accounts[0]});
		const addressJCpEcUc = await afiControllerSEtuoq.setStrategy.call(addressaAdg3qT, addressbDl1654, {from: accounts[0]});
		const addressSLmuhT8 = await afiControllerSEtuoq.approveStrategy.call(addresskqvFYV2, addressATiQvMJ, {from: "0x0000000000000000000000000000000000000001"});
		const addressyUjTKLN = await afiControllerSEtuoq.setStrategist.call(addresshrXemvv, {from: accounts[0]});

		await expect(afiControllerSEtuoq.yearn.call(address2FqxYP, addresssJ33R8r, uintLnpURX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresswJagq23 = accounts[5]
		const afiControllercLFcoGs = await afiController.new(addresswJagq23, {from: accounts[4]});
		const addressDJS5zAs = "0x0000000000000000000000000000000000000001"
		const addressqXYR15D = accounts[2]
		const addressJAD5yVx = accounts[0]
		const addressxuB0qVh = accounts[0]
		const uintZPvjCND = BigInt("1896")
		const addressCDbsNeJ = accounts[5]
		const addresszAfJ4xp = accounts[0]
		const addressTp5XDAe = accounts[5]
		const addressll3MU9L = await afiControllercLFcoGs.setStrategist.call(addressDJS5zAs, {from: "0x0000000000000000000000000000000000000001"});
		const addressYHBHDtx = await afiControllercLFcoGs.setStrategy.call(addressJAD5yVx, addressqXYR15D, {from: accounts[1]});
		const addressHcZBFGM = await afiControllercLFcoGs.setStrategist.call(addressxuB0qVh, {from: accounts[3]});
		const addressPQfkoRV = await afiControllercLFcoGs.earn.call(addressCDbsNeJ, uintZPvjCND, {from: accounts[2]});
		const addresslys3Z2U = await afiControllercLFcoGs.inCaseStrategyTokenGetStuck.call(addressTp5XDAe, addresszAfJ4xp, {from: accounts[2]});

		await expect(afiControllercLFcoGs.setStrategist.call(addressDJS5zAs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressAv0Cz4Q = "0x0000000000000000000000000000000000000001"
		const afiControllerVUGTRu3 = await afiController.new(addressAv0Cz4Q, {from: accounts[2]});
		const uintO7wnfYq = BigInt("864")
		const addressW0Srb9x = accounts[1]
		const addresscAuxEgK = accounts[1]
		const uintPKPskUM = BigInt("1713")
		const addressmCSmLIX = accounts[4]
		const uintgKKok5b = BigInt("628")
		const addresszz3UwNU = accounts[3]
		const uintfyZbegu = BigInt("850")
		const addressfEXPZ8t = "0x0000000000000000000000000000000000000001"
		const addressjQeuGTK = accounts[5]
		const uintsyR3v7J = await afiControllerVUGTRu3.getExpectedReturn.call(addresscAuxEgK, addressW0Srb9x, uintO7wnfYq, {from: accounts[0]});
		const addresshPOaxC4 = await afiControllerVUGTRu3.earn.call(addressmCSmLIX, uintPKPskUM, {from: accounts[5]});
		const addressQPOHJYm = await afiControllerVUGTRu3.earn.call(addresszz3UwNU, uintgKKok5b, {from: accounts[1]});
		const addresssN3Wkyw = await afiControllerVUGTRu3.yearn.call(addressjQeuGTK, addressfEXPZ8t, uintfyZbegu, {from: accounts[2]});

		await expect(afiControllerVUGTRu3.getExpectedReturn.call(addresscAuxEgK, addressW0Srb9x, uintO7wnfYq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressmU5ow2C = "0x0000000000000000000000000000000000000001"
		const afiControllerVUGTRu3 = await afiController.new(addressmU5ow2C, {from: accounts[2]});
		const addressTTUIc4Y = accounts[2]
		const addressWXwEh5x = "0x0000000000000000000000000000000000000001"
		const uintSJykvM1 = BigInt("1148")
		const addressUhEJHso = accounts[5]
		const uintcCf2dI4 = BigInt("825")
		const addressLt7B9j = accounts[1]
		const addressZzUmDvL = accounts[5]
		const addressCeMm2HE = await afiControllerVUGTRu3.revokeStrategy.call(addressWXwEh5x, addressTTUIc4Y, {from: accounts[2]});
		const addressFVZc7rq = await afiControllerVUGTRu3.inCaseTokensGetStuck.call(addressUhEJHso, uintSJykvM1, {from: accounts[2]});
		const addresssN3Wkyw = await afiControllerVUGTRu3.yearn.call(addressZzUmDvL, addressLt7B9j, uintcCf2dI4, {from: accounts[2]});

		await expect(afiControllerVUGTRu3.inCaseTokensGetStuck.call(addressUhEJHso, uintSJykvM1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressyrUQjAf = "0x0000000000000000000000000000000000000001"
		const afiControllerVUGTRu3 = await afiController.new(addressyrUQjAf, {from: accounts[2]});
		const addressOen0Vdq = accounts[2]
		const addressbavGMsW = "0x0000000000000000000000000000000000000001"
		const addressLJ4ZtWG = accounts[3]
		const addressNknmopK = accounts[2]
		const addresspbSzC9 = accounts[1]
		const addressOzBFdVA = accounts[3]
		const uintoL71ojD = BigInt("1842")
		const addressjLmD1jk = accounts[5]
		const addressxPl9a5 = "0x0000000000000000000000000000000000000001"
		const uint0qOm1L = BigInt("825")
		const addressZOVWAiV = accounts[1]
		const addressSuQu3Fx = accounts[5]
		const addressCeMm2HE = await afiControllerVUGTRu3.revokeStrategy.call(addressbavGMsW, addressOen0Vdq, {from: accounts[2]});
		const addressuTsHK7 = await afiControllerVUGTRu3.setConverter.call(addresspbSzC9, addressNknmopK, addressLJ4ZtWG, {from: "0x0000000000000000000000000000000000000001"});
		const addressWV7GtL6 = await afiControllerVUGTRu3.withdrawAll.call(addressOzBFdVA, {from: accounts[3]});
		const addressNqzqMHn = await afiControllerVUGTRu3.yearn.call(addressxPl9a5, addressjLmD1jk, uintoL71ojD, {from: accounts[1]});
		const addresssN3Wkyw = await afiControllerVUGTRu3.yearn.call(addressSuQu3Fx, addressZOVWAiV, uint0qOm1L, {from: accounts[2]});

		await expect(afiControllerVUGTRu3.setConverter.call(addresspbSzC9, addressNknmopK, addressLJ4ZtWG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressRmMdJcQ = accounts[1]
		const afiControllerJBqOoSZ = await afiController.new(addressRmMdJcQ, {from: "0x0000000000000000000000000000000000000001"});
		const addressUTfU35b = accounts[1]
		const addressoaDACQ = accounts[5]
		const addressUNOem3N = accounts[3]
		const addressv9JwzJP = accounts[2]
		const addressMFir6z = accounts[1]
		const uintwQBdAi = BigInt("398")
		const addressVF9ur4U = accounts[1]
		const addressmJMm1z0 = accounts[3]
		const addressGCRa2hL = accounts[3]
		const addressWAodAbT = accounts[0]
		const addressMLoOqR7 = accounts[4]
		const addressAhGqzbj = await afiControllerJBqOoSZ.approveStrategy.call(addressoaDACQ, addressUTfU35b, {from: accounts[2]});
		const addresskEm69ab = await afiControllerJBqOoSZ.setConverter.call(addressMFir6z, addressv9JwzJP, addressUNOem3N, {from: accounts[1]});
		const uintfCxf2CF = await afiControllerJBqOoSZ.getExpectedReturn.call(addressmJMm1z0, addressVF9ur4U, uintwQBdAi, {from: accounts[3]});
		const addressfBLniEP = await afiControllerJBqOoSZ.revokeStrategy.call(addressWAodAbT, addressGCRa2hL, {from: accounts[2]});
		const addressACOFxCC = await afiControllerJBqOoSZ.setRewards.call(addressMLoOqR7, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for afiController', async () => {
		const addressDcnCuVw = "0x0000000000000000000000000000000000000001"
		const afiControllerVUGTRu3 = await afiController.new(addressDcnCuVw, {from: accounts[2]});
		const uintZafVjB3 = BigInt("1479")
		const addressPx73ZLT = accounts[4]
		const addressk0qrTpn = accounts[4]
		const addressvdW8jMY = accounts[3]
		const addressIN2gHN6 = accounts[2]
		const addressajuTadX = accounts[2]
		const uintM7uFS9 = BigInt("1549")
		const addressVovPdGR = accounts[0]
		const addressa8OeKh0 = accounts[2]
		const uinthO4QCM = BigInt("1172")
		const addresstFRNrH = accounts[6]
		const addresszAOU8lY = await afiControllerVUGTRu3.withdraw.call(addressPx73ZLT, uintZafVjB3, {from: accounts[4]});
		const addressyI4fepT = await afiControllerVUGTRu3.inCaseStrategyTokenGetStuck.call(addressvdW8jMY, addressk0qrTpn, {from: accounts[3]});
		const addressyopiIuL = await afiControllerVUGTRu3.setStrategy.call(addressajuTadX, addressIN2gHN6, {from: accounts[2]});
		const uintSeYwMxd = await afiControllerVUGTRu3.getExpectedReturn.call(addressa8OeKh0, addressVovPdGR, uintM7uFS9, {from: accounts[3]});
		const addressFVZc7rq = await afiControllerVUGTRu3.inCaseTokensGetStuck.call(addresstFRNrH, uinthO4QCM, {from: accounts[2]});

		await expect(afiControllerVUGTRu3.withdraw.call(addressPx73ZLT, uintZafVjB3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressYnOdPYT = accounts[4]
		const afiControllerf5Qcihz = await afiController.new(addressYnOdPYT, {from: accounts[4]});
		const addressWG4Hxj4 = accounts[4]
		const addressuci0KWS = "0x0000000000000000000000000000000000000001"
		const uintRzJds1t = BigInt("1857")
		const addressrMcZXLs = accounts[5]
		const addressDvbvj2D = accounts[3]
		const addressCQHz06A = accounts[1]
		const addressXWwx1ZN = accounts[4]
		const addressoD4GSp = accounts[3]
		const addressLmnGP2n = await afiControllerf5Qcihz.setStrategy.call(addressuci0KWS, addressWG4Hxj4, {from: accounts[4]});
		const uintetkrW8W = await afiControllerf5Qcihz.getExpectedReturn.call(addressDvbvj2D, addressrMcZXLs, uintRzJds1t, {from: accounts[0]});
		const addressy2lKv0T = await afiControllerf5Qcihz.setStrategy.call(addressXWwx1ZN, addressCQHz06A, {from: accounts[2]});
		const addressQ2Zxxur = await afiControllerf5Qcihz.setGovernance.call(addressoD4GSp, {from: accounts[0]});

		await expect(afiControllerf5Qcihz.setStrategy.call(addressuci0KWS, addressWG4Hxj4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})