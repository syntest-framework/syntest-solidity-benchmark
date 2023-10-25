const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringn14wMow = "mOWNVKiGkGi28wT4m"
		const stringXUhDo65 = "KynH5Z163XukJmpjENMHRp5k2jO4VHgTuGNennACqPBjYI5nFYUomkFYE2SfwzatV0Ch"
		const uintm3xykAD = BigInt("1836")
		const DipexsXwIx8X = await Dipex.new(stringn14wMow, stringXUhDo65, uintm3xykAD, {from: accounts[3]});
		const uintGMcc182 = BigInt("208")
		const addressEVoAJBh = accounts[0]
		const uintIKnDNtx = BigInt("837")
		const addressDq1Hq2 = "0x0000000000000000000000000000000000000001"
		const uintZup8kGm = BigInt("362")
		const addressca4tti2 = accounts[2]
		const booliY5g0xM = await DipexsXwIx8X.approveAndCall.call(addressEVoAJBh, uintGMcc182, {from: accounts[3]});
//		const boolw7orPk = await DipexsXwIx8X.transfer.call(addressDq1Hq2, uintIKnDNtx, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSUOftSl = await DipexsXwIx8X.approve.call(addressca4tti2, uintZup8kGm, {from: accounts[1]});

		assert.equal(booliY5g0xM, true)
		await expect(DipexsXwIx8X.transfer.call(addressDq1Hq2, uintIKnDNtx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringP64Y1k7 = "u0kOF0GEnxx"
		const stringlxWiezm = "pcGV62BpH8LFSV1Jo7iEI04Fj7JKDPpkNyS1tCfouXmpKslIxUY"
		const uintjnuM7uS = BigInt("1650")
		const DipexMbdmGt6 = await Dipex.new(stringP64Y1k7, stringlxWiezm, uintjnuM7uS, {from: accounts[1]});
		const uintCULmlWn = BigInt("1243")
		const addressmlqlfhE = accounts[0]
		const uintScVXQYB = BigInt("608")
		const addressgm9xQOI = accounts[2]
		const uinti4ujCXY = BigInt("1164")
		const addressbGXkxO7 = accounts[0]
		const uint01W4nN = BigInt("592")
		const addressCMfouxA = accounts[4]
		const boolnWAFMGh = await DipexMbdmGt6.approve.call(addressmlqlfhE, uintCULmlWn, {from: "0x0000000000000000000000000000000000000001"});
		const boolLNnuq8L = await DipexMbdmGt6.approve.call(addressgm9xQOI, uintScVXQYB, {from: accounts[2]});
//		const boolv9zimSf = await DipexMbdmGt6.transfer.call(addressbGXkxO7, uinti4ujCXY, {from: accounts[3]});
//		const boolu6101sR = await DipexMbdmGt6.approveAndCall.call(addressCMfouxA, uint01W4nN, {from: accounts[3]});

		assert.equal(boolLNnuq8L, true)
		assert.equal(boolnWAFMGh, true)
		await expect(DipexMbdmGt6.transfer.call(addressbGXkxO7, uinti4ujCXY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringpzQwUK4 = "HGbKnBkwXopAGCyuvW5qYg5s8qOkq1vwPArP7rXP9ppoyAjU8rB6t8r9iZQrJwA1QNG"
		const stringSQvlb5x = "E4nrmiyl6zC8uw4s19QbPiFaOONz7lprsprhuf7K2WMxiobkDqvyxviFB1MMObngNbxjPasjw53jtFnin8ve3L5egxub"
		const uintbqOC3sM = BigInt("680")
		const DipexIGAXouv = await Dipex.new(stringpzQwUK4, stringSQvlb5x, uintbqOC3sM, {from: accounts[4]});
		const addressikuZMhN = accounts[0]
		const uintxezHggv = BigInt("896")
		const addressQXUG9wb = accounts[2]
		const uintCDIcsRl = BigInt("1777")
		const addressqZzZyAn = accounts[3]
//		const boolUe63KKC = await DipexIGAXouv.transferownership.call(addressikuZMhN, {from: accounts[1]});
//		const boolcwKSPlW = await DipexIGAXouv.approve.call(addressQXUG9wb, uintxezHggv, {from: accounts[3]});
//		const boolemL3Cqd = await DipexIGAXouv.approve.call(addressqZzZyAn, uintCDIcsRl, {from: accounts[4]});

		await expect(DipexIGAXouv.transferownership.call(addressikuZMhN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringO2Gsa5D = "gDVszDp2"
		const stringzd911No = "GdGCXgwsq4x884frGYt1saRTLJM6AodRan4GFeRgujBk96FFxiV6oIppASLD9jjxnCRk9a7SoZ"
		const uintye7cLn1 = BigInt("546")
		const DipexwjHcE5 = await Dipex.new(stringO2Gsa5D, stringzd911No, uintye7cLn1, {from: accounts[2]});
		const uintMI8vmE6 = BigInt("1143")
		const addressTpjMSjc = accounts[2]
		const uintCecCSX = BigInt("460")
		const addressIW8F3KZ = accounts[4]
		const uintqhfd9Pp = BigInt("769")
		const addresscAIRFT = accounts[1]
		const uintgef8Vmh = BigInt("558")
		const addressMwVopXg = accounts[0]
//		const boolyWrLLld = await DipexwjHcE5.transfer.call(addressTpjMSjc, uintMI8vmE6, {from: accounts[5]});
//		const boolSlFse22 = await DipexwjHcE5.approve.call(addressIW8F3KZ, uintCecCSX, {from: accounts[0]});
//		const booltFfxoYh = await DipexwjHcE5.approve.call(addresscAIRFT, uintqhfd9Pp, {from: accounts[3]});
//		const boolgHucv3F = await DipexwjHcE5.approve.call(addressMwVopXg, uintgef8Vmh, {from: accounts[0]});

		await expect(DipexwjHcE5.transfer.call(addressTpjMSjc, uintMI8vmE6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringcaCu9zZ = "ipFtC3SMX7halJxUXk3MAde962PHTxUHcDQcHbM8Oo"
		const stringSxi8IfE = "vEUXyTOQBu4syNjS3Tmwf6VAjScnGV7ARx4yQgHhwRgMIA61MXyL62daOAkFpWbPfrBE7V"
		const uintWT1YRp7 = BigInt("1091")
		const DipexMx5MQL = await Dipex.new(stringcaCu9zZ, stringSxi8IfE, uintWT1YRp7, {from: "0x0000000000000000000000000000000000000001"});
		const uintct1anA = BigInt("360")
		const addressMT35IQr = accounts[1]
		const uintVSvORAf = BigInt("1483")
		const addressQPCUNTr = accounts[1]
		const boolZEWMAS = await DipexMx5MQL.approve.call(addressMT35IQr, uintct1anA, {from: accounts[2]});
		const boolKkNgStn = await DipexMx5MQL.approveAndCall.call(addressQPCUNTr, uintVSvORAf, {from: accounts[4]});
	});

	it('test for Dipex', async () => {
		const stringn14wMow = "mOWNVKiGkGi28wT4m"
		const stringXUhDo65 = "KynH5Z163XukJmpjENMHRp5k2jO4VHgTuGNennACqPBjYI5nFYUomkFYE2SfwzatV0Ch"
		const uintwxfZHNI = BigInt("1836")
		const DipexsXwIx8X = await Dipex.new(stringn14wMow, stringXUhDo65, uintwxfZHNI, {from: accounts[3]});
		const uintaVT67nh = BigInt("0")
		const addressarToMTc = accounts[0]
		const uintXSfgUaf = BigInt("985")
		const addressq40ggwS = accounts[1]
		const uintLlTBW1X = BigInt("2028")
		const addressRYw6BIz = accounts[4]
		const boolVwcTheU = await DipexsXwIx8X.transfer.call(addressarToMTc, uintaVT67nh, {from: accounts[0]});
//		const boolWPE1OLA = await DipexsXwIx8X.approveAndCall.call(addressq40ggwS, uintXSfgUaf, {from: accounts[0]});
//		const boolRhBTz6t = await DipexsXwIx8X.approve.call(addressRYw6BIz, uintLlTBW1X, {from: accounts[5]});

		assert.equal(boolVwcTheU, true)
		await expect(DipexsXwIx8X.approveAndCall.call(addressq40ggwS, uintXSfgUaf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringn14wMow = "mOWNVKiGkGi28wT4m"
		const stringXUhDo65 = "KynH5Z163XukJmpjENMHRp5k2jO4VHgTuGNennACqPBjYI5nFYUomkFYE2SfwzatV0Ch"
		const uintQwlxaXI = BigInt("1836")
		const DipexsXwIx8X = await Dipex.new(stringn14wMow, stringXUhDo65, uintQwlxaXI, {from: accounts[3]});
		const uintZsBZUf = BigInt("0")
		const addressVVpk67W = accounts[5]
		const boolOZnflQg = await DipexsXwIx8X.approveAndCall.call(addressVVpk67W, uintZsBZUf, {from: accounts[3]});

		assert.equal(boolOZnflQg, true)
	});
})