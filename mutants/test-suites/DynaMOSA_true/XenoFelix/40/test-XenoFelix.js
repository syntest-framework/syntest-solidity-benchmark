const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringGEwP5nf = "4t33sVm38JsTXYJYjROnT5MNtN"
		const stringrjjSGuE = "kyHSDRx2qNj"
		const uinto09DLoL = BigInt("104")
		const XenoFelixbhjpcb = await XenoFelix.new(stringGEwP5nf, stringrjjSGuE, uinto09DLoL, {from: accounts[2]});
		await XenoFelixbhjpcb.whenNotPaused.call({from: accounts[5]});
		const stringv0dpHEv = await XenoFelixbhjpcb.name.call({from: accounts[0]});
		await XenoFelixbhjpcb.onlyPauser.call({from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringHP05MB9 = "auvmTh2fCykJ1WdoSXqqQVSzvNnqkxi3OYzgaPrL7wy4YHZP26evBmKKzyE5tGB2qljDV5sPCpYEFPs"
		const stringagaH6Vg = "g85vCaYG4Po6Qju"
		const uintb6rkHs = BigInt("1223")
		const uintmAl9LF = BigInt("85")
		const XenoFelix2wt0yZ = await XenoFelix.new(stringHP05MB9, stringagaH6Vg, uintb6rkHs, uintmAl9LF, {from: accounts[1]});
		const uintoH9DaHv = BigInt("1031")
		const addressqC1aKQP = accounts[1]
		const boolTUDRDJP = await XenoFelix2wt0yZ.increaseAllowance.call(addressqC1aKQP, uintoH9DaHv, {from: "0x0000000000000000000000000000000000000001"});
//		await XenoFelix2wt0yZ.onlyOwner.call({from: accounts[2]});
//		await XenoFelix2wt0yZ.onlyPauser.call({from: accounts[2]});
//		await XenoFelix2wt0yZ.pause.call({from: accounts[0]});

		assert.equal(boolTUDRDJP, true)
		await expect(XenoFelix2wt0yZ.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const XenoFelixR2heJPV = await XenoFelix.new({from: accounts[0]});
		const uintp8V7BPj = BigInt("2005")
		const addressRUVovpp = accounts[0]
		const uintuXUIH3z = BigInt("1437")
		const addressdkAdPtl = accounts[2]
		const addressr4EtUbv = "0x0000000000000000000000000000000000000001"
		const addressnyhC5uT = accounts[1]
		const addresshdzkYWU = accounts[1]
		const boolmoqta80 = await XenoFelixR2heJPV.transfer.call(addressRUVovpp, uintp8V7BPj, {from: accounts[2]});
		const boolPm8wsg8 = await XenoFelixR2heJPV.increaseAllowance.call(addressdkAdPtl, uintuXUIH3z, {from: accounts[4]});
		const uint256XjiRsvB = await XenoFelixR2heJPV.balanceOf.call(addressr4EtUbv, {from: accounts[4]});
		const boolfUuI8q0 = await XenoFelixR2heJPV.isOwner.call(addressnyhC5uT, {from: accounts[3]});
		const boolgWk4lZO = await XenoFelixR2heJPV.isOwner.call(addresshdzkYWU, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringDN6zSvS = "sw7CtX6oYGLUvbiVkQ466lvMbvadTlnaHeiHAVGOS5uQ"
		const stringunp5JsJ = "8NmFk6n4s2Pd4xzAeNYPbLptZAet5jRLOUiA3BbOHvIkiEHYZpzVNRxrJ4W953gB"
		const uintW2A7yY6 = BigInt("724")
		const uintFB53SCz = BigInt("137")
		const XenoFelixNYCHNcN = await XenoFelix.new(stringDN6zSvS, stringunp5JsJ, uintW2A7yY6, uintFB53SCz, {from: accounts[2]});
		const uintiZdKN9c = BigInt("811")
		const addressWQGhiku = accounts[0]
		const addressEXMHzsH = accounts[2]
		const uintSVWu0fO = BigInt("1071")
		const addressdfIjaCC = accounts[3]
		const booljsTZNpF = await XenoFelixNYCHNcN.approve.call(addressWQGhiku, uintiZdKN9c, {from: accounts[0]});
		const uint256SSUvn9 = await XenoFelixNYCHNcN.balanceOf.call(addressEXMHzsH, {from: accounts[1]});
//		const boolfLodn3S = await XenoFelixNYCHNcN.transfer.call(addressdfIjaCC, uintSVWu0fO, {from: accounts[5]});

		assert.equal(booljsTZNpF, true)
		assert.equal(uint256SSUvn9, BigInt("27813959977340071724267808299026534561868004695742919195570248384983422992384"))
		await expect(XenoFelixNYCHNcN.transfer.call(addressdfIjaCC, uintSVWu0fO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYemIkhs = "EzBt1gsQ57Ygf9fnvI8a0wCNcy9vmpwRKc4"
		const stringEO5bhAY = "Y2sMgf7LPVszNPY3cI3vtM87stsy5mNjG4Cuf2FKO9b3QNUT9uGTmKUvv2JHqyxxxNvX2brgoNg9BverB"
		const uintYTGbFYj = BigInt("1695")
		const uintttQ0qZm = BigInt("60")
		const XenoFelixFOYHERx = await XenoFelix.new(stringYemIkhs, stringEO5bhAY, uintYTGbFYj, uintttQ0qZm, {from: accounts[2]});
		const uintnnMfEC3 = BigInt("1503")
		const uintb6jb5eh = BigInt("1542")
		const addressx0I3ERs = "0x0000000000000000000000000000000000000001"
		const addressL3ldG7G = "0x0000000000000000000000000000000000000001"
//		const boolYjxdypp = await XenoFelixFOYHERx.lock.call(addressx0I3ERs, uintb6jb5eh, uintnnMfEC3, {from: accounts[0]});
//		await XenoFelixFOYHERx.whenNotPaused.call({from: accounts[0]});
//		const uint256YyEg31V = await XenoFelixFOYHERx.balanceOf.call(addressL3ldG7G, {from: accounts[3]});

		await expect(XenoFelixFOYHERx.lock.call(addressx0I3ERs, uintb6jb5eh, uintnnMfEC3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringsx0vY3Z = "GseJsKDsMz7AANbT2nzLletUnst"
		const stringYN654Cu = "iKKXIg8U3aohuS5boei7HaSlRHNGByW"
		const uintuhKBWgI = BigInt("68")
		const XenoFelixM0ThKlt = await XenoFelix.new(stringsx0vY3Z, stringYN654Cu, uintuhKBWgI, {from: accounts[3]});
		const addressTDrBu0D = accounts[1]
		const addressdJViLdv = accounts[0]
		const uintB4Z9NV9 = BigInt("1330")
		const uint256MGeX8n5 = await XenoFelixM0ThKlt.allowance.call(addressdJViLdv, addressTDrBu0D, {from: accounts[0]});
		const uint256rlimC1S = await XenoFelixM0ThKlt.burn.call(uintB4Z9NV9, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringVtC1jA0 = "pieD26m3Bc6tDpC7YBiQnXxTWeGvy2Vsf7gEf311DC4TfY3PNz4M6EJvGFxAafYzALmgHo1dnXDrzpls8yyx"
		const stringyhh18pe = "W64USloH29fNr7mxPQHPeYXh50Z95ImoBwIVR"
		const uintlzwkcv8 = BigInt("1130")
		const uintcxFwYlV = BigInt("172")
		const XenoFelixwv0Xd5K = await XenoFelix.new(stringVtC1jA0, stringyhh18pe, uintlzwkcv8, uintcxFwYlV, {from: accounts[3]});
		const uintI2z6cvR = BigInt("1033")
		const addresseagZW3k = accounts[4]
		const addressGmZ6Ut9 = accounts[4]
		const addresszt6nbHx = accounts[2]
		const stringWzW6UQp = await XenoFelixwv0Xd5K.symbol.call({from: accounts[2]});
		const stringto823q = await XenoFelixwv0Xd5K.symbol.call({from: accounts[2]});
//		const booleKBgdH = await XenoFelixwv0Xd5K.transferFrom.call(addressGmZ6Ut9, addresseagZW3k, uintI2z6cvR, {from: accounts[0]});
//		const uint256Fe4etyt = await XenoFelixwv0Xd5K.balanceOf.call(addresszt6nbHx, {from: accounts[5]});
//		const stringsiTsUtY = await XenoFelixwv0Xd5K.symbol.call({from: accounts[4]});

		assert.equal(stringWzW6UQp, "W64USloH29fNr7mxPQHPeYXh50Z95ImoBwIVR")
		assert.equal(stringto823q, "W64USloH29fNr7mxPQHPeYXh50Z95ImoBwIVR")
		await expect(XenoFelixwv0Xd5K.transferFrom.call(addressGmZ6Ut9, addresseagZW3k, uintI2z6cvR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringg8vzevT = "RmPVTUD9UgrL3I6aRtjrSHy3nc7I1ytN"
		const stringY7BCqZN = "Q4tOgw7EHACrYLQX2jB1ro4IkYiQrgoyWNeKQyj3EgsvHDZ2fObuEfTGsx6SP3UqauAAda"
		const uintojx2lfx = BigInt("62")
		const XenoFelixn5sI0OC = await XenoFelix.new(stringg8vzevT, stringY7BCqZN, uintojx2lfx, {from: accounts[4]});
		const addressd3mBXc = accounts[3]
		const uintafni3pY = BigInt("1943")
		const addresspAahO9N = accounts[5]
		const uint256EWCxc1D = await XenoFelixn5sI0OC.balanceOf.call(addressd3mBXc, {from: accounts[4]});
		await XenoFelixn5sI0OC.whenNotPaused.call({from: accounts[2]});
		const boolzierCqo = await XenoFelixn5sI0OC.transfer.call(addresspAahO9N, uintafni3pY, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringYemIkhs = "EzBt1gsQ57Ygf9fnvI8a0wCNcy9vmpwRKc4"
		const stringEO5bhAY = "Y2sMgf7LPVszNPY3cI3vtM87stsy5mNjG4Cuf2FKO9b3QNUT9uGTmKUvv2JHqyxxxNvX2brgoNg9BverB"
		const uintmfQURV = BigInt("1695")
		const uintpSZ5rQm = BigInt("60")
		const XenoFelixFOYHERx = await XenoFelix.new(stringYemIkhs, stringEO5bhAY, uintmfQURV, uintpSZ5rQm, {from: accounts[2]});
		const uint6la4G3 = BigInt("1382")
		const addressyzXcFgi = accounts[0]
		const uintR1lHivV = BigInt("1503")
		const uintvkPIrO1 = BigInt("1542")
		const addresslH1O4o = "0x0000000000000000000000000000000000000001"
		const addressYbmS4T7 = "0x0000000000000000000000000000000000000001"
		const uint8EvHGlX5 = await XenoFelixFOYHERx.decimals.call({from: accounts[5]});
//		const booljsDtv7J = await XenoFelixFOYHERx.transfer.call(addressyzXcFgi, uint6la4G3, {from: accounts[4]});
//		const boolYjxdypp = await XenoFelixFOYHERx.lock.call(addresslH1O4o, uintvkPIrO1, uintR1lHivV, {from: accounts[0]});
//		await XenoFelixFOYHERx.whenNotPaused.call({from: accounts[0]});
//		const uint256YyEg31V = await XenoFelixFOYHERx.balanceOf.call(addressYbmS4T7, {from: accounts[3]});

		assert.equal(uint8EvHGlX5, BigInt("60"))
		await expect(XenoFelixFOYHERx.transfer.call(addressyzXcFgi, uint6la4G3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYemIkhs = "EzBt1gsQ57Ygf9fnvI8a0wCNcy9vmpwRKc4"
		const stringEO5bhAY = "Y2sMgf7LPVszNPY3cI3vtM87stsy5mNjG4Cuf2FKO9b3QNUT9uGTmKUvv2JHqyxxxNvX2brgoNg9BverB"
		const uinty1yTYH6 = BigInt("1695")
		const uintNV7WgWF = BigInt("60")
		const XenoFelixFOYHERx = await XenoFelix.new(stringYemIkhs, stringEO5bhAY, uinty1yTYH6, uintNV7WgWF, {from: accounts[2]});
		const uintqo3Sj1i = BigInt("1503")
		const uintqcuQPe = BigInt("1548")
		const addressxZbzjF = "0x0000000000000000000000000000000000000001"
		const addressRxh27Vj = "0x0000000000000000000000000000000000000001"
		const boolSBfo8gK = await XenoFelixFOYHERx.paused.call({from: accounts[0]});
//		const boolYjxdypp = await XenoFelixFOYHERx.lock.call(addressxZbzjF, uintqcuQPe, uintqo3Sj1i, {from: accounts[0]});
//		const uint256YyEg31V = await XenoFelixFOYHERx.balanceOf.call(addressRxh27Vj, {from: accounts[3]});

		assert.equal(boolSBfo8gK, false)
		await expect(XenoFelixFOYHERx.lock.call(addressxZbzjF, uintqcuQPe, uintqo3Sj1i, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYemIkhs = "EzBt1gsQ57Ygf9fnvI8a0wCNcy9vmpwRKc4"
		const stringEO5bhAY = "Y2sMgf7LPVszNPY3cI3vtM87stsy5mNjG4Cuf2FKO9b3QNUT9uGTmKUvv2JHqyxxxNvX2brgoNg9BverB"
		const uintiONRycr = BigInt("1695")
		const uintizxTQpj = BigInt("60")
		const XenoFelixFOYHERx = await XenoFelix.new(stringYemIkhs, stringEO5bhAY, uintiONRycr, uintizxTQpj, {from: accounts[2]});
		const uintPOY6Ejy = BigInt("289")
		const addressAAENMiH = accounts[4]
		const uintatP7t8z = BigInt("1503")
		const uintg0x55FF = BigInt("1548")
		const addressrgUKDov = "0x0000000000000000000000000000000000000001"
		const addressvmNM37E = "0x0000000000000000000000000000000000000001"
//		const addressAWe06sU = await XenoFelixFOYHERx.burnFrom.call(addressAAENMiH, uintPOY6Ejy, {from: accounts[5]});
//		const boolYjxdypp = await XenoFelixFOYHERx.lock.call(addressrgUKDov, uintg0x55FF, uintatP7t8z, {from: accounts[0]});
//		const uint256YyEg31V = await XenoFelixFOYHERx.balanceOf.call(addressvmNM37E, {from: accounts[3]});

		await expect(XenoFelixFOYHERx.burnFrom.call(addressAAENMiH, uintPOY6Ejy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringiPSiYoS = "K1bLHUA46qtJgwzjC7VUkWq8AUdjX74qUsGbLoNNDnQgPWc6JXygGkMqfIcyitmYU9gTs6IJ3krfJDdBcPxnv2zpM"
		const stringxJ6yYng = "dSrmVuqgG59eYLFoGH65ChksxrMqRAODO2CotenzVlrR2mBtXALKoSc6no2BdXBIpyWbg0BpWHaa"
		const uintHjWayOp = BigInt("954")
		const uintqg4ExR = BigInt("84")
		const XenoFelixB029X03 = await XenoFelix.new(stringiPSiYoS, stringxJ6yYng, uintHjWayOp, uintqg4ExR, {from: accounts[0]});
		const uintjiJyz3q = BigInt("1776")
		const address7RmXoF = accounts[3]
		const uintFo2VjnZ = BigInt("1831")
		const addressX0Qxmnm = accounts[0]
//		await XenoFelixB029X03.renouncePauser.call({from: accounts[4]});
//		const boolZBwMb9A = await XenoFelixB029X03.approve.call(address7RmXoF, uintjiJyz3q, {from: accounts[4]});
//		const boolBDF8yKr = await XenoFelixB029X03.transfer.call(addressX0Qxmnm, uintFo2VjnZ, {from: accounts[4]});

		await expect(XenoFelixB029X03.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYemIkhs = "EzBt1gsQ57Ygf9fnvI8a0wCNcy9vmpwRKc4"
		const stringEO5bhAY = "Y2sMgf7LPVszNPY3cI3vtM87stsy5mNjG4Cuf2FKO9b3QNUT9uGTmKUvv2JHqyxxxNvX2brgoNg9BverB"
		const uinthrWSBK = BigInt("1695")
		const uintJDdXsg = BigInt("60")
		const XenoFelixFOYHERx = await XenoFelix.new(stringYemIkhs, stringEO5bhAY, uinthrWSBK, uintJDdXsg, {from: accounts[2]});
		const addressxxLcwn5 = accounts[0]
		const addresseWYAFys = accounts[4]
		const uint256YyEg31V = await XenoFelixFOYHERx.balanceOf.call(addressxxLcwn5, {from: accounts[3]});
		const addressOUXxcou = await XenoFelixFOYHERx.transferOwnership.call(addresseWYAFys, {from: accounts[2]});

		assert.equal(uint256YyEg31V, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringDN6zSvS = "sw7CtX6oYGLUvbiVkQ466lvMbvadTlnaHeiHAVGOS5uQ"
		const stringunp5JsJ = "8NmFk6n4s2Pd4xzAeNYPbLptZAet5jRLOUiA3BbOHvIkiEHYZpzVNRxrJ4W953gB"
		const uintctyxJgP = BigInt("724")
		const uintJHDxwWq = BigInt("137")
		const XenoFelixNYCHNcN = await XenoFelix.new(stringDN6zSvS, stringunp5JsJ, uintctyxJgP, uintJHDxwWq, {from: accounts[2]});
		const uintyLjJqW = BigInt("811")
		const addressSvsqUF5 = accounts[0]
		const uintjNz3nY = BigInt("1055")
		const addressTCknHWm = accounts[4]
		const booljsTZNpF = await XenoFelixNYCHNcN.approve.call(addressSvsqUF5, uintyLjJqW, {from: accounts[0]});
		const stringn812SSu = await XenoFelixNYCHNcN.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolfLodn3S = await XenoFelixNYCHNcN.transfer.call(addressTCknHWm, uintjNz3nY, {from: accounts[5]});

		assert.equal(booljsTZNpF, true)
		assert.equal(stringn812SSu, "sw7CtX6oYGLUvbiVkQ466lvMbvadTlnaHeiHAVGOS5uQ")
		await expect(XenoFelixNYCHNcN.transfer.call(addressTCknHWm, uintjNz3nY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringTCaniCu = "xC09M"
		const stringAbDVKJ1 = "O4ay7y1Y5ekFoTw9EL5JBzoKod6bRCq2LIlGw292PgLhObOBR28oas1iVk8rm5NglASi9YcPNrpB"
		const uintegFoAG = BigInt("249")
		const XenoFelixhms5f5u = await XenoFelix.new(stringTCaniCu, stringAbDVKJ1, uintegFoAG, {from: accounts[5]});
		const uintKZ2Zt7U = BigInt("1526")
		const addressRqeVO1L = accounts[4]
		const addressxaE1OA = accounts[1]
		const uintm6coqip = BigInt("1767")
		const addressDpaTd2N = accounts[2]
		const addressrAu9j08 = accounts[1]
		const boolpiOKye = await XenoFelixhms5f5u.decreaseAllowance.call(addressRqeVO1L, uintKZ2Zt7U, {from: accounts[1]});
		const uint256DcmGTIO = await XenoFelixhms5f5u.balanceOf.call(addressxaE1OA, {from: accounts[4]});
		const boolezjAEJI = await XenoFelixhms5f5u.transfer.call(addressDpaTd2N, uintm6coqip, {from: accounts[0]});
		const addresslUDbmI = await XenoFelixhms5f5u.addPauser.call(addressrAu9j08, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringYemIkhs = "EzBt1gsQ57Ygf9fnvI8a0wCNcy9vmpwRKc4"
		const stringEO5bhAY = "Y2sMgf7LPVszNPY3cI3vtM87stsy5mNjG4Cuf2FKO9b3QNUT9uGTmKUvv2JHqyxxxNvX2brgoNg9BverB"
		const uintQyc4GLj = BigInt("1695")
		const uintDFur2Wp = BigInt("60")
		const XenoFelixFOYHERx = await XenoFelix.new(stringYemIkhs, stringEO5bhAY, uintQyc4GLj, uintDFur2Wp, {from: accounts[2]});
		const addressk5UXz4 = accounts[2]
		const addressIhdtR72 = accounts[2]
		const addressteAbrmN = "0x0000000000000000000000000000000000000000"
		const uint256FJRegR0 = await XenoFelixFOYHERx.allowance.call(addressIhdtR72, addressk5UXz4, {from: accounts[1]});
		const uint256YyEg31V = await XenoFelixFOYHERx.balanceOf.call(addressteAbrmN, {from: accounts[3]});
//		await XenoFelixFOYHERx.whenPaused.call({from: accounts[5]});

		assert.equal(uint256FJRegR0, BigInt("0"))
		assert.equal(uint256YyEg31V, BigInt("0"))
		await expect(XenoFelixFOYHERx.whenPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYemIkhs = "EzBt1gsQ57Ygf9fnvI8a0wCNcy9vmpwRKc4"
		const stringEO5bhAY = "Y2sMgf7LPVszNPY3cI3vtM87stsy5mNjG4Cuf2FKO9b3QNUT9uGTmKUvv2JHqyxxxNvX2brgoNg9BverB"
		const uintNzZL8m = BigInt("1695")
		const uintHgbXMhM = BigInt("60")
		const XenoFelixFOYHERx = await XenoFelix.new(stringYemIkhs, stringEO5bhAY, uintNzZL8m, uintHgbXMhM, {from: accounts[2]});
		const uintQvAJ2Q1 = BigInt("970")
		const address4Yc8aA = accounts[3]
		const addresseQhZpsR = accounts[4]
		const addressi90EwaK = accounts[3]
		const uintc31GCB0 = BigInt("1503")
		const uintoztSpAn = BigInt("1559")
		const addressOZm4RMr = "0x0000000000000000000000000000000000000001"
//		const boolPkOu87D = await XenoFelixFOYHERx.decreaseAllowance.call(address4Yc8aA, uintQvAJ2Q1, {from: accounts[3]});
//		const uint256I6R8B3F = await XenoFelixFOYHERx.allowance.call(addressi90EwaK, addresseQhZpsR, {from: accounts[2]});
//		const boolYjxdypp = await XenoFelixFOYHERx.lock.call(addressOZm4RMr, uintoztSpAn, uintc31GCB0, {from: accounts[0]});

		await expect(XenoFelixFOYHERx.decreaseAllowance.call(address4Yc8aA, uintQvAJ2Q1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringzinZTd3 = "U7vYMBbgCI1AuBxItY3iK0HQHzawzq9wfTmhVhwbJrq77QBSM8NgA5tXLf6g4oMVTv9z4ndlzmJ56A3YTRxszMIoDn"
		const stringJgSdoXe = "WWzAbVbiUS"
		const uintuGA4UOg = BigInt("132")
		const XenoFelixeI6QCEd = await XenoFelix.new(stringzinZTd3, stringJgSdoXe, uintuGA4UOg, {from: accounts[1]});
		const uinty8MdJ7E = BigInt("1482")
		const addressyfgxIUM = accounts[0]
		const uinta6vrfWj = BigInt("809")
		const addressZDR9uoO = accounts[4]
		const uintyB3IkSn = BigInt("1410")
		const addressXmjLgV2 = "0x0000000000000000000000000000000000000001"
		await XenoFelixeI6QCEd.whenNotPaused.call({from: accounts[0]});
		const boolPTm8fez = await XenoFelixeI6QCEd.transfer.call(addressyfgxIUM, uinty8MdJ7E, {from: accounts[2]});
		const booluWbi0CF = await XenoFelixeI6QCEd.burnOwner.call(addressZDR9uoO, uinta6vrfWj, {from: accounts[2]});
		const boolXheh4nD = await XenoFelixeI6QCEd.increaseAllowance.call(addressXmjLgV2, uintyB3IkSn, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jSVxWHp = await XenoFelixeI6QCEd.totalSupply.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringYemIkhs = "EzBt1gsQ57Ygf9fnvI8a0wCNcy9vmpwRKc4"
		const stringEO5bhAY = "Y2sMgf7LPVszNPY3cI3vtM87stsy5mNjG4Cuf2FKO9b3QNUT9uGTmKUvv2JHqyxxxNvX2brgoNg9BverB"
		const uintH8cjsQ8 = BigInt("1695")
		const uintDqed1jW = BigInt("60")
		const XenoFelixFOYHERx = await XenoFelix.new(stringYemIkhs, stringEO5bhAY, uintH8cjsQ8, uintDqed1jW, {from: accounts[2]});
		const uint256NhYBe3 = await XenoFelixFOYHERx.totalSupply.call({from: accounts[3]});
//		await XenoFelixFOYHERx.renouncePauser.call({from: accounts[0]});
//		await XenoFelixFOYHERx.renouncePauser.call({from: accounts[1]});

		assert.equal(uint256NhYBe3, BigInt("1695000000000000000000000000000000000000000000000000000000000000"))
		await expect(XenoFelixFOYHERx.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYemIkhs = "EzBt1gsQ57Ygf9fnvI8a0wCNcy9vmpwRKc4"
		const stringEO5bhAY = "Y2sMgf7LPVszNPY3cI3vtM87stsy5mNjG4Cuf2FKO9b3QNUT9uGTmKUvv2JHqyxxxNvX2brgoNg9BverB"
		const uintRlO6Int = BigInt("1695")
		const uintspUoSry = BigInt("60")
		const XenoFelixFOYHERx = await XenoFelix.new(stringYemIkhs, stringEO5bhAY, uintRlO6Int, uintspUoSry, {from: accounts[2]});
		const addressUy8YWBt = "0x0000000000000000000000000000000000000002"
		const uintLQGkI0S = BigInt("1068")
		const uintLQywWmY = BigInt("1309")
		const uint256YyEg31V = await XenoFelixFOYHERx.balanceOf.call(addressUy8YWBt, {from: accounts[3]});
//		const uint256HnHayxr = await XenoFelixFOYHERx.burn.call(uintLQGkI0S, {from: accounts[3]});
//		const uint256hptuZRy = await XenoFelixFOYHERx.burn.call(uintLQywWmY, {from: accounts[4]});

		assert.equal(uint256YyEg31V, BigInt("0"))
		await expect(XenoFelixFOYHERx.burn.call(uintLQGkI0S, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringDN6zSvS = "sw7CtX6oYGLUvbiVkQ466lvMbvadTlnaHeiHAVGOS5uQ"
		const stringunp5JsJ = "8NmFk6n4s2Pd4xzAeNYPbLptZAet5jRLOUiA3BbOHvIkiEHYZpzVNRxrJ4W953gB"
		const uintzcvrcYy = BigInt("724")
		const uintf98j3g7 = BigInt("137")
		const XenoFelixNYCHNcN = await XenoFelix.new(stringDN6zSvS, stringunp5JsJ, uintzcvrcYy, uintf98j3g7, {from: accounts[2]});
		const uintOTpAODQ = BigInt("811")
		const addressL6LGP49 = accounts[0]
		const addressYMec3ge = accounts[3]
		const addressA9NCTfI = accounts[4]
		const addressxq8CVu = accounts[1]
		const addressCx5ei4J = accounts[3]
		const uintpDfFwBQ = BigInt("563")
		const addressH2cUKmQ = accounts[0]
		const booljsTZNpF = await XenoFelixNYCHNcN.approve.call(addressL6LGP49, uintOTpAODQ, {from: accounts[0]});
		const stringiGJxhdx = await XenoFelixNYCHNcN.symbol.call({from: accounts[0]});
		const uint256SSUvn9 = await XenoFelixNYCHNcN.balanceOf.call(addressYMec3ge, {from: accounts[1]});
		const boolei7B3SY = await XenoFelixNYCHNcN.isOwner.call(addressA9NCTfI, {from: accounts[2]});
		const uint256VWB5XHk = await XenoFelixNYCHNcN.allowance.call(addressCx5ei4J, addressxq8CVu, {from: accounts[0]});
//		const boolFd9RAEk = await XenoFelixNYCHNcN.burnOwner.call(addressH2cUKmQ, uintpDfFwBQ, {from: accounts[2]});

		assert.equal(boolei7B3SY, false)
		assert.equal(booljsTZNpF, true)
		assert.equal(stringiGJxhdx, "8NmFk6n4s2Pd4xzAeNYPbLptZAet5jRLOUiA3BbOHvIkiEHYZpzVNRxrJ4W953gB")
		assert.equal(uint256SSUvn9, BigInt("0"))
		assert.equal(uint256VWB5XHk, BigInt("0"))
		await expect(XenoFelixNYCHNcN.burnOwner.call(addressH2cUKmQ, uintpDfFwBQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringS7vPZ9m = "8fxtlYY34FbtyYEHh88xpMIyMiaBQgewWEiHTqcBK2Gyzj1fvbioK2MvHCDaziLJd9w9xfmOjxohq8x8VCdJFaQ"
		const stringjfmxmdO = "Cv34Khi5dIxiOBSJ19mSjLXBgxeVizMFZJlnkhA0mPTWvsEG6DEZGHfw5JIPNDQgDeyQFHw"
		const uintXHNZ6hA = BigInt("61")
		const XenoFelixysdVz5O = await XenoFelix.new(stringS7vPZ9m, stringjfmxmdO, uintXHNZ6hA, {from: "0x0000000000000000000000000000000000000001"});
		const addressUTXW5Tc = accounts[4]
		const addressXMwdqRm = accounts[2]
		const uintdqslRNT = BigInt("1270")
		const addressPjvd5d = accounts[1]
		const addresseuTy8rA = accounts[4]
		const uint256J0hRwXB = await XenoFelixysdVz5O.totalSupply.call({from: accounts[2]});
		const addressYDBGefu = await XenoFelixysdVz5O.addPauser.call(addressUTXW5Tc, {from: accounts[3]});
		const uint256Hz8Ocze = await XenoFelixysdVz5O.balanceOf.call(addressXMwdqRm, {from: accounts[4]});
		await XenoFelixysdVz5O.whenNotPaused.call({from: accounts[0]});
		await XenoFelixysdVz5O.onlyPauser.call({from: accounts[2]});
		const booldCgKW3I = await XenoFelixysdVz5O.transferFrom.call(addresseuTy8rA, addressPjvd5d, uintdqslRNT, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringYemIkhs = "EzBt1gsQ57Ygf9fnvI8a0wCNcy9vmpwRKc4"
		const stringEO5bhAY = "Y2sMgf7LPVszNPY3cI3vtM87stsy5mNjG4Cuf2FKO9b3QNUT9uGTmKUvv2JHqyxxxNvX2brgoNg9BverB"
		const uintlPzFHK = BigInt("1695")
		const uintCf55odR = BigInt("60")
		const XenoFelixFOYHERx = await XenoFelix.new(stringYemIkhs, stringEO5bhAY, uintlPzFHK, uintCf55odR, {from: accounts[2]});
		const addressUjvmBwp = "0x0000000000000000000000000000000000000001"
		const addressWDT4eqc = accounts[2]
		const addressdtGrllL = accounts[2]
		const addressb8SRfSH = "0x0000000000000000000000000000000000000001"
		const uint256YyEg31V = await XenoFelixFOYHERx.balanceOf.call(addressUjvmBwp, {from: accounts[3]});
		const uint256suOPH9N = await XenoFelixFOYHERx.allowance.call(addressdtGrllL, addressWDT4eqc, {from: accounts[3]});
		const addresslSXLiX8 = await XenoFelixFOYHERx.addPauser.call(addressb8SRfSH, {from: accounts[2]});

		assert.equal(uint256YyEg31V, BigInt("0"))
		assert.equal(uint256suOPH9N, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringYemIkhs = "EzBt1gsQ57Ygf9fnvI8a0wCNcy9vmpwRKc4"
		const stringEO5bhAY = "Y2sMgf7LPVszNPY3cI3vtM87stsy5mNjG4Cuf2FKO9b3QNUT9uGTmKUvv2JHqyxxxNvX2brgoNg9BverB"
		const uintj104rU = BigInt("1695")
		const uintokZnIU = BigInt("60")
		const XenoFelixFOYHERx = await XenoFelix.new(stringYemIkhs, stringEO5bhAY, uintj104rU, uintokZnIU, {from: accounts[2]});
		const addressHpR6e0b = accounts[3]
//		const addressPhNPWcW = await XenoFelixFOYHERx.removePauser.call(addressHpR6e0b, {from: accounts[2]});
//		await XenoFelixFOYHERx.renouncePauser.call({from: accounts[1]});

		await expect(XenoFelixFOYHERx.removePauser.call(addressHpR6e0b, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringDN6zSvS = "sw7CtX6oYGLUvbiVkQ466lvMbvadTlnaHeiHAVGOS5uQ"
		const stringunp5JsJ = "8NmFk6n4s2Pd4xzAeNYPbLptZAet5jRLOUiA3BbOHvIkiEHYZpzVNRxrJ4W953gB"
		const uintAbZ0cvI = BigInt("724")
		const uintGgdOXbJ = BigInt("137")
		const XenoFelixNYCHNcN = await XenoFelix.new(stringDN6zSvS, stringunp5JsJ, uintAbZ0cvI, uintGgdOXbJ, {from: accounts[2]});
		const uintZR7U55r = BigInt("811")
		const addresseDomzG7 = accounts[0]
		const addresseVse7Ak = accounts[4]
		const addresssNBOmvo = accounts[4]
		const uintU2q7bO3 = BigInt("521")
		const uintkV9SUuH = BigInt("201")
		const addresshI74f0 = accounts[0]
		const addressmS4dHx = accounts[5]
		const uintDyP2x95 = BigInt("1071")
		const addressmYpPWmN = accounts[3]
		const booljsTZNpF = await XenoFelixNYCHNcN.approve.call(addresseDomzG7, uintZR7U55r, {from: accounts[0]});
		const uint256SSUvn9 = await XenoFelixNYCHNcN.balanceOf.call(addresseVse7Ak, {from: accounts[1]});
		const booloVeCVJl = await XenoFelixNYCHNcN.isPauser.call(addresssNBOmvo, {from: accounts[2]});
//		const boolRz1dGV8 = await XenoFelixNYCHNcN.lock.call(addresshI74f0, uintkV9SUuH, uintU2q7bO3, {from: accounts[2]});
//		const boolei7B3SY = await XenoFelixNYCHNcN.isOwner.call(addressmS4dHx, {from: accounts[2]});
//		const boolfLodn3S = await XenoFelixNYCHNcN.transfer.call(addressmYpPWmN, uintDyP2x95, {from: accounts[5]});

		assert.equal(booljsTZNpF, true)
		assert.equal(booloVeCVJl, false)
		assert.equal(uint256SSUvn9, BigInt("0"))
		await expect(XenoFelixNYCHNcN.lock.call(addresshI74f0, uintkV9SUuH, uintU2q7bO3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringLUvjWV = "D7t"
		const stringUmiphS = "HdyM69cfw8v8rM7uGoXnNhOsQJkBpxujy3qm5pRKaLOTMWhc1ys0i"
		const uintfGJ3jE = BigInt("57")
		const XenoFelixxHPEM4v = await XenoFelix.new(stringLUvjWV, stringUmiphS, uintfGJ3jE, {from: accounts[0]});
		const addresswSCpJDt = "0x0000000000000000000000000000000000000001"
		const addressWx0B264 = accounts[2]
		const addressVuIIAzo = "0x0000000000000000000000000000000000000001"
		const addressbwA6QGw = accounts[2]
		await XenoFelixxHPEM4v.whenNotPaused.call({from: accounts[0]});
		const uint256m65pLd = await XenoFelixxHPEM4v.balanceOf.call(addresswSCpJDt, {from: accounts[4]});
		const addressEu43WoW = await XenoFelixxHPEM4v.removePauser.call(addressWx0B264, {from: accounts[1]});
		const booldFAigMH = await XenoFelixxHPEM4v.unfreezeAccount.call(addressVuIIAzo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256YqnHE1v = await XenoFelixxHPEM4v.balanceOf.call(addressbwA6QGw, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringYemIkhs = "EzBt1gsQ57Ygf9fnvI8a0wCNcy9vmpwRKc4"
		const stringEO5bhAY = "Y2sMgf7LPVszNPY3cI3vtM87stsy5mNjG4Cuf2FKO9b3QNUT9uGTmKUvv2JHqyxxxNvX2brgoNg9BverB"
		const uintjukdjM = BigInt("1695")
		const uintmcdQ2Ro = BigInt("60")
		const XenoFelixFOYHERx = await XenoFelix.new(stringYemIkhs, stringEO5bhAY, uintjukdjM, uintmcdQ2Ro, {from: accounts[2]});
		const addressNgXwnAe = "0x0000000000000000000000000000000000000002"
		const uintOffKJ0i = BigInt("1663")
		const uintFJ54MrR = BigInt("1617")
		const addressOJSe6IP = accounts[5]
		const uintg8t2CLN = BigInt("1953")
		const addressjIGPNTr = accounts[3]
		const addressvzd1r9 = accounts[4]
		const uint256YyEg31V = await XenoFelixFOYHERx.balanceOf.call(addressNgXwnAe, {from: accounts[3]});
		const boolZglLYVF = await XenoFelixFOYHERx.transferWithLock.call(addressOJSe6IP, uintFJ54MrR, uintOffKJ0i, {from: accounts[2]});
//		await XenoFelixFOYHERx.unpause.call({from: accounts[5]});
//		const boolsjIp1oD = await XenoFelixFOYHERx.transferFrom.call(addressvzd1r9, addressjIGPNTr, uintg8t2CLN, {from: accounts[1]});

		assert.equal(boolZglLYVF, true)
		assert.equal(uint256YyEg31V, BigInt("0"))
		await expect(XenoFelixFOYHERx.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringYemIkhs = "EzBt1gsQ57Ygf9fnvI8a0wCNcy9vmpwRKc4"
		const stringEO5bhAY = "Y2sMgf7LPVszNPY3cI3vtM87stsy5mNjG4Cuf2FKO9b3QNUT9uGTmKUvv2JHqyxxxNvX2brgoNg9BverB"
		const uintLFYe0ky = BigInt("1695")
		const uintBdK2HiY = BigInt("60")
		const XenoFelixFOYHERx = await XenoFelix.new(stringYemIkhs, stringEO5bhAY, uintLFYe0ky, uintBdK2HiY, {from: accounts[2]});
		const addressJs6PmAM = accounts[2]
		const addresskxQf9mz = "0x0000000000000000000000000000000000000002"
//		const boolaztDoGs = await XenoFelixFOYHERx.unfreezeAccount.call(addressJs6PmAM, {from: accounts[2]});
//		const uint256YyEg31V = await XenoFelixFOYHERx.balanceOf.call(addresskxQf9mz, {from: accounts[3]});

		await expect(XenoFelixFOYHERx.unfreezeAccount.call(addressJs6PmAM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})