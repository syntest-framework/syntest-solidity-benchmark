const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressuPL6FrT = accounts[2]
		const afiControllerLE6co1Y = await afiController.new(addressuPL6FrT, {from: "0x0000000000000000000000000000000000000001"});
		const addressguN9iPQ = accounts[2]
		const addressadTqXtG = accounts[4]
		const addressrUWi02l = accounts[0]
		const uintb9fDmXt = BigInt("867")
		const addressYNC6dAr = accounts[3]
		const addressSg0QHpP = accounts[3]
		const uintful4r6O = BigInt("732")
		const addressgAWITJR = await afiControllerLE6co1Y.setVault.call(addressadTqXtG, addressguN9iPQ, {from: accounts[2]});
		const addressfLtmqKM = await afiControllerLE6co1Y.setGovernance.call(addressrUWi02l, {from: accounts[4]});
		const address38zI4Z = await afiControllerLE6co1Y.yearn.call(addressSg0QHpP, addressYNC6dAr, uintb9fDmXt, {from: "0x0000000000000000000000000000000000000001"});
		const uintGrodYRY = await afiControllerLE6co1Y.setSplit.call(uintful4r6O, {from: accounts[1]});
	});

	it('test for afiController', async () => {
		const addressFspGthR = accounts[0]
		const afiControllerK6A6jun = await afiController.new(addressFspGthR, {from: accounts[1]});
		const addressEcxkAE = accounts[4]
		const addressqjQGvff = accounts[4]
		const uintiUmLrb5 = BigInt("858")
		const addresstCDccFS = accounts[2]
//		const addressL6wISHf = await afiControllerK6A6jun.setVault.call(addressqjQGvff, addressEcxkAE, {from: accounts[3]});
//		const addressq9r06m1 = await afiControllerK6A6jun.earn.call(addresstCDccFS, uintiUmLrb5, {from: accounts[1]});

		await expect(afiControllerK6A6jun.setVault.call(addressqjQGvff, addressEcxkAE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressOm4lKlP = accounts[3]
		const afiControllerkRTs041 = await afiController.new(addressOm4lKlP, {from: accounts[3]});
		const addressyY8cEY9 = accounts[3]
		const addressaEqEXRg = accounts[1]
		const addressHcycu4l = accounts[3]
		const addresshzh3wdt = accounts[0]
		const addressfjlc3bk = accounts[2]
		const addressymmIrNe = "0x0000000000000000000000000000000000000001"
		const uintG3QTHE1 = BigInt("1433")
		const addressqiPWNnv = accounts[2]
		const addressvkejmlN = accounts[0]
		const addressstsw6Tw = "0x0000000000000000000000000000000000000001"
		const addressUcYopy = accounts[4]
		const uintEM0tPIh = BigInt("1163")
//		const addressFnqbRld = await afiControllerkRTs041.setOneSplit.call(addressyY8cEY9, {from: accounts[5]});
//		const addressq5ViaK = await afiControllerkRTs041.inCaseStrategyTokenGetStuck.call(addressHcycu4l, addressaEqEXRg, {from: accounts[3]});
//		const addressEnH2W3u = await afiControllerkRTs041.setConverter.call(addressymmIrNe, addressfjlc3bk, addresshzh3wdt, {from: accounts[2]});
//		const addresszeS0JV = await afiControllerkRTs041.yearn.call(addressvkejmlN, addressqiPWNnv, uintG3QTHE1, {from: accounts[3]});
//		const addressBmYpxq = await afiControllerkRTs041.inCaseStrategyTokenGetStuck.call(addressUcYopy, addressstsw6Tw, {from: accounts[1]});
//		const uintmzAeuy4 = await afiControllerkRTs041.setSplit.call(uintEM0tPIh, {from: accounts[1]});

		await expect(afiControllerkRTs041.setOneSplit.call(addressyY8cEY9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressFzhHFGB = accounts[1]
		const afiControllerXCT1BtH = await afiController.new(addressFzhHFGB, {from: accounts[4]});
		const address1d3U9P = "0x0000000000000000000000000000000000000001"
		const addressU6f1j1D = "0x0000000000000000000000000000000000000001"
		const addressqsql5ZE = accounts[2]
		const uinthGrpCTr = BigInt("1888")
		const addressTOdEE4K = accounts[5]
		const addressDgOORx3 = accounts[0]
		const addressAaQcbaC = accounts[1]
		const addressTt0na33 = accounts[1]
//		const addressi9yaptV = await afiControllerXCT1BtH.setStrategy.call(addressU6f1j1D, address1d3U9P, {from: accounts[3]});
//		const addressuHmhmI = await afiControllerXCT1BtH.setRewards.call(addressqsql5ZE, {from: accounts[2]});
//		const uintBZ8KK9H = await afiControllerXCT1BtH.getExpectedReturn.call(addressDgOORx3, addressTOdEE4K, uinthGrpCTr, {from: accounts[0]});
//		const addressS6MYph = await afiControllerXCT1BtH.setVault.call(addressTt0na33, addressAaQcbaC, {from: accounts[2]});

		await expect(afiControllerXCT1BtH.setStrategy.call(addressU6f1j1D, address1d3U9P, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressNCPDrbG = accounts[4]
		const afiControllerEaAVo4a = await afiController.new(addressNCPDrbG, {from: accounts[4]});
		const addressrG9b6wg = accounts[1]
		const addressBBcm9Oe = accounts[1]
		const addressocuRGF9 = accounts[1]
		const addresskBNWU4n = accounts[2]
		const addressqupnmm0 = accounts[1]
		const addressg7xktMt = accounts[2]
		const addressFP4D2ft = accounts[4]
		const addressor2Gq0D = accounts[0]
//		const addressp9h07C3 = await afiControllerEaAVo4a.inCaseStrategyTokenGetStuck.call(addressBBcm9Oe, addressrG9b6wg, {from: accounts[5]});
//		const addressLNIqzn8 = await afiControllerEaAVo4a.revokeStrategy.call(addresskBNWU4n, addressocuRGF9, {from: accounts[4]});
//		const addressmxwUW6H = await afiControllerEaAVo4a.setStrategy.call(addressg7xktMt, addressqupnmm0, {from: accounts[2]});
//		const addressBvYvTA = await afiControllerEaAVo4a.inCaseStrategyTokenGetStuck.call(addressor2Gq0D, addressFP4D2ft, {from: accounts[4]});

		await expect(afiControllerEaAVo4a.inCaseStrategyTokenGetStuck.call(addressBBcm9Oe, addressrG9b6wg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressD95ciO = accounts[1]
		const afiControllerAnanJ9i = await afiController.new(addressD95ciO, {from: accounts[4]});
		const addressecoPZmE = accounts[1]
		const addressVGz8qhB = accounts[1]
		const addresshrP6YsK = accounts[3]
		const addresskBGOEM7 = accounts[4]
		const addressoriJLR7 = accounts[3]
		const addressUr9e8oc = accounts[5]
		const uintwHINEpb = BigInt("1619")
		const addressfWcIM7Z = accounts[0]
//		const addressBt74L1W = await afiControllerAnanJ9i.approveStrategy.call(addressVGz8qhB, addressecoPZmE, {from: accounts[2]});
//		const addressdKmG2cL = await afiControllerAnanJ9i.setStrategy.call(addresskBGOEM7, addresshrP6YsK, {from: accounts[0]});
//		const addressXDDuCPw = await afiControllerAnanJ9i.revokeStrategy.call(addressUr9e8oc, addressoriJLR7, {from: accounts[4]});
//		const addressIWN8HQg = await afiControllerAnanJ9i.withdraw.call(addressfWcIM7Z, uintwHINEpb, {from: accounts[3]});

		await expect(afiControllerAnanJ9i.approveStrategy.call(addressVGz8qhB, addressecoPZmE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDgNHBRb = accounts[3]
		const afiControllerWRPM3bm = await afiController.new(addressDgNHBRb, {from: accounts[1]});
		const addressYpaGL1o = accounts[4]
		const addressJHzoZ0Z = accounts[2]
		const addressAxZfsH = accounts[2]
		const uintPdCcw1B = BigInt("120")
		const addressMeUjYQy = accounts[3]
		const addressc8cneuW = accounts[5]
//		const uintztPy0mB = await afiControllerWRPM3bm.balanceOf.call(addressYpaGL1o, {from: accounts[2]});
//		const addressjix8G6i = await afiControllerWRPM3bm.approveStrategy.call(addressAxZfsH, addressJHzoZ0Z, {from: accounts[2]});
//		const addressQoEKcPC = await afiControllerWRPM3bm.yearn.call(addressc8cneuW, addressMeUjYQy, uintPdCcw1B, {from: accounts[0]});

		await expect(afiControllerWRPM3bm.balanceOf.call(addressYpaGL1o, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLJdk8N = accounts[4]
		const afiControllerwVvY1A = await afiController.new(addressLJdk8N, {from: accounts[0]});
		const addressUSomxSF = accounts[5]
		const uintzKRLf4P = BigInt("395")
		const addressz37BrN3 = accounts[4]
		const addressD6pnysp = accounts[1]
		const addressu9UKhdY = accounts[2]
		const addressx67VAAV = accounts[4]
		const addressP4bpVy0 = accounts[5]
		const addresskXfGVfI = accounts[4]
		const addressmZL5bDW = accounts[1]
		const addressoKk5Gj2 = await afiControllerwVvY1A.setGovernance.call(addressUSomxSF, {from: accounts[0]});
//		const addressz4KYqGl = await afiControllerwVvY1A.earn.call(addressz37BrN3, uintzKRLf4P, {from: accounts[3]});
//		const addressjF5TdXA = await afiControllerwVvY1A.revokeStrategy.call(addressu9UKhdY, addressD6pnysp, {from: "0x0000000000000000000000000000000000000001"});
//		const addressituXFNB = await afiControllerwVvY1A.setStrategy.call(addressP4bpVy0, addressx67VAAV, {from: "0x0000000000000000000000000000000000000001"});
//		const addressOa7GwU0 = await afiControllerwVvY1A.approveStrategy.call(addressmZL5bDW, addresskXfGVfI, {from: accounts[2]});

		await expect(afiControllerwVvY1A.earn.call(addressz37BrN3, uintzKRLf4P, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresszvDdb0M = accounts[0]
		const afiControllerkK5mz32 = await afiController.new(addresszvDdb0M, {from: accounts[4]});
		const addressXJcUXXo = accounts[3]
		const addressjrMkypp = accounts[5]
		const addressrXg6HZP = accounts[3]
		const addressBwXDlmx = accounts[3]
		const addresswK55UqZ = accounts[2]
		const uintuJcZfP = BigInt("129")
		const addressFn2Qkjb = accounts[3]
//		const addressOlhRue = await afiControllerkK5mz32.setConverter.call(addressrXg6HZP, addressjrMkypp, addressXJcUXXo, {from: accounts[3]});
//		const addressVreFRSn = await afiControllerkK5mz32.setOneSplit.call(addressBwXDlmx, {from: accounts[0]});
//		const addresstLDJrDB = await afiControllerkK5mz32.setOneSplit.call(addresswK55UqZ, {from: accounts[4]});
//		const addresspFUJ982 = await afiControllerkK5mz32.withdraw.call(addressFn2Qkjb, uintuJcZfP, {from: accounts[5]});

		await expect(afiControllerkK5mz32.setConverter.call(addressrXg6HZP, addressjrMkypp, addressXJcUXXo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressFfKYclj = accounts[4]
		const afiControllerwVvY1A = await afiController.new(addressFfKYclj, {from: accounts[0]});
		const uinteCIx0Sg = BigInt("1449")
		const addresscFs9vVF = accounts[5]
		const uintYQExlPu = BigInt("1327")
		const addressyBrPASV = accounts[3]
		const uintgeNPPB = BigInt("395")
		const addresso8tMEFK = accounts[5]
		const addresspSKD8W4 = accounts[2]
		const addressYcLn1dt = accounts[2]
		const addressOApcPrE = accounts[4]
		const addressKId9Lb = accounts[1]
//		const uintNoCZIY5 = await afiControllerwVvY1A.setSplit.call(uinteCIx0Sg, {from: accounts[1]});
//		const addressoKk5Gj2 = await afiControllerwVvY1A.setGovernance.call(addresscFs9vVF, {from: accounts[0]});
//		const addresszjpHaR4 = await afiControllerwVvY1A.withdraw.call(addressyBrPASV, uintYQExlPu, {from: accounts[2]});
//		const addressz4KYqGl = await afiControllerwVvY1A.earn.call(addresso8tMEFK, uintgeNPPB, {from: accounts[3]});
//		const addressz3WwDB = await afiControllerwVvY1A.revokeStrategy.call(addressYcLn1dt, addresspSKD8W4, {from: "0x0000000000000000000000000000000000000001"});
//		const addressOa7GwU0 = await afiControllerwVvY1A.approveStrategy.call(addressKId9Lb, addressOApcPrE, {from: accounts[2]});

		await expect(afiControllerwVvY1A.setSplit.call(uinteCIx0Sg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressaEWs7Fr = accounts[0]
		const afiControllerkK5mz32 = await afiController.new(addressaEWs7Fr, {from: accounts[4]});
		const uintLdnt4gK = BigInt("249")
		const addressnBiqytd = accounts[4]
		const addressUKFGOKv = accounts[0]
		const addressHWYSwuc = accounts[3]
		const addressn5AATL = accounts[5]
		const addressuUgGHT4 = accounts[3]
		const addressomOvYF = accounts[3]
		const addressJWu8UVJ = accounts[4]
		const addresswFT4bCV = accounts[2]
		const uintjgbGOTu = BigInt("129")
		const addressIdRpUEG = accounts[4]
//		const addressMxdm37T = await afiControllerkK5mz32.yearn.call(addressUKFGOKv, addressnBiqytd, uintLdnt4gK, {from: accounts[1]});
//		const addressOlhRue = await afiControllerkK5mz32.setConverter.call(addressuUgGHT4, addressn5AATL, addressHWYSwuc, {from: accounts[3]});
//		const addressVreFRSn = await afiControllerkK5mz32.setOneSplit.call(addressomOvYF, {from: accounts[0]});
//		const addressFae7GND = await afiControllerkK5mz32.setGovernance.call(addressJWu8UVJ, {from: accounts[4]});
//		const addresstLDJrDB = await afiControllerkK5mz32.setOneSplit.call(addresswFT4bCV, {from: accounts[4]});
//		const addresspFUJ982 = await afiControllerkK5mz32.withdraw.call(addressIdRpUEG, uintjgbGOTu, {from: accounts[5]});

		await expect(afiControllerkK5mz32.yearn.call(addressUKFGOKv, addressnBiqytd, uintLdnt4gK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressNihsBn = accounts[1]
		const afiControllerubl93Gq = await afiController.new(addressNihsBn, {from: accounts[3]});
		const addressuUL6hX2 = accounts[3]
		const addressXcgJpU = accounts[4]
//		const addressO6Tnw22 = await afiControllerubl93Gq.setStrategist.call(addressuUL6hX2, {from: accounts[5]});
//		const addressiQV0j7T = await afiControllerubl93Gq.withdrawAll.call(addressXcgJpU, {from: accounts[1]});

		await expect(afiControllerubl93Gq.setStrategist.call(addressuUL6hX2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressnKMZcb6 = accounts[4]
		const afiControllerwVvY1A = await afiController.new(addressnKMZcb6, {from: accounts[0]});
		const uintTgbQLFZ = BigInt("452")
		const addressGELStPd = "0x0000000000000000000000000000000000000001"
		const addressVrEqbf = accounts[4]
		const addresswNWEh7u = accounts[2]
		const addressDhWaF2j = accounts[0]
		const addressNTg0X2r = accounts[4]
		const addressZElSRqv = accounts[1]
//		const addressnQxlxDH = await afiControllerwVvY1A.inCaseTokensGetStuck.call(addressGELStPd, uintTgbQLFZ, {from: accounts[1]});
//		const addressButKPHD = await afiControllerwVvY1A.inCaseStrategyTokenGetStuck.call(addresswNWEh7u, addressVrEqbf, {from: accounts[5]});
//		const addressNb9KDFJ = await afiControllerwVvY1A.setOneSplit.call(addressDhWaF2j, {from: accounts[0]});
//		const addressOa7GwU0 = await afiControllerwVvY1A.approveStrategy.call(addressZElSRqv, addressNTg0X2r, {from: accounts[2]});

		await expect(afiControllerwVvY1A.inCaseTokensGetStuck.call(addressGELStPd, uintTgbQLFZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresseek6lrG = accounts[0]
		const afiControllerK6A6jun = await afiController.new(addresseek6lrG, {from: accounts[1]});
		const addressPQGTwse = accounts[5]
		const addressqS5c5S = accounts[4]
		const addressXS7Mwcr = accounts[4]
		const uintOs81yC1 = BigInt("1722")
		const addressv3ZRpqw = accounts[2]
//		const addressqunj0Q2 = await afiControllerK6A6jun.setRewards.call(addressPQGTwse, {from: accounts[3]});
//		const addressL6wISHf = await afiControllerK6A6jun.setVault.call(addressXS7Mwcr, addressqS5c5S, {from: accounts[3]});
//		const addressq9r06m1 = await afiControllerK6A6jun.earn.call(addressv3ZRpqw, uintOs81yC1, {from: accounts[1]});

		await expect(afiControllerK6A6jun.setRewards.call(addressPQGTwse, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresstxjWxUY = accounts[4]
		const afiControllerwVvY1A = await afiController.new(addresstxjWxUY, {from: accounts[0]});
		const addressEr5oBzy = accounts[5]
		const addressrElBJ0z = accounts[1]
		const addressIhStecz = accounts[5]
		const addresszWtdDFO = accounts[5]
		const addressMNIjbdz = accounts[0]
		const addressoZC8TzD = accounts[4]
		const addressOLe3KrY = accounts[1]
		const addresslIHciL0 = await afiControllerwVvY1A.setVault.call(addressrElBJ0z, addressEr5oBzy, {from: accounts[0]});
		const addressoKk5Gj2 = await afiControllerwVvY1A.setGovernance.call(addressIhStecz, {from: accounts[0]});
//		const addressituXFNB = await afiControllerwVvY1A.setStrategy.call(addressMNIjbdz, addresszWtdDFO, {from: "0x0000000000000000000000000000000000000001"});
//		const addressOa7GwU0 = await afiControllerwVvY1A.approveStrategy.call(addressOLe3KrY, addressoZC8TzD, {from: accounts[2]});

		await expect(afiControllerwVvY1A.setStrategy.call(addressMNIjbdz, addresszWtdDFO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressmlFR5Bs = accounts[2]
		const afiControllerDtrQkjb = await afiController.new(addressmlFR5Bs, {from: accounts[1]});
		const uintVhktCf1 = BigInt("490")
		const addresszJHP5tV = accounts[1]
		const addressNnH29g = accounts[0]
		const addresssYc6BbO = accounts[2]
		const addressiXkb6VL = accounts[1]
		const uintCY2nzhL = BigInt("1560")
		const addressStqO1XD = accounts[4]
		const addressIEGaJqZ = accounts[0]
//		const uintAnBsmJi = await afiControllerDtrQkjb.getExpectedReturn.call(addressNnH29g, addresszJHP5tV, uintVhktCf1, {from: accounts[0]});
//		const addressRyda9V2 = await afiControllerDtrQkjb.withdrawAll.call(addresssYc6BbO, {from: accounts[2]});
//		const addressI5SOSd1 = await afiControllerDtrQkjb.withdrawAll.call(addressiXkb6VL, {from: accounts[3]});
//		const uintfeO39Dm = await afiControllerDtrQkjb.getExpectedReturn.call(addressIEGaJqZ, addressStqO1XD, uintCY2nzhL, {from: accounts[5]});

		await expect(afiControllerDtrQkjb.getExpectedReturn.call(addressNnH29g, addresszJHP5tV, uintVhktCf1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressHmVnvNW = accounts[1]
		const afiControllerubl93Gq = await afiController.new(addressHmVnvNW, {from: accounts[3]});
		const addressY8pFGXS = accounts[4]
//		const addressiQV0j7T = await afiControllerubl93Gq.withdrawAll.call(addressY8pFGXS, {from: accounts[1]});

		await expect(afiControllerubl93Gq.withdrawAll.call(addressY8pFGXS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressVrJgrVk = accounts[0]
		const afiControllerkK5mz32 = await afiController.new(addressVrJgrVk, {from: accounts[4]});
		const uintusaMgd3 = BigInt("1974")
		const addresskRsBx8A = accounts[2]
		const addressMJ5OL2d = accounts[3]
		const addressTUBQfEv = accounts[5]
		const addressKNB3zvf = accounts[5]
		const addressz15IIDm = accounts[2]
		const uintOtbJtuA = BigInt("127")
		const addresssjKXNtZ = accounts[3]
//		const addressC61caki = await afiControllerkK5mz32.inCaseTokensGetStuck.call(addresskRsBx8A, uintusaMgd3, {from: accounts[4]});
//		const addressOlhRue = await afiControllerkK5mz32.setConverter.call(addressKNB3zvf, addressTUBQfEv, addressMJ5OL2d, {from: accounts[3]});
//		const addresstLDJrDB = await afiControllerkK5mz32.setOneSplit.call(addressz15IIDm, {from: accounts[4]});
//		const addresspFUJ982 = await afiControllerkK5mz32.withdraw.call(addresssjKXNtZ, uintOtbJtuA, {from: accounts[5]});

		await expect(afiControllerkK5mz32.inCaseTokensGetStuck.call(addresskRsBx8A, uintusaMgd3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressRVUeOPK = accounts[4]
		const afiControllerwVvY1A = await afiController.new(addressRVUeOPK, {from: accounts[0]});
		const addresslfhfbxh = accounts[6]
		const uintZd7w6KS = BigInt("1505")
		const addressIS2g9Aj = accounts[1]
		const addressJgQEUX = accounts[3]
		const addresscMMQxRt = accounts[4]
		const addressY3fNMz1 = accounts[1]
		const addressoKk5Gj2 = await afiControllerwVvY1A.setGovernance.call(addresslfhfbxh, {from: accounts[0]});
//		const addressxuWuH0 = await afiControllerwVvY1A.withdraw.call(addressIS2g9Aj, uintZd7w6KS, {from: accounts[2]});
//		const addressO8wBaSK = await afiControllerwVvY1A.setRewards.call(addressJgQEUX, {from: accounts[4]});
//		const addressOa7GwU0 = await afiControllerwVvY1A.approveStrategy.call(addressY3fNMz1, addresscMMQxRt, {from: accounts[2]});

		await expect(afiControllerwVvY1A.withdraw.call(addressIS2g9Aj, uintZd7w6KS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressywqD6RC = accounts[0]
		const afiControllerK6A6jun = await afiController.new(addressywqD6RC, {from: accounts[1]});
		const uintG9r6amD = BigInt("878")
		const addressRHreQ20 = accounts[1]
		const addresstmsOtGm = accounts[3]
		const uintxjJpd9m = BigInt("858")
		const addresscWJVblk = accounts[2]
//		const addressmI4oj1f = await afiControllerK6A6jun.yearn.call(addresstmsOtGm, addressRHreQ20, uintG9r6amD, {from: accounts[1]});
//		const addressq9r06m1 = await afiControllerK6A6jun.earn.call(addresscWJVblk, uintxjJpd9m, {from: accounts[1]});

		await expect(afiControllerK6A6jun.yearn.call(addresstmsOtGm, addressRHreQ20, uintG9r6amD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressCfnVIib = accounts[1]
		const afiControllerPrrl4sP = await afiController.new(addressCfnVIib, {from: accounts[4]});
		const uintZPVyUS2 = BigInt("1370")
		const addressz09nk3B = accounts[0]
		const uintndgctFE = BigInt("905")
		const addressTtXcas2 = accounts[1]
		const uintoxwbnSm = await afiControllerPrrl4sP.setSplit.call(uintZPVyUS2, {from: accounts[4]});
//		const uintku876g = await afiControllerPrrl4sP.balanceOf.call(addressz09nk3B, {from: accounts[2]});
//		const addressoIqLP8H = await afiControllerPrrl4sP.inCaseTokensGetStuck.call(addressTtXcas2, uintndgctFE, {from: accounts[2]});

		await expect(afiControllerPrrl4sP.balanceOf.call(addressz09nk3B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresscRaIdga = accounts[0]
		const afiControllerFzX4AfG = await afiController.new(addresscRaIdga, {from: accounts[4]});
		const addresshd4oVen = accounts[4]
		const addresskg3DyZ = accounts[2]
		const uintFrXxGHC = BigInt("1554")
		const addressDjD5VkO = "0x0000000000000000000000000000000000000001"
		const addressTQ5Ss9B = accounts[3]
		const uintReSSFss = BigInt("1044")
		const addressK2lzfC9 = "0x0000000000000000000000000000000000000001"
		const addressXPjKUm6 = accounts[2]
		const addressKyU9yE3 = accounts[5]
//		const addressCjM6r9N = await afiControllerFzX4AfG.revokeStrategy.call(addresskg3DyZ, addresshd4oVen, {from: accounts[5]});
//		const uintGtDSMuv = await afiControllerFzX4AfG.getExpectedReturn.call(addressTQ5Ss9B, addressDjD5VkO, uintFrXxGHC, {from: accounts[5]});
//		const addresshBgePrX = await afiControllerFzX4AfG.inCaseTokensGetStuck.call(addressK2lzfC9, uintReSSFss, {from: accounts[2]});
//		const addressICURD5A = await afiControllerFzX4AfG.approveStrategy.call(addressKyU9yE3, addressXPjKUm6, {from: accounts[2]});

		await expect(afiControllerFzX4AfG.revokeStrategy.call(addresskg3DyZ, addresshd4oVen, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressSuUWI2I = accounts[0]
		const afiControllerkK5mz32 = await afiController.new(addressSuUWI2I, {from: accounts[4]});
		const addressysUtB0i = accounts[2]
		const addresstLDJrDB = await afiControllerkK5mz32.setOneSplit.call(addressysUtB0i, {from: accounts[4]});
	});

	it('test for afiController', async () => {
		const addressc9vo6gQ = accounts[0]
		const afiControllerK6A6jun = await afiController.new(addressc9vo6gQ, {from: accounts[1]});
		const addressi3ebuT = accounts[0]
		const addresskvCjIcO = accounts[4]
		const addressUd79xw = accounts[4]
		const uintkmTcmvd = BigInt("908")
		const addressQFXjeeq = accounts[4]
		const addressqUzf3ME = accounts[0]
		const addresswgPeYJD = accounts[4]
//		const addressl0AXJ5K = await afiControllerK6A6jun.setStrategy.call(addresskvCjIcO, addressi3ebuT, {from: accounts[1]});
//		const uintM1OAFLU = await afiControllerK6A6jun.balanceOf.call(addressUd79xw, {from: accounts[4]});
//		const addressuEDC2QL = await afiControllerK6A6jun.inCaseTokensGetStuck.call(addressQFXjeeq, uintkmTcmvd, {from: accounts[3]});
//		const addressL6wISHf = await afiControllerK6A6jun.setVault.call(addresswgPeYJD, addressqUzf3ME, {from: accounts[3]});

		await expect(afiControllerK6A6jun.setStrategy.call(addresskvCjIcO, addressi3ebuT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressShW6of1 = accounts[0]
		const afiControllerK6A6jun = await afiController.new(addressShW6of1, {from: accounts[1]});
		const addressTsDLqVJ = accounts[0]
		const addresstxLxAkD = accounts[4]
		const uintp767Kzv = BigInt("856")
		const addressDlFeddL = accounts[2]
		const addresstqbz2nP = accounts[3]
//		const addressXD833xy = await afiControllerK6A6jun.inCaseStrategyTokenGetStuck.call(addresstxLxAkD, addressTsDLqVJ, {from: accounts[1]});
//		const addressmI4oj1f = await afiControllerK6A6jun.yearn.call(addresstqbz2nP, addressDlFeddL, uintp767Kzv, {from: accounts[1]});

		await expect(afiControllerK6A6jun.inCaseStrategyTokenGetStuck.call(addresstxLxAkD, addressTsDLqVJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressUbtAWHZ = accounts[4]
		const afiControllerwVvY1A = await afiController.new(addressUbtAWHZ, {from: accounts[0]});
		const addressfZ6I2G6 = accounts[3]
		const addressjADjhB = accounts[2]
		const addressmD4CjuG = accounts[5]
		const addressQmBNDXL = accounts[1]
		const addressy1Zcm1 = await afiControllerwVvY1A.approveStrategy.call(addressjADjhB, addressfZ6I2G6, {from: accounts[0]});
//		const addressOa7GwU0 = await afiControllerwVvY1A.approveStrategy.call(addressQmBNDXL, addressmD4CjuG, {from: accounts[2]});

		await expect(afiControllerwVvY1A.approveStrategy.call(addressQmBNDXL, addressmD4CjuG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressFiVBa8v = accounts[4]
		const afiControllerwVvY1A = await afiController.new(addressFiVBa8v, {from: accounts[0]});
		const addressHaPXSs1 = accounts[3]
		const addressLRVaeAE = accounts[2]
		const uintiRGsXug = BigInt("695")
		const addressT5s3cyu = accounts[2]
		const uintUk62NoT = BigInt("732")
		const addressgpHL4Nr = accounts[1]
		const addressOeqkv2P = accounts[3]
		const addressMXM1EKs = accounts[3]
		const addressWxgQMMG = await afiControllerwVvY1A.revokeStrategy.call(addressLRVaeAE, addressHaPXSs1, {from: accounts[0]});
//		const addresslvOCx0Z = await afiControllerwVvY1A.inCaseTokensGetStuck.call(addressT5s3cyu, uintiRGsXug, {from: accounts[2]});
//		const addressxuWuH0 = await afiControllerwVvY1A.withdraw.call(addressgpHL4Nr, uintUk62NoT, {from: accounts[2]});
//		const addressMGwYVfU = await afiControllerwVvY1A.setVault.call(addressMXM1EKs, addressOeqkv2P, {from: accounts[1]});

		await expect(afiControllerwVvY1A.inCaseTokensGetStuck.call(addressT5s3cyu, uintiRGsXug, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressiDqcFFG = accounts[0]
		const afiControllerK6A6jun = await afiController.new(addressiDqcFFG, {from: accounts[1]});
		const addresstToSIM = accounts[3]
		const addressdOYVwtr = accounts[5]
		const addressibGkQ6q = accounts[2]
		const addressBMknUHh = accounts[6]
		const addressssq1rs3 = await afiControllerK6A6jun.setConverter.call(addressibGkQ6q, addressdOYVwtr, addresstToSIM, {from: accounts[1]});
//		const addressqunj0Q2 = await afiControllerK6A6jun.setRewards.call(addressBMknUHh, {from: accounts[3]});

		await expect(afiControllerK6A6jun.setRewards.call(addressBMknUHh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresshagTxr = accounts[1]
		const afiControllerubl93Gq = await afiController.new(addresshagTxr, {from: accounts[3]});
		const addressZzp4zkV = accounts[0]
		const addressGdL7ZZh = accounts[1]
		const addressYssKNw0 = accounts[5]
		const addressGQyS8xG = await afiControllerubl93Gq.setStrategist.call(addressZzp4zkV, {from: accounts[3]});
		const addressj48S22K = await afiControllerubl93Gq.setGovernance.call(addressGdL7ZZh, {from: accounts[3]});
//		const addressiQV0j7T = await afiControllerubl93Gq.withdrawAll.call(addressYssKNw0, {from: accounts[1]});

		await expect(afiControllerubl93Gq.withdrawAll.call(addressYssKNw0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressUABf4No = accounts[0]
		const afiControllerkK5mz32 = await afiController.new(addressUABf4No, {from: accounts[4]});
		const addresst9L6H11 = accounts[5]
		const uintpU2xKD = BigInt("1974")
		const addressRfgi7x4 = accounts[3]
		const addressDn4xevX = await afiControllerkK5mz32.setRewards.call(addresst9L6H11, {from: accounts[4]});
//		const addressC61caki = await afiControllerkK5mz32.inCaseTokensGetStuck.call(addressRfgi7x4, uintpU2xKD, {from: accounts[4]});

		await expect(afiControllerkK5mz32.inCaseTokensGetStuck.call(addressRfgi7x4, uintpU2xKD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvk02sxl = accounts[0]
		const afiControllerEBZld9m = await afiController.new(addressvk02sxl, {from: accounts[2]});
		const addressXK0NE6 = accounts[5]
		const addresst4VOtDn = accounts[4]
		const uintdRiW6La = BigInt("1055")
		const addressnU3fjSN = accounts[3]
		const addressjx7Jlld = accounts[2]
		const addresshNkbh6M = accounts[1]
		const addressqYjGor7 = accounts[0]
//		const addressM6gPbuZ = await afiControllerEBZld9m.withdrawAll.call(addressXK0NE6, {from: accounts[2]});
//		const addressRLltZY5 = await afiControllerEBZld9m.withdrawAll.call(addresst4VOtDn, {from: accounts[4]});
//		const uintf1etFA = await afiControllerEBZld9m.setSplit.call(uintdRiW6La, {from: "0x0000000000000000000000000000000000000001"});
//		const addressFqhGQuy = await afiControllerEBZld9m.approveStrategy.call(addressjx7Jlld, addressnU3fjSN, {from: accounts[4]});
//		const addressx5zh1a4 = await afiControllerEBZld9m.inCaseStrategyTokenGetStuck.call(addressqYjGor7, addresshNkbh6M, {from: accounts[2]});

		await expect(afiControllerEBZld9m.withdrawAll.call(addressXK0NE6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})