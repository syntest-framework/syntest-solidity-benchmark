const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uinta8oY0mg = BigInt("1370")
		const stringx3lA6hM = "ifWSk8bAPV5z3SiAWRTR"
		const stringaXvDMhO = "C0zN48"
		const GreenMarkTrustiYkZSr = await GreenMarkTrust.new(uinta8oY0mg, stringx3lA6hM, stringaXvDMhO, {from: accounts[1]});
		const uintye0cVgA = BigInt("313")
		const addressPw8MFvO = accounts[5]
		const addressjyurN2S = accounts[4]
		const uintM5GNHkU = BigInt("482")
		const addressJogHdWm = accounts[4]
		const byte5C9cvW = "0x1e050b0b021c051916"
		const uintpLKbUk = BigInt("1708")
		const addressMM8wws6 = accounts[3]
		const boolzRKOFf = await GreenMarkTrustiYkZSr.transferFrom.call(addressjyurN2S, addressPw8MFvO, uintye0cVgA, {from: accounts[3]});
		const boolGXGe7c = await GreenMarkTrustiYkZSr.approve.call(addressJogHdWm, uintM5GNHkU, {from: accounts[5]});
		const boolcibNkDd = await GreenMarkTrustiYkZSr.approveAndCall.call(addressMM8wws6, uintpLKbUk, byte5C9cvW, {from: accounts[3]});

		await expect(GreenMarkTrustiYkZSr.transferFrom.call(addressjyurN2S, addressPw8MFvO, uintye0cVgA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintibYlnEe = BigInt("34")
		const stringuA8omu0 = "keEjFxsaVXHFQ2iA6oUPu5au6ywinisVyf4t1ePL9Gpo2aWC"
		const stringgYhqdth = "8xWsmgRw9JCURxd3enSuqNKvU7UJ3aDA6bb"
		const GreenMarkTrust6MAOMo = await GreenMarkTrust.new(uintibYlnEe, stringuA8omu0, stringgYhqdth, {from: accounts[4]});
		const uintXrbUplk = BigInt("674")
		const addressNR02ZD5 = accounts[2]
		const uintX1T7vd8 = BigInt("1414")
		const addressCdDPQdO = accounts[0]
		const uintsYynC7h = BigInt("176")
		const addressOsytqvA = accounts[4]
		const boolvIbwdw = await GreenMarkTrust6MAOMo.approve.call(addressNR02ZD5, uintXrbUplk, {from: accounts[3]});
		const boolYQy4uvX = await GreenMarkTrust6MAOMo.approve.call(addressCdDPQdO, uintX1T7vd8, {from: accounts[2]});
		const boolFTNtapf = await GreenMarkTrust6MAOMo.approve.call(addressOsytqvA, uintsYynC7h, {from: accounts[1]});

		assert.equal(boolFTNtapf, true)
		assert.equal(boolYQy4uvX, true)
		assert.equal(boolvIbwdw, true)
	});

	it('test for GreenMarkTrust', async () => {
		const uintdVbF868 = BigInt("894")
		const stringHpd1JFQ = "f6aeSW7OUgIfnDTHI5gaFFGJfXNa44zdYHdSF1HQALkiUV7wzcvQDOEzJCOmjBlS1bUL7pjz3EO1bpzayGs"
		const stringpH0LQqT = "XiupghYQCho87D7OK7vLEVvFENJ5Z1akbvKfhmOmAckZVYPOpoJGDbP3Fy7KpP8Hss1ciXFZE4h9mcMEtpin5DSLH9coX"
		const GreenMarkTrustZHZuhoK = await GreenMarkTrust.new(uintdVbF868, stringHpd1JFQ, stringpH0LQqT, {from: accounts[0]});
		const uinthe19MzL = BigInt("448")
		const addressJFSnm0y = accounts[3]
		const uintMECWZPD = BigInt("827")
		const addressd6zlNhU = accounts[5]
		const uintBU9JBbR = BigInt("1251")
		const boolVuC5HQs = await GreenMarkTrustZHZuhoK.approve.call(addressJFSnm0y, uinthe19MzL, {from: accounts[1]});
		const boolpHpCMF0 = await GreenMarkTrustZHZuhoK.burnFrom.call(addressd6zlNhU, uintMECWZPD, {from: accounts[4]});
		const boolpfprHmU = await GreenMarkTrustZHZuhoK.burn.call(uintBU9JBbR, {from: accounts[0]});

		assert.equal(boolVuC5HQs, true)
		await expect(GreenMarkTrustZHZuhoK.burnFrom.call(addressd6zlNhU, uintMECWZPD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintCccdGW = BigInt("1968")
		const stringJgvDWuu = "Pi9pYz1uiwodOz39hbXqgsnfhiwtUiQ2VIYFjDCH8"
		const stringvbo1I4 = "PyDw3IVRnMTu6IgfbnWDWWuLWo1OZfpRaUGW0xxn6OwHGDgDi8zUc8Va5ewNKrAHZ20gKDRWFA"
		const GreenMarkTrustZ73QJAs = await GreenMarkTrust.new(uintCccdGW, stringJgvDWuu, stringvbo1I4, {from: accounts[0]});
		const uint3zR1bg = BigInt("1006")
		const byteRn6CJr5 = "0x1d0b140b17150a"
		const uintG3mmGUE = BigInt("349")
		const addressOJiQsRE = accounts[5]
		const uintzXwzJp = BigInt("2024")
		const addressjKN5VM = accounts[0]
		const byteSLi3Fu = "0x0c1a0d1a"
		const uintLoPXWBK = BigInt("157")
		const addressrSoXrL9 = accounts[0]
		const boolZ52tC5 = await GreenMarkTrustZ73QJAs.burn.call(uint3zR1bg, {from: accounts[1]});
		const boollutUHht = await GreenMarkTrustZ73QJAs.approveAndCall.call(addressOJiQsRE, uintG3mmGUE, byteRn6CJr5, {from: accounts[4]});
		const boolsP1yFSd = await GreenMarkTrustZ73QJAs.approve.call(addressjKN5VM, uintzXwzJp, {from: accounts[2]});
		const boolAObi2yx = await GreenMarkTrustZ73QJAs.approveAndCall.call(addressrSoXrL9, uintLoPXWBK, byteSLi3Fu, {from: accounts[1]});

		await expect(GreenMarkTrustZ73QJAs.burn.call(uint3zR1bg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintpmHTtp = BigInt("1465")
		const stringcH0aeU3 = "sHNvTU6uMMSvip8f0yHqgAFiJbgQNcIX2iPahP5N2cMCkdAEIhsuIihT1lfS1dCkWMcGioUK"
		const stringwCWrwRH = "ja16JetBRxBTncN8U09UpgDLTKIYHnaq4vBN2jub8RK7xWSHKDCHvAGc"
		const GreenMarkTrustniKskMO = await GreenMarkTrust.new(uintpmHTtp, stringcH0aeU3, stringwCWrwRH, {from: "0x0000000000000000000000000000000000000001"});
		const bytejVuprHl = "0x181413060318071112120a160319121701"
		const uinthRcwddU = BigInt("1473")
		const addressDsjExYk = accounts[5]
		const uintrjuwuRR = BigInt("580")
		const uintRfZOOwX = BigInt("891")
		const addressCBraXlq = accounts[2]
		const uintvZ5XKKY = BigInt("1821")
		const addressyzhqX7I = accounts[2]
		const booljMgYTOH = await GreenMarkTrustniKskMO.approveAndCall.call(addressDsjExYk, uinthRcwddU, bytejVuprHl, {from: accounts[0]});
		const boolM87JKRF = await GreenMarkTrustniKskMO.burn.call(uintrjuwuRR, {from: accounts[0]});
		const boolhfSpykb = await GreenMarkTrustniKskMO.approve.call(addressCBraXlq, uintRfZOOwX, {from: accounts[3]});
		const boolfXrWfd2 = await GreenMarkTrustniKskMO.approve.call(addressyzhqX7I, uintvZ5XKKY, {from: accounts[2]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintW4OundB = BigInt("1370")
		const stringx3lA6hM = "ifWSk8bAPV5z3SiAWRTR"
		const stringaXvDMhO = "C0zN48"
		const GreenMarkTrustiYkZSr = await GreenMarkTrust.new(uintW4OundB, stringx3lA6hM, stringaXvDMhO, {from: accounts[1]});
		const byteVJs7S0 = "0x1e050b0b021c051916"
		const uintAsSnK8H = BigInt("1708")
		const addressrPYifsR = accounts[3]
		const boolcibNkDd = await GreenMarkTrustiYkZSr.approveAndCall.call(addressrPYifsR, uintAsSnK8H, byteVJs7S0, {from: accounts[3]});

		await expect(GreenMarkTrustiYkZSr.approveAndCall.call(addressrPYifsR, uintAsSnK8H, byteVJs7S0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintDn58nXM = BigInt("1370")
		const stringx3lA6hM = "ifWSk8bAPV5z3SiAWRTR"
		const stringaXvDMhO = "C0zN48"
		const GreenMarkTrustiYkZSr = await GreenMarkTrust.new(uintDn58nXM, stringx3lA6hM, stringaXvDMhO, {from: accounts[1]});
		const uintOTmFKkE = BigInt("63")
		const addressTvyy721 = accounts[2]
		const uintTS4icj = BigInt("313")
		const addressXDFwgs = accounts[6]
		const addresskvSLdKD = accounts[4]
		const bytehSLoUR = "0x1e050b0b021c051916"
		const uintMN01q8f = BigInt("1708")
		const addressWy3jRR = accounts[3]
		const boolgwQ6DF7 = await GreenMarkTrustiYkZSr.transfer.call(addressTvyy721, uintOTmFKkE, {from: accounts[3]});
		const boolzRKOFf = await GreenMarkTrustiYkZSr.transferFrom.call(addresskvSLdKD, addressXDFwgs, uintTS4icj, {from: accounts[3]});
		const boolcibNkDd = await GreenMarkTrustiYkZSr.approveAndCall.call(addressWy3jRR, uintMN01q8f, bytehSLoUR, {from: accounts[3]});

		await expect(GreenMarkTrustiYkZSr.transfer.call(addressTvyy721, uintOTmFKkE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})