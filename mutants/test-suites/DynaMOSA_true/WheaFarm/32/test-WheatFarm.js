const WheatFarm = artifacts.require("WheatFarm");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WheatFarm', (accounts) => {
	it('test for WheatFarm', async () => {
		const stringARBnZh = "ZjVDhYlfCaXXVGu19j3a7u5tQMwQ077vWeqT1Ak8A7wR9Jtd"
		const stringQspHm3k = "nr85a8kb8MdbyLIDk2uLVSijvJZsTneIiMj"
		const uintMIw68ao = BigInt("112")
		const WheatFarmC5AOm3m = await WheatFarm.new(stringARBnZh, stringQspHm3k, uintMIw68ao, {from: accounts[1]});
		const uintFE9nOCT = BigInt("1961")
		const addressg4KQMuY = "0x0000000000000000000000000000000000000001"
		const uintlfzrjBv = BigInt("1551")
		const addressjWVTzoF = accounts[3]
		const addressiZlWOk7 = accounts[0]
		const uintMoE8Bft = BigInt("1416")
		const addressnzE6iwc = accounts[0]
		const uintPTdMtp = BigInt("616")
		const addressXMb5JxX = accounts[2]
		const addressRjvMcf = accounts[3]
		const uintqOzimb0 = BigInt("1715")
		const addressakT19gr = accounts[2]
//		const boolhsSlMqi = await WheatFarmC5AOm3m.transfer.call(addressg4KQMuY, uintFE9nOCT, {from: accounts[0]});
//		const bool15o6S3 = await WheatFarmC5AOm3m.transferFrom.call(addressiZlWOk7, addressjWVTzoF, uintlfzrjBv, {from: accounts[4]});
//		const stringEMs2mmD = await WheatFarmC5AOm3m.name.call({from: accounts[4]});
//		const boolRKEqt78 = await WheatFarmC5AOm3m.increaseAllowance.call(addressnzE6iwc, uintMoE8Bft, {from: accounts[2]});
//		const boolayoA44i = await WheatFarmC5AOm3m.transferFrom.call(addressRjvMcf, addressXMb5JxX, uintPTdMtp, {from: accounts[3]});
//		const boolaHzPNP1 = await WheatFarmC5AOm3m.transfer.call(addressakT19gr, uintqOzimb0, {from: accounts[2]});

		await expect(WheatFarmC5AOm3m.transfer.call(addressg4KQMuY, uintFE9nOCT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringC08JWYS = "lcDOTwK0wkP68Mc82xBsg7MhuGwhpuEVM4euwTve7KvAFhruIh9lC6yzf6FBYsnExyNds74Qvxe6STV"
		const stringwb605Bx = "ySdZTK9V5sjSA5nesFfecKVDLMKjaaL4bp0afHid6f4wwCt53muTs9yHUdkqSX6uFV1exEcS5gBz6wEHM"
		const uintoTC6kOI = BigInt("1664")
		const WheatFarmQ1PIdO3 = await WheatFarm.new(stringC08JWYS, stringwb605Bx, uintoTC6kOI, {from: "0x0000000000000000000000000000000000000001"});
		const addressAnPO1Is = accounts[3]
		const uintHe3dZQI = BigInt("42")
		const addressPIN9Hyf = accounts[2]
		const uintnBWd8sU = BigInt("768")
		const addressm7L1Xeq = accounts[0]
		const uintPxV1lhK = await WheatFarmQ1PIdO3.balanceOf.call(addressAnPO1Is, {from: accounts[4]});
		const booltRgorCO = await WheatFarmQ1PIdO3.decreaseAllowance.call(addressPIN9Hyf, uintHe3dZQI, {from: accounts[0]});
		const uint8pssUka8 = await WheatFarmQ1PIdO3.decimals.call({from: accounts[2]});
		const boolMXxGcow = await WheatFarmQ1PIdO3.transfer.call(addressm7L1Xeq, uintnBWd8sU, {from: "0x0000000000000000000000000000000000000001"});
		const stringtAsJI5v = await WheatFarmQ1PIdO3.symbol.call({from: accounts[1]});
	});

	it('test for WheatFarm', async () => {
		const stringlID79iS = "Rgbm3kKKLiFUxLWyfEJVMaE"
		const stringJgOPuK = "11vBkQV58fQsmhkHFBAi6za0OzmqDlps7q6qmIhUjdNPj4KdpkYUUotREca5bxeBi6NO91Il"
		const uintjSOrEiQ = BigInt("43")
		const WheatFarmjqZcJNh = await WheatFarm.new(stringlID79iS, stringJgOPuK, uintjSOrEiQ, {from: accounts[2]});
		const uintlGi5ysX = BigInt("630")
		const addressSIlwOsx = accounts[0]
		const uintkLcQrRr = BigInt("15")
		const address1FtUY8 = accounts[2]
		const boollcZHtuK = await WheatFarmjqZcJNh.approve.call(addressSIlwOsx, uintlGi5ysX, {from: accounts[1]});
		const uint8gtj4S9 = await WheatFarmjqZcJNh.decimals.call({from: accounts[0]});
//		const boolNhsR8ty = await WheatFarmjqZcJNh.transfer.call(address1FtUY8, uintkLcQrRr, {from: accounts[3]});

		assert.equal(boollcZHtuK, true)
		assert.equal(uint8gtj4S9, BigInt("18"))
		await expect(WheatFarmjqZcJNh.transfer.call(address1FtUY8, uintkLcQrRr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringzjdUkIr = "xhC3iVCAuL5HxXLxSkeeu1vAbmPMGNuNisWxRIwkIZ6BvlU3zs9wdAbCkOsmF5fUNdMYHxiBt3ws"
		const stringY8n7iEi = "DO9NHCXE1sERjsO4lC0fLy9v"
		const uintogCoW6W = BigInt("162")
		const WheatFarmJGyUHqD = await WheatFarm.new(stringzjdUkIr, stringY8n7iEi, uintogCoW6W, {from: accounts[0]});
		const uinth5hgoiL = BigInt("270")
		const addressIzW7Ufe = accounts[1]
		const uintbXDIeYP = BigInt("1050")
		const addresseCCsrDN = accounts[2]
		const uintKFDKqRW = BigInt("1255")
		const addresswCpWsVa = accounts[2]
		const addressL8zceFg = accounts[5]
		const uintpFRVjx1 = BigInt("2017")
		const addressTR4Pllc = accounts[1]
//		const boolyvP0qlg = await WheatFarmJGyUHqD.decreaseAllowance.call(addressIzW7Ufe, uinth5hgoiL, {from: accounts[2]});
//		const boolBa0bhER = await WheatFarmJGyUHqD.transfer.call(addresseCCsrDN, uintbXDIeYP, {from: accounts[4]});
//		const stringKkxpvli = await WheatFarmJGyUHqD.symbol.call({from: accounts[2]});
//		const booleQI6MJ4 = await WheatFarmJGyUHqD.approve.call(addresswCpWsVa, uintKFDKqRW, {from: accounts[2]});
//		const boolwl2trHw = await WheatFarmJGyUHqD.transferownership.call(addressL8zceFg, {from: accounts[2]});
//		const boolqpWKRZJ = await WheatFarmJGyUHqD.approveAndCall.call(addressTR4Pllc, uintpFRVjx1, {from: accounts[1]});

		await expect(WheatFarmJGyUHqD.decreaseAllowance.call(addressIzW7Ufe, uinth5hgoiL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringvmz92L6 = "aErMqtv9wt103fd1acIuhw54EisLk3LdrMIp1VfJA2z2Apyg6ryo6z9pzTjISio467BmICxlaeUZPwBiqpf3"
		const stringjSH4H2V = "DuM0Pr7lob2NwNlTT1Ms3tOkRrAUD79VXQAhc0VZPQEtxwn7ER3ageSRsH"
		const uintpegT11y = BigInt("406")
		const WheatFarmB2QEZ5h = await WheatFarm.new(stringvmz92L6, stringjSH4H2V, uintpegT11y, {from: accounts[0]});
		const uintpB9cF8 = BigInt("1694")
		const addressDsCIWZ4 = accounts[2]
		const addressRYYv8AK = accounts[2]
		const uintoiwOWqg = BigInt("1398")
		const addressyYi4i0 = accounts[1]
//		const boold8G7SyZ = await WheatFarmB2QEZ5h.transferFrom.call(addressRYYv8AK, addressDsCIWZ4, uintpB9cF8, {from: accounts[3]});
//		const stringAfSFEad = await WheatFarmB2QEZ5h.symbol.call({from: accounts[3]});
//		const boolFGpa6r = await WheatFarmB2QEZ5h.transfer.call(addressyYi4i0, uintoiwOWqg, {from: accounts[3]});

		await expect(WheatFarmB2QEZ5h.transferFrom.call(addressRYYv8AK, addressDsCIWZ4, uintpB9cF8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringlID79iS = "Rgbm3kKKLiFUxLWyfEJVMaE"
		const stringJgOPuK = "11vBkQV58fQsmhkHFBAi6za0OzmqDlps7q6qmIhUjdNPj4KdpkYUUotREca5bxeBi6NO91Il"
		const uintungiGR = BigInt("43")
		const WheatFarmjqZcJNh = await WheatFarm.new(stringlID79iS, stringJgOPuK, uintungiGR, {from: accounts[2]});
		const uintIVQaDhn = BigInt("630")
		const addressEmLi4Q1 = accounts[0]
		const uintY4ZYSI = BigInt("1545")
		const addresshJ7IOge = "0x0000000000000000000000000000000000000001"
		const uintc5WI3H = BigInt("15")
		const addressRH3ClI = accounts[3]
		const boollcZHtuK = await WheatFarmjqZcJNh.approve.call(addressEmLi4Q1, uintIVQaDhn, {from: accounts[1]});
		const stringXCg3cs = await WheatFarmjqZcJNh.name.call({from: accounts[4]});
//		const boolSScEFD = await WheatFarmjqZcJNh.approveAndCall.call(addresshJ7IOge, uintY4ZYSI, {from: accounts[3]});
//		const uint8gtj4S9 = await WheatFarmjqZcJNh.decimals.call({from: accounts[0]});
//		const boolNhsR8ty = await WheatFarmjqZcJNh.transfer.call(addressRH3ClI, uintc5WI3H, {from: accounts[3]});

		assert.equal(boollcZHtuK, true)
		assert.equal(stringXCg3cs, "Rgbm3kKKLiFUxLWyfEJVMaE")
		await expect(WheatFarmjqZcJNh.approveAndCall.call(addresshJ7IOge, uintY4ZYSI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringhTzRJCZ = "X01McC3WlFEIpqrfguupt67M8vwPcNrOD6PdcrnmGpKdWBJMzffFFVBUjCIdjYH4TY6hYAh8Fq735BYdcqrFJL94"
		const stringXMEWZUQ = "p6RY9QNMazZYdPhi94GciC4HKgDgjBL9HQtpuUuiotPmDp3fYAk"
		const uintVrQN5Fz = BigInt("4")
		const WheatFarmeygCMoY = await WheatFarm.new(stringhTzRJCZ, stringXMEWZUQ, uintVrQN5Fz, {from: accounts[0]});
		const uintmOlTMkF = BigInt("161")
		const addressHK1J0uZ = accounts[0]
		const uintjVqepi = BigInt("954")
		const addressWSXgqkN = accounts[4]
		const uinttgmTDAv = BigInt("149")
		const addressZOSfddJ = accounts[0]
		const boolZ0bAbR2 = await WheatFarmeygCMoY.approveAndCall.call(addressHK1J0uZ, uintmOlTMkF, {from: accounts[0]});
//		const boolblUzrND = await WheatFarmeygCMoY.transfer.call(addressWSXgqkN, uintjVqepi, {from: accounts[4]});
//		const stringmxBiWY = await WheatFarmeygCMoY.symbol.call({from: accounts[0]});
//		const boolphgedj4 = await WheatFarmeygCMoY.decreaseAllowance.call(addressZOSfddJ, uinttgmTDAv, {from: accounts[1]});

		assert.equal(boolZ0bAbR2, true)
		await expect(WheatFarmeygCMoY.transfer.call(addressWSXgqkN, uintjVqepi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringLFSMaye = "AtJC04hdUBpTiP1Tp3clfD3ilxs"
		const stringOabmyvw = "iOVm2KjR"
		const uintXXIXd2 = BigInt("65")
		const WheatFarmzd4A4pu = await WheatFarm.new(stringLFSMaye, stringOabmyvw, uintXXIXd2, {from: accounts[2]});
		const addressC9ZUWHH = accounts[1]
		const uinthyQUdjr = BigInt("1149")
		const addressuUhZlm = accounts[0]
		const addressA8YwxBO = accounts[3]
		const uintLSBo078 = BigInt("1022")
		const addresssBf39UL = accounts[5]
//		const boolMa0lpI = await WheatFarmzd4A4pu.transferownership.call(addressC9ZUWHH, {from: accounts[1]});
//		const boolaVDPuCw = await WheatFarmzd4A4pu.transferFrom.call(addressA8YwxBO, addressuUhZlm, uinthyQUdjr, {from: accounts[4]});
//		const boolN8BSqPn = await WheatFarmzd4A4pu.transfer.call(addresssBf39UL, uintLSBo078, {from: accounts[2]});

		await expect(WheatFarmzd4A4pu.transferownership.call(addressC9ZUWHH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringlID79iS = "Rgbm3kKKLiFUxLWyfEJVMaE"
		const stringJgOPuK = "11vBkQV58fQsmhkHFBAi6za0OzmqDlps7q6qmIhUjdNPj4KdpkYUUotREca5bxeBi6NO91Il"
		const uintHc6Tdn = BigInt("43")
		const WheatFarmjqZcJNh = await WheatFarm.new(stringlID79iS, stringJgOPuK, uintHc6Tdn, {from: accounts[2]});
		const uintOpaUIU6 = BigInt("0")
		const addressX9KOpn = accounts[2]
		const boolNhsR8ty = await WheatFarmjqZcJNh.transfer.call(addressX9KOpn, uintOpaUIU6, {from: accounts[3]});

		assert.equal(boolNhsR8ty, true)
	});

	it('test for WheatFarm', async () => {
		const stringLFSMaye = "AtJC04hdUBpTiP1Tp3clfD3ilxs"
		const stringOabmyvw = "iOVm2KjR"
		const uintSwRl9pz = BigInt("65")
		const WheatFarmzd4A4pu = await WheatFarm.new(stringLFSMaye, stringOabmyvw, uintSwRl9pz, {from: accounts[2]});
		const addressbgwrgdl = accounts[4]
		const addressuOVtl0T = accounts[1]
		const addressxKEx9J4 = accounts[5]
		const uintCuYVkgc = BigInt("1698")
		const addresskODU5vN = accounts[2]
		const addressUjBuqn = accounts[1]
		const addressScprP1K = accounts[4]
		const uintZK2tW0p = BigInt("450")
		const addresspOTzkCI = "0x0000000000000000000000000000000000000001"
		const uintwRQsVSd = BigInt("1951")
		const addressD4BiyA8 = accounts[1]
		const uintIyfP6g8 = BigInt("599")
		const addressgF77xW7 = accounts[0]
		const booljgsyEMO = await WheatFarmzd4A4pu.transferownership.call(addressbgwrgdl, {from: accounts[2]});
		const uintOCTIQqQ = await WheatFarmzd4A4pu.allowance.call(addressxKEx9J4, addressuOVtl0T, {from: accounts[2]});
		const boolux7Q1i8 = await WheatFarmzd4A4pu.approveAndCall.call(addresskODU5vN, uintCuYVkgc, {from: accounts[2]});
		const uintmrql7D = await WheatFarmzd4A4pu.balanceOf.call(addressUjBuqn, {from: accounts[3]});
//		const boolMa0lpI = await WheatFarmzd4A4pu.transferownership.call(addressScprP1K, {from: accounts[1]});
//		const boolNuM9Hh1 = await WheatFarmzd4A4pu.decreaseAllowance.call(addresspOTzkCI, uintZK2tW0p, {from: accounts[3]});
//		const booloQMPUD = await WheatFarmzd4A4pu.approve.call(addressD4BiyA8, uintwRQsVSd, {from: accounts[1]});
//		const boolc9gWKCB = await WheatFarmzd4A4pu.approve.call(addressgF77xW7, uintIyfP6g8, {from: accounts[2]});

		assert.equal(booljgsyEMO, true)
		assert.equal(boolux7Q1i8, true)
		assert.equal(uintOCTIQqQ, BigInt("0"))
		assert.equal(uintmrql7D, BigInt("0"))
		await expect(WheatFarmzd4A4pu.transferownership.call(addressScprP1K, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WheatFarm', async () => {
		const stringhTzRJCZ = "X01McC3WlFEIpqrfguupt67M8vwPcNrOD6PdcrnmGpKdWBJMzffFFVBUjCIdjYH4TY6hYAh8Fq735BYdcqrFJL94"
		const stringXMEWZUQ = "p6RY9QNMazZYdPhi94GciC4HKgDgjBL9HQtpuUuiotPmDp3fYAk"
		const uintrXAqZ3K = BigInt("4")
		const WheatFarmeygCMoY = await WheatFarm.new(stringhTzRJCZ, stringXMEWZUQ, uintrXAqZ3K, {from: accounts[0]});
		const uintIWRtyWt = BigInt("954")
		const addressQxb8vBW = accounts[3]
		const uintaEUDM7F = BigInt("0")
		const addressHICezl1 = accounts[0]
		const uintzO9hNiG = BigInt("1199")
		const addressTkEUY1V = accounts[4]
		const uintmaatInf = BigInt("147")
		const addressXR8w7fb = accounts[4]
		const boola1KTB02 = await WheatFarmeygCMoY.approve.call(addressQxb8vBW, uintIWRtyWt, {from: accounts[2]});
		const boolZ0bAbR2 = await WheatFarmeygCMoY.approveAndCall.call(addressHICezl1, uintaEUDM7F, {from: accounts[0]});
//		const boolXfMIH52 = await WheatFarmeygCMoY.decreaseAllowance.call(addressTkEUY1V, uintzO9hNiG, {from: accounts[0]});
//		const boolev8yXIs = await WheatFarmeygCMoY.decreaseAllowance.call(addressXR8w7fb, uintmaatInf, {from: accounts[1]});

		assert.equal(boolZ0bAbR2, true)
		assert.equal(boola1KTB02, true)
		await expect(WheatFarmeygCMoY.decreaseAllowance.call(addressTkEUY1V, uintzO9hNiG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})