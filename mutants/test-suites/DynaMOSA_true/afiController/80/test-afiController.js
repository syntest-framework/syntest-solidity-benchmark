const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addresshUk9Od = accounts[0]
		const afiControllerNscGW9P = await afiController.new(addresshUk9Od, {from: accounts[0]});
		const addresst6VvX6m = accounts[2]
		const addressGw85Gti = accounts[5]
		const uintUhm5Gq = BigInt("39")
		const addressW0ACGcH = accounts[0]
		const addressmSDE8Zk = accounts[2]
		const addressOjS6Y7P = "0x0000000000000000000000000000000000000001"
		const uintQusjLAS = BigInt("475")
		const addressC1cE3E6 = accounts[0]
		const addressKRyatZ = accounts[0]
//		const addressi26yQmj = await afiControllerNscGW9P.setStrategist.call(addresst6VvX6m, {from: "0x0000000000000000000000000000000000000001"});
//		const uintDrbOekM = await afiControllerNscGW9P.balanceOf.call(addressGw85Gti, {from: accounts[2]});
//		const addressJOgK8bw = await afiControllerNscGW9P.earn.call(addressW0ACGcH, uintUhm5Gq, {from: accounts[3]});
//		const addresspkbH1HA = await afiControllerNscGW9P.setStrategy.call(addressOjS6Y7P, addressmSDE8Zk, {from: accounts[1]});
//		const addressrn1Sf4a = await afiControllerNscGW9P.yearn.call(addressKRyatZ, addressC1cE3E6, uintQusjLAS, {from: accounts[2]});

		await expect(afiControllerNscGW9P.setStrategist.call(addresst6VvX6m, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresscON7KYa = accounts[2]
		const afiControllerWp0PMn8 = await afiController.new(addresscON7KYa, {from: accounts[5]});
		const addressffD9ZTM = accounts[5]
		const addressUc58wuR = accounts[3]
		const addressSnQLZTQ = accounts[2]
		const addressYhrYDVn = accounts[4]
		const addressBI40fOr = accounts[4]
		const addressLl6ciiO = accounts[0]
		const addressHMidyDk = "0x0000000000000000000000000000000000000001"
//		const addressbT8Lxzo = await afiControllerWp0PMn8.approveStrategy.call(addressUc58wuR, addressffD9ZTM, {from: accounts[0]});
//		const addressj210NwA = await afiControllerWp0PMn8.setStrategist.call(addressSnQLZTQ, {from: accounts[3]});
//		const addressrbwzvve = await afiControllerWp0PMn8.setGovernance.call(addressYhrYDVn, {from: accounts[0]});
//		const addressVKvz0YR = await afiControllerWp0PMn8.approveStrategy.call(addressLl6ciiO, addressBI40fOr, {from: accounts[2]});
//		const addressU2dFrQg = await afiControllerWp0PMn8.setStrategist.call(addressHMidyDk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerWp0PMn8.approveStrategy.call(addressUc58wuR, addressffD9ZTM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address0anc9M = accounts[1]
		const afiControllerO8zxb57 = await afiController.new(address0anc9M, {from: accounts[2]});
		const addressFtYTKWl = "0x0000000000000000000000000000000000000001"
		const addressF8stYJL = accounts[3]
		const addressCynRg7e = accounts[2]
		const addressyEhiYxT = accounts[1]
		const addressp5tlmPC = "0x0000000000000000000000000000000000000001"
		const uintYnLiOyM = BigInt("1527")
		const uintdUxOczN = BigInt("312")
//		const addressATfafB6 = await afiControllerO8zxb57.revokeStrategy.call(addressF8stYJL, addressFtYTKWl, {from: accounts[0]});
//		const addressqtbqxGu = await afiControllerO8zxb57.revokeStrategy.call(addressyEhiYxT, addressCynRg7e, {from: accounts[0]});
//		const uintsi9pz4 = await afiControllerO8zxb57.balanceOf.call(addressp5tlmPC, {from: accounts[5]});
//		const uintg8A3y4l = await afiControllerO8zxb57.setSplit.call(uintYnLiOyM, {from: accounts[1]});
//		const uintM3Un9Vk = await afiControllerO8zxb57.setSplit.call(uintdUxOczN, {from: accounts[1]});

		await expect(afiControllerO8zxb57.revokeStrategy.call(addressF8stYJL, addressFtYTKWl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressgOhUpOw = accounts[1]
		const afiControllerVknjFqc = await afiController.new(addressgOhUpOw, {from: accounts[0]});
		const uintTydxm5n = BigInt("1578")
		const addressEewiLkr = accounts[0]
		const addressYKrJzVr = accounts[0]
		const addresscFeTX4 = accounts[1]
		const addressOHuao3W = accounts[2]
		const addressDakx1ec = accounts[3]
		const addressCkEVIcE = accounts[0]
		const addresshZ1eDWv = "0x0000000000000000000000000000000000000001"
		const addressS9SvWe7 = accounts[3]
//		const addressteYEuY0 = await afiControllerVknjFqc.earn.call(addressEewiLkr, uintTydxm5n, {from: accounts[0]});
//		const addressmFlxaVn = await afiControllerVknjFqc.setOneSplit.call(addressYKrJzVr, {from: accounts[1]});
//		const addressyHp80Re = await afiControllerVknjFqc.setRewards.call(addresscFeTX4, {from: accounts[3]});
//		const addresscVpHbf0 = await afiControllerVknjFqc.inCaseStrategyTokenGetStuck.call(addressDakx1ec, addressOHuao3W, {from: accounts[5]});
//		const addressLoBzcPz = await afiControllerVknjFqc.revokeStrategy.call(addresshZ1eDWv, addressCkEVIcE, {from: accounts[3]});
//		const addressJU3w4h1 = await afiControllerVknjFqc.setStrategist.call(addressS9SvWe7, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerVknjFqc.earn.call(addressEewiLkr, uintTydxm5n, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressusGBgX = accounts[4]
		const afiControllerghF2ydf = await afiController.new(addressusGBgX, {from: accounts[1]});
		const addressCNUqC6J = accounts[4]
		const addressLDAXVh0 = accounts[3]
		const addressOEeSTnt = accounts[1]
		const addressmMFL9ck = accounts[2]
		const addressWFgJ2p = await afiControllerghF2ydf.setGovernance.call(addressCNUqC6J, {from: accounts[1]});
//		const uint5DIgfs = await afiControllerghF2ydf.balanceOf.call(addressLDAXVh0, {from: accounts[3]});
//		const addressloMBoG = await afiControllerghF2ydf.inCaseStrategyTokenGetStuck.call(addressmMFL9ck, addressOEeSTnt, {from: accounts[4]});

		await expect(afiControllerghF2ydf.balanceOf.call(addressLDAXVh0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressGvMlmOn = "0x0000000000000000000000000000000000000001"
		const afiControllerED12bSD = await afiController.new(addressGvMlmOn, {from: accounts[3]});
		const address9hYX5O = accounts[3]
		const addressBiTFsvq = "0x0000000000000000000000000000000000000001"
		const uintZkPVZux = BigInt("33")
		const addressCEsSRFO = "0x0000000000000000000000000000000000000001"
		const addressEAp2ve6 = "0x0000000000000000000000000000000000000001"
		const addressACt8SH = accounts[4]
		const addressCq99RmB = accounts[1]
		const addressF0Q97Vg = accounts[0]
		const addresszo0qav7 = accounts[4]
		const addresse9x0Pq4 = accounts[1]
		const addressuAbWaT5 = accounts[4]
		const addressM5KNCzH = "0x0000000000000000000000000000000000000001"
		const addressdZLcNts = accounts[5]
		const addressb4yQYTz = accounts[2]
		const addressV7gFh1q = await afiControllerED12bSD.approveStrategy.call(addressBiTFsvq, address9hYX5O, {from: accounts[3]});
//		const addresss6sqWVd = await afiControllerED12bSD.yearn.call(addressEAp2ve6, addressCEsSRFO, uintZkPVZux, {from: accounts[1]});
//		const addressSDDZsH = await afiControllerED12bSD.setConverter.call(addressF0Q97Vg, addressCq99RmB, addressACt8SH, {from: accounts[1]});
//		const addresspxl6i4D = await afiControllerED12bSD.setConverter.call(addressuAbWaT5, addresse9x0Pq4, addresszo0qav7, {from: accounts[2]});
//		const addresszzf7OM5 = await afiControllerED12bSD.setConverter.call(addressb4yQYTz, addressdZLcNts, addressM5KNCzH, {from: accounts[4]});

		await expect(afiControllerED12bSD.yearn.call(addressEAp2ve6, addressCEsSRFO, uintZkPVZux, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresshwZq4lc = accounts[1]
		const afiControllere4LCVVZ = await afiController.new(addresshwZq4lc, {from: accounts[3]});
		const uintYbR7qwW = BigInt("1678")
		const addressJbGlDNe = accounts[0]
		const addressKnBtmaS = accounts[5]
		const uinte3hKEQg = BigInt("2042")
		const addressdSswf9 = accounts[1]
		const addressA8CujC3 = accounts[3]
//		const uintDYV8VEW = await afiControllere4LCVVZ.setSplit.call(uintYbR7qwW, {from: accounts[4]});
//		const addressJIPzBEr = await afiControllere4LCVVZ.inCaseStrategyTokenGetStuck.call(addressKnBtmaS, addressJbGlDNe, {from: accounts[3]});
//		const addressxhHRxm = await afiControllere4LCVVZ.yearn.call(addressA8CujC3, addressdSswf9, uinte3hKEQg, {from: accounts[2]});

		await expect(afiControllere4LCVVZ.setSplit.call(uintYbR7qwW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresswawmB49 = accounts[5]
		const afiControllerS89miTB = await afiController.new(addresswawmB49, {from: accounts[1]});
		const addressw0ay1Nc = accounts[5]
		const addressdApb0im = accounts[1]
		const addressgTwgU83 = accounts[4]
		const uinttZKlUQ5 = BigInt("1879")
		const address0K6M6i = "0x0000000000000000000000000000000000000001"
		const addressM3HUiGS = accounts[2]
//		const addresslQ6rsS9 = await afiControllerS89miTB.setRewards.call(addressw0ay1Nc, {from: accounts[0]});
//		const addressYcBPdVy = await afiControllerS89miTB.setRewards.call(addressdApb0im, {from: "0x0000000000000000000000000000000000000001"});
//		const addressg6m5Ifv = await afiControllerS89miTB.setGovernance.call(addressgTwgU83, {from: accounts[2]});
//		const addressoMVx1oO = await afiControllerS89miTB.yearn.call(addressM3HUiGS, address0K6M6i, uinttZKlUQ5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerS89miTB.setRewards.call(addressw0ay1Nc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressYIjFoqZ = accounts[4]
		const afiControllerIgxJrt = await afiController.new(addressYIjFoqZ, {from: accounts[2]});
		const addressUKvyqV = accounts[4]
		const addressgmbKkdx = accounts[5]
		const addressHCvJ8vU = accounts[5]
		const addressZPp2Iyy = accounts[0]
//		const addresswKxZIbi = await afiControllerIgxJrt.inCaseStrategyTokenGetStuck.call(addressgmbKkdx, addressUKvyqV, {from: accounts[5]});
//		const addressRFbzo73 = await afiControllerIgxJrt.withdrawAll.call(addressHCvJ8vU, {from: accounts[1]});
//		const addressk8TOWkN = await afiControllerIgxJrt.setRewards.call(addressZPp2Iyy, {from: accounts[5]});

		await expect(afiControllerIgxJrt.inCaseStrategyTokenGetStuck.call(addressgmbKkdx, addressUKvyqV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressTJk3t4r = accounts[5]
		const afiControllerS89miTB = await afiController.new(addressTJk3t4r, {from: accounts[1]});
		const addressgPnxbCe = accounts[5]
		const addresso1G949g = accounts[5]
		const addressXJUEZ1N = accounts[2]
		const addressk3dcOKK = accounts[4]
		const uinth4TOVYv = BigInt("1879")
		const addressKJcNmau = "0x0000000000000000000000000000000000000001"
		const addressmhmRPYW = accounts[2]
		const addressc8ENGL = await afiControllerS89miTB.setOneSplit.call(addressgPnxbCe, {from: accounts[1]});
//		const addresslQ6rsS9 = await afiControllerS89miTB.setRewards.call(addresso1G949g, {from: accounts[0]});
//		const addressYcBPdVy = await afiControllerS89miTB.setRewards.call(addressXJUEZ1N, {from: "0x0000000000000000000000000000000000000001"});
//		const addressg6m5Ifv = await afiControllerS89miTB.setGovernance.call(addressk3dcOKK, {from: accounts[2]});
//		const addressoMVx1oO = await afiControllerS89miTB.yearn.call(addressmhmRPYW, addressKJcNmau, uinth4TOVYv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerS89miTB.setRewards.call(addresso1G949g, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresshiE0ksp = accounts[1]
		const afiControllerO8zxb57 = await afiController.new(addresshiE0ksp, {from: accounts[2]});
		const uinthtVCkBH = BigInt("1490")
		const addresscWJnLc2 = accounts[3]
		const addresseogDzuC = "0x0000000000000000000000000000000000000001"
		const addresspIZ0DqS = accounts[3]
		const addresskTSQd9R = accounts[2]
		const addressSUjsxug = accounts[2]
		const addressE96kGTw = "0x0000000000000000000000000000000000000001"
		const uintsrSzhxT = BigInt("1527")
		const uintpYh5R8W = BigInt("312")
//		const addressFQ7tBlB = await afiControllerO8zxb57.withdraw.call(addresscWJnLc2, uinthtVCkBH, {from: accounts[5]});
//		const addressATfafB6 = await afiControllerO8zxb57.revokeStrategy.call(addresspIZ0DqS, addresseogDzuC, {from: accounts[0]});
//		const addressqtbqxGu = await afiControllerO8zxb57.revokeStrategy.call(addressSUjsxug, addresskTSQd9R, {from: accounts[0]});
//		const uintsi9pz4 = await afiControllerO8zxb57.balanceOf.call(addressE96kGTw, {from: accounts[5]});
//		const uintg8A3y4l = await afiControllerO8zxb57.setSplit.call(uintsrSzhxT, {from: accounts[1]});
//		const uintM3Un9Vk = await afiControllerO8zxb57.setSplit.call(uintpYh5R8W, {from: accounts[1]});

		await expect(afiControllerO8zxb57.withdraw.call(addresscWJnLc2, uinthtVCkBH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressd1tD40p = accounts[4]
		const afiControllerghF2ydf = await afiController.new(addressd1tD40p, {from: accounts[1]});
		const addressnHndWLX = accounts[4]
		const uintD2AnLV = BigInt("1216")
		const addresskfZ4kio = accounts[3]
		const addressTZbxCw7 = accounts[3]
		const addressEuDFF6W = "0x0000000000000000000000000000000000000001"
		const addressRg2nVjh = accounts[1]
		const address4qb0Gm = accounts[2]
		const addressWFgJ2p = await afiControllerghF2ydf.setGovernance.call(addressnHndWLX, {from: accounts[1]});
//		const addressFiVkDSJ = await afiControllerghF2ydf.inCaseTokensGetStuck.call(addresskfZ4kio, uintD2AnLV, {from: accounts[3]});
//		const uint5DIgfs = await afiControllerghF2ydf.balanceOf.call(addressTZbxCw7, {from: accounts[3]});
//		const addressdhoToHO = await afiControllerghF2ydf.setOneSplit.call(addressEuDFF6W, {from: accounts[1]});
//		const addressloMBoG = await afiControllerghF2ydf.inCaseStrategyTokenGetStuck.call(address4qb0Gm, addressRg2nVjh, {from: accounts[4]});

		await expect(afiControllerghF2ydf.inCaseTokensGetStuck.call(addresskfZ4kio, uintD2AnLV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressW32SfzH = "0x0000000000000000000000000000000000000001"
		const afiControllerRuMADKH = await afiController.new(addressW32SfzH, {from: "0x0000000000000000000000000000000000000001"});
		const uintqO0I4X = BigInt("1989")
		const addressveZ9nhX = accounts[2]
		const uintInGFLP = BigInt("1042")
		const addressZG5Pnle = accounts[2]
		const addressTfLsvOD = accounts[3]
		const addressMZCDPa = accounts[3]
		const addressZSXdkhP = accounts[4]
		const addressJVRXAYd = accounts[0]
		const addresskWmCwMH = accounts[0]
		const uintpYrMaG = BigInt("1107")
		const addressTiijEcm = accounts[2]
		const addressIuvc1BJ = accounts[0]
		const addressnCS3CQM = await afiControllerRuMADKH.earn.call(addressveZ9nhX, uintqO0I4X, {from: accounts[5]});
		const addressWGd9EVV = await afiControllerRuMADKH.yearn.call(addressTfLsvOD, addressZG5Pnle, uintInGFLP, {from: accounts[2]});
		const addressiozBY7D = await afiControllerRuMADKH.setVault.call(addressZSXdkhP, addressMZCDPa, {from: accounts[0]});
		const addressVSCTWUB = await afiControllerRuMADKH.revokeStrategy.call(addresskWmCwMH, addressJVRXAYd, {from: accounts[4]});
		const uintQeIpICp = await afiControllerRuMADKH.getExpectedReturn.call(addressIuvc1BJ, addressTiijEcm, uintpYrMaG, {from: accounts[2]});
	});

	it('test for afiController', async () => {
		const addressO4Mbq7q = accounts[4]
		const afiControllerMSeoNCN = await afiController.new(addressO4Mbq7q, {from: accounts[2]});
		const addressNrrgowO = "0x0000000000000000000000000000000000000001"
		const addressIG8lLja = accounts[1]
		const addressHCVIGlu = accounts[1]
		const uintyWpCxZ = BigInt("1447")
		const addressdyPEfWh = accounts[2]
		const uintCIDGAee = BigInt("1774")
		const addressPJkEuG = "0x0000000000000000000000000000000000000001"
		const addressnfAMUvw = accounts[4]
		const addressGIk5Z2k = accounts[1]
		const addresscvmzjWR = await afiControllerMSeoNCN.setGovernance.call(addressNrrgowO, {from: accounts[2]});
//		const addresstw88XCB = await afiControllerMSeoNCN.setVault.call(addressHCVIGlu, addressIG8lLja, {from: accounts[1]});
//		const addresspotgi0 = await afiControllerMSeoNCN.withdraw.call(addressdyPEfWh, uintyWpCxZ, {from: accounts[2]});
//		const addressppfqAM = await afiControllerMSeoNCN.withdraw.call(addressPJkEuG, uintCIDGAee, {from: accounts[3]});
//		const addressfwkph3z = await afiControllerMSeoNCN.approveStrategy.call(addressGIk5Z2k, addressnfAMUvw, {from: accounts[1]});

		await expect(afiControllerMSeoNCN.setVault.call(addressHCVIGlu, addressIG8lLja, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressma3twvi = accounts[4]
		const afiControllerIgxJrt = await afiController.new(addressma3twvi, {from: accounts[2]});
		const addressgdYITmc = accounts[4]
		const addressXYwGpB = accounts[4]
		const addressJfWzbgV = accounts[0]
		const addresswTfGRYA = accounts[4]
		const addressNaY9O18 = "0x0000000000000000000000000000000000000001"
		const addressW3bzixo = accounts[6]
		const addressm02KOj = accounts[0]
//		const addressg8IONoL = await afiControllerIgxJrt.setConverter.call(addressJfWzbgV, addressXYwGpB, addressgdYITmc, {from: "0x0000000000000000000000000000000000000001"});
//		const addresswKxZIbi = await afiControllerIgxJrt.inCaseStrategyTokenGetStuck.call(addressNaY9O18, addresswTfGRYA, {from: accounts[5]});
//		const addressRFbzo73 = await afiControllerIgxJrt.withdrawAll.call(addressW3bzixo, {from: accounts[1]});
//		const addressk8TOWkN = await afiControllerIgxJrt.setRewards.call(addressm02KOj, {from: accounts[5]});

		await expect(afiControllerIgxJrt.setConverter.call(addressJfWzbgV, addressXYwGpB, addressgdYITmc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressJIkx3Tf = "0x0000000000000000000000000000000000000001"
		const afiControllerVc0tAkm = await afiController.new(addressJIkx3Tf, {from: accounts[0]});
		const addressEKys6vi = accounts[0]
		const addressRTlflf = accounts[3]
		const addressEMqUEVW = accounts[2]
//		const address8O3kRt = await afiControllerVc0tAkm.withdrawAll.call(addressEKys6vi, {from: accounts[2]});
//		const addressY0UTnqn = await afiControllerVc0tAkm.approveStrategy.call(addressEMqUEVW, addressRTlflf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerVc0tAkm.withdrawAll.call(addressEKys6vi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressaS0UUpC = accounts[4]
		const afiControllerIgxJrt = await afiController.new(addressaS0UUpC, {from: accounts[2]});
		const uintMSuKNyB = BigInt("1195")
		const addressBqeqh1U = accounts[2]
		const addressWGFjrhe = accounts[4]
		const addressFDHV1uG = accounts[4]
		const addressVonEPho = accounts[4]
		const addresskcu8SB3 = accounts[4]
		const addressPNTnaLu = accounts[4]
		const addresssXhQIIr = "0x0000000000000000000000000000000000000001"
		const addressAUziEUg = accounts[1]
		const addresse4vRlW1 = accounts[6]
		const addressg0aDAMo = accounts[1]
		const addressKiKO1mF = accounts[0]
//		const uintElFTEab = await afiControllerIgxJrt.getExpectedReturn.call(addressWGFjrhe, addressBqeqh1U, uintMSuKNyB, {from: accounts[2]});
//		const addressg8IONoL = await afiControllerIgxJrt.setConverter.call(addresskcu8SB3, addressVonEPho, addressFDHV1uG, {from: "0x0000000000000000000000000000000000000001"});
//		const addresswKxZIbi = await afiControllerIgxJrt.inCaseStrategyTokenGetStuck.call(addresssXhQIIr, addressPNTnaLu, {from: accounts[5]});
//		const addressk96WwA6 = await afiControllerIgxJrt.setOneSplit.call(addressAUziEUg, {from: accounts[1]});
//		const addressRFbzo73 = await afiControllerIgxJrt.withdrawAll.call(addresse4vRlW1, {from: accounts[1]});
//		const addressk8TOWkN = await afiControllerIgxJrt.setRewards.call(addressg0aDAMo, {from: accounts[5]});
//		const addressMUxxzZM = await afiControllerIgxJrt.setStrategist.call(addressKiKO1mF, {from: accounts[1]});

		await expect(afiControllerIgxJrt.getExpectedReturn.call(addressWGFjrhe, addressBqeqh1U, uintMSuKNyB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressK8mnaTg = accounts[3]
		const afiControllerOVnwd7 = await afiController.new(addressK8mnaTg, {from: accounts[3]});
		const address0bYnW3 = accounts[5]
		const addresst9qPFxL = accounts[3]
		const addresskLL5t50 = accounts[0]
		const addressLTHCj5F = accounts[4]
		const uintz1uENa9 = BigInt("491")
		const addressSWQR9ML = accounts[3]
//		const addressojnIyca = await afiControllerOVnwd7.setStrategy.call(addresst9qPFxL, address0bYnW3, {from: accounts[3]});
//		const addresseQtNDj = await afiControllerOVnwd7.setVault.call(addressLTHCj5F, addresskLL5t50, {from: accounts[3]});
//		const addressOj0K2GH = await afiControllerOVnwd7.inCaseTokensGetStuck.call(addressSWQR9ML, uintz1uENa9, {from: accounts[1]});

		await expect(afiControllerOVnwd7.setStrategy.call(addresst9qPFxL, address0bYnW3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDZHbKRG = accounts[1]
		const afiControllerO8zxb57 = await afiController.new(addressDZHbKRG, {from: accounts[2]});
		const addressiWO0m4M = accounts[3]
		const addressJfznkNZ = accounts[4]
		const addressrBCn0gd = accounts[0]
		const addresswgJCgnh = accounts[0]
		const addresspYLbxOY = "0x0000000000000000000000000000000000000001"
		const addressWnhWKe3 = accounts[3]
		const addressynl9JKL = "0x0000000000000000000000000000000000000000"
		const addressf0W3HX6 = accounts[2]
		const uintsJxAzK = BigInt("312")
//		const addressWGPDtdO = await afiControllerO8zxb57.withdrawAll.call(addressiWO0m4M, {from: accounts[2]});
//		const addressZ9Nlnn = await afiControllerO8zxb57.setConverter.call(addresswgJCgnh, addressrBCn0gd, addressJfznkNZ, {from: accounts[5]});
//		const addressATfafB6 = await afiControllerO8zxb57.revokeStrategy.call(addressWnhWKe3, addresspYLbxOY, {from: accounts[0]});
//		const uintsi9pz4 = await afiControllerO8zxb57.balanceOf.call(addressynl9JKL, {from: accounts[5]});
//		const addressjZVb1r2 = await afiControllerO8zxb57.setGovernance.call(addressf0W3HX6, {from: accounts[5]});
//		const uintM3Un9Vk = await afiControllerO8zxb57.setSplit.call(uintsJxAzK, {from: accounts[1]});

		await expect(afiControllerO8zxb57.withdrawAll.call(addressiWO0m4M, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressPucwpJw = accounts[1]
		const afiControllerO8zxb57 = await afiController.new(addressPucwpJw, {from: accounts[2]});
		const address8QAL3p = accounts[1]
		const addressuwaRg4g = accounts[2]
		const addresssM0r9LI = accounts[3]
		const uintb8RgpZC = BigInt("437")
		const addressKLsvNEL = accounts[2]
		const addressYXXMkJD = accounts[1]
		const addressbYkNLF = await afiControllerO8zxb57.setStrategist.call(address8QAL3p, {from: accounts[2]});
//		const addressNGhmXZC = await afiControllerO8zxb57.setStrategy.call(addresssM0r9LI, addressuwaRg4g, {from: "0x0000000000000000000000000000000000000001"});
//		const addresspmzm04w = await afiControllerO8zxb57.earn.call(addressKLsvNEL, uintb8RgpZC, {from: accounts[2]});
//		const uintsi9pz4 = await afiControllerO8zxb57.balanceOf.call(addressYXXMkJD, {from: accounts[5]});

		await expect(afiControllerO8zxb57.setStrategy.call(addresssM0r9LI, addressuwaRg4g, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressU0XOVI = accounts[0]
		const afiControllerNscGW9P = await afiController.new(addressU0XOVI, {from: accounts[0]});
		const addressD6vOk3v = accounts[1]
		const addresscguRbA = accounts[0]
		const uintBhj8d6w = BigInt("459")
		const addressNNWvMfT = accounts[2]
		const addressIxEnT64 = accounts[0]
		const uintCLmcogO = BigInt("219")
		const uintbPUWmAF = BigInt("796")
		const addressEVUs2R = accounts[2]
		const addressw3j6pB7 = accounts[1]
		const addressuuPXY48 = await afiControllerNscGW9P.setVault.call(addresscguRbA, addressD6vOk3v, {from: accounts[0]});
//		const addressrn1Sf4a = await afiControllerNscGW9P.yearn.call(addressIxEnT64, addressNNWvMfT, uintBhj8d6w, {from: accounts[2]});
//		const uintTfquim8 = await afiControllerNscGW9P.setSplit.call(uintCLmcogO, {from: accounts[1]});
//		const addressYgtWDGU = await afiControllerNscGW9P.yearn.call(addressw3j6pB7, addressEVUs2R, uintbPUWmAF, {from: accounts[1]});

		await expect(afiControllerNscGW9P.yearn.call(addressIxEnT64, addressNNWvMfT, uintBhj8d6w, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressGk1Olih = accounts[0]
		const afiControllersC9jCl9 = await afiController.new(addressGk1Olih, {from: accounts[1]});
		const uints2802UQ = BigInt("1988")
		const addressdljkqKN = accounts[5]
		const addressplq5GlF = accounts[1]
		const addressGoNksF0 = accounts[3]
		const addressstcNHK = accounts[3]
		const addressd0ixAhh = accounts[0]
		const addressqQKjM2K = accounts[3]
		const addressObuKK4 = "0x0000000000000000000000000000000000000001"
		const uinthRs2x0T = BigInt("885")
		const addressyNRi8sa = accounts[4]
		const addressqf8vgy7 = accounts[4]
		const addressqk8z9K9 = accounts[0]
//		const addressKAK352X = await afiControllersC9jCl9.yearn.call(addressplq5GlF, addressdljkqKN, uints2802UQ, {from: accounts[1]});
//		const addressvzk8lJ7 = await afiControllersC9jCl9.setVault.call(addressstcNHK, addressGoNksF0, {from: accounts[4]});
//		const addressP6c3P1U = await afiControllersC9jCl9.inCaseStrategyTokenGetStuck.call(addressqQKjM2K, addressd0ixAhh, {from: accounts[1]});
//		const uintNSh8Lzg = await afiControllersC9jCl9.balanceOf.call(addressObuKK4, {from: accounts[5]});
//		const uintQJQwDeO = await afiControllersC9jCl9.getExpectedReturn.call(addressqf8vgy7, addressyNRi8sa, uinthRs2x0T, {from: accounts[3]});
//		const addressOvc3MB1 = await afiControllersC9jCl9.setOneSplit.call(addressqk8z9K9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllersC9jCl9.yearn.call(addressplq5GlF, addressdljkqKN, uints2802UQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressnUPiGat = accounts[1]
		const afiControllerEdAdoRC = await afiController.new(addressnUPiGat, {from: accounts[0]});
		const addressZkYyrt = accounts[4]
		const address6sOi2D = accounts[5]
		const addressMEIECMo = "0x0000000000000000000000000000000000000001"
		const addresspJSORCr = accounts[2]
		const addressA5h2be = "0x0000000000000000000000000000000000000001"
		const addressAxKwJya = accounts[2]
		const addresskfzpOuM = accounts[4]
		const uintNQ89gu = BigInt("127")
		const addressuaGn7iI = accounts[0]
		const addressm0eltdt = accounts[0]
		const addressIcvI875 = accounts[2]
		const addressUsY6OT6 = accounts[0]
		const addressW3tGMYo = accounts[1]
		const addressyC2X4uX = await afiControllerEdAdoRC.setConverter.call(addressMEIECMo, address6sOi2D, addressZkYyrt, {from: accounts[0]});
//		const addressfYwmoxE = await afiControllerEdAdoRC.inCaseStrategyTokenGetStuck.call(addressA5h2be, addresspJSORCr, {from: accounts[0]});
//		const addressykcZEt5 = await afiControllerEdAdoRC.revokeStrategy.call(addresskfzpOuM, addressAxKwJya, {from: accounts[2]});
//		const addresslJLaqch = await afiControllerEdAdoRC.earn.call(addressuaGn7iI, uintNQ89gu, {from: accounts[0]});
//		const addressj9u2sc = await afiControllerEdAdoRC.setVault.call(addressIcvI875, addressm0eltdt, {from: "0x0000000000000000000000000000000000000001"});
//		const addressva2ER4U = await afiControllerEdAdoRC.approveStrategy.call(addressW3tGMYo, addressUsY6OT6, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerEdAdoRC.inCaseStrategyTokenGetStuck.call(addressA5h2be, addresspJSORCr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresscy0mkJk = "0x0000000000000000000000000000000000000001"
		const afiControllerVc0tAkm = await afiController.new(addresscy0mkJk, {from: accounts[0]});
		const addressUtagLfH = accounts[0]
		const addressaDz2ZV5 = accounts[3]
		const uintTKwcUoB = BigInt("1070")
		const addressoOglIbs = accounts[5]
		const addressYeXxUeb = await afiControllerVc0tAkm.revokeStrategy.call(addressaDz2ZV5, addressUtagLfH, {from: accounts[0]});
//		const uintC7utgl = await afiControllerVc0tAkm.setSplit.call(uintTKwcUoB, {from: accounts[2]});
//		const address8O3kRt = await afiControllerVc0tAkm.withdrawAll.call(addressoOglIbs, {from: accounts[2]});

		await expect(afiControllerVc0tAkm.setSplit.call(uintTKwcUoB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressdqcydyR = accounts[1]
		const afiControllerVknjFqc = await afiController.new(addressdqcydyR, {from: accounts[0]});
		const uintaBa0uk3 = BigInt("690")
		const uintOZepthR = BigInt("1596")
		const addressxjLxWS8 = accounts[0]
		const uinth4rjOfm = await afiControllerVknjFqc.setSplit.call(uintaBa0uk3, {from: accounts[0]});
//		const addressteYEuY0 = await afiControllerVknjFqc.earn.call(addressxjLxWS8, uintOZepthR, {from: accounts[0]});

		await expect(afiControllerVknjFqc.earn.call(addressxjLxWS8, uintOZepthR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressWPzN1IU = accounts[5]
		const afiControllerS89miTB = await afiController.new(addressWPzN1IU, {from: accounts[1]});
		const uintaNs0Qrf = BigInt("1999")
		const addressc0srDia = accounts[5]
		const uintCx7xpwL = BigInt("300")
		const addressZOvf0Ss = accounts[3]
		const addressxTpnlP9 = accounts[3]
//		const addresseBTdciQ = await afiControllerS89miTB.inCaseTokensGetStuck.call(addressc0srDia, uintaNs0Qrf, {from: accounts[1]});
//		const addressvWrmZpK = await afiControllerS89miTB.inCaseTokensGetStuck.call(addressZOvf0Ss, uintCx7xpwL, {from: "0x0000000000000000000000000000000000000001"});
//		const addressYcBPdVy = await afiControllerS89miTB.setRewards.call(addressxTpnlP9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerS89miTB.inCaseTokensGetStuck.call(addressc0srDia, uintaNs0Qrf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})