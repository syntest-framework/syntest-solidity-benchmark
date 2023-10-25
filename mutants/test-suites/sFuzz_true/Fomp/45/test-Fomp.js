const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressSJcoLjR = accounts[3]
		const FomptymHWUc = await Fomp.new(addressSJcoLjR, {from: accounts[5]});
		const addressWxxBBz1 = accounts[0]
		const uintCHPTaNu = BigInt("536")
		const addressnos4fvk = accounts[1]
		const uintTRqLOnE = await FomptymHWUc.balanceOf.call(addressWxxBBz1, {from: accounts[0]});
//		const booljdHnH6v = await FomptymHWUc.transfer.call(addressnos4fvk, uintCHPTaNu, {from: accounts[1]});

		assert.equal(uintTRqLOnE, BigInt("0"))
		await expect(FomptymHWUc.transfer.call(addressnos4fvk, uintCHPTaNu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressP2X60do = accounts[3]
		const FomppeUkYWa = await Fomp.new(addressP2X60do, {from: accounts[2]});
		const addressRDt9W81 = accounts[0]
		const addressWKQdXeT = accounts[1]
		const uintccntCxc = BigInt("399")
		const addressWhDeuy3 = accounts[0]
		const uintXfXj9C1 = await FomppeUkYWa.allowance.call(addressWKQdXeT, addressRDt9W81, {from: accounts[4]});
//		const booljrnu4u = await FomppeUkYWa.transfer.call(addressWhDeuy3, uintccntCxc, {from: accounts[2]});

		assert.equal(uintXfXj9C1, BigInt("0"))
		await expect(FomppeUkYWa.transfer.call(addressWhDeuy3, uintccntCxc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressnGTMnRu = accounts[2]
		const FompYvmcYH = await Fomp.new(addressnGTMnRu, {from: accounts[5]});
		const byteXOmB1T = "0x160d111f071414150e1a15050b1c01181f091c1c000a0c1b160806021205020c"
		const byteC1ry8uc = "0x121310041d130d1013081803100e0604151b150b090d11030a09010415060805"
		const uintqux2Itw = BigInt("91")
		const uintazEtdPV = BigInt("1749")
		const uintJ9jwft4 = BigInt("176")
		const addressAMwT2Yc = "0x0000000000000000000000000000000000000001"
		const byteDiclqYy = "0x0909050c0f101c1b0b1f1a190b04090c03061c1e0f1d1308151c1e0f180d0317"
		const byte4Me0VF = "0x18091f1e0f08051d0d0115091014021d03061a08180407161c05071c05061508"
		const uintF2sI5v2 = BigInt("168")
		const uintG12RxXw = BigInt("1212")
		const uintnqKhqBk = BigInt("1727")
		const addressAnYF6Pr = "0x0000000000000000000000000000000000000001"
		const addressmzQAi6w = accounts[4]
		const addressZ9hBF7 = "0x0000000000000000000000000000000000000001"
		const uintVpO0MOY = BigInt("613")
		const address0QIjd1 = accounts[1]
//		const addressDy8ciA6 = await FompYvmcYH.delegateBySig.call(addressAMwT2Yc, uintJ9jwft4, uintazEtdPV, uintqux2Itw, byteC1ry8uc, byteXOmB1T, {from: accounts[5]});
//		const addressOrfjEEK = await FompYvmcYH.delegateBySig.call(addressAnYF6Pr, uintnqKhqBk, uintG12RxXw, uintF2sI5v2, byte4Me0VF, byteDiclqYy, {from: accounts[2]});
//		const uintQTykYYX = await FompYvmcYH.balanceOf.call(addressmzQAi6w, {from: accounts[2]});
//		const addressLtpwM2X = await FompYvmcYH.delegate.call(addressZ9hBF7, {from: accounts[3]});
//		const boolBrEJ4co = await FompYvmcYH.approve.call(address0QIjd1, uintVpO0MOY, {from: accounts[4]});

		await expect(FompYvmcYH.delegateBySig.call(addressAMwT2Yc, uintJ9jwft4, uintazEtdPV, uintqux2Itw, byteC1ry8uc, byteXOmB1T, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressffQAaK0 = accounts[3]
		const FompvrHIPyz = await Fomp.new(addressffQAaK0, {from: accounts[0]});
		const addressvSkYlWO = accounts[2]
		const uintKbSAsfk = BigInt("281")
		const addressLtO8rJ2 = accounts[1]
		const uintzxFHtl = BigInt("408")
		const addressUzh14D9 = accounts[3]
		const addressDFyUg6Q = "0x0000000000000000000000000000000000000001"
		const addressenQaHii = accounts[4]
		const uintHQ6KKsg = BigInt("94")
		const addressTwggCOM = accounts[0]
		const addressoqJFQrN = await FompvrHIPyz.delegate.call(addressvSkYlWO, {from: accounts[4]});
//		const boolXAHmmc = await FompvrHIPyz.transfer.call(addressLtO8rJ2, uintKbSAsfk, {from: accounts[4]});
//		const boolH5kq5FT = await FompvrHIPyz.transferFrom.call(addressDFyUg6Q, addressUzh14D9, uintzxFHtl, {from: accounts[2]});
//		const uint96VikDn0e = await FompvrHIPyz.getCurrentVotes.call(addressenQaHii, {from: accounts[2]});
//		const uint96YecAeGy = await FompvrHIPyz.getPriorVotes.call(addressTwggCOM, uintHQ6KKsg, {from: accounts[3]});

		await expect(FompvrHIPyz.transfer.call(addressLtO8rJ2, uintKbSAsfk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressfnqN7Iz = accounts[4]
		const FompAgYH8xi = await Fomp.new(addressfnqN7Iz, {from: accounts[0]});
		const uintgpa4RN2 = BigInt("1169")
		const addressrgV35Yq = accounts[4]
		const addressnm7sNwR = accounts[1]
		const uintmrCQ9aj = BigInt("1061")
		const addressuYWHqUm = accounts[0]
		const addressm34cPId = accounts[4]
		const uintHTZ49d = BigInt("65")
		const addressAi03vqx = accounts[1]
		const addresse6mkwkL = accounts[0]
//		const boolejcQWqg = await FompAgYH8xi.transferFrom.call(addressnm7sNwR, addressrgV35Yq, uintgpa4RN2, {from: accounts[1]});
//		const boolDAHo2SH = await FompAgYH8xi.transferFrom.call(addressm34cPId, addressuYWHqUm, uintmrCQ9aj, {from: accounts[2]});
//		const boolRxYLSE0 = await FompAgYH8xi.transfer.call(addressAi03vqx, uintHTZ49d, {from: accounts[4]});
//		const uint96H5TMT4U = await FompAgYH8xi.getCurrentVotes.call(addresse6mkwkL, {from: accounts[1]});

		await expect(FompAgYH8xi.transferFrom.call(addressnm7sNwR, addressrgV35Yq, uintgpa4RN2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressyteniZf = accounts[4]
		const FompZ4pBWVX = await Fomp.new(addressyteniZf, {from: accounts[0]});
		const uintJT2Ehgx = BigInt("349")
		const addresslSQ41pZ = accounts[3]
		const addressJSsunZt = accounts[4]
		const addresspm14V1 = accounts[0]
		const uintTcLDVZM = BigInt("1586")
		const addressjn0BiDs = accounts[2]
		const addressucFQULT = accounts[3]
		const uintugOeseV = BigInt("905")
		const addressaiTiDSt = accounts[4]
		const addressL1Y0nNO = accounts[2]
//		const boolzkRP46g = await FompZ4pBWVX.transferFrom.call(addressJSsunZt, addresslSQ41pZ, uintJT2Ehgx, {from: accounts[3]});
//		const addresstGfIo2t = await FompZ4pBWVX.delegate.call(addresspm14V1, {from: "0x0000000000000000000000000000000000000001"});
//		const boolKEKwCM2 = await FompZ4pBWVX.transferFrom.call(addressucFQULT, addressjn0BiDs, uintTcLDVZM, {from: accounts[3]});
//		const boolqk4TbwT = await FompZ4pBWVX.transferFrom.call(addressL1Y0nNO, addressaiTiDSt, uintugOeseV, {from: accounts[1]});

		await expect(FompZ4pBWVX.transferFrom.call(addressJSsunZt, addresslSQ41pZ, uintJT2Ehgx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressoLJDWJp = accounts[3]
		const FompvrHIPyz = await Fomp.new(addressoLJDWJp, {from: accounts[0]});
		const addressOp2WESN = accounts[2]
		const uintUQivwyX = BigInt("998")
		const addressAlIsO5z = accounts[0]
		const uints3lJX7Y = BigInt("281")
		const addressDAvmQkQ = accounts[1]
		const uintmnqi6Fr = BigInt("408")
		const addressSOZd9Jf = accounts[3]
		const addressidU5lsB = "0x0000000000000000000000000000000000000001"
		const address2DHRW0 = accounts[4]
		const uintaagjOJ = BigInt("94")
		const addressNEodLS7 = accounts[0]
		const addressoqJFQrN = await FompvrHIPyz.delegate.call(addressOp2WESN, {from: accounts[4]});
		const uint96x9rLzXj = await FompvrHIPyz.getPriorVotes.call(addressAlIsO5z, uintUQivwyX, {from: accounts[5]});
//		const boolXAHmmc = await FompvrHIPyz.transfer.call(addressDAvmQkQ, uints3lJX7Y, {from: accounts[4]});
//		const boolH5kq5FT = await FompvrHIPyz.transferFrom.call(addressidU5lsB, addressSOZd9Jf, uintmnqi6Fr, {from: accounts[2]});
//		const uint96VikDn0e = await FompvrHIPyz.getCurrentVotes.call(address2DHRW0, {from: accounts[2]});
//		const uint96YecAeGy = await FompvrHIPyz.getPriorVotes.call(addressNEodLS7, uintaagjOJ, {from: accounts[3]});

		assert.equal(uint96x9rLzXj, BigInt("0"))
		await expect(FompvrHIPyz.transfer.call(addressDAvmQkQ, uints3lJX7Y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressueBTlj = accounts[2]
		const FompWFLx4FE = await Fomp.new(addressueBTlj, {from: accounts[2]});
		const addressj0ncmLC = accounts[2]
		const addressypKJwYK = accounts[2]
		const addressloIc5b = accounts[3]
		const addressCRUt5Vz = accounts[5]
		const uintlD5LGA7 = BigInt("457")
		const addressDFDclMa = accounts[4]
		const uint96WVci2XP = await FompWFLx4FE.getCurrentVotes.call(addressj0ncmLC, {from: accounts[1]});
		const uint96mRITJaw = await FompWFLx4FE.getCurrentVotes.call(addressypKJwYK, {from: accounts[4]});
		const uintAYZBncC = await FompWFLx4FE.allowance.call(addressCRUt5Vz, addressloIc5b, {from: accounts[3]});
//		const boolrz9vpit = await FompWFLx4FE.transfer.call(addressDFDclMa, uintlD5LGA7, {from: accounts[0]});

		assert.equal(uint96WVci2XP, BigInt("0"))
		assert.equal(uint96mRITJaw, BigInt("0"))
		assert.equal(uintAYZBncC, BigInt("0"))
		await expect(FompWFLx4FE.transfer.call(addressDFDclMa, uintlD5LGA7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressaXjtSCH = accounts[4]
		const FompZ4pBWVX = await Fomp.new(addressaXjtSCH, {from: accounts[0]});
		const uintPHpIFvv = BigInt("1179")
		const addresscz2EoKP = "0x0000000000000000000000000000000000000001"
		const uintytu38ln = BigInt("349")
		const addressnn9E84u = accounts[3]
		const addressLQmSI6b = accounts[4]
		const uintc6C8orX = BigInt("1586")
		const addressz54eet = accounts[3]
		const addressVvJ5zw5 = accounts[3]
		const uintFwVDBax = BigInt("807")
		const addressboAKsn = accounts[0]
		const uintX2bqoEP = BigInt("905")
		const addressH9pSCE6 = accounts[4]
		const addressBkTvK2H = accounts[2]
		const bool9tuwl8 = await FompZ4pBWVX.approve.call(addresscz2EoKP, uintPHpIFvv, {from: accounts[2]});
//		const boolzkRP46g = await FompZ4pBWVX.transferFrom.call(addressLQmSI6b, addressnn9E84u, uintytu38ln, {from: accounts[3]});
//		const boolKEKwCM2 = await FompZ4pBWVX.transferFrom.call(addressVvJ5zw5, addressz54eet, uintc6C8orX, {from: accounts[3]});
//		const boolseJGev0 = await FompZ4pBWVX.approve.call(addressboAKsn, uintFwVDBax, {from: accounts[1]});
//		const boolqk4TbwT = await FompZ4pBWVX.transferFrom.call(addressBkTvK2H, addressH9pSCE6, uintX2bqoEP, {from: accounts[1]});

		assert.equal(bool9tuwl8, true)
		await expect(FompZ4pBWVX.transferFrom.call(addressLQmSI6b, addressnn9E84u, uintytu38ln, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressiW5qDpm = accounts[3]
		const FompvrHIPyz = await Fomp.new(addressiW5qDpm, {from: accounts[0]});
		const uintw0G5q6s = BigInt("1565")
		const addressR7fLDkD = accounts[3]
		const addressA1s679z = accounts[2]
		const uintxFhuAps = BigInt("281")
		const addressMYCjttD = accounts[1]
		const addressuyXgAgZ = accounts[5]
		const uintOYq6VgL = BigInt("94")
		const addressF4U1czY = accounts[0]
		const boolJQ5z30 = await FompvrHIPyz.transfer.call(addressR7fLDkD, uintw0G5q6s, {from: accounts[3]});
		const addressoqJFQrN = await FompvrHIPyz.delegate.call(addressA1s679z, {from: accounts[4]});
//		const boolXAHmmc = await FompvrHIPyz.transfer.call(addressMYCjttD, uintxFhuAps, {from: accounts[4]});
//		const uint96VikDn0e = await FompvrHIPyz.getCurrentVotes.call(addressuyXgAgZ, {from: accounts[2]});
//		const uint96YecAeGy = await FompvrHIPyz.getPriorVotes.call(addressF4U1czY, uintOYq6VgL, {from: accounts[3]});

		assert.equal(boolJQ5z30, true)
		await expect(FompvrHIPyz.transfer.call(addressMYCjttD, uintxFhuAps, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressLw4oxQa = accounts[4]
		const FompaYp9tBP = await Fomp.new(addressLw4oxQa, {from: "0x0000000000000000000000000000000000000001"});
		const uintrGxjw2I = BigInt("298")
		const addressQ4BJQV8 = accounts[1]
		const uintzePNoh5 = BigInt("1918")
		const addressHBcDwKH = accounts[2]
		const addressJy060lK = accounts[1]
		const uintkWu0Z0 = BigInt("1959")
		const addressH1dJlMw = accounts[1]
		const addressP35oabZ = accounts[4]
		const addressOJ5WRZY = accounts[0]
		const addressLPERd0E = accounts[3]
		const addressVe2unT = accounts[3]
		const addressrafFVTE = accounts[0]
		const addressHncqLJC = accounts[2]
		const boolwKTr75e = await FompaYp9tBP.transfer.call(addressQ4BJQV8, uintrGxjw2I, {from: accounts[0]});
		const boolx5lG1ME = await FompaYp9tBP.transferFrom.call(addressJy060lK, addressHBcDwKH, uintzePNoh5, {from: accounts[2]});
		const booln83VHAq = await FompaYp9tBP.transferFrom.call(addressP35oabZ, addressH1dJlMw, uintkWu0Z0, {from: "0x0000000000000000000000000000000000000001"});
		const addressvelVYmD = await FompaYp9tBP.delegate.call(addressOJ5WRZY, {from: accounts[0]});
		const uintLAlM14 = await FompaYp9tBP.allowance.call(addressVe2unT, addressLPERd0E, {from: accounts[0]});
		const uinta6FxsKZ = await FompaYp9tBP.allowance.call(addressHncqLJC, addressrafFVTE, {from: accounts[5]});
	});

	it('test for Fomp', async () => {
		const addressr7kLQ5b = accounts[3]
		const FompvrHIPyz = await Fomp.new(addressr7kLQ5b, {from: accounts[0]});
		const addressB45tQL = "0x0000000000000000000000000000000000000001"
		const addressNtmxoV8 = accounts[3]
		const uintXf7yUM = BigInt("281")
		const addresswAFxs46 = accounts[1]
		const uintS65N8yg = BigInt("94")
		const addressaCpUiPb = accounts[3]
		const uintsyB3p2S = BigInt("1188")
		const addressllzeRWU = accounts[0]
		const addressWhHcNQx = await FompvrHIPyz.delegate.call(addressB45tQL, {from: accounts[3]});
		const addressoqJFQrN = await FompvrHIPyz.delegate.call(addressNtmxoV8, {from: accounts[4]});
//		const boolXAHmmc = await FompvrHIPyz.transfer.call(addresswAFxs46, uintXf7yUM, {from: accounts[4]});
//		const uint96YecAeGy = await FompvrHIPyz.getPriorVotes.call(addressaCpUiPb, uintS65N8yg, {from: accounts[3]});
//		const boolbrG4uyn = await FompvrHIPyz.approve.call(addressllzeRWU, uintsyB3p2S, {from: accounts[4]});

		await expect(FompvrHIPyz.transfer.call(addresswAFxs46, uintXf7yUM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressppIWDyF = accounts[3]
		const FompvrHIPyz = await Fomp.new(addressppIWDyF, {from: accounts[0]});
		const addressKWBBMJ = "0x0000000000000000000000000000000000000001"
		const uintTgjfX0F = BigInt("1551")
		const addressM1PFyJ = accounts[5]
		const addressPDG45DP = accounts[3]
		const uintUR3tYvX = BigInt("94")
		const addressWiLjBRd = accounts[3]
		const uintLalVCl1 = BigInt("1188")
		const addressPF6TRZV = accounts[3]
		const uintWyXl04M = BigInt("340")
		const addressdq5eEK = accounts[1]
		const addressZIMCLiy = accounts[4]
		const addressWhHcNQx = await FompvrHIPyz.delegate.call(addressKWBBMJ, {from: accounts[3]});
		const boolAMlNEv9 = await FompvrHIPyz.approve.call(addressM1PFyJ, uintTgjfX0F, {from: accounts[3]});
		const addressoqJFQrN = await FompvrHIPyz.delegate.call(addressPDG45DP, {from: accounts[4]});
		const uint96YecAeGy = await FompvrHIPyz.getPriorVotes.call(addressWiLjBRd, uintUR3tYvX, {from: accounts[3]});
		const boolbrG4uyn = await FompvrHIPyz.approve.call(addressPF6TRZV, uintLalVCl1, {from: accounts[4]});
//		const boolFKfWj4v = await FompvrHIPyz.transferFrom.call(addressZIMCLiy, addressdq5eEK, uintWyXl04M, {from: accounts[5]});

		assert.equal(boolAMlNEv9, true)
		assert.equal(boolbrG4uyn, true)
		assert.equal(uint96YecAeGy, BigInt("0"))
		await expect(FompvrHIPyz.transferFrom.call(addressZIMCLiy, addressdq5eEK, uintWyXl04M, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressAiZElTS = accounts[1]
		const FompihHlL2d = await Fomp.new(addressAiZElTS, {from: accounts[0]});
		const byteXg8Qs9o = "0x0a1a0f060d031006050f18161d140f15130d1a09141b0f1504100318010f1b02"
		const bytewdEk0c = "0x0b1608170d04161b171b0a20090509151a10031714090e191a14191b1c1a0012"
		const uintGykHNt = BigInt("27")
		const uintLcUTjW0 = BigInt("2012")
		const uintdfNNao1 = BigInt("1960")
		const addressxqNoF0T = accounts[4]
		const addressY05dYQk = accounts[2]
		const byteoXf9eeU = "0x121a13130a171c131d020315030a181007051b130d17120c1f19180319061f1e"
		const bytecrKaJHL = "0x10171e130d1910070a13141a0f0f120f0202091f1c0b130b021014121b111f1b"
		const uintvxFfr9u = BigInt("79")
		const uintUSKMrd = BigInt("1974")
		const uintk6FN1Nl = BigInt("73")
		const addressZVlGaRD = accounts[1]
		const addressuN4GD4I = accounts[0]
//		const addressQ5ZjULN = await FompihHlL2d.delegateBySig.call(addressxqNoF0T, uintdfNNao1, uintLcUTjW0, uintGykHNt, bytewdEk0c, byteXg8Qs9o, {from: accounts[3]});
//		const uint966VVckF = await FompihHlL2d.getCurrentVotes.call(addressY05dYQk, {from: accounts[0]});
//		const addresscY193vC = await FompihHlL2d.delegateBySig.call(addressZVlGaRD, uintk6FN1Nl, uintUSKMrd, uintvxFfr9u, bytecrKaJHL, byteoXf9eeU, {from: accounts[5]});
//		const uintObr494F = await FompihHlL2d.balanceOf.call(addressuN4GD4I, {from: accounts[0]});

		await expect(FompihHlL2d.delegateBySig.call(addressxqNoF0T, uintdfNNao1, uintLcUTjW0, uintGykHNt, bytewdEk0c, byteXg8Qs9o, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})