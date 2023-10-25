const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintz1yT1LT = BigInt("580")
		const stringGOS1RXt = "POdW4Oun4sPNY17jDCLGFn8MB9UHmpwWkTDnCLMVqmyA3A3NOw"
		const stringnUc4q8a = "e0JibkAt7vaIs30PlIQWOISfs79qMrxXppRoIS3LTJJavhw6V8ACXtHeaXW7dkRF8j9cuwlgiW77wPX1rzmqhHiFYOTJJ0qCKT"
		const GFCdAaDmjT = await GFC.new(uintz1yT1LT, stringGOS1RXt, stringnUc4q8a, {from: accounts[0]});
		const bytel4evSby = "0x1b05080b1d0d170e0b1f010c030c051f1a"
		const uintXOFKa0I = BigInt("444")
		const addressKG3MPal = accounts[3]
		const uintz6XO6Le = BigInt("1462")
		const byte6q0uOe = "0x0f0e1b071b131f0115"
		const uintig3BW7 = BigInt("1507")
		const addressAKKOHWg = accounts[4]
		const byteVZY1sX = "0x0c17081f081d1d031f11111705"
		const uintQaqGAqv = BigInt("545")
		const addressprAo35v = accounts[3]
//		const boolbnUVqMy = await GFCdAaDmjT.approveAndCall.call(addressKG3MPal, uintXOFKa0I, bytel4evSby, {from: accounts[1]});
//		const boolYzTSDeq = await GFCdAaDmjT.burn.call(uintz6XO6Le, {from: accounts[3]});
//		const boolBAyHznB = await GFCdAaDmjT.approveAndCall.call(addressAKKOHWg, uintig3BW7, byte6q0uOe, {from: accounts[1]});
//		const boolQNvPsmj = await GFCdAaDmjT.approveAndCall.call(addressprAo35v, uintQaqGAqv, byteVZY1sX, {from: accounts[2]});

		await expect(GFCdAaDmjT.approveAndCall.call(addressKG3MPal, uintXOFKa0I, bytel4evSby, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintyC0QMcC = BigInt("454")
		const stringmv8b7d8 = "udY7xdXaNuwHuN6r"
		const stringZ6rm8KM = "tO6odb4lFsM59yenasqshKli9sx9CSfpLji0NzY5r68CRDpNF"
		const GFCH25ZAfn = await GFC.new(uintyC0QMcC, stringmv8b7d8, stringZ6rm8KM, {from: accounts[1]});
		const uintZQWEgck = BigInt("176")
		const uintIsWytjJ = BigInt("328")
		const addressCSqaJR2 = "0x0000000000000000000000000000000000000001"
		const byteAtJgqAh = "0x1a03011d06110a04051a0b0904071518181c110c14150b0d1f17151500101609"
		const uinttZvGJJz = BigInt("897")
		const addressPfwSTba = accounts[0]
		const uinttR6YKef = BigInt("302")
		const address3mGCPe = accounts[5]
		const uintAe37Bs7 = BigInt("194")
		const boolP5eRtwX = await GFCH25ZAfn.burn.call(uintZQWEgck, {from: accounts[1]});
//		const boolrE3xcx9 = await GFCH25ZAfn.burnFrom.call(addressCSqaJR2, uintIsWytjJ, {from: accounts[5]});
//		const boolu0LwpU5 = await GFCH25ZAfn.approveAndCall.call(addressPfwSTba, uinttZvGJJz, byteAtJgqAh, {from: accounts[3]});
//		const boolr4jhAsK = await GFCH25ZAfn.approve.call(address3mGCPe, uinttR6YKef, {from: accounts[0]});
//		const boolyQ4wDsQ = await GFCH25ZAfn.burn.call(uintAe37Bs7, {from: accounts[1]});

		assert.equal(boolP5eRtwX, true)
		await expect(GFCH25ZAfn.burnFrom.call(addressCSqaJR2, uintIsWytjJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintDWKMmBp = BigInt("232")
		const stringIKlW0Oz = "3HWX5AzczilG8ygk2u4uf4mlHQUl4Lr6vLCWNmEDqaRKLlfvL3PgJIVQftA4C1SG3EpgadMFDmkGTwHa3zLwjbupMIrg0K2sD4"
		const stringZhkEsGS = "PQaCe6H7h586Y9qYvtCbXunfY9koakd3TKHupTSmsEnke"
		const GFCE5jmWud = await GFC.new(uintDWKMmBp, stringIKlW0Oz, stringZhkEsGS, {from: accounts[1]});
		const uintmt4FikJ = BigInt("310")
		const addressVpq4ASG = accounts[2]
		const byteZlHYoS5 = "0x191a"
		const uintGmruULS = BigInt("2029")
		const addressUvhkPdq = accounts[4]
		const uintUplj039 = BigInt("711")
		const addressXvXe29U = accounts[1]
		const uintRdPMkJs = BigInt("590")
		const uintXt3VREi = BigInt("950")
		const addresscDGlgrZ = accounts[1]
		const boolkWmyKPy = await GFCE5jmWud.transfer.call(addressVpq4ASG, uintmt4FikJ, {from: accounts[1]});
//		const boolLq9n9N = await GFCE5jmWud.approveAndCall.call(addressUvhkPdq, uintGmruULS, byteZlHYoS5, {from: accounts[5]});
//		const boolSQX6vO = await GFCE5jmWud.approve.call(addressXvXe29U, uintUplj039, {from: accounts[0]});
//		const boolJxG4oo = await GFCE5jmWud.burn.call(uintRdPMkJs, {from: "0x0000000000000000000000000000000000000001"});
//		const boolf1Cn8as = await GFCE5jmWud.transfer.call(addresscDGlgrZ, uintXt3VREi, {from: accounts[5]});

		assert.equal(boolkWmyKPy, true)
		await expect(GFCE5jmWud.approveAndCall.call(addressUvhkPdq, uintGmruULS, byteZlHYoS5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintbVkuSVl = BigInt("1073")
		const stringpU5H3iQ = "RQWQKGeGEJHTV2egCW"
		const stringT79qGDV = "rQ1p46XuCvwp6EcE6aCI"
		const GFCQfxFlIn = await GFC.new(uintbVkuSVl, stringpU5H3iQ, stringT79qGDV, {from: accounts[0]});
		const uintYwERhYX = BigInt("37")
		const uintJL8mzRO = BigInt("919")
		const addressfP47poF = "0x0000000000000000000000000000000000000001"
		const addresstkKL9u = accounts[1]
		const uintRsaIlOV = BigInt("2011")
		const addresssGjxOpa = accounts[4]
		const boolc30IBZ0 = await GFCQfxFlIn.burn.call(uintYwERhYX, {from: accounts[0]});
//		const boolswNR9O8 = await GFCQfxFlIn.transferFrom.call(addresstkKL9u, addressfP47poF, uintJL8mzRO, {from: accounts[2]});
//		const booljQfUiWt = await GFCQfxFlIn.burnFrom.call(addresssGjxOpa, uintRsaIlOV, {from: accounts[4]});

		assert.equal(boolc30IBZ0, true)
		await expect(GFCQfxFlIn.transferFrom.call(addresstkKL9u, addressfP47poF, uintJL8mzRO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintNT0UrVh = BigInt("805")
		const stringSHM2XOs = "tjHJkafQoD7icnNgdHc2TYwGeuCl5GgPfCdRuRk1Izdpe"
		const stringFgLV9q = "KjuaLF1AQEWtuWUZoLzbxoUJ9uf6SgUlZQwa2cEoVsPRMB9xU7OdhZMJwYt1QnUjttvRy9uYPkgSclx5xs43WXkcRQt8e1A68"
		const GFCbj8CGaw = await GFC.new(uintNT0UrVh, stringSHM2XOs, stringFgLV9q, {from: accounts[4]});
		const uintOCM6x8d = BigInt("537")
		const addressk96SLZi = accounts[4]
		const uintiWcxJHX = BigInt("886")
//		const boolRqNQvyZ = await GFCbj8CGaw.burnFrom.call(addressk96SLZi, uintOCM6x8d, {from: accounts[2]});
//		const boolzmLxMms = await GFCbj8CGaw.burn.call(uintiWcxJHX, {from: accounts[4]});

		await expect(GFCbj8CGaw.burnFrom.call(addressk96SLZi, uintOCM6x8d, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintX52RsGy = BigInt("358")
		const stringeDFR3nQ = "QVqZ9Ut9FdKiJfMuaBVEprH79baC7wzUhIKiUJgiuJUdO"
		const stringdygOsYc = "7QxXIsSiAkAAgN4WXJtW6xPnOuTpUQq9Ji9twPa5KKTssGLGNxMs8WnXn96LvALhPEBCBHDFkw2Wn8dH2GXtbzbpjJoWSo1"
		const GFCTXkz2W = await GFC.new(uintX52RsGy, stringeDFR3nQ, stringdygOsYc, {from: "0x0000000000000000000000000000000000000001"});
		const uintKkIpDDE = BigInt("1416")
		const addressrulk06o = accounts[2]
		const addressMK1fVWb = accounts[3]
		const byteckHA0Is = "0x20131d20041d1d0e07"
		const uinthTiX6p1 = BigInt("1049")
		const address6Yr6hu = "0x0000000000000000000000000000000000000001"
		const boolUw5PyOA = await GFCTXkz2W.transferFrom.call(addressMK1fVWb, addressrulk06o, uintKkIpDDE, {from: accounts[0]});
		const boolG2A2ijF = await GFCTXkz2W.approveAndCall.call(address6Yr6hu, uinthTiX6p1, byteckHA0Is, {from: accounts[5]});
	});
})