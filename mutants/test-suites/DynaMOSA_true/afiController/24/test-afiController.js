const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressDe70JPJ = accounts[0]
		const afiControllere5X3XRl = await afiController.new(addressDe70JPJ, {from: accounts[4]});
		const uintlcF5B4Z = BigInt("1141")
		const addressYPEv1jh = accounts[3]
		const addressYQSBYEN = accounts[1]
		const addressosu4XY = accounts[4]
		const addressP4BkxrC = accounts[2]
		const uintKkvJxl2 = BigInt("1037")
		const addressK0ohuFI = "0x0000000000000000000000000000000000000001"
		const uintZji51XQ = BigInt("385")
		const addressJKMODiB = accounts[3]
		const addressTcQVxSt = "0x0000000000000000000000000000000000000001"
//		const uintyGPoxks = await afiControllere5X3XRl.setSplit.call(uintlcF5B4Z, {from: accounts[0]});
//		const addressOrUwTce = await afiControllere5X3XRl.setStrategy.call(addressYQSBYEN, addressYPEv1jh, {from: accounts[3]});
//		const addressB1Pi471 = await afiControllere5X3XRl.setVault.call(addressP4BkxrC, addressosu4XY, {from: "0x0000000000000000000000000000000000000001"});
//		const addresszGbyfa2 = await afiControllere5X3XRl.withdraw.call(addressK0ohuFI, uintKkvJxl2, {from: accounts[2]});
//		const uintvcYO0Vy = await afiControllere5X3XRl.getExpectedReturn.call(addressTcQVxSt, addressJKMODiB, uintZji51XQ, {from: accounts[1]});

		await expect(afiControllere5X3XRl.setSplit.call(uintlcF5B4Z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressglcwmoB = accounts[5]
		const afiControllergw0gjCY = await afiController.new(addressglcwmoB, {from: accounts[0]});
		const uintMMw7GXN = BigInt("1973")
		const address9RVjUT = accounts[4]
		const addressIaRmyu3 = accounts[1]
		const uintLvpz9LL = await afiControllergw0gjCY.setSplit.call(uintMMw7GXN, {from: accounts[0]});
		const addressAZ3ujzT = await afiControllergw0gjCY.approveStrategy.call(addressIaRmyu3, address9RVjUT, {from: accounts[0]});
	});

	it('test for afiController', async () => {
		const addressAjLGdlI = accounts[2]
		const afiController1WlJMQ = await afiController.new(addressAjLGdlI, {from: accounts[4]});
		const addressHpYTV6R = accounts[4]
		const addressHYxBqQx = accounts[1]
		const addressU5TiWzx = accounts[3]
		const addressiKCmgKU = accounts[1]
		const addressfPMAV46 = accounts[4]
//		const addressWkHaurk = await afiController1WlJMQ.setOneSplit.call(addressHpYTV6R, {from: "0x0000000000000000000000000000000000000001"});
//		const addressZUMfwgR = await afiController1WlJMQ.setOneSplit.call(addressHYxBqQx, {from: accounts[3]});
//		const addressR83bzvx = await afiController1WlJMQ.setGovernance.call(addressU5TiWzx, {from: accounts[1]});
//		const addressGkJ7HGC = await afiController1WlJMQ.setVault.call(addressfPMAV46, addressiKCmgKU, {from: accounts[3]});

		await expect(afiController1WlJMQ.setOneSplit.call(addressHpYTV6R, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvisY8JK = accounts[1]
		const afiControllerJ6k2s2d = await afiController.new(addressvisY8JK, {from: accounts[0]});
		const addressZrlUhjt = accounts[0]
		const addressk2HS37K = accounts[0]
		const addressW9g2ygk = accounts[1]
		const uintL5Y7c2 = BigInt("130")
//		const addressmfRsun = await afiControllerJ6k2s2d.setGovernance.call(addressZrlUhjt, {from: "0x0000000000000000000000000000000000000001"});
//		const uintzBvJLRS = await afiControllerJ6k2s2d.balanceOf.call(addressk2HS37K, {from: accounts[4]});
//		const addressMP6Ujzr = await afiControllerJ6k2s2d.setRewards.call(addressW9g2ygk, {from: accounts[4]});
//		const uintSwOla4N = await afiControllerJ6k2s2d.setSplit.call(uintL5Y7c2, {from: accounts[4]});

		await expect(afiControllerJ6k2s2d.setGovernance.call(addressZrlUhjt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxzMhFY = accounts[2]
		const afiControllerhO5rWg7 = await afiController.new(addressxzMhFY, {from: accounts[3]});
		const addressrlpC9I5 = accounts[1]
		const addressFCXW7FV = accounts[3]
		const addressoFLf3po = accounts[4]
		const addressKUelEWO = accounts[1]
		const addresst3S1F3 = accounts[0]
		const addressQxwYu0 = accounts[1]
		const addresseyawqb = accounts[4]
		const addressg3ygWMP = accounts[0]
		const uintgX83hEA = BigInt("1606")
//		const addresslKCyaeV = await afiControllerhO5rWg7.setStrategy.call(addressFCXW7FV, addressrlpC9I5, {from: accounts[4]});
//		const addressyvlE4C = await afiControllerhO5rWg7.setStrategy.call(addressKUelEWO, addressoFLf3po, {from: accounts[3]});
//		const addressQtNqBSz = await afiControllerhO5rWg7.revokeStrategy.call(addressQxwYu0, addresst3S1F3, {from: accounts[2]});
//		const uintPBoioAd = await afiControllerhO5rWg7.balanceOf.call(addresseyawqb, {from: accounts[3]});
//		const uintm5R4mj1 = await afiControllerhO5rWg7.balanceOf.call(addressg3ygWMP, {from: accounts[2]});
//		const uintzu74ny = await afiControllerhO5rWg7.setSplit.call(uintgX83hEA, {from: accounts[0]});

		await expect(afiControllerhO5rWg7.setStrategy.call(addressFCXW7FV, addressrlpC9I5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressGqswbWY = accounts[1]
		const afiControllerSEsV1dQ = await afiController.new(addressGqswbWY, {from: accounts[1]});
		const addressPAhThc = accounts[4]
		const addressHRt9U9S = accounts[4]
		const addresse2ayaOM = accounts[4]
		const uintzDf5X4F = BigInt("1838")
		const addressDopAZy = accounts[1]
		const addressXGpcV2E = accounts[2]
//		const addressvws0H4Y = await afiControllerSEsV1dQ.setConverter.call(addresse2ayaOM, addressHRt9U9S, addressPAhThc, {from: "0x0000000000000000000000000000000000000001"});
//		const uintTdwIRpa = await afiControllerSEsV1dQ.getExpectedReturn.call(addressXGpcV2E, addressDopAZy, uintzDf5X4F, {from: accounts[1]});

		await expect(afiControllerSEsV1dQ.setConverter.call(addresse2ayaOM, addressHRt9U9S, addressPAhThc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressJMdcjyU = accounts[5]
		const afiControllerfTqqrdq = await afiController.new(addressJMdcjyU, {from: accounts[3]});
		const uintyRR9oK = BigInt("306")
		const addressyGUr86V = accounts[2]
		const uintfF7cUJ = BigInt("225")
		const addressXnzh5zp = accounts[3]
		const addresssiSm51f = accounts[4]
//		const addressWtxxmXr = await afiControllerfTqqrdq.earn.call(addressyGUr86V, uintyRR9oK, {from: accounts[2]});
//		const uintHDaDqva = await afiControllerfTqqrdq.setSplit.call(uintfF7cUJ, {from: accounts[3]});
//		const addressPasQ8f9 = await afiControllerfTqqrdq.setStrategy.call(addresssiSm51f, addressXnzh5zp, {from: accounts[3]});

		await expect(afiControllerfTqqrdq.earn.call(addressyGUr86V, uintyRR9oK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressJWD7IF = accounts[2]
		const afiControllersEODzXT = await afiController.new(addressJWD7IF, {from: accounts[1]});
		const addresspyu5PO2 = accounts[4]
		const uintM6fbhqu = BigInt("142")
		const addressj9Mo7SH = accounts[4]
		const addressk75Wktt = accounts[1]
		const addressCT5KwbR = accounts[2]
//		const uintwyFg5um = await afiControllersEODzXT.balanceOf.call(addresspyu5PO2, {from: accounts[2]});
//		const addressKYs91OJ = await afiControllersEODzXT.earn.call(addressj9Mo7SH, uintM6fbhqu, {from: accounts[4]});
//		const addressrpUzCxI = await afiControllersEODzXT.setStrategy.call(addressCT5KwbR, addressk75Wktt, {from: accounts[0]});

		await expect(afiControllersEODzXT.balanceOf.call(addresspyu5PO2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresskexxvVQ = accounts[1]
		const afiControllern4yxKk5 = await afiController.new(addresskexxvVQ, {from: accounts[2]});
		const uintcS9BkqK = BigInt("1609")
		const addressaXGy6zi = accounts[5]
		const addressVvW0IHR = accounts[5]
		const addressGJtoU0 = accounts[2]
		const addressUkcAlxg = accounts[4]
		const addressSxAGYZo = accounts[2]
		const addressIWyYgNA = accounts[1]
		const addressTgSrAbd = "0x0000000000000000000000000000000000000001"
		const addressvNReMKl = accounts[4]
		const addresszPi78TB = accounts[3]
		const addressDEnDuHf = accounts[0]
//		const addresstv9enuy = await afiControllern4yxKk5.inCaseTokensGetStuck.call(addressaXGy6zi, uintcS9BkqK, {from: accounts[5]});
//		const addressh3HiAdE = await afiControllern4yxKk5.setStrategy.call(addressGJtoU0, addressVvW0IHR, {from: accounts[5]});
//		const addressqfnBCed = await afiControllern4yxKk5.inCaseStrategyTokenGetStuck.call(addressSxAGYZo, addressUkcAlxg, {from: accounts[4]});
//		const addressbngMYSf = await afiControllern4yxKk5.setStrategy.call(addressTgSrAbd, addressIWyYgNA, {from: accounts[1]});
//		const addressOUPwZEv = await afiControllern4yxKk5.setConverter.call(addressDEnDuHf, addresszPi78TB, addressvNReMKl, {from: accounts[2]});

		await expect(afiControllern4yxKk5.inCaseTokensGetStuck.call(addressaXGy6zi, uintcS9BkqK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressUUZ1QST = accounts[1]
		const afiControllerSEsV1dQ = await afiController.new(addressUUZ1QST, {from: accounts[1]});
		const uintGuiAQfd = BigInt("1838")
		const addressnz7Qacd = accounts[1]
		const addresskdMRFNA = accounts[2]
		const addressrXmKlph = accounts[2]
		const addressS5Sg8wt = accounts[4]
		const addressipT22Jq = "0x0000000000000000000000000000000000000001"
		const addresseLdEyZd = accounts[3]
		const addressd0XdIJo = accounts[4]
//		const uintTdwIRpa = await afiControllerSEsV1dQ.getExpectedReturn.call(addresskdMRFNA, addressnz7Qacd, uintGuiAQfd, {from: accounts[1]});
//		const addressKW4Xpnc = await afiControllerSEsV1dQ.setVault.call(addressS5Sg8wt, addressrXmKlph, {from: accounts[1]});
//		const addressQw48ums = await afiControllerSEsV1dQ.setConverter.call(addressd0XdIJo, addresseLdEyZd, addressipT22Jq, {from: accounts[3]});

		await expect(afiControllerSEsV1dQ.getExpectedReturn.call(addresskdMRFNA, addressnz7Qacd, uintGuiAQfd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressusD8Muk = accounts[1]
		const afiControllerqGevuGv = await afiController.new(addressusD8Muk, {from: accounts[2]});
		const addressicNVhyl = accounts[5]
		const addressS7yTmyX = accounts[2]
		const addressuhynaUk = "0x0000000000000000000000000000000000000001"
		const addressKzmBEJI = "0x0000000000000000000000000000000000000001"
		const addresskgiX72g = accounts[1]
//		const addresslOr7Nqw = await afiControllerqGevuGv.revokeStrategy.call(addressS7yTmyX, addressicNVhyl, {from: "0x0000000000000000000000000000000000000001"});
//		const addressgPnrA7 = await afiControllerqGevuGv.setStrategist.call(addressuhynaUk, {from: accounts[1]});
//		const addressCCV37Y8 = await afiControllerqGevuGv.setStrategy.call(addresskgiX72g, addressKzmBEJI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerqGevuGv.revokeStrategy.call(addressS7yTmyX, addressicNVhyl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressqrpkoU = accounts[5]
		const afiControllerfTqqrdq = await afiController.new(addressqrpkoU, {from: accounts[3]});
		const uintbl4fAXZ = BigInt("225")
		const addressmYRMZB2 = accounts[3]
		const addressmxG11hR = accounts[4]
		const uintHDaDqva = await afiControllerfTqqrdq.setSplit.call(uintbl4fAXZ, {from: accounts[3]});
//		const addressPasQ8f9 = await afiControllerfTqqrdq.setStrategy.call(addressmxG11hR, addressmYRMZB2, {from: accounts[3]});

		await expect(afiControllerfTqqrdq.setStrategy.call(addressmxG11hR, addressmYRMZB2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressoIe0CHF = accounts[5]
		const afiControllerZBQPgFt = await afiController.new(addressoIe0CHF, {from: "0x0000000000000000000000000000000000000001"});
		const uintIEWCU7 = BigInt("1424")
		const addressnZ6IwB = accounts[0]
		const addressEvJm35P = accounts[0]
		const addressDN6kWEf = accounts[4]
		const addressPVGrQLo = accounts[3]
		const addressi1lOrU = accounts[3]
		const addressui7x0aK = accounts[1]
		const addressG2JcwIt = accounts[2]
		const addressdCmSzmB = accounts[3]
		const uinteTndPPo = await afiControllerZBQPgFt.setSplit.call(uintIEWCU7, {from: accounts[0]});
		const addressGGFFHSh = await afiControllerZBQPgFt.approveStrategy.call(addressEvJm35P, addressnZ6IwB, {from: accounts[3]});
		const addressf1vJwY = await afiControllerZBQPgFt.approveStrategy.call(addressPVGrQLo, addressDN6kWEf, {from: accounts[5]});
		const addressdrkKxA = await afiControllerZBQPgFt.setConverter.call(addressG2JcwIt, addressui7x0aK, addressi1lOrU, {from: accounts[3]});
		const addressZyNsqph = await afiControllerZBQPgFt.setOneSplit.call(addressdCmSzmB, {from: accounts[4]});
	});

	it('test for afiController', async () => {
		const addresstFcCDCE = accounts[4]
		const afiControllerhjB4vPq = await afiController.new(addresstFcCDCE, {from: accounts[4]});
		const addresstChF67X = accounts[3]
		const addresssOfs64V = accounts[1]
		const addresshveBqNd = accounts[1]
//		const addressNu64QKN = await afiControllerhjB4vPq.withdrawAll.call(addresstChF67X, {from: accounts[5]});
//		const addressopjIst = await afiControllerhjB4vPq.withdrawAll.call(addresssOfs64V, {from: accounts[1]});
//		const addressqR3sQRu = await afiControllerhjB4vPq.setRewards.call(addresshveBqNd, {from: accounts[3]});

		await expect(afiControllerhjB4vPq.withdrawAll.call(addresstChF67X, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressGM9ziPI = accounts[3]
		const afiControllerX04gmCm = await afiController.new(addressGM9ziPI, {from: accounts[5]});
		const uintX5dkcjd = BigInt("1584")
		const addresstrX4Ih = accounts[2]
		const uintDxfRPUQ = BigInt("1669")
		const addressKnDU2nw = accounts[4]
		const addresszig1Oyt = accounts[5]
		const uintiawUEO0 = BigInt("1478")
		const addressH82kTkS = accounts[5]
		const addressvRx2ON2 = accounts[2]
		const addressLWnFrSs = accounts[4]
//		const addressueeCW9 = await afiControllerX04gmCm.withdraw.call(addresstrX4Ih, uintX5dkcjd, {from: accounts[0]});
//		const uintJPBEEW = await afiControllerX04gmCm.getExpectedReturn.call(addresszig1Oyt, addressKnDU2nw, uintDxfRPUQ, {from: accounts[0]});
//		const addressNNvFsK = await afiControllerX04gmCm.inCaseTokensGetStuck.call(addressH82kTkS, uintiawUEO0, {from: accounts[1]});
//		const addresswDEHEK = await afiControllerX04gmCm.approveStrategy.call(addressLWnFrSs, addressvRx2ON2, {from: accounts[0]});

		await expect(afiControllerX04gmCm.withdraw.call(addresstrX4Ih, uintX5dkcjd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressQak0zeG = accounts[5]
		const afiControllerfTqqrdq = await afiController.new(addressQak0zeG, {from: accounts[3]});
		const uintI8wgdSD = BigInt("925")
		const addressBs6aFK = accounts[4]
		const addressk3gjzWc = accounts[0]
		const uintieBYFjI = BigInt("306")
		const addressPgGY5E3 = accounts[2]
		const addressjVKBZEA = accounts[3]
		const addresslGcyvSV = accounts[6]
//		const addressQbYs27N = await afiControllerfTqqrdq.yearn.call(addressk3gjzWc, addressBs6aFK, uintI8wgdSD, {from: accounts[0]});
//		const addressWtxxmXr = await afiControllerfTqqrdq.earn.call(addressPgGY5E3, uintieBYFjI, {from: accounts[2]});
//		const addressPasQ8f9 = await afiControllerfTqqrdq.setStrategy.call(addresslGcyvSV, addressjVKBZEA, {from: accounts[3]});

		await expect(afiControllerfTqqrdq.yearn.call(addressk3gjzWc, addressBs6aFK, uintI8wgdSD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressZUrsFx2 = accounts[3]
		const afiControllerWSkSaoX = await afiController.new(addressZUrsFx2, {from: accounts[0]});
		const addressO481j7N = accounts[3]
		const addressI9HJnWg = accounts[3]
		const addressDXJ0ggM = accounts[4]
		const addressz2xAz3t = await afiControllerWSkSaoX.setOneSplit.call(addressO481j7N, {from: accounts[0]});
//		const addressoDWYpnC = await afiControllerWSkSaoX.setOneSplit.call(addressI9HJnWg, {from: accounts[2]});
//		const addressWbbLSXL = await afiControllerWSkSaoX.setStrategist.call(addressDXJ0ggM, {from: accounts[2]});

		await expect(afiControllerWSkSaoX.setOneSplit.call(addressI9HJnWg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressjTw1jIr = accounts[1]
		const afiControllern4yxKk5 = await afiController.new(addressjTw1jIr, {from: accounts[2]});
		const addresskUwMEL = accounts[3]
		const uintYQelzKQ = BigInt("1610")
		const addressKVMM2ef = accounts[5]
		const addressUW4njkG = accounts[6]
		const addresss7tuFQ4 = accounts[2]
		const uinttODgFcv = BigInt("224")
		const addressHm65ylj = accounts[0]
		const addressdWVaK1K = accounts[5]
//		const addressZRKkCDQ = await afiControllern4yxKk5.setRewards.call(addresskUwMEL, {from: accounts[1]});
//		const addresstv9enuy = await afiControllern4yxKk5.inCaseTokensGetStuck.call(addressKVMM2ef, uintYQelzKQ, {from: accounts[5]});
//		const addressh3HiAdE = await afiControllern4yxKk5.setStrategy.call(addresss7tuFQ4, addressUW4njkG, {from: accounts[5]});
//		const addressvML0bmS = await afiControllern4yxKk5.yearn.call(addressdWVaK1K, addressHm65ylj, uinttODgFcv, {from: accounts[2]});

		await expect(afiControllern4yxKk5.setRewards.call(addresskUwMEL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressHBNQHyp = accounts[5]
		const afiControllerfTqqrdq = await afiController.new(addressHBNQHyp, {from: accounts[3]});
		const addressEWq4DOl = accounts[0]
		const addressV5DW78w = accounts[0]
		const addresstcl3a4M = accounts[4]
		const uintqWdYEPV = BigInt("306")
		const addressv6JsV2H = accounts[3]
		const addressMzN3X5B = accounts[0]
//		const addressesXWnV = await afiControllerfTqqrdq.setStrategist.call(addressEWq4DOl, {from: accounts[5]});
//		const addressifYwMef = await afiControllerfTqqrdq.setVault.call(addresstcl3a4M, addressV5DW78w, {from: accounts[3]});
//		const addressWtxxmXr = await afiControllerfTqqrdq.earn.call(addressv6JsV2H, uintqWdYEPV, {from: accounts[2]});
//		const addressIgjpnWd = await afiControllerfTqqrdq.setRewards.call(addressMzN3X5B, {from: accounts[0]});

		await expect(afiControllerfTqqrdq.setStrategist.call(addressEWq4DOl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDKUPoCS = accounts[5]
		const afiControllerfTqqrdq = await afiController.new(addressDKUPoCS, {from: accounts[3]});
		const addressgZfP3VF = accounts[0]
		const addressGFI3jAy = accounts[0]
		const uint6J7IhJ = BigInt("306")
		const addressohX278B = accounts[4]
		const uintUnZifN = BigInt("1327")
		const addresstUKFwOK = await afiControllerfTqqrdq.setGovernance.call(addressgZfP3VF, {from: accounts[3]});
//		const addressesXWnV = await afiControllerfTqqrdq.setStrategist.call(addressGFI3jAy, {from: accounts[5]});
//		const addressWtxxmXr = await afiControllerfTqqrdq.earn.call(addressohX278B, uint6J7IhJ, {from: accounts[2]});
//		const uinttbTdfJP = await afiControllerfTqqrdq.setSplit.call(uintUnZifN, {from: accounts[2]});

		await expect(afiControllerfTqqrdq.setStrategist.call(addressGFI3jAy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDzRxWr = accounts[5]
		const afiControllerfTqqrdq = await afiController.new(addressDzRxWr, {from: accounts[3]});
		const addressigCTtwr = "0x0000000000000000000000000000000000000001"
		const addressocS6bgW = accounts[1]
		const uintAZGkf7 = BigInt("306")
		const addresshOAoAf = accounts[3]
//		const addressGw8is1k = await afiControllerfTqqrdq.setVault.call(addressocS6bgW, addressigCTtwr, {from: accounts[2]});
//		const addressWtxxmXr = await afiControllerfTqqrdq.earn.call(addresshOAoAf, uintAZGkf7, {from: accounts[2]});

		await expect(afiControllerfTqqrdq.setVault.call(addressocS6bgW, addressigCTtwr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressGBttrzk = accounts[1]
		const afiControllerqGevuGv = await afiController.new(addressGBttrzk, {from: accounts[2]});
		const addressuKuSWkE = accounts[0]
		const addressydHE1qw = accounts[0]
		const addressBrkufry = accounts[5]
		const addressg5E7p57 = accounts[6]
//		const addresspQgOpgM = await afiControllerqGevuGv.inCaseStrategyTokenGetStuck.call(addressydHE1qw, addressuKuSWkE, {from: accounts[1]});
//		const addresslOr7Nqw = await afiControllerqGevuGv.revokeStrategy.call(addressg5E7p57, addressBrkufry, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerqGevuGv.inCaseStrategyTokenGetStuck.call(addressydHE1qw, addressuKuSWkE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressZ6XQvHV = accounts[5]
		const afiControllerfTqqrdq = await afiController.new(addressZ6XQvHV, {from: accounts[3]});
		const uintGezZazj = BigInt("189")
		const addressqjnBaR5 = accounts[4]
		const addressmo8RSb7 = accounts[1]
		const uintKh58WjP = BigInt("306")
		const addresstByqbH1 = accounts[1]
//		const addressJPJxrpS = await afiControllerfTqqrdq.inCaseTokensGetStuck.call(addressqjnBaR5, uintGezZazj, {from: accounts[3]});
//		const addressesXWnV = await afiControllerfTqqrdq.setStrategist.call(addressmo8RSb7, {from: accounts[5]});
//		const addressWtxxmXr = await afiControllerfTqqrdq.earn.call(addresstByqbH1, uintKh58WjP, {from: accounts[2]});

		await expect(afiControllerfTqqrdq.inCaseTokensGetStuck.call(addressqjnBaR5, uintGezZazj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressqa3ll66 = accounts[1]
		const afiControllerSEsV1dQ = await afiController.new(addressqa3ll66, {from: accounts[1]});
		const uintwcwBqdH = BigInt("1089")
		const addresszaJFNR = accounts[2]
		const addressHUj98W8 = accounts[5]
		const uintpycx0cd = BigInt("1066")
		const addressyLurHs6 = accounts[4]
		const addressRNHseAL = accounts[1]
		const addressIheDTIw = accounts[4]
		const addressBFubnLB = accounts[4]
		const addresskd4g1y1 = accounts[4]
//		const addressoYoUQVe = await afiControllerSEsV1dQ.yearn.call(addressHUj98W8, addresszaJFNR, uintwcwBqdH, {from: accounts[1]});
//		const uintnOBTONn = await afiControllerSEsV1dQ.getExpectedReturn.call(addressRNHseAL, addressyLurHs6, uintpycx0cd, {from: accounts[3]});
//		const addressvws0H4Y = await afiControllerSEsV1dQ.setConverter.call(addresskd4g1y1, addressBFubnLB, addressIheDTIw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerSEsV1dQ.yearn.call(addressHUj98W8, addresszaJFNR, uintwcwBqdH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresscn1i738 = accounts[1]
		const afiControllerSEsV1dQ = await afiController.new(addresscn1i738, {from: accounts[1]});
		const addressCUCu7A9 = accounts[3]
		const addressZLPbwTf = accounts[2]
		const addressqidTlcv = accounts[4]
		const addressTtB4T5k = accounts[4]
		const addressNSkEIIV = accounts[5]
		const addressqA2F40V = accounts[4]
		const addressMRNC7Sm = await afiControllerSEsV1dQ.setStrategist.call(addressCUCu7A9, {from: accounts[1]});
		const addressLY5kYKr = await afiControllerSEsV1dQ.revokeStrategy.call(addressqidTlcv, addressZLPbwTf, {from: accounts[1]});
//		const addressvws0H4Y = await afiControllerSEsV1dQ.setConverter.call(addressqA2F40V, addressNSkEIIV, addressTtB4T5k, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerSEsV1dQ.setConverter.call(addressqA2F40V, addressNSkEIIV, addressTtB4T5k, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressym8kFYN = accounts[1]
		const afiControllerSEsV1dQ = await afiController.new(addressym8kFYN, {from: accounts[1]});
		const addressOJPZdjY = accounts[0]
		const addressbqTNOPn = accounts[5]
		const uintE80z151 = BigInt("1089")
		const address5FRwx0 = accounts[4]
		const address4qBYNb = accounts[6]
//		const addressZ3misZc = await afiControllerSEsV1dQ.inCaseStrategyTokenGetStuck.call(addressbqTNOPn, addressOJPZdjY, {from: accounts[1]});
//		const addressoYoUQVe = await afiControllerSEsV1dQ.yearn.call(address4qBYNb, address5FRwx0, uintE80z151, {from: accounts[1]});

		await expect(afiControllerSEsV1dQ.inCaseStrategyTokenGetStuck.call(addressbqTNOPn, addressOJPZdjY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressQJCo42I = accounts[1]
		const afiControllers8QGFMn = await afiController.new(addressQJCo42I, {from: accounts[5]});
		const addressT86cym = accounts[4]
		const addressxKXWR8M = accounts[1]
		const uintGJ20tA0 = BigInt("1640")
		const addressdRhTcNL = accounts[5]
		const addressFHNl7ye = accounts[6]
		const addressyVXge4N = await afiControllers8QGFMn.setVault.call(addressxKXWR8M, addressT86cym, {from: accounts[5]});
//		const addressuMw7NtN = await afiControllers8QGFMn.inCaseTokensGetStuck.call(addressdRhTcNL, uintGJ20tA0, {from: accounts[0]});
//		const addresstyU9bJM = await afiControllers8QGFMn.setRewards.call(addressFHNl7ye, {from: accounts[4]});

		await expect(afiControllers8QGFMn.inCaseTokensGetStuck.call(addressdRhTcNL, uintGJ20tA0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressjHJJXRh = accounts[5]
		const afiControllerfTqqrdq = await afiController.new(addressjHJJXRh, {from: accounts[3]});
		const addresssmrhT1 = accounts[1]
		const uintIqjSmhd = BigInt("189")
		const addressz606Z9I = accounts[5]
//		const addressdBAVdi = await afiControllerfTqqrdq.withdrawAll.call(addresssmrhT1, {from: accounts[3]});
//		const addressJPJxrpS = await afiControllerfTqqrdq.inCaseTokensGetStuck.call(addressz606Z9I, uintIqjSmhd, {from: accounts[3]});

		await expect(afiControllerfTqqrdq.withdrawAll.call(addresssmrhT1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressKlYVnwD = accounts[1]
		const afiControllersWg2nFH = await afiController.new(addressKlYVnwD, {from: accounts[0]});
		const addressmnx2Hg0 = accounts[1]
		const addressDaFaGH = accounts[2]
		const addressOQ1KNCk = accounts[2]
		const addressiJogQ54 = accounts[3]
		const addressk0s0Wti = accounts[4]
		const addressokjVmUj = accounts[4]
		const addresshOTXcD = accounts[4]
		const uintWCZazdb = BigInt("521")
		const addressxaR3ATH = accounts[3]
		const uintPGqX0c7 = BigInt("600")
		const addressI8nqqu0 = accounts[5]
		const addressO8avHE = await afiControllersWg2nFH.setConverter.call(addressOQ1KNCk, addressDaFaGH, addressmnx2Hg0, {from: accounts[0]});
		const addressrXKHH8 = await afiControllersWg2nFH.setConverter.call(addressokjVmUj, addressk0s0Wti, addressiJogQ54, {from: accounts[0]});
//		const uintT5dgFpY = await afiControllersWg2nFH.balanceOf.call(addresshOTXcD, {from: "0x0000000000000000000000000000000000000001"});
//		const addressLJ3fO8i = await afiControllersWg2nFH.withdraw.call(addressxaR3ATH, uintWCZazdb, {from: accounts[5]});
//		const addresswFIaORW = await afiControllersWg2nFH.earn.call(addressI8nqqu0, uintPGqX0c7, {from: accounts[2]});

		await expect(afiControllersWg2nFH.balanceOf.call(addresshOTXcD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressKvfFut0 = accounts[1]
		const afiControllers8QGFMn = await afiController.new(addressKvfFut0, {from: accounts[5]});
		const addressDUJUVvD = accounts[2]
		const addressAKKmial = accounts[2]
		const addressBHs9QcD = accounts[1]
		const addressYDITppv = accounts[6]
		const addressW9OrzL7 = await afiControllers8QGFMn.setRewards.call(addressDUJUVvD, {from: accounts[5]});
//		const addresspvTa0Ab = await afiControllers8QGFMn.inCaseStrategyTokenGetStuck.call(addressBHs9QcD, addressAKKmial, {from: accounts[5]});
//		const addresstyU9bJM = await afiControllers8QGFMn.setRewards.call(addressYDITppv, {from: accounts[4]});

		await expect(afiControllers8QGFMn.inCaseStrategyTokenGetStuck.call(addressBHs9QcD, addressAKKmial, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})