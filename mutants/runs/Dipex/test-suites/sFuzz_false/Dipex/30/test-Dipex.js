const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringXhizpv = "OjnaT4bNIFwYBCn52RBXnpUZivokmyVxa5cQ8aKn"
		const stringeaQnILy = "8n57fqFTswpRu2XcJuaJFKXGEQBkHMnFcgwE31odualF4Iha5A4DfRXNHZ1qcoOVwKBqEGm4bkPCFl6"
		const uintWGyDGt = BigInt("1346")
		const DipexomSWbQv = await Dipex.new(stringXhizpv, stringeaQnILy, uintWGyDGt, {from: accounts[2]});
		const uintcPh4BU7 = BigInt("966")
		const addressflXnA5K = accounts[2]
		const addresskN2BCPR = accounts[2]
		const uintwSVBPVl = BigInt("372")
		const addressocxEsww = accounts[1]
		const addressvJ2SKof = accounts[3]
		const uintUl5h9Z = BigInt("354")
		const addressOFNOZh = accounts[4]
		const uintYIrNsmR = BigInt("1009")
		const addressrxyrY5B = accounts[0]
		const uintDLLK3LE = BigInt("1208")
		const addresspZ4eqgw = accounts[3]
		const boolqQGOfh = await DipexomSWbQv.transferFrom.call(addresskN2BCPR, addressflXnA5K, uintcPh4BU7, {from: accounts[4]});
		const boollt5e021 = await DipexomSWbQv.transferFrom.call(addressvJ2SKof, addressocxEsww, uintwSVBPVl, {from: accounts[1]});
		const boolPm5nshW = await DipexomSWbQv.approveAndCall.call(addressOFNOZh, uintUl5h9Z, {from: accounts[3]});
		const booldCUrRWT = await DipexomSWbQv.approve.call(addressrxyrY5B, uintYIrNsmR, {from: accounts[5]});
		const boolBWd5Xzs = await DipexomSWbQv.approveAndCall.call(addresspZ4eqgw, uintDLLK3LE, {from: accounts[5]});

		await expect(DipexomSWbQv.transferFrom.call(addresskN2BCPR, addressflXnA5K, uintcPh4BU7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringrB07aa1 = "r5PY7tiDmwOzxBD6zJtqwn8jmG9lddw0ONZkRLW2RLVgq8qWBdOgmW1YyOZnGBdy9XgrLaWlMpIgD4E6tcPZ5nhPMWZ0rLn7"
		const stringhIbTpX = "6d"
		const uintWvlGzmL = BigInt("450")
		const DipexyTc4W8S = await Dipex.new(stringrB07aa1, stringhIbTpX, uintWvlGzmL, {from: accounts[2]});
		const uintc508UHJ = BigInt("843")
		const addressb2CJ7eC = accounts[1]
		const uintxmEg8gM = BigInt("286")
		const addressXMt6Bmi = "0x0000000000000000000000000000000000000001"
		const addressrpJRUu9 = accounts[3]
		const uintqrPzZZt = BigInt("436")
		const addressQMraVja = accounts[1]
		const uintIBCFhwL = BigInt("721")
		const addressYOYuB2A = accounts[4]
		const boolqyxyoVq = await DipexyTc4W8S.approveAndCall.call(addressb2CJ7eC, uintc508UHJ, {from: accounts[4]});
		const boolwKe0e9t = await DipexyTc4W8S.transferFrom.call(addressrpJRUu9, addressXMt6Bmi, uintxmEg8gM, {from: accounts[2]});
		const boolMxHNL57 = await DipexyTc4W8S.transfer.call(addressQMraVja, uintqrPzZZt, {from: accounts[0]});
		const boolVWDPVJ4 = await DipexyTc4W8S.approveAndCall.call(addressYOYuB2A, uintIBCFhwL, {from: accounts[1]});

		await expect(DipexyTc4W8S.approveAndCall.call(addressb2CJ7eC, uintc508UHJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringQOhqHR = "vagOwIPAPVxddfbImCAicSMkiSLFbMiLiDgSAWJ5lYIiODX5gR6zssTlWPtsXy6UxV97wd9jr1ctq4yrCm6TQl8jWDrVACFiuvf"
		const stringxudrRN = "BiciU"
		const uintkOTE4UA = BigInt("1295")
		const Dipexf0GaITN = await Dipex.new(stringQOhqHR, stringxudrRN, uintkOTE4UA, {from: accounts[2]});
		const uintNaRFDSV = BigInt("1313")
		const addressz4OnV5x = accounts[1]
		const uintW6GAb7 = BigInt("1249")
		const address0cCRF4 = accounts[3]
		const uint5pNrTy = BigInt("814")
		const addressEENobVJ = accounts[3]
		const addressTV1FU0k = accounts[0]
		const uinta5NpoLP = BigInt("1442")
		const addressWxowvLn = "0x0000000000000000000000000000000000000001"
		const uintDlBPJGp = BigInt("4")
		const addressGEHt0Lz = accounts[2]
		const addressL0fuQTh = accounts[1]
		const boolYwWGVlM = await Dipexf0GaITN.approveAndCall.call(addressz4OnV5x, uintNaRFDSV, {from: accounts[2]});
		const boolk8Cg96z = await Dipexf0GaITN.transfer.call(address0cCRF4, uintW6GAb7, {from: accounts[1]});
		const boolWhWoNCL = await Dipexf0GaITN.transferFrom.call(addressTV1FU0k, addressEENobVJ, uint5pNrTy, {from: accounts[3]});
		const boolxzbKxnb = await Dipexf0GaITN.transfer.call(addressWxowvLn, uinta5NpoLP, {from: accounts[4]});
		const booljmMC9Ay = await Dipexf0GaITN.transferFrom.call(addressL0fuQTh, addressGEHt0Lz, uintDlBPJGp, {from: accounts[2]});

		assert.equal(boolYwWGVlM, true)
		await expect(Dipexf0GaITN.transfer.call(address0cCRF4, uintW6GAb7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringIPKq7F = "MnqD3HaftcSzVL2JSl0AsQa9Vny5ZLd3JV3YOv4spgW8qzNLOAl5z0E9fm8YO3T3SOxXX27Xnoh4cDSmTEidlcsyJlChzA"
		const stringofKM7I = "6PuAKA5FP8lUf7FAWziPSsxIwQzClFFWnEd4RJERmXpv25xHVFmFEQUDAr114aqbUME3YzSoUBdDOBwi7V6z"
		const uintM1RGQGX = BigInt("1462")
		const DipexwsE4V66 = await Dipex.new(stringIPKq7F, stringofKM7I, uintM1RGQGX, {from: accounts[4]});
		const addressHbQVaKS = accounts[1]
		const uintYhbED0i = BigInt("332")
		const addressH1O2bIp = accounts[4]
		const uinthpzrHfo = BigInt("1094")
		const addressfT8oEbq = accounts[5]
		const uintH792KaL = BigInt("1491")
		const addressZ6CXGZd = accounts[5]
		const boolKx4CrQJ = await DipexwsE4V66.transferownership.call(addressHbQVaKS, {from: accounts[0]});
		const boolPklAXYO = await DipexwsE4V66.approveAndCall.call(addressH1O2bIp, uintYhbED0i, {from: accounts[4]});
		const booluPObiuf = await DipexwsE4V66.approve.call(addressfT8oEbq, uinthpzrHfo, {from: accounts[0]});
		const boolS6naTIs = await DipexwsE4V66.transfer.call(addressZ6CXGZd, uintH792KaL, {from: accounts[4]});

		await expect(DipexwsE4V66.transferownership.call(addressHbQVaKS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringink7h8R = "xOyJdTgHBsry9xI5m0csHN0e4BpYrtcWWv"
		const stringnmEzkpt = "b9qTX4XR6lEsIcydgeCfNtS6GmkoVc2oe2T6Yb80XzF0hVgrJZxlu7QmjkcpIPFZsbeqSnUrkd38NOh5t4Xpc7ZNHDMoQVNq"
		const uintAihHSm2 = BigInt("963")
		const DipextuUcQvP = await Dipex.new(stringink7h8R, stringnmEzkpt, uintAihHSm2, {from: accounts[0]});
		const uintCu3gdUl = BigInt("1934")
		const addresswgz9QQs = accounts[4]
		const uintT6pnejC = BigInt("1712")
		const addresshwAVnq = accounts[3]
		const boolkgrTtcE = await DipextuUcQvP.approve.call(addresswgz9QQs, uintCu3gdUl, {from: accounts[2]});
		const boolnauHWJ1 = await DipextuUcQvP.transfer.call(addresshwAVnq, uintT6pnejC, {from: accounts[1]});

		assert.equal(boolkgrTtcE, true)
		await expect(DipextuUcQvP.transfer.call(addresshwAVnq, uintT6pnejC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringtYHPUSN = "mbtDchl4w9BS3jQ7CwPJ8w3KfFuYJQn"
		const stringrlK3LJ = "D6bS"
		const uintzNffCd8 = BigInt("50")
		const Dipexk46gG3 = await Dipex.new(stringtYHPUSN, stringrlK3LJ, uintzNffCd8, {from: "0x0000000000000000000000000000000000000001"});
		const uintEINb7yc = BigInt("1738")
		const addressse5btNZ = accounts[0]
		const uintMVuUn3P = BigInt("1981")
		const addressWBjdVrK = accounts[5]
		const uintP6NM9k3 = BigInt("1000")
		const addressOfL4QQh = "0x0000000000000000000000000000000000000001"
		const addressZNwJ2qG = accounts[4]
		const uintxccSLjP = BigInt("1498")
		const addressM5PmVuY = accounts[4]
		const uintw7PoJhH = BigInt("673")
		const addressGWdzhyE = "0x0000000000000000000000000000000000000001"
		const uintSLfjsUT = BigInt("594")
		const addressIdvujDe = accounts[2]
		const addressGYe71PV = accounts[5]
		const boolpDWUK2g = await Dipexk46gG3.approveAndCall.call(addressse5btNZ, uintEINb7yc, {from: "0x0000000000000000000000000000000000000001"});
		const boolwruDu5e = await Dipexk46gG3.approve.call(addressWBjdVrK, uintMVuUn3P, {from: accounts[1]});
		const boolMcVzY4J = await Dipexk46gG3.transferFrom.call(addressZNwJ2qG, addressOfL4QQh, uintP6NM9k3, {from: accounts[0]});
		const boolvYanPQI = await Dipexk46gG3.approve.call(addressM5PmVuY, uintxccSLjP, {from: accounts[3]});
		const boolmZHSvxl = await Dipexk46gG3.approve.call(addressGWdzhyE, uintw7PoJhH, {from: accounts[2]});
		const boolGCrXJMX = await Dipexk46gG3.transferFrom.call(addressGYe71PV, addressIdvujDe, uintSLfjsUT, {from: accounts[1]});
	});

	it('test for Dipex', async () => {
		const stringQOhqHR = "vagOwIPAPVxddfbImCAicSMkiSLFbMiLiDgSAWJ5lYIiODX5gR6zssTlWPtsXy6UxV97wd9jr1ctq4yrCm6TQl8jWDrVACFiuvf"
		const stringxudrRN = "BiciU"
		const uintcgWsema = BigInt("1295")
		const Dipexf0GaITN = await Dipex.new(stringQOhqHR, stringxudrRN, uintcgWsema, {from: accounts[2]});
		const uintKB1OCrr = BigInt("1517")
		const addressZYIoRp = accounts[0]
		const uintPZF7Vbw = BigInt("1313")
		const addresssO0Rry = accounts[2]
		const uintzSn6dmD = BigInt("1364")
		const addressyqwetp = accounts[4]
		const uintsSJF8JS = BigInt("4")
		const addressOwZXa0F = accounts[2]
		const addressAJiPzDj = accounts[1]
		const boolH3Q1RAA = await Dipexf0GaITN.transfer.call(addressZYIoRp, uintKB1OCrr, {from: accounts[2]});
		const boolYwWGVlM = await Dipexf0GaITN.approveAndCall.call(addresssO0Rry, uintPZF7Vbw, {from: accounts[2]});
		const boolsXjfkno = await Dipexf0GaITN.approveAndCall.call(addressyqwetp, uintzSn6dmD, {from: accounts[3]});
		const booljmMC9Ay = await Dipexf0GaITN.transferFrom.call(addressAJiPzDj, addressOwZXa0F, uintsSJF8JS, {from: accounts[2]});

		assert.equal(boolH3Q1RAA, true)
		assert.equal(boolYwWGVlM, true)
		await expect(Dipexf0GaITN.approveAndCall.call(addressyqwetp, uintzSn6dmD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringQOhqHR = "vagOwIPAPVxddfbImCAicSMkiSLFbMiLiDgSAWJ5lYIiODX5gR6zssTlWPtsXy6UxV97wd9jr1ctq4yrCm6TQl8jWDrVACFiuvf"
		const stringxudrRN = "BiciU"
		const uintLHlUlpu = BigInt("1295")
		const Dipexf0GaITN = await Dipex.new(stringQOhqHR, stringxudrRN, uintLHlUlpu, {from: accounts[2]});
		const uintSL9NilN = BigInt("0")
		const addressD0xuII2 = accounts[2]
		const addressmiF8YGT = accounts[1]
		const booljmMC9Ay = await Dipexf0GaITN.transferFrom.call(addressmiF8YGT, addressD0xuII2, uintSL9NilN, {from: accounts[2]});

		assert.equal(booljmMC9Ay, true)
	});

	it('test for Dipex', async () => {
		const stringo3vIb0D = "E"
		const stringzsgC7Yz = "5g1hS1D20U2Vejlymg8pzQphNqe5WAf8nCzRFsKSLc6vhOTq2r5gDTpvR6n"
		const uintnQ0Lk4C = BigInt("1243")
		const DipexKzAhaJt = await Dipex.new(stringo3vIb0D, stringzsgC7Yz, uintnQ0Lk4C, {from: accounts[2]});
		const uintrcsVMJD = BigInt("0")
		const addresstOjXA2 = accounts[5]
		const uinthMw5iaJ = BigInt("1796")
		const addressgSHjx3U = accounts[3]
		const boolMZqyVP5 = await DipexKzAhaJt.approveAndCall.call(addresstOjXA2, uintrcsVMJD, {from: accounts[2]});
		const boolKEdNK3M = await DipexKzAhaJt.approve.call(addressgSHjx3U, uinthMw5iaJ, {from: accounts[1]});

		assert.equal(boolKEdNK3M, true)
		assert.equal(boolMZqyVP5, true)
	});
})