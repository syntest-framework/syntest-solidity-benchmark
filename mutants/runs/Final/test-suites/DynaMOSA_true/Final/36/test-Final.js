const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringS5sbxB = "yCiaCWkc4OFsHpyNoilLhQJ"
		const stringFUz3LK5 = "ks8Ik8amIXxgcu465HdIziF2G4dvWjzxscRyvdBADPwngf3rHvXwbiAMaycSwyoLd"
		const uinteAcC7Ul = BigInt("140")
		const FinalwLxrG3z = await Final.new(stringS5sbxB, stringFUz3LK5, uinteAcC7Ul, {from: "0x0000000000000000000000000000000000000001"});
		const uintnW1MmBk = BigInt("1728")
		const addressC28QLMM = "0x0000000000000000000000000000000000000001"
		const addressRoki9yF = accounts[3]
		const uintycTvimf = BigInt("469")
		const addresssBvI16b = accounts[1]
		const uintu9usZCX = BigInt("1800")
		const addressdBBYI0k = accounts[1]
		const uintDvGMvTu = await FinalwLxrG3z.totalSupply.call({from: accounts[4]});
		const boolOh08qub = await FinalwLxrG3z.approveAndCall.call(addressC28QLMM, uintnW1MmBk, {from: accounts[3]});
		const uintee76gH = await FinalwLxrG3z.balanceOf.call(addressRoki9yF, {from: accounts[1]});
		const boolh8gzw1c = await FinalwLxrG3z.approve.call(addresssBvI16b, uintycTvimf, {from: accounts[4]});
		const boolmyojXnS = await FinalwLxrG3z.transfer.call(addressdBBYI0k, uintu9usZCX, {from: accounts[1]});
	});

	it('test for Final', async () => {
		const stringw9D0UlC = "EG7ljyDcv1Vf7gKTz23mq8OA"
		const stringU2ILk6Z = "7y"
		const uintQZwaW5 = BigInt("121")
		const FinalmJG1Ixo = await Final.new(stringw9D0UlC, stringU2ILk6Z, uintQZwaW5, {from: accounts[3]});
		const uinti43IKE = BigInt("2009")
		const addresshBxR5E5 = accounts[1]
		const boolsaNaktH = await FinalmJG1Ixo.decreaseAllowance.call(addresshBxR5E5, uinti43IKE, {from: accounts[2]});
		const stringTMrPjdM = await FinalmJG1Ixo.symbol.call({from: accounts[4]});
		const stringDCDpUc4 = await FinalmJG1Ixo.name.call({from: accounts[5]});

		await expect(FinalmJG1Ixo.decreaseAllowance.call(addresshBxR5E5, uinti43IKE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringRdB5OJK = "CHJcUppQhszVGj1uLdkMBwNomfHPtdz8fe5a233N3AI2dmRmOzr4hamWThW7"
		const stringzgFLCl = "RciDo39nN493hEQBu3ajPFWHRWJOK"
		const uintx2w4nHd = BigInt("1484")
		const Final9oJNdV = await Final.new(stringRdB5OJK, stringzgFLCl, uintx2w4nHd, {from: accounts[3]});
		const uintj22QRYk = BigInt("568")
		const addressKHS5vRE = accounts[4]
		const uintAZdF5G = BigInt("964")
		const addressz8o1UIH = accounts[4]
		const uintbNKnJBu = BigInt("1974")
		const addresshkYN2V = accounts[3]
		const boolQT1Qn2Z = await Final9oJNdV.approve.call(addressKHS5vRE, uintj22QRYk, {from: accounts[2]});
		const boolXbYksrK = await Final9oJNdV.transfer.call(addressz8o1UIH, uintAZdF5G, {from: accounts[5]});
		const boolprDX5HU = await Final9oJNdV.approve.call(addresshkYN2V, uintbNKnJBu, {from: accounts[0]});

		assert.equal(boolQT1Qn2Z, true)
		await expect(Final9oJNdV.transfer.call(addressz8o1UIH, uintAZdF5G, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringFDZGM6 = "NRlIrQpsBJ7bW9GNLDVbLfYeLuQzQVfQoRj6JgCGKjzMbpdjJBt3Jqkn668iZejxq9a1lBBBfvFBQazIeY2BFMJz"
		const stringMOHYoWR = "2SD9SVJsUDXYROILCpqlOcB0luxlrzfeMb8tOqsBbwyCNcWxgwPh7qN9t2atvTOBpikg"
		const uintcom57BR = BigInt("180")
		const FinalhcadhOq = await Final.new(stringFDZGM6, stringMOHYoWR, uintcom57BR, {from: accounts[2]});
		const uintQDCn70i = BigInt("816")
		const addressEe9Oj6n = accounts[4]
		const addressUpHyNbU = accounts[3]
		const uintlrCwK2C = BigInt("168")
		const addressWWbdjAt = accounts[4]
		const addressvYH06v = accounts[1]
		const addressE6gywWn = accounts[4]
		const boolFBbLECg = await FinalhcadhOq.transferFrom.call(addressUpHyNbU, addressEe9Oj6n, uintQDCn70i, {from: accounts[2]});
		const boolZ4bAcxY = await FinalhcadhOq.transfer.call(addressWWbdjAt, uintlrCwK2C, {from: accounts[2]});
		const uintbk2hSRZ = await FinalhcadhOq.allowance.call(addressE6gywWn, addressvYH06v, {from: accounts[2]});
		const stringt1r59Do = await FinalhcadhOq.symbol.call({from: accounts[0]});

		await expect(FinalhcadhOq.transferFrom.call(addressUpHyNbU, addressEe9Oj6n, uintQDCn70i, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringFDZGM6 = "NRlIrQpsBJ7bW9GNLDVbLfYeLuQzQVfQoRj6JgCGKjzMbpdjJBt3Jqkn668iZejxq9a1lBBBfvFBQazIeY2BFMJz"
		const stringMOHYoWR = "2SD9SVJsUDXYROILCpqlOcB0luxlrzfeMb8tOqsBbwyCNcWxgwPh7qN9t2atvTOBpikg"
		const uintsx3JZ6f = BigInt("180")
		const FinalhcadhOq = await Final.new(stringFDZGM6, stringMOHYoWR, uintsx3JZ6f, {from: accounts[2]});
		const uintaeA9hRN = BigInt("168")
		const addressXCk3VW8 = accounts[4]
		const addressCKkViqn = accounts[2]
		const addressN23LJeu = accounts[4]
		const boolZ4bAcxY = await FinalhcadhOq.transfer.call(addressXCk3VW8, uintaeA9hRN, {from: accounts[2]});
		const uintbk2hSRZ = await FinalhcadhOq.allowance.call(addressN23LJeu, addressCKkViqn, {from: accounts[2]});
		const stringt1r59Do = await FinalhcadhOq.symbol.call({from: accounts[0]});

		assert.equal(boolZ4bAcxY, true)
		assert.equal(stringt1r59Do, "2SD9SVJsUDXYROILCpqlOcB0luxlrzfeMb8tOqsBbwyCNcWxgwPh7qN9t2atvTOBpikg")
		assert.equal(uintbk2hSRZ, BigInt("0"))
	});

	it('test for Final', async () => {
		const stringbTsbdEg = "rkOMct4296HYkl7cNvwKl8j2rkBDD5dchSUQV4Y0HhRLwKwKKpFXl5AxrOPcUNBRdcv2NVfmvhQ4Qm"
		const stringCS6rzv = "94JR4MTLGVhfs3GS8bmYQ7hnxtKVQMhyHE24CFErQwt3fAqRHeA4e"
		const uintrIn3y11 = BigInt("730")
		const FinalFUlZMr = await Final.new(stringbTsbdEg, stringCS6rzv, uintrIn3y11, {from: accounts[4]});
		const addressCO7KUO = accounts[4]
		const addresss6UsOl4 = accounts[1]
		const uintmsntQCK = BigInt("1381")
		const addressgS69NuS = accounts[2]
		const addressLC1tYr1 = accounts[5]
		const addresscz3Gl7B = accounts[3]
		const uintqTNHEYy = BigInt("16")
		const addresswRMp7fa = "0x0000000000000000000000000000000000000001"
		const uintXbziCkX = BigInt("122")
		const addressFrwzT94 = accounts[4]
		const uintDxKYaoy = await FinalFUlZMr.allowance.call(addresss6UsOl4, addressCO7KUO, {from: accounts[5]});
		const boolRp2CDiA = await FinalFUlZMr.approve.call(addressgS69NuS, uintmsntQCK, {from: accounts[0]});
		const boolg3cX5tj = await FinalFUlZMr.transferownership.call(addressLC1tYr1, {from: accounts[3]});
		const uintZdPIqao = await FinalFUlZMr.balanceOf.call(addresscz3Gl7B, {from: accounts[0]});
		const boolZejOmnY = await FinalFUlZMr.transfer.call(addresswRMp7fa, uintqTNHEYy, {from: accounts[1]});
		const boolOEuATgw = await FinalFUlZMr.approve.call(addressFrwzT94, uintXbziCkX, {from: accounts[0]});

		assert.equal(boolRp2CDiA, true)
		assert.equal(uintDxKYaoy, BigInt("0"))
		await expect(FinalFUlZMr.transferownership.call(addressLC1tYr1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringbTsbdEg = "rkOMct4296HYkl7cNvwKl8j2rkBDD5dchSUQV4Y0HhRLwKwKKpFXl5AxrOPcUNBRdcv2NVfmvhQ4Qm"
		const stringCS6rzv = "94JR4MTLGVhfs3GS8bmYQ7hnxtKVQMhyHE24CFErQwt3fAqRHeA4e"
		const uintmLMsuey = BigInt("730")
		const FinalFUlZMr = await Final.new(stringbTsbdEg, stringCS6rzv, uintmLMsuey, {from: accounts[4]});
		const uintXLLpriy = BigInt("320")
		const addressJvB7gD2 = accounts[0]
		const addressjSdlRXW = accounts[4]
		const addressvS0mIt = accounts[2]
		const uintUvvXK7C = BigInt("1381")
		const addressz70IUO2 = accounts[2]
		const addressbtarCPp = accounts[2]
		const uintA17icFn = BigInt("36")
		const addressoIqjsFa = accounts[4]
		const address6pvpTU = accounts[0]
		const uintLcSwNnm = BigInt("16")
		const addressUaoAD5 = "0x0000000000000000000000000000000000000000"
		const boolooZCPOJ = await FinalFUlZMr.approveAndCall.call(addressJvB7gD2, uintXLLpriy, {from: accounts[0]});
		const uintDxKYaoy = await FinalFUlZMr.allowance.call(addressvS0mIt, addressjSdlRXW, {from: accounts[5]});
		const boolRp2CDiA = await FinalFUlZMr.approve.call(addressz70IUO2, uintUvvXK7C, {from: accounts[0]});
		const uintZdPIqao = await FinalFUlZMr.balanceOf.call(addressbtarCPp, {from: accounts[0]});
		const booloZOW04m = await FinalFUlZMr.transferFrom.call(address6pvpTU, addressoIqjsFa, uintA17icFn, {from: accounts[0]});
		const boolZejOmnY = await FinalFUlZMr.transfer.call(addressUaoAD5, uintLcSwNnm, {from: accounts[1]});

		await expect(FinalFUlZMr.approveAndCall.call(addressJvB7gD2, uintXLLpriy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringbTsbdEg = "rkOMct4296HYkl7cNvwKl8j2rkBDD5dchSUQV4Y0HhRLwKwKKpFXl5AxrOPcUNBRdcv2NVfmvhQ4Qm"
		const stringCS6rzv = "94JR4MTLGVhfs3GS8bmYQ7hnxtKVQMhyHE24CFErQwt3fAqRHeA4e"
		const uintiNuL8tl = BigInt("730")
		const FinalFUlZMr = await Final.new(stringbTsbdEg, stringCS6rzv, uintiNuL8tl, {from: accounts[4]});
		const uintbc9fBZw = BigInt("0")
		const addressPnbcUQ0 = "0x0000000000000000000000000000000000000001"
		const addressDeNO03 = accounts[0]
		const addressXwU0eRc = accounts[1]
		const boolZejOmnY = await FinalFUlZMr.transfer.call(addressPnbcUQ0, uintbc9fBZw, {from: accounts[1]});
		const boolqNy3uDd = await FinalFUlZMr.transferownership.call(addressDeNO03, {from: accounts[2]});
		const boolvvNyAq9 = await FinalFUlZMr.transferownership.call(addressXwU0eRc, {from: accounts[1]});
		const stringQShtmBY = await FinalFUlZMr.symbol.call({from: accounts[3]});

		assert.equal(boolZejOmnY, true)
		await expect(FinalFUlZMr.transferownership.call(addressDeNO03, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringw9D0UlC = "EG7ljyDcv1Vf7gKTz23mq8OA"
		const stringU2ILk6Z = "7y"
		const uintUfNbtva = BigInt("121")
		const FinalmJG1Ixo = await Final.new(stringw9D0UlC, stringU2ILk6Z, uintUfNbtva, {from: accounts[3]});
		const addresseOlJUe9 = accounts[1]
		const uintgNEFphM = BigInt("886")
		const addressHcVUOvp = accounts[2]
		const uintfB1QIXG = BigInt("1206")
		const addresshkLcaP5 = accounts[2]
		const addressH6JwICm = accounts[1]
		const uintmX3jzCv = await FinalmJG1Ixo.balanceOf.call(addresseOlJUe9, {from: accounts[0]});
		const boolzYjgOU = await FinalmJG1Ixo.approveAndCall.call(addressHcVUOvp, uintgNEFphM, {from: accounts[3]});
		const boolAwaCtK6 = await FinalmJG1Ixo.transferFrom.call(addressH6JwICm, addresshkLcaP5, uintfB1QIXG, {from: accounts[0]});

		assert.equal(boolzYjgOU, true)
		assert.equal(uintmX3jzCv, BigInt("0"))
		await expect(FinalmJG1Ixo.transferFrom.call(addressH6JwICm, addresshkLcaP5, uintfB1QIXG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringbTsbdEg = "rkOMct4296HYkl7cNvwKl8j2rkBDD5dchSUQV4Y0HhRLwKwKKpFXl5AxrOPcUNBRdcv2NVfmvhQ4Qm"
		const stringCS6rzv = "94JR4MTLGVhfs3GS8bmYQ7hnxtKVQMhyHE24CFErQwt3fAqRHeA4e"
		const uintCgeKAI = BigInt("730")
		const FinalFUlZMr = await Final.new(stringbTsbdEg, stringCS6rzv, uintCgeKAI, {from: accounts[4]});
		const uintfg4olW = BigInt("0")
		const addresshzQEyvA = "0x0000000000000000000000000000000000000001"
		const addressUrPqvCY = accounts[1]
		const uinteuEaZuZ = BigInt("1000")
		const addressfzccpUi = accounts[2]
		const uintEmiwmEx = BigInt("1146")
		const addressEa0cv9G = accounts[1]
		const addresswIGLhAV = accounts[1]
		const boolZejOmnY = await FinalFUlZMr.transfer.call(addresshzQEyvA, uintfg4olW, {from: accounts[1]});
		const boolRxlnw71 = await FinalFUlZMr.transferownership.call(addressUrPqvCY, {from: accounts[4]});
		const booloY1xoZE = await FinalFUlZMr.approveAndCall.call(addressfzccpUi, uinteuEaZuZ, {from: accounts[4]});
		const boolXvyvji = await FinalFUlZMr.approve.call(addressEa0cv9G, uintEmiwmEx, {from: "0x0000000000000000000000000000000000000001"});
		const boolvvNyAq9 = await FinalFUlZMr.transferownership.call(addresswIGLhAV, {from: accounts[1]});
		const stringQShtmBY = await FinalFUlZMr.symbol.call({from: accounts[3]});

		assert.equal(boolRxlnw71, true)
		assert.equal(boolXvyvji, true)
		assert.equal(boolZejOmnY, true)
		assert.equal(booloY1xoZE, true)
		await expect(FinalFUlZMr.transferownership.call(addresswIGLhAV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringbTsbdEg = "rkOMct4296HYkl7cNvwKl8j2rkBDD5dchSUQV4Y0HhRLwKwKKpFXl5AxrOPcUNBRdcv2NVfmvhQ4Qm"
		const stringCS6rzv = "94JR4MTLGVhfs3GS8bmYQ7hnxtKVQMhyHE24CFErQwt3fAqRHeA4e"
		const uintmxisyO = BigInt("730")
		const FinalFUlZMr = await Final.new(stringbTsbdEg, stringCS6rzv, uintmxisyO, {from: accounts[4]});
		const uintYgSboWi = BigInt("12")
		const addressCSCvpI3 = accounts[1]
		const uintcRlDcbL = BigInt("17")
		const addressuRrU58Q = "0x00000000000000000000000000000000000000-1"
		const boolAMe5vgQ = await FinalFUlZMr.approveAndCall.call(addressCSCvpI3, uintYgSboWi, {from: accounts[4]});
		const boolZejOmnY = await FinalFUlZMr.transfer.call(addressuRrU58Q, uintcRlDcbL, {from: accounts[1]});

		assert.equal(boolAMe5vgQ, true)
		await expect(FinalFUlZMr.transfer.call(addressuRrU58Q, uintcRlDcbL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringbTsbdEg = "rkOMct4296HYkl7cNvwKl8j2rkBDD5dchSUQV4Y0HhRLwKwKKpFXl5AxrOPcUNBRdcv2NVfmvhQ4Qm"
		const stringCS6rzv = "94JR4MTLGVhfs3GS8bmYQ7hnxtKVQMhyHE24CFErQwt3fAqRHeA4e"
		const uintrbIvViL = BigInt("730")
		const FinalFUlZMr = await Final.new(stringbTsbdEg, stringCS6rzv, uintrbIvViL, {from: accounts[4]});
		const uintEeedmW8 = BigInt("0")
		const addressNrHRVsh = accounts[2]
		const boolAMe5vgQ = await FinalFUlZMr.approveAndCall.call(addressNrHRVsh, uintEeedmW8, {from: accounts[4]});

		assert.equal(boolAMe5vgQ, true)
	});
})