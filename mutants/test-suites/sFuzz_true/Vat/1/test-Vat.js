const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatSUFNmG = await Vat.new({from: accounts[4]});
		const addressB2wFFV0 = accounts[3]
		const intfsvj8nG = BigInt("-6")
		const intrOP91xb = BigInt("364")
		const addressfnAO6Wt = accounts[2]
		const addresshdQVnXt = accounts[2]
		const bytemyvg8TW = "0x060607090c031d15070f140c051d0b180914150c04020f0b0907110a0e1a180e"
		const intSkvL18t = BigInt("-875")
		const addressyP7UCUW = accounts[0]
		const bytezyyqBgi = "0x010a110c1d1105131404180806161a0d1e1c0211061f0e1309080d0a161c0216"
		const bytePzLLzOX = "0x1d05000e1602180d0f041d0b1b1b15090b121b0e1b0c1d0f0b0c170215160215"
		const addressuP8QYop = await VatSUFNmG.nope.call(addressB2wFFV0, {from: accounts[3]});
//		const bytes32po7fAkG = await VatSUFNmG.fork.call(bytemyvg8TW, addresshdQVnXt, addressfnAO6Wt, intrOP91xb, intfsvj8nG, {from: accounts[5]});
//		const bytes32YTmx8Br = await VatSUFNmG.slip.call(bytezyyqBgi, addressyP7UCUW, intSkvL18t, {from: accounts[2]});
//		const bytes32TW3ivX8 = await VatSUFNmG.init.call(bytePzLLzOX, {from: accounts[0]});

		await expect(VatSUFNmG.fork.call(bytemyvg8TW, addresshdQVnXt, addressfnAO6Wt, intrOP91xb, intfsvj8nG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatOMczuXG = await Vat.new({from: accounts[4]});
//		await VatOMczuXG.note.call({from: accounts[1]});
//		await VatOMczuXG.auth.call({from: accounts[0]});

		await expect(VatOMczuXG.note.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatO9h9okR = await Vat.new({from: accounts[5]});
		const addressbbMkAsp = accounts[2]
		const uintWD6k1jn = BigInt("463")
		const addressynJKRDX = accounts[2]
		const addressUxPOzjG = accounts[2]
		const uinthCclwOU = BigInt("60")
		const addressbaedUGm = accounts[2]
		const addressocelwcW = accounts[4]
		const byteQfcn7m = "0x1715000f160f0d17181e1c15001715131f091e1211161700181e0e0a0e0b1e1a"
		const addresshUFFwqb = "0x0000000000000000000000000000000000000001"
		const addressP4Wcj0 = await VatO9h9okR.nope.call(addressbbMkAsp, {from: accounts[1]});
//		const addressaUr6D8E = await VatO9h9okR.move.call(addressUxPOzjG, addressynJKRDX, uintWD6k1jn, {from: accounts[1]});
//		const bytes32evGyS1o = await VatO9h9okR.flux.call(byteQfcn7m, addressocelwcW, addressbaedUGm, uinthCclwOU, {from: accounts[3]});
//		const addresseVOFfbu = await VatO9h9okR.rely.call(addresshUFFwqb, {from: accounts[3]});

		await expect(VatO9h9okR.move.call(addressUxPOzjG, addressynJKRDX, uintWD6k1jn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXTkcXSv = await Vat.new({from: accounts[0]});
		const intCDAdVVP = BigInt("379")
		const addressxR02cDX = accounts[3]
		const bytemXShGPv = "0x060c03111d1c1a0a0110001a0016020f1e1e151e11070e1f0d081116131c0e06"
		const intLoMnXPU = BigInt("1016")
		const addressH2GPFjT = accounts[3]
		const bytesthLRl = "0x1d1a0e0d160c1e1c1506040a13181d1f1a02121710130e02140c1a1a0d11090e"
		const intPKsmHuj = BigInt("975")
		const intPwp29pt = BigInt("1302")
		const addressd43LpGU = accounts[0]
		const addressRMuyYmT = accounts[3]
		const addressUMq24NI = accounts[3]
		const byteY9bNFeU = "0x16001d171506131b0a010505131d0b03181e1d0f100f010a2018181f040e1110"
//		const bytes32lWG4jBt = await VatXTkcXSv.slip.call(bytemXShGPv, addressxR02cDX, intCDAdVVP, {from: accounts[4]});
//		const bytes32wgbkSB = await VatXTkcXSv.slip.call(bytesthLRl, addressH2GPFjT, intLoMnXPU, {from: accounts[0]});
//		const bytes32wX9DIcW = await VatXTkcXSv.frob.call(byteY9bNFeU, addressUMq24NI, addressRMuyYmT, addressd43LpGU, intPwp29pt, intPKsmHuj, {from: accounts[4]});

		await expect(VatXTkcXSv.slip.call(bytemXShGPv, addressxR02cDX, intCDAdVVP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatGfLjaRS = await Vat.new({from: accounts[0]});
		const addressWLs0UMc = accounts[1]
		const intrpCfNST = BigInt("-1306")
		const intswYR7cP = BigInt("-1266")
		const addressQFGBpgM = accounts[4]
		const addressPVHdZBB = accounts[0]
		const addressuHjytjx = accounts[1]
		const byteo4TI30 = "0x1c13030a131b04060d190f0a1a131a100e04141a101e1f021320040c181c0809"
		const uinty839RWW = BigInt("1063")
		const address3Ziqal = accounts[3]
		const addressPWZqTO7 = accounts[3]
		const bytezjFCAH6 = "0x0f13190d17000b1f18091c02071d081318051b030219160e1e141f0e1c03081f"
		const addressImlxlu = accounts[3]
		const addressScY2C9e = accounts[4]
		const addressMhEHlOn = await VatGfLjaRS.nope.call(addressWLs0UMc, {from: accounts[1]});
//		const bytes32WI8Ip4 = await VatGfLjaRS.grab.call(byteo4TI30, addressuHjytjx, addressPVHdZBB, addressQFGBpgM, intswYR7cP, intrpCfNST, {from: accounts[0]});
//		const bytes32hCbOHX = await VatGfLjaRS.flux.call(bytezjFCAH6, addressPWZqTO7, address3Ziqal, uinty839RWW, {from: accounts[2]});
//		const addressr0vL7IK = await VatGfLjaRS.nope.call(addressImlxlu, {from: accounts[2]});
//		const addressQua3N4g = await VatGfLjaRS.deny.call(addressScY2C9e, {from: accounts[1]});

		await expect(VatGfLjaRS.grab.call(byteo4TI30, addressuHjytjx, addressPVHdZBB, addressQFGBpgM, intswYR7cP, intrpCfNST, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatqMCje4I = await Vat.new({from: accounts[5]});
		const uintHFnLuR = BigInt("1557")
		const bytehmWHAMt = "0x1311031e1a1e20181b111e021e08011a1c0308070a0313020f1f0808030a1913"
		const bytem749b30 = "0x0f051b1c1a061a150a0111121d13201c0315180d131b061f0c0f1e1c171d0f01"
		const uintWmErjMH = BigInt("313")
		const addressPnJTVoL = accounts[1]
		const addressXrCz4VU = accounts[4]
		const uintc4UZM4j = BigInt("64")
		const addressnjLGLuL = accounts[0]
		const addressGOXXrW = accounts[2]
//		const bytes32eTQZcEa = await VatqMCje4I.file.call(bytehmWHAMt, uintHFnLuR, {from: accounts[2]});
//		const bytes32kqNbDX9 = await VatqMCje4I.init.call(bytem749b30, {from: "0x0000000000000000000000000000000000000001"});
//		const addressm8bXYcg = await VatqMCje4I.move.call(addressXrCz4VU, addressPnJTVoL, uintWmErjMH, {from: accounts[5]});
//		await VatqMCje4I.cage.call({from: accounts[2]});
//		const addressPHTbzl2 = await VatqMCje4I.suck.call(addressGOXXrW, addressnjLGLuL, uintc4UZM4j, {from: accounts[3]});

		await expect(VatqMCje4I.file.call(bytehmWHAMt, uintHFnLuR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatSNG5Ez = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const addressm3euPpw = accounts[2]
		const intxFU74oc = BigInt("207")
		const intLJI27pJ = BigInt("708")
		const addressR7IHfP7 = accounts[2]
		const addresseTAKfA = accounts[3]
		const addressxVwJUvt = accounts[2]
		const bytesEMvO9D = "0x100f060d0a07110c190e1a1f021b14191907010719200d20020b1b0417031305"
		const addressFK9eNn4 = accounts[2]
		const addressW7BslS4 = await VatSNG5Ez.nope.call(addressm3euPpw, {from: accounts[4]});
		const bytes32HCjBw9F = await VatSNG5Ez.frob.call(bytesEMvO9D, addressxVwJUvt, addresseTAKfA, addressR7IHfP7, intLJI27pJ, intxFU74oc, {from: accounts[0]});
		const addresssyKesvo = await VatSNG5Ez.nope.call(addressFK9eNn4, {from: accounts[0]});
	});

	it('test for Vat', async () => {
		const Vate5CjddL = await Vat.new({from: accounts[4]});
		const uint5ICKf4 = BigInt("403")
		const addressWWCGAhV = accounts[4]
		const uintJChpT8t = BigInt("1405")
		const addressM8yp20q = accounts[4]
		const addresshLtGAvv = "0x0000000000000000000000000000000000000001"
		const addressth1bU6C = accounts[1]
		const address21q351 = "0x0000000000000000000000000000000000000001"
//		const uintctVn54B = await Vate5CjddL.heal.call(uint5ICKf4, {from: accounts[5]});
//		const addressttV2Op = await Vate5CjddL.hope.call(addressWWCGAhV, {from: accounts[0]});
//		const addressXnfwbPw = await Vate5CjddL.move.call(addresshLtGAvv, addressM8yp20q, uintJChpT8t, {from: accounts[3]});
//		const addressPMTQqMD = await Vate5CjddL.deny.call(addressth1bU6C, {from: accounts[2]});
//		const addressdlhbSww = await Vate5CjddL.nope.call(address21q351, {from: accounts[1]});

		await expect(Vate5CjddL.heal.call(uint5ICKf4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vate5CjddL = await Vat.new({from: accounts[4]});
		const addressoRigN7 = accounts[3]
		const uintoMpoe1B = BigInt("403")
		const addressRUJ6cbZ = accounts[4]
		const uintTeQiCqr = BigInt("1405")
		const addresszs3qlJB = accounts[5]
		const addressjFCMLjn = "0x0000000000000000000000000000000000000001"
		const uintOGqEOon = BigInt("1603")
		const byteFCRpGke = "0x091d0510061908031e141e0f0319171f15131d1a1217100c151b161c0a171d10"
		const addressBwUvXep = accounts[1]
		const addressv728nFY = "0x0000000000000000000000000000000000000001"
		const addressmHYs6zA = await Vate5CjddL.hope.call(addressoRigN7, {from: "0x0000000000000000000000000000000000000001"});
//		const uintctVn54B = await Vate5CjddL.heal.call(uintoMpoe1B, {from: accounts[5]});
//		const addressttV2Op = await Vate5CjddL.hope.call(addressRUJ6cbZ, {from: accounts[0]});
//		const addressXnfwbPw = await Vate5CjddL.move.call(addressjFCMLjn, addresszs3qlJB, uintTeQiCqr, {from: accounts[3]});
//		const bytes32I2RSW6 = await Vate5CjddL.file.call(byteFCRpGke, uintOGqEOon, {from: accounts[3]});
//		const addressPMTQqMD = await Vate5CjddL.deny.call(addressBwUvXep, {from: accounts[2]});
//		const addressdlhbSww = await Vate5CjddL.nope.call(addressv728nFY, {from: accounts[1]});

		await expect(Vate5CjddL.heal.call(uintoMpoe1B, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatSUFNmG = await Vat.new({from: accounts[4]});
		const address0dMK0B = accounts[3]
		const uintguQWpCf = BigInt("977")
		const addressq1Ub264 = accounts[5]
		const addressdGPOw7W = accounts[0]
		const bytepQ5FX3n = "0x1e0d1a00061d170813101d11131e0c111c1a1a1510070e0e1a1c12020e1e1808"
		const intFov9Isr = BigInt("-6")
		const intorVKvK = BigInt("364")
		const addressqdEXPJL = accounts[2]
		const addresscAO0AU3 = accounts[2]
		const bytecxPj1i = "0x060607090c031d15070f140c051d0b180914150c04020f0b0907110a0e1a180e"
		const int3eiIgG = BigInt("-875")
		const addressYJgO9Pa = accounts[0]
		const byteBd51xtw = "0x010a110c1d1105131404180806161a0d1e1c0211061f0e1309080d0a161c0216"
		const bytetV85xlk = "0x1d05000e1602180d0f041d0b1b1b15090b121b0e1b0c1d0f0b0c170215160215"
		const addressuP8QYop = await VatSUFNmG.nope.call(address0dMK0B, {from: accounts[3]});
//		const bytes32qG4Bi1G = await VatSUFNmG.flux.call(bytepQ5FX3n, addressdGPOw7W, addressq1Ub264, uintguQWpCf, {from: accounts[0]});
//		const bytes32po7fAkG = await VatSUFNmG.fork.call(bytecxPj1i, addresscAO0AU3, addressqdEXPJL, intorVKvK, intFov9Isr, {from: accounts[5]});
//		const bytes32YTmx8Br = await VatSUFNmG.slip.call(byteBd51xtw, addressYJgO9Pa, int3eiIgG, {from: accounts[2]});
//		const bytes32TW3ivX8 = await VatSUFNmG.init.call(bytetV85xlk, {from: accounts[0]});

		await expect(VatSUFNmG.flux.call(bytepQ5FX3n, addressdGPOw7W, addressq1Ub264, uintguQWpCf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatO9h9okR = await Vat.new({from: accounts[5]});
		const addresskQHk0lX = accounts[2]
		const uintQO3QM25 = BigInt("463")
		const addresscupYx4m = accounts[2]
		const addressdIm3fy = accounts[2]
		const uintyLwPJuA = BigInt("60")
		const addressbHr11Jb = accounts[2]
		const addressSd528lO = accounts[5]
		const byteLChZ1n = "0x1715000f160f0d17181e1c15001715131f091e1211161700181e0e0a0e0b1e1a"
		const addressTUX8xUM = "0x0000000000000000000000000000000000000001"
		const addressP4Wcj0 = await VatO9h9okR.nope.call(addresskQHk0lX, {from: accounts[1]});
//		await VatO9h9okR.cage.call({from: accounts[5]});
//		const addressaUr6D8E = await VatO9h9okR.move.call(addressdIm3fy, addresscupYx4m, uintQO3QM25, {from: accounts[1]});
//		const bytes32evGyS1o = await VatO9h9okR.flux.call(byteLChZ1n, addressSd528lO, addressbHr11Jb, uintyLwPJuA, {from: accounts[3]});
//		const addresseVOFfbu = await VatO9h9okR.rely.call(addressTUX8xUM, {from: accounts[3]});

		await expect(VatO9h9okR.cage.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatO9h9okR = await Vat.new({from: accounts[5]});
		const intbsMBlHy = BigInt("-34")
		const intVSk5klK = BigInt("-1495")
		const addressYeMV5j = accounts[1]
		const addressKonST5O = accounts[4]
		const byteDWiQm3n = "0x010e051c19030317080318092005191319191120180707160f0511180a060209"
		const addressbGWLyNR = accounts[2]
		const uintxV7isog = BigInt("695")
		const addresse5KzfZ9 = "0x0000000000000000000000000000000000000001"
		const addressnG9gIa = accounts[0]
		const uintpm58hj2 = BigInt("463")
		const addressgSy9WqB = accounts[2]
		const address585Btb = accounts[2]
		const uintDq4u3mx = BigInt("60")
		const addresszW7E2vJ = accounts[2]
		const addressefatW21 = accounts[4]
		const bytephrlvjp = "0x1715000f160f0d17181e1c15001715131f091e1211161700181e0e0a0e0b1e1a"
		const uintHZaPZhe = BigInt("528")
		const addressewSCs2H = accounts[1]
		const addressS42mERV = accounts[4]
		const bytetAVln6U = "0x200e14001c0a16030f1b1b031f10010304100c1a0a1b051415180e19131d090b"
		const addressgvJWFyO = "0x0000000000000000000000000000000000000000"
//		const bytes32FKIHaO0 = await VatO9h9okR.fork.call(byteDWiQm3n, addressKonST5O, addressYeMV5j, intVSk5klK, intbsMBlHy, {from: accounts[4]});
//		const addressP4Wcj0 = await VatO9h9okR.nope.call(addressbGWLyNR, {from: accounts[1]});
//		const addressyp8JRmt = await VatO9h9okR.move.call(addressnG9gIa, addresse5KzfZ9, uintxV7isog, {from: "0x0000000000000000000000000000000000000001"});
//		const addressaUr6D8E = await VatO9h9okR.move.call(address585Btb, addressgSy9WqB, uintpm58hj2, {from: accounts[1]});
//		const bytes32evGyS1o = await VatO9h9okR.flux.call(bytephrlvjp, addressefatW21, addresszW7E2vJ, uintDq4u3mx, {from: accounts[3]});
//		const bytes32BSrhF7y = await VatO9h9okR.flux.call(bytetAVln6U, addressS42mERV, addressewSCs2H, uintHZaPZhe, {from: accounts[3]});
//		const addresseVOFfbu = await VatO9h9okR.rely.call(addressgvJWFyO, {from: accounts[3]});

		await expect(VatO9h9okR.fork.call(byteDWiQm3n, addressKonST5O, addressYeMV5j, intVSk5klK, intbsMBlHy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatO9h9okR = await Vat.new({from: accounts[5]});
		const intbnGlXJd = BigInt("-1349")
		const intfLALXev = BigInt("1661")
		const addressB6Z3yzD = accounts[4]
		const addressn775rlE = accounts[2]
		const addressrE2pllh = accounts[0]
		const byteTAmCBiu = "0x100804060a020109071d040d140a031c0f10011d1306131817151f0d13060705"
		const addressFwuxfY = accounts[3]
		const uintRTERZ3d = BigInt("463")
		const addressiOnjms9 = accounts[3]
		const addressNgBETx7 = accounts[2]
		const uintINViENz = BigInt("60")
		const addressaWy49TP = accounts[2]
		const addressAFhYQa = accounts[4]
		const byteyyGZo8J = "0x1715000f160f0d17181e1c15001715131f091e1211161700181e0e0a0e0b1e1a"
//		const bytes32PhMVfMZ = await VatO9h9okR.frob.call(byteTAmCBiu, addressrE2pllh, addressn775rlE, addressB6Z3yzD, intfLALXev, intbnGlXJd, {from: accounts[2]});
//		const addressP4Wcj0 = await VatO9h9okR.nope.call(addressFwuxfY, {from: accounts[1]});
//		const addressaUr6D8E = await VatO9h9okR.move.call(addressNgBETx7, addressiOnjms9, uintRTERZ3d, {from: accounts[1]});
//		const bytes32evGyS1o = await VatO9h9okR.flux.call(byteyyGZo8J, addressAFhYQa, addressaWy49TP, uintINViENz, {from: accounts[3]});

		await expect(VatO9h9okR.frob.call(byteTAmCBiu, addressrE2pllh, addressn775rlE, addressB6Z3yzD, intfLALXev, intbnGlXJd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vate5CjddL = await Vat.new({from: accounts[4]});
		const addressjlvNh6 = accounts[5]
		const uintkzUM4Rg = BigInt("2021")
		const addressaeVKUf = accounts[4]
		const addressdW5gLIh = await Vate5CjddL.deny.call(addressjlvNh6, {from: accounts[4]});
//		const uintctVn54B = await Vate5CjddL.heal.call(uintkzUM4Rg, {from: accounts[5]});
//		const addressttV2Op = await Vate5CjddL.hope.call(addressaeVKUf, {from: accounts[0]});
//		await Vate5CjddL.note.call({from: accounts[0]});

		await expect(Vate5CjddL.heal.call(uintkzUM4Rg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatlfqTTz = await Vat.new({from: accounts[3]});
		const uintAUi3py = BigInt("621")
		const byteKwJ5Cqp = "0x0915051207011b0c170105111119160912080a140d11151208151213ffffffff1c1108"
		const byteYNJDL3 = "0x09180d040f0d010f100c1509121f051f1908021c0f06170d14010e1811030d03"
//		const bytes32pVTzTC = await VatlfqTTz.file.call(byteYNJDL3, byteKwJ5Cqp, uintAUi3py, {from: accounts[4]});

		await expect(VatlfqTTz.file.call(byteYNJDL3, byteKwJ5Cqp, uintAUi3py, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatO9h9okR = await Vat.new({from: accounts[5]});
		const byteTLW9uCM = "0x101e0417190a0f180b0a180c140b071002000c0413101010060f0a171904011c"
		const uintcQLDNrt = BigInt("1145")
		const addressIMzolpV = accounts[2]
		const addressrwzziGp = accounts[2]
		const uintcAmRU2A = BigInt("60")
		const addressmwCiBdG = accounts[2]
		const addressoqe0Dy = accounts[4]
		const byten5IO3Dy = "0x1715000f160f0d17181e1c15001715131f091e1211161700181e0e0a0e0b1e1a"
		const bytes32V0wvqJZ = await VatO9h9okR.init.call(byteTLW9uCM, {from: accounts[5]});
//		const addressaUr6D8E = await VatO9h9okR.move.call(addressrwzziGp, addressIMzolpV, uintcQLDNrt, {from: accounts[1]});
//		const bytes32evGyS1o = await VatO9h9okR.flux.call(byten5IO3Dy, addressoqe0Dy, addressmwCiBdG, uintcAmRU2A, {from: accounts[3]});

		await expect(VatO9h9okR.move.call(addressrwzziGp, addressIMzolpV, uintcQLDNrt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatGfLjaRS = await Vat.new({from: accounts[0]});
		const uintRSwxS85 = BigInt("1363")
		const byteABAUhwB = "0x10110f10111b191a14171519110f1c100b0d171e19011b06130b0919031a0d17"
		const bytep8ilYNq = "0x0a040a07040d181d031910060b181201070c1c02021b150e1a120e09140e0c15"
		const byteFQkszXi = "0x0e01091a1f060d16190c0f060e06120b1f03110f0a131d17070e070a1a1a1e0d"
		const uinteFMcUtx = BigInt("1080")
		const byteZYs5DvB = "0x04051b08151d091a120e1c0608120f190f0c07070a07131f02071a05071a1f03"
		const byteFWaBOrg = "0x061c03020d0102040a050e0813060d07031a0f1e0e05141412181c031f12141b"
		const addressYSCRnh = accounts[1]
		const intnDYE45i = BigInt("-1306")
		const intqH5zRoG = BigInt("-1266")
		const addressfimFnV = accounts[4]
		const addressTZlesj9 = accounts[0]
		const addressShDHY2 = accounts[1]
		const byteKhcL5Pm = "0x1c13030a131b04060d190f0a1a131a100e04141a101e1f021320040c181c0809"
		const addressy9SvPUc = accounts[4]
//		const bytes32xRikm1T = await VatGfLjaRS.file.call(bytep8ilYNq, byteABAUhwB, uintRSwxS85, {from: accounts[0]});
//		const bytes32D86koXT = await VatGfLjaRS.init.call(byteFQkszXi, {from: accounts[1]});
//		const bytes32PnnSDTI = await VatGfLjaRS.file.call(byteFWaBOrg, byteZYs5DvB, uinteFMcUtx, {from: accounts[4]});
//		const addressMhEHlOn = await VatGfLjaRS.nope.call(addressYSCRnh, {from: accounts[1]});
//		const bytes32WI8Ip4 = await VatGfLjaRS.grab.call(byteKhcL5Pm, addressShDHY2, addressTZlesj9, addressfimFnV, intqH5zRoG, intnDYE45i, {from: accounts[0]});
//		const addressQua3N4g = await VatGfLjaRS.deny.call(addressy9SvPUc, {from: accounts[1]});

		await expect(VatGfLjaRS.file.call(bytep8ilYNq, byteABAUhwB, uintRSwxS85, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vate5CjddL = await Vat.new({from: accounts[4]});
		const intGFTsRD6 = BigInt("332")
		const addressHyNEp9Q = accounts[0]
		const byteaPIjqxX = "0x1211050a1720081e0c1710170a0507150a1a17031a0a110808151a131d171100"
		const uintzmFHoGh = BigInt("2043")
		const bytes32yxga7bB = await Vate5CjddL.slip.call(byteaPIjqxX, addressHyNEp9Q, intGFTsRD6, {from: accounts[4]});
//		const uintctVn54B = await Vate5CjddL.heal.call(uintzmFHoGh, {from: accounts[5]});

		await expect(Vate5CjddL.heal.call(uintzmFHoGh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatlfqTTz = await Vat.new({from: accounts[3]});
		const uintAizBbcY = BigInt("621")
		const byteY2C2DMV = "0x0915051207fffffffe1b0c170105111119160912080a140d11151208151213001c1108"
		const bytegjGfSQq = "0x09180d040f0d010f100c1509121f051f1908021c0f06170d14010e1811030d03"
		const intywOUXP = BigInt("-1871")
		const addressZfCpMwr = accounts[2]
		const byteEY1Z10X = "0x10091d1d09130e1815000c050b181a1b0a12011e1609160d0a110407031e1d0a"
		const uintNNRAGY5 = BigInt("1574")
		const bytem6Zn4n = "0x031d1205130d091c190e020813051b12100c1b171b1d14070806130702171d09"
//		const bytes32pVTzTC = await VatlfqTTz.file.call(bytegjGfSQq, byteY2C2DMV, uintAizBbcY, {from: accounts[4]});
//		const bytes32duuTrBz = await VatlfqTTz.slip.call(byteEY1Z10X, addressZfCpMwr, intywOUXP, {from: accounts[1]});
//		const bytes32qXL1QYy = await VatlfqTTz.file.call(bytem6Zn4n, uintNNRAGY5, {from: accounts[5]});

		await expect(VatlfqTTz.file.call(bytegjGfSQq, byteY2C2DMV, uintAizBbcY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatlfqTTz = await Vat.new({from: accounts[3]});
		const addressmOVp7r = accounts[4]
		const uintbl56x6M = BigInt("621")
		const bytezZmCKyU = "0x0915051207011b0c17ffffffff05111119160912080a140d11151208151213001c1108"
		const bytea9wcIDa = "0x09180d040f0d010f100c1509121f051f1908021c0f06170d14010e1811030d03"
		const addressvnkes8L = await VatlfqTTz.hope.call(addressmOVp7r, {from: accounts[4]});
//		const bytes32pVTzTC = await VatlfqTTz.file.call(bytea9wcIDa, bytezZmCKyU, uintbl56x6M, {from: accounts[4]});

		await expect(VatlfqTTz.file.call(bytea9wcIDa, bytezZmCKyU, uintbl56x6M, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vate5CjddL = await Vat.new({from: accounts[4]});
		const uintugsBygF = BigInt("1611")
		const addressHHHXbA = accounts[1]
		const addressgVSZhW3 = accounts[0]
		const addressxJerbdL = "0x0000000000000000000000000000000000000001"
		const uint5prLym = BigInt("1986")
		const addressU8crHJv = await Vate5CjddL.suck.call(addressgVSZhW3, addressHHHXbA, uintugsBygF, {from: accounts[4]});
//		const addressyfAZtE = await Vate5CjddL.rely.call(addressxJerbdL, {from: accounts[3]});
//		const uintctVn54B = await Vate5CjddL.heal.call(uint5prLym, {from: accounts[5]});

		await expect(Vate5CjddL.rely.call(addressxJerbdL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatlfqTTz = await Vat.new({from: accounts[3]});
		const addressXgXOhoY = accounts[1]
		const uintnu49glI = BigInt("609")
		const byteFdaDyYP = "0x0915051207011b0c170105111119160912080a140d11151208151213001c1108"
		const byteDKsQEq = "0x09180d040f0d010f100c1509121f051f1908021c0f06170d14010e1811030d03"
		const uintIOAlvI8 = BigInt("2040")
		const addressYbENbfD = await VatlfqTTz.rely.call(addressXgXOhoY, {from: accounts[3]});
//		const bytes32pVTzTC = await VatlfqTTz.file.call(byteDKsQEq, byteFdaDyYP, uintnu49glI, {from: accounts[4]});
//		const uintLKgFYq = await VatlfqTTz.heal.call(uintIOAlvI8, {from: accounts[0]});

		await expect(VatlfqTTz.file.call(byteDKsQEq, byteFdaDyYP, uintnu49glI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vate5CjddL = await Vat.new({from: accounts[4]});
		const intzFYS8Y = BigInt("-1362")
		const addressegP524v = accounts[2]
		const byteWR1KQzB = "0x0a1e170619080208130c00080d1c1e09201409020212031b1f071b1602011110"
		const uintac7Eucu = BigInt("98")
		const addressUwHrXEw = accounts[0]
		const addressDKQpII1 = accounts[1]
		const bytem0zFsl = "0x120a170d1d0810071613000812160f1816011617020a020d011e0f1c0a0c191c"
		const uintGHySmR0 = BigInt("1220")
		const uintH6wwVSD = BigInt("582")
		const byteWE3zsZB = "0x0107010317100a0515031b061e0c161d0e180311060d0f1c011d0107071f1c05"
		const bytehbG1YXa = "0x1d1b1b04180c031c060e19011908091f141c0f1e050910110b1a011f030c1a20"
//		const bytes32d6Blyfy = await Vate5CjddL.fold.call(byteWR1KQzB, addressegP524v, intzFYS8Y, {from: accounts[4]});
//		const bytes32Juut0us = await Vate5CjddL.flux.call(bytem0zFsl, addressDKQpII1, addressUwHrXEw, uintac7Eucu, {from: accounts[5]});
//		const uintctVn54B = await Vate5CjddL.heal.call(uintGHySmR0, {from: accounts[5]});
//		const bytes32KQbYyi9 = await Vate5CjddL.file.call(bytehbG1YXa, byteWE3zsZB, uintH6wwVSD, {from: accounts[4]});

		await expect(Vate5CjddL.fold.call(byteWR1KQzB, addressegP524v, intzFYS8Y, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatlfqTTz = await Vat.new({from: accounts[3]});
		const uintyXCjajb = BigInt("1385")
		const addressGjlrOP = accounts[4]
		const addressI5qopcd = accounts[0]
		const uintSYpCyye = BigInt("621")
		const byteU3iJrt = "0x0915051207011b0c170105111119160912080a140d11151208151213001c1108"
		const bytelqH4y2G = "0x09180d040f0d010f100c1509121f051f1908021c0f06170d14010e1811030d03"
//		const addressYwNqUrE = await VatlfqTTz.move.call(addressI5qopcd, addressGjlrOP, uintyXCjajb, {from: accounts[0]});
//		await VatlfqTTz.auth.call({from: accounts[2]});
//		const bytes32pVTzTC = await VatlfqTTz.file.call(bytelqH4y2G, byteU3iJrt, uintSYpCyye, {from: accounts[4]});

		await expect(VatlfqTTz.move.call(addressI5qopcd, addressGjlrOP, uintyXCjajb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatO9h9okR = await Vat.new({from: accounts[5]});
		const intJtFui1m = BigInt("-1401")
		const intFsi46bz = BigInt("-1740")
		const addressWtXtUCK = accounts[3]
		const addressRjL3LUm = accounts[3]
		const byteRHYMhaU = "0x191b060912011304090b071b1315100e0205181c011f101d0003010316070e11"
		const uint1xlIlg = BigInt("463")
		const addressGsn6mvp = accounts[3]
		const addressJyPzoWj = accounts[2]
//		const bytes32SstmlH3 = await VatO9h9okR.fork.call(byteRHYMhaU, addressRjL3LUm, addressWtXtUCK, intFsi46bz, intJtFui1m, {from: accounts[1]});
//		await VatO9h9okR.cage.call({from: accounts[2]});
//		const addressaUr6D8E = await VatO9h9okR.move.call(addressJyPzoWj, addressGsn6mvp, uint1xlIlg, {from: accounts[1]});

		await expect(VatO9h9okR.fork.call(byteRHYMhaU, addressRjL3LUm, addressWtXtUCK, intFsi46bz, intJtFui1m, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatO9h9okR = await Vat.new({from: accounts[5]});
		const inthGLul1g = BigInt("239")
		const addressbdOoVmf = accounts[1]
		const bytewsadZSt = "0x021f01090c10031520051f0f0a131c1411151c060306171f1717182016051216"
		const intyKDwN8f = BigInt("-1401")
		const intY97pBec = BigInt("-1740")
		const addressIaetpUg = accounts[3]
		const addressIY4XVsw = accounts[4]
		const byteb0ue44Y = "0x191b060912011304090b071b1315100e0205181c011f101d0003010316070e11"
		const bytes32KrWCFnB = await VatO9h9okR.fold.call(bytewsadZSt, addressbdOoVmf, inthGLul1g, {from: accounts[5]});
//		const bytes32SstmlH3 = await VatO9h9okR.fork.call(byteb0ue44Y, addressIY4XVsw, addressIaetpUg, intY97pBec, intyKDwN8f, {from: accounts[1]});

		await expect(VatO9h9okR.fork.call(byteb0ue44Y, addressIY4XVsw, addressIaetpUg, intY97pBec, intyKDwN8f, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatlfqTTz = await Vat.new({from: accounts[3]});
		const uintYvpi818 = BigInt("621")
		const byteVccAozm = "0x0915051207fffffffb1b0c170105111119160912080a140d11151208151213001c1108"
		const bytegYj7CRs = "0x09180d040f0d010f100c1509121f051f1908021c0f06170d14010e1811030d03"
//		const bytes32pVTzTC = await VatlfqTTz.file.call(bytegYj7CRs, byteVccAozm, uintYvpi818, {from: accounts[4]});

		await expect(VatlfqTTz.file.call(bytegYj7CRs, byteVccAozm, uintYvpi818, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatlfqTTz = await Vat.new({from: accounts[3]});
		const uintMCBro6i = BigInt("621")
		const bytewXyqV9 = "0x0915051207011b0c170105111119160912080a140d11151208151213fffffffd1c1108"
		const byteoWf8uMj = "0x09180d040f0d010f100c1509121f051f1908021c0f06170d14010e1811030d03"
//		const bytes32pVTzTC = await VatlfqTTz.file.call(byteoWf8uMj, bytewXyqV9, uintMCBro6i, {from: accounts[4]});

		await expect(VatlfqTTz.file.call(byteoWf8uMj, bytewXyqV9, uintMCBro6i, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatlfqTTz = await Vat.new({from: accounts[3]});
		const addressJKoX5zf = accounts[0]
		const uintulbqff2 = BigInt("621")
		const byteT0PmveP = "0x0915051207011b0c170105111119160912080a140d11151208151213001c1108"
		const byteykFPgFo = "0x09180d040f0dffffffff0f100c1509121f051f1908021c0f06170d14010e1811030d03"
		const addressUF3h1RR = await VatlfqTTz.hope.call(addressJKoX5zf, {from: accounts[3]});
//		const bytes32pVTzTC = await VatlfqTTz.file.call(byteykFPgFo, byteT0PmveP, uintulbqff2, {from: accounts[4]});

		await expect(VatlfqTTz.file.call(byteykFPgFo, byteT0PmveP, uintulbqff2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})