const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressMXlObY = accounts[0]
		const ControllerkcxheAA = await Controller.new(addressMXlObY, {from: accounts[4]});
		const uinthLTLUq = BigInt("1749")
		const addressYvemlZM = accounts[1]
		const addressKQcyvnR = accounts[3]
		const addressZYT1dZz = "0x0000000000000000000000000000000000000001"
		const addressn6Oodn7 = accounts[3]
		const addressqiVuu23 = accounts[0]
		const addresstt4Lnle = accounts[1]
		const uintV5XkP6o = BigInt("1527")
		const addressObQJt8i = accounts[0]
		const uintnCTXfsQ = await ControllerkcxheAA.setSplit.call(uinthLTLUq, {from: accounts[2]});
		const addressOeLlnVc = await ControllerkcxheAA.revokeStrategy.call(addressKQcyvnR, addressYvemlZM, {from: accounts[2]});
		const address2dEAoK = await ControllerkcxheAA.inCaseStrategyTokenGetStuck.call(addressn6Oodn7, addressZYT1dZz, {from: accounts[1]});
		const addressTPM4bNP = await ControllerkcxheAA.setGovernance.call(addressqiVuu23, {from: accounts[0]});
		const addresslH6NVuG = await ControllerkcxheAA.setOneSplit.call(addresstt4Lnle, {from: accounts[4]});
		const addressTzyQFCq = await ControllerkcxheAA.inCaseTokensGetStuck.call(addressObQJt8i, uintV5XkP6o, {from: accounts[4]});

		await expect(ControllerkcxheAA.setSplit.call(uinthLTLUq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresshqMYYHx = accounts[2]
		const ControllerBfLDPjO = await Controller.new(addresshqMYYHx, {from: accounts[2]});
		const addressHiORgx7 = accounts[2]
		const addresslSuOgae = accounts[0]
		const addressb3pCofJ = accounts[4]
		const addressketqC63 = accounts[2]
		const addressO3IO5q = accounts[1]
		const addressKyfHzci = accounts[3]
		const addressHtL3Hfi = accounts[4]
		const addressy8A6GtO = "0x0000000000000000000000000000000000000001"
		const addressF2NBsuK = accounts[0]
		const addressRAKVZv = await ControllerBfLDPjO.inCaseStrategyTokenGetStuck.call(addresslSuOgae, addressHiORgx7, {from: accounts[5]});
		const addressJYfPIOP = await ControllerBfLDPjO.setConverter.call(addressO3IO5q, addressketqC63, addressb3pCofJ, {from: accounts[2]});
		const addressHO7sRMi = await ControllerBfLDPjO.setVault.call(addressHtL3Hfi, addressKyfHzci, {from: accounts[3]});
		const addressSQXIUiG = await ControllerBfLDPjO.withdrawAll.call(addressy8A6GtO, {from: accounts[4]});
		const addresstZkMeJ1 = await ControllerBfLDPjO.setGovernance.call(addressF2NBsuK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerBfLDPjO.inCaseStrategyTokenGetStuck.call(addresslSuOgae, addressHiORgx7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressHiuVlRZ = "0x0000000000000000000000000000000000000001"
		const ControllerHNcxdHt = await Controller.new(addressHiuVlRZ, {from: accounts[4]});
		const uintIhEhk11 = BigInt("1211")
		const addressRrxOQP = accounts[1]
		const addresszYnRDb7 = accounts[4]
		const uintQ9qNtw = BigInt("1529")
		const addressk6KTxp = accounts[2]
		const addresswtmKCaE = accounts[3]
		const addressjuUfDAV = "0x0000000000000000000000000000000000000001"
		const addressRVx5Lrv = accounts[3]
		const addressm1H2Jl6 = accounts[3]
		const addressae61I4 = accounts[1]
		const addressF6avCM = accounts[0]
		const addressQKJNqw8 = accounts[1]
		const addresszbZw8Z1 = await ControllerHNcxdHt.yearn.call(addresszYnRDb7, addressRrxOQP, uintIhEhk11, {from: accounts[1]});
		const uintUA5L4Dm = await ControllerHNcxdHt.getExpectedReturn.call(addresswtmKCaE, addressk6KTxp, uintQ9qNtw, {from: "0x0000000000000000000000000000000000000001"});
		const addressQy0tph = await ControllerHNcxdHt.revokeStrategy.call(addressRVx5Lrv, addressjuUfDAV, {from: accounts[2]});
		const addressvgaPjMy = await ControllerHNcxdHt.setStrategy.call(addressae61I4, addressm1H2Jl6, {from: "0x0000000000000000000000000000000000000001"});
		const addressxV1SmBH = await ControllerHNcxdHt.approveStrategy.call(addressQKJNqw8, addressF6avCM, {from: accounts[1]});

		await expect(ControllerHNcxdHt.yearn.call(addresszYnRDb7, addressRrxOQP, uintIhEhk11, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressELF9OYX = accounts[4]
		const ControllerVAsf1WH = await Controller.new(addressELF9OYX, {from: "0x0000000000000000000000000000000000000001"});
		const addressleprh6P = accounts[4]
		const addressfB6DBPZ = accounts[3]
		const addresstB3B0E = "0x0000000000000000000000000000000000000001"
		const addresslBsjwP = accounts[4]
		const addresst9FoK57 = accounts[3]
		const addressKpMVAOJ = accounts[1]
		const addressfZgoBE2 = accounts[5]
		const addressSQSs5cN = "0x0000000000000000000000000000000000000001"
		const addressIp8VNVu = "0x0000000000000000000000000000000000000001"
		const uintVYP8u1f = BigInt("1240")
		const addressFOfsyzb = accounts[3]
		const addressD5XvJEp = await ControllerVAsf1WH.setConverter.call(addresstB3B0E, addressfB6DBPZ, addressleprh6P, {from: accounts[1]});
		const addressWcUseH = await ControllerVAsf1WH.revokeStrategy.call(addresst9FoK57, addresslBsjwP, {from: accounts[4]});
		const addressEAZu2wg = await ControllerVAsf1WH.setOneSplit.call(addressKpMVAOJ, {from: accounts[0]});
		const addressW1gQc8O = await ControllerVAsf1WH.setStrategy.call(addressSQSs5cN, addressfZgoBE2, {from: accounts[3]});
		const addressXBlLqQ = await ControllerVAsf1WH.setRewards.call(addressIp8VNVu, {from: accounts[4]});
		const addressBkDMjM = await ControllerVAsf1WH.earn.call(addressFOfsyzb, uintVYP8u1f, {from: accounts[3]});
	});

	it('test for Controller', async () => {
		const addressOpRIpaZ = accounts[5]
		const ControllerUG4qRK = await Controller.new(addressOpRIpaZ, {from: accounts[0]});
		const uintzXYmxXf = BigInt("382")
		const addresspgyhNIB = accounts[4]
		const addressqzrIWs = accounts[2]
		const addresso6syuWa = accounts[1]
		const uintw0AW7z9 = BigInt("1327")
		const addressEXiGRJ1 = accounts[3]
		const addressg77Lse4 = await ControllerUG4qRK.inCaseTokensGetStuck.call(addresspgyhNIB, uintzXYmxXf, {from: accounts[0]});
		const addressRNigYPj = await ControllerUG4qRK.setStrategy.call(addresso6syuWa, addressqzrIWs, {from: accounts[1]});
		const uintr1pbZzF = await ControllerUG4qRK.setSplit.call(uintw0AW7z9, {from: accounts[1]});
		const addressdR6icDr = await ControllerUG4qRK.withdrawAll.call(addressEXiGRJ1, {from: accounts[2]});

		await expect(ControllerUG4qRK.inCaseTokensGetStuck.call(addresspgyhNIB, uintzXYmxXf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressLFCSVZl = accounts[0]
		const ControllerUJAw00Z = await Controller.new(addressLFCSVZl, {from: accounts[3]});
		const addressLeyCMd8 = accounts[3]
		const addressjTTuRHk = accounts[2]
		const addressjylTWnD = accounts[1]
		const addressYVUlzpU = await ControllerUJAw00Z.setStrategist.call(addressLeyCMd8, {from: accounts[3]});
		const addressE9owsA2 = await ControllerUJAw00Z.revokeStrategy.call(addressjylTWnD, addressjTTuRHk, {from: accounts[0]});

		await expect(ControllerUJAw00Z.revokeStrategy.call(addressjylTWnD, addressjTTuRHk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresswFEq33y = accounts[3]
		const ControllerSXDz03o = await Controller.new(addresswFEq33y, {from: accounts[5]});
		const addressGsei3m = accounts[0]
		const addressX4rdAo = accounts[3]
		const uintuv9dlkA = BigInt("998")
		const addressxCe3nkP = accounts[1]
		const uintzyuo9Xt = BigInt("300")
		const addressJ0U3nP = accounts[1]
		const addressrn8tnGR = accounts[2]
		const addressmozE2Ub = accounts[5]
		const addressIZvtQyL = await ControllerSXDz03o.setVault.call(addressX4rdAo, addressGsei3m, {from: accounts[5]});
		const addressUFi6xvC = await ControllerSXDz03o.earn.call(addressxCe3nkP, uintuv9dlkA, {from: accounts[0]});
		const uintP6S47zt = await ControllerSXDz03o.setSplit.call(uintzyuo9Xt, {from: accounts[0]});
		const addressJunzPNL = await ControllerSXDz03o.setOneSplit.call(addressJ0U3nP, {from: accounts[1]});
		const addressIZUM46J = await ControllerSXDz03o.approveStrategy.call(addressmozE2Ub, addressrn8tnGR, {from: accounts[0]});

		await expect(ControllerSXDz03o.earn.call(addressxCe3nkP, uintuv9dlkA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressyK4XA4k = accounts[3]
		const ControllersuWARH = await Controller.new(addressyK4XA4k, {from: accounts[5]});
		const addressHb8Guo9 = accounts[1]
		const uintgQlsip = BigInt("418")
		const addressHDuO0QK = accounts[3]
		const addressbM65M0 = accounts[1]
		const uintkP3cmk = BigInt("1739")
		const addressv22wXhr = accounts[1]
		const addresspc3lfR2 = accounts[3]
		const addressJMjiVOf = "0x0000000000000000000000000000000000000001"
		const addressOMwKTCI = accounts[1]
		const addressRr7w5HH = accounts[2]
		const addressPW2mvaZ = await ControllersuWARH.setOneSplit.call(addressHb8Guo9, {from: accounts[4]});
		const uint7u8EBI = await ControllersuWARH.getExpectedReturn.call(addressbM65M0, addressHDuO0QK, uintgQlsip, {from: accounts[0]});
		const addresslA86nTN = await ControllersuWARH.withdraw.call(addressv22wXhr, uintkP3cmk, {from: "0x0000000000000000000000000000000000000001"});
		const addressKkMZ2C = await ControllersuWARH.approveStrategy.call(addressJMjiVOf, addresspc3lfR2, {from: accounts[2]});
		const addressBtQnO4A = await ControllersuWARH.setStrategy.call(addressRr7w5HH, addressOMwKTCI, {from: accounts[0]});

		await expect(ControllersuWARH.setOneSplit.call(addressHb8Guo9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressQtofhcZ = accounts[0]
		const ControllerkcxheAA = await Controller.new(addressQtofhcZ, {from: accounts[4]});
		const addressfKnPQnq = accounts[2]
		const addressWAXMB6Q = accounts[0]
		const uintKYgULCy = BigInt("1749")
		const addressQUW30aY = accounts[1]
		const addressvBAC61z = accounts[3]
		const addresshgiGKcM = "0x0000000000000000000000000000000000000001"
		const addressiFRzgzO = accounts[3]
		const addressjcESnX = accounts[1]
		const addressHO7g9J = accounts[1]
		const uintip2SNc7 = BigInt("1527")
		const addressiN0peD9 = accounts[0]
		const addresszXYUqX = await ControllerkcxheAA.setStrategy.call(addressWAXMB6Q, addressfKnPQnq, {from: accounts[2]});
		const uintnCTXfsQ = await ControllerkcxheAA.setSplit.call(uintKYgULCy, {from: accounts[2]});
		const addressOeLlnVc = await ControllerkcxheAA.revokeStrategy.call(addressvBAC61z, addressQUW30aY, {from: accounts[2]});
		const address2dEAoK = await ControllerkcxheAA.inCaseStrategyTokenGetStuck.call(addressiFRzgzO, addresshgiGKcM, {from: accounts[1]});
		const addressTPM4bNP = await ControllerkcxheAA.setGovernance.call(addressjcESnX, {from: accounts[0]});
		const addresslH6NVuG = await ControllerkcxheAA.setOneSplit.call(addressHO7g9J, {from: accounts[4]});
		const addressTzyQFCq = await ControllerkcxheAA.inCaseTokensGetStuck.call(addressiN0peD9, uintip2SNc7, {from: accounts[4]});

		await expect(ControllerkcxheAA.setStrategy.call(addressWAXMB6Q, addressfKnPQnq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresskhRwkPo = accounts[3]
		const ControllerSXDz03o = await Controller.new(addresskhRwkPo, {from: accounts[5]});
		const uinteHAuQDP = BigInt("1743")
		const addressuidFt2y = accounts[4]
		const addressLRAbeSl = accounts[0]
		const addressFzmqzqc = accounts[3]
		const uintF4aPCGG = BigInt("998")
		const addressldGfNo = accounts[1]
		const addressiJqQppH = accounts[1]
		const address8yPnVX = accounts[2]
		const addressqAOxND9 = accounts[6]
		const addressUtgkoKK = await ControllerSXDz03o.withdraw.call(addressuidFt2y, uinteHAuQDP, {from: accounts[5]});
		const addressIZvtQyL = await ControllerSXDz03o.setVault.call(addressFzmqzqc, addressLRAbeSl, {from: accounts[5]});
		const addressUFi6xvC = await ControllerSXDz03o.earn.call(addressldGfNo, uintF4aPCGG, {from: accounts[0]});
		const addressJunzPNL = await ControllerSXDz03o.setOneSplit.call(addressiJqQppH, {from: accounts[1]});
		const addressIZUM46J = await ControllerSXDz03o.approveStrategy.call(addressqAOxND9, address8yPnVX, {from: accounts[0]});

		await expect(ControllerSXDz03o.withdraw.call(addressuidFt2y, uinteHAuQDP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressZOOuJwI = accounts[3]
		const ControllerHKEhSGO = await Controller.new(addressZOOuJwI, {from: accounts[0]});
		const addressQylnn3K = accounts[2]
		const addresszVGy9ws = accounts[2]
		const addressnV4WZRz = accounts[3]
		const addressJ0lxlaR = accounts[3]
		const addressE8yOHff = await ControllerHKEhSGO.setStrategy.call(addresszVGy9ws, addressQylnn3K, {from: accounts[0]});
		const addressvlRLbs = await ControllerHKEhSGO.setGovernance.call(addressnV4WZRz, {from: accounts[3]});
		const addressnzO5ut8 = await ControllerHKEhSGO.setStrategist.call(addressJ0lxlaR, {from: accounts[0]});

		await expect(ControllerHKEhSGO.setStrategy.call(addresszVGy9ws, addressQylnn3K, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressk5dO7zw = accounts[3]
		const Controllerc2Ky66G = await Controller.new(addressk5dO7zw, {from: accounts[3]});
		const addressdJs9LAT = accounts[2]
		const uintjsoagi7 = BigInt("1819")
		const addressjibxHl = accounts[0]
		const addressCI9rV97 = accounts[4]
		const addressTafsvqQ = accounts[2]
		const addresseySZCVn = await Controllerc2Ky66G.setGovernance.call(addressdJs9LAT, {from: "0x0000000000000000000000000000000000000001"});
		const addresswLK3Ocn = await Controllerc2Ky66G.earn.call(addressjibxHl, uintjsoagi7, {from: accounts[1]});
		const addressDnVm9Nd = await Controllerc2Ky66G.approveStrategy.call(addressTafsvqQ, addressCI9rV97, {from: accounts[0]});

		await expect(Controllerc2Ky66G.setGovernance.call(addressdJs9LAT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressrUj4yWF = accounts[3]
		const Controllerc2Ky66G = await Controller.new(addressrUj4yWF, {from: accounts[3]});
		const addressxXP2KBM = accounts[5]
		const addressNXWgXp = accounts[2]
		const addressDnVm9Nd = await Controllerc2Ky66G.approveStrategy.call(addressNXWgXp, addressxXP2KBM, {from: accounts[0]});

		await expect(Controllerc2Ky66G.approveStrategy.call(addressNXWgXp, addressxXP2KBM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressijsMQ9 = accounts[3]
		const ControllerHKEhSGO = await Controller.new(addressijsMQ9, {from: accounts[0]});
		const uintscjVU0I = BigInt("1509")
		const addressXfCvcY = accounts[5]
		const addressfrDhiQE = accounts[2]
		const addressPQy1Wf0 = accounts[2]
		const addresso6eDr0e = accounts[2]
		const addressxYoACLW = accounts[4]
		const addressZdjn0p8 = accounts[3]
		const uintiWpa14x = BigInt("650")
		const uintfxyRk9y = await ControllerHKEhSGO.getExpectedReturn.call(addressfrDhiQE, addressXfCvcY, uintscjVU0I, {from: accounts[0]});
		const addressE8yOHff = await ControllerHKEhSGO.setStrategy.call(addresso6eDr0e, addressPQy1Wf0, {from: accounts[0]});
		const addressvlRLbs = await ControllerHKEhSGO.setGovernance.call(addressxYoACLW, {from: accounts[3]});
		const addressnzO5ut8 = await ControllerHKEhSGO.setStrategist.call(addressZdjn0p8, {from: accounts[0]});
		const uinta8z6zIl = await ControllerHKEhSGO.setSplit.call(uintiWpa14x, {from: accounts[3]});

		await expect(ControllerHKEhSGO.getExpectedReturn.call(addressfrDhiQE, addressXfCvcY, uintscjVU0I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresssv2n3IT = accounts[3]
		const ControllerHKEhSGO = await Controller.new(addresssv2n3IT, {from: accounts[0]});
		const addressMTocXS = "0x0000000000000000000000000000000000000001"
		const addressiTYCyB = accounts[0]
		const addresszh2g1gs = accounts[3]
		const addresswRLUOUb = accounts[2]
		const addressvYhEenu = accounts[2]
		const addressC1bNw9m = accounts[3]
		const address8lc8nc = accounts[4]
		const addressEFa6hI = await ControllerHKEhSGO.setConverter.call(addresszh2g1gs, addressiTYCyB, addressMTocXS, {from: accounts[2]});
		const addressE8yOHff = await ControllerHKEhSGO.setStrategy.call(addressvYhEenu, addresswRLUOUb, {from: accounts[0]});
		const addressvlRLbs = await ControllerHKEhSGO.setGovernance.call(addressC1bNw9m, {from: accounts[3]});
		const addressnzO5ut8 = await ControllerHKEhSGO.setStrategist.call(address8lc8nc, {from: accounts[0]});

		await expect(ControllerHKEhSGO.setConverter.call(addresszh2g1gs, addressiTYCyB, addressMTocXS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressDuoeerq = accounts[2]
		const ControllerF99bCfJ = await Controller.new(addressDuoeerq, {from: accounts[2]});
		const addresszDmgdjB = accounts[5]
		const uintKg4ZsQD = BigInt("1007")
		const addresspqqUBTe = accounts[3]
		const addresspho7VSY = accounts[3]
		const uint9L91Wz = BigInt("1106")
		const addressQwynAi8 = accounts[2]
		const addressvcLXQzz = accounts[0]
		const uintAA4Tj8 = BigInt("1756")
		const addressRjwHGk = "0x0000000000000000000000000000000000000001"
		const addressXnhm5gL = accounts[4]
		const addressRFGTxkv = accounts[6]
		const uint17L7Xi = await ControllerF99bCfJ.balanceOf.call(addresszDmgdjB, {from: accounts[1]});
		const uintXyCP664 = await ControllerF99bCfJ.getExpectedReturn.call(addresspho7VSY, addresspqqUBTe, uintKg4ZsQD, {from: accounts[1]});
		const addressUnWEIM = await ControllerF99bCfJ.yearn.call(addressvcLXQzz, addressQwynAi8, uint9L91Wz, {from: accounts[2]});
		const addressbee95U2 = await ControllerF99bCfJ.inCaseTokensGetStuck.call(addressRjwHGk, uintAA4Tj8, {from: accounts[0]});
		const addresseEWPPP = await ControllerF99bCfJ.approveStrategy.call(addressRFGTxkv, addressXnhm5gL, {from: accounts[4]});

		await expect(ControllerF99bCfJ.balanceOf.call(addresszDmgdjB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressODZo4q = accounts[2]
		const ControllersA06oM = await Controller.new(addressODZo4q, {from: accounts[4]});
		const uintKRqwQS = BigInt("1750")
		const addressN58oXtG = "0x0000000000000000000000000000000000000001"
		const addressbZyNjb4 = accounts[1]
		const uintzvbNiiR = BigInt("909")
		const addresswfbbZc = accounts[0]
		const uintHECaMs7 = await ControllersA06oM.setSplit.call(uintKRqwQS, {from: accounts[4]});
		const addressmyc9CCL = await ControllersA06oM.withdrawAll.call(addressN58oXtG, {from: accounts[0]});
		const addressj9lsAlp = await ControllersA06oM.setStrategist.call(addressbZyNjb4, {from: accounts[0]});
		const addressNcYxHGY = await ControllersA06oM.inCaseTokensGetStuck.call(addresswfbbZc, uintzvbNiiR, {from: accounts[5]});

		await expect(ControllersA06oM.withdrawAll.call(addressN58oXtG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address6ByOuz = accounts[3]
		const Controllerc2Ky66G = await Controller.new(address6ByOuz, {from: accounts[3]});
		const addressjmlmlxI = accounts[1]
		const uintLwu79C = BigInt("945")
		const addressrCoTEdX = accounts[4]
		const addressH19ssxX = accounts[1]
		const uintvPR0Kmo = BigInt("1190")
		const addressZVjZGP = accounts[3]
		const addressv8PkHP = await Controllerc2Ky66G.setRewards.call(addressjmlmlxI, {from: accounts[4]});
		const uintBmYm2Im = await Controllerc2Ky66G.getExpectedReturn.call(addressH19ssxX, addressrCoTEdX, uintLwu79C, {from: accounts[2]});
		const addresswLK3Ocn = await Controllerc2Ky66G.earn.call(addressZVjZGP, uintvPR0Kmo, {from: accounts[1]});

		await expect(Controllerc2Ky66G.setRewards.call(addressjmlmlxI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})