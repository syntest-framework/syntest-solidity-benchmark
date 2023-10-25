const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const Vatzd67ojX = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkiPoYD7 = BigInt("659")
		const addressKwgAdmx = accounts[3]
		const addressdfCd4f = accounts[1]
		const intCeaOsCO = BigInt("2030")
		const addressKvlwGSW = accounts[2]
		const byteQHp7sWZ = "0x1f0a0d1d011a070e1f071010050e0b0802180e1210061a041f121c150608101b"
		const intb0TdyqT = BigInt("-590")
		const intMhidbVF = BigInt("-638")
		const addresshnpg55V = accounts[4]
		const addressBDrnXQM = accounts[3]
		const addressrleSZ8U = accounts[1]
		const byteNvpa3bB = "0x071c0e0405130f011b0e1903060b040f20020f12101010020c0d05100d1e0206"
		const uintylpDpJt = BigInt("274")
		const addressspyjl2E = accounts[2]
		const addressiL5LPox = accounts[4]
		const addressNOtWmkP = await Vatzd67ojX.move.call(addressdfCd4f, addressKwgAdmx, uintkiPoYD7, {from: accounts[4]});
		const bytes32QbxaeR = await Vatzd67ojX.fold.call(byteQHp7sWZ, addressKvlwGSW, intCeaOsCO, {from: accounts[3]});
		const bytes32jCDPsF = await Vatzd67ojX.frob.call(byteNvpa3bB, addressrleSZ8U, addressBDrnXQM, addresshnpg55V, intMhidbVF, intb0TdyqT, {from: accounts[4]});
		const addressqiGFHEa = await Vatzd67ojX.suck.call(addressiL5LPox, addressspyjl2E, uintylpDpJt, {from: accounts[2]});
	});

	it('test for Vat', async () => {
		const VatQ7i0km = await Vat.new({from: accounts[3]});
		const addressvqWwjjg = accounts[0]
		const byteOwRxXzB = "0x0b180e12120c16000200050013060d180616040b0f0b0702191d1e0b0b19170a"
		const addresskpVokET = accounts[2]
		const addressfWOZD9 = await VatQ7i0km.nope.call(addressvqWwjjg, {from: accounts[2]});
//		const bytes32lUojwW7 = await VatQ7i0km.init.call(byteOwRxXzB, {from: accounts[1]});
//		const addressfKYe65Y = await VatQ7i0km.nope.call(addresskpVokET, {from: accounts[0]});

		await expect(VatQ7i0km.init.call(byteOwRxXzB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vati8ysY2X = await Vat.new({from: accounts[1]});
		const uintZ0M3rRW = BigInt("1155")
		const uintGfr1Vhq = BigInt("276")
		const bytecKL3V0n = "0x06081f141d090e0b0d1317111d0309200f1e0510030e14081c021915010d1a01"
		const byteZleh0AD = "0x0105171617141c1c1208041a130802181a0e05100b0c0711031a03151a0e0710"
		const uintVL678b4 = BigInt("863")
		const bytelN0PiHm = "0x100f1406090f1e10121c03120a040304140513020b04040a0209191c06040b1f"
		const uintkrpQlJc = BigInt("1120")
		const byteLGeLmb = "0x19100319110e0b191c12151c15091202030a161e041e0617181f04070a11051e"
//		const uintZMEz0DS = await Vati8ysY2X.heal.call(uintZ0M3rRW, {from: accounts[3]});
//		const bytes32qsFwsG5 = await Vati8ysY2X.file.call(byteZleh0AD, bytecKL3V0n, uintGfr1Vhq, {from: accounts[3]});
//		const bytes32HANTYld = await Vati8ysY2X.file.call(bytelN0PiHm, uintVL678b4, {from: accounts[0]});
//		const bytes32qXbi3ks = await Vati8ysY2X.file.call(byteLGeLmb, uintkrpQlJc, {from: accounts[1]});

		await expect(Vati8ysY2X.heal.call(uintZ0M3rRW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat7hjKam = await Vat.new({from: accounts[1]});
		const intJLvBAVs = BigInt("586")
		const intnmhf39R = BigInt("474")
		const addressZ74kwUw = accounts[2]
		const addressvq0kBfn = accounts[1]
		const byteDVVOjC9 = "0x161e0a1c08021b1618141d101c151b0a04100b131b06200a1b0b190a05200a15"
		const intWFhitD = BigInt("1635")
		const intQyNB46A = BigInt("1026")
		const addressBORze2n = "0x0000000000000000000000000000000000000001"
		const addressZcSVo2L = accounts[1]
		const addressFjK7ljb = accounts[4]
		const bytekJJxq8E = "0x14170f1318131a180c180d160d0e151a12180e01030a0c0d13100f1c14051d20"
		const byteEtizWcu = "0x130015011a07140b0808100b0506101d021e0d100a0f090505111d1300011311"
//		const bytes32vHDNOAF = await Vat7hjKam.fork.call(byteDVVOjC9, addressvq0kBfn, addressZ74kwUw, intnmhf39R, intJLvBAVs, {from: accounts[0]});
//		await Vat7hjKam.note.call({from: "0x0000000000000000000000000000000000000001"});
//		const bytes32ELWbtRt = await Vat7hjKam.frob.call(bytekJJxq8E, addressFjK7ljb, addressZcSVo2L, addressBORze2n, intQyNB46A, intWFhitD, {from: accounts[5]});
//		await Vat7hjKam.note.call({from: accounts[5]});
//		const bytes32g5PuC0 = await Vat7hjKam.init.call(byteEtizWcu, {from: accounts[2]});

		await expect(Vat7hjKam.fork.call(byteDVVOjC9, addressvq0kBfn, addressZ74kwUw, intnmhf39R, intJLvBAVs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatodjpTf4 = await Vat.new({from: accounts[0]});
		const addresswu9rXMS = accounts[2]
		const addressqRBPUDe = accounts[5]
		const uintkkSiRj4 = BigInt("1085")
		const byteoGtHxvv = "0x140c1711141c1f11090610010f0e11031c050c18031b0106011201030d060c19"
		const byteTay5PKD = "0x1d17110902121e1d07030c121d121c17191109090b140b181d19090a02121b12"
		const uintmz8jpyb = BigInt("188")
		const byte1I0x8A = "0x031c0b1b1d170213191a1c1711061e100a171b0c0d0e20060901141913200913"
		const byteBT6tOAc = "0x031d170911090c11050f001f0a190f18090f1c04160610071d090b041e080a11"
		const uintSw7Vj7Z = BigInt("147")
		const addressRo5V0IX = await VatodjpTf4.deny.call(addresswu9rXMS, {from: accounts[0]});
		const addressqqCtrBO = await VatodjpTf4.hope.call(addressqRBPUDe, {from: accounts[3]});
//		const bytes32swEqqQj = await VatodjpTf4.file.call(byteTay5PKD, byteoGtHxvv, uintkkSiRj4, {from: accounts[4]});
//		const bytes32NUooRA = await VatodjpTf4.file.call(byteBT6tOAc, byte1I0x8A, uintmz8jpyb, {from: accounts[1]});
//		const uintVu63qO = await VatodjpTf4.heal.call(uintSw7Vj7Z, {from: accounts[2]});

		await expect(VatodjpTf4.file.call(byteTay5PKD, byteoGtHxvv, uintkkSiRj4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatvp7e4MM = await Vat.new({from: accounts[2]});
		const addressspCi0NK = accounts[1]
		const int7jHP05 = BigInt("-237")
		const intQfGjkNi = BigInt("953")
		const addressCDvnKEQ = accounts[0]
		const address7VQ1W0 = accounts[2]
		const byteX4WJTY = "0x1f0b021f111012091e1b101c10040903031a1d1a181820121c1b06090216011c"
		const uintQM2duzd = BigInt("624")
		const bytePbnCm6i = "0x0a03110e09081615151507111a060f1f030f1c11021c1317161b061707101f1c"
		const addressjz2gh3r = await Vatvp7e4MM.hope.call(addressspCi0NK, {from: accounts[3]});
//		await Vatvp7e4MM.note.call({from: accounts[4]});
//		const bytes32uiVMKAU = await Vatvp7e4MM.fork.call(byteX4WJTY, address7VQ1W0, addressCDvnKEQ, intQfGjkNi, int7jHP05, {from: accounts[4]});
//		const bytes32Gndbvy = await Vatvp7e4MM.file.call(bytePbnCm6i, uintQM2duzd, {from: accounts[2]});

		await expect(Vatvp7e4MM.note.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUjOHJ18 = await Vat.new({from: accounts[2]});
		const uintggvIMhH = BigInt("1934")
		const addressjbKvJnp = accounts[4]
		const addressYas0QL = accounts[0]
		const byteO6J49n = "0x151913051b0107061f091d0a1a1a0c0b1f1302071118070e0b0a0315011e0d0a"
		const addressA34sgDh = accounts[1]
//		const bytes329nIIUX = await VatUjOHJ18.flux.call(byteO6J49n, addressYas0QL, addressjbKvJnp, uintggvIMhH, {from: accounts[1]});
//		const addressPyOGQfD = await VatUjOHJ18.deny.call(addressA34sgDh, {from: accounts[3]});

		await expect(VatUjOHJ18.flux.call(byteO6J49n, addressYas0QL, addressjbKvJnp, uintggvIMhH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatFf5fCjx = await Vat.new({from: accounts[2]});
		const uintVzKPWBd = BigInt("1932")
		const intakN9Ie = BigInt("1771")
		const intXI5KZyM = BigInt("-1245")
		const addressnrw4R8t = accounts[3]
		const addresskuhK2m6 = accounts[1]
		const byteMSoKQ5 = "0x191701180b151e041f18020319131e20140f151903050a1d01181a100702161a"
		const uintWY2oYBK = BigInt("1553")
		const byteUafJcwM = "0x0a1916070601130b1d1b160113061212181c15181f10120a061012120b1f061b"
		const addressIpSIutL = "0x0000000000000000000000000000000000000001"
//		await VatFf5fCjx.cage.call({from: accounts[2]});
//		const uintwPn7upt = await VatFf5fCjx.heal.call(uintVzKPWBd, {from: "0x0000000000000000000000000000000000000001"});
//		await VatFf5fCjx.note.call({from: accounts[4]});
//		const bytes32C3PBUhL = await VatFf5fCjx.fork.call(byteMSoKQ5, addresskuhK2m6, addressnrw4R8t, intXI5KZyM, intakN9Ie, {from: accounts[3]});
//		const bytes32VZ5doPw = await VatFf5fCjx.file.call(byteUafJcwM, uintWY2oYBK, {from: "0x0000000000000000000000000000000000000001"});
//		const addresswVd7DgM = await VatFf5fCjx.rely.call(addressIpSIutL, {from: accounts[0]});

		await expect(VatFf5fCjx.cage.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat7hjKam = await Vat.new({from: accounts[1]});
		const uintP6ICTy2 = BigInt("1992")
		const addressQoMEXp = accounts[2]
		const addressj034xf7 = accounts[2]
		const intFNoAURT = BigInt("586")
		const int0UPo2N = BigInt("474")
		const addressxeQfot8 = accounts[2]
		const addressSuRiWWv = accounts[1]
		const byteF33EI1s = "0x161e0a1c08021b1618141d101c151b0a04100b131b06200a1b0b190a05200a15"
		const uinttZx8Ip2 = BigInt("1829")
		const addressppCiFY0 = accounts[3]
		const addressezLaJbN = accounts[0]
		const intPMqXSrH = BigInt("247")
		const intSB8JnR9 = BigInt("-1122")
		const addressIDZyV8V = accounts[5]
		const addressZDBoIUK = accounts[1]
		const addressZ4V60cR = "0x0000000000000000000000000000000000000001"
		const byteZcbPRu9 = "0x04131c0d15181e05100c012019090d160a1c1e1c0f0208120107130117060411"
		const intlocLz8d = BigInt("1635")
		const intJt8xS97 = BigInt("1026")
		const addressYQwEV3 = "0x0000000000000000000000000000000000000001"
		const addresso5wdHpt = accounts[1]
		const addressBhBeKW = accounts[4]
		const bytet0RDQAC = "0x14170f1318131a180c180d160d0e151a12180e01030a0c0d13100f1c14051d20"
		const uintGZZabwI = BigInt("1502")
		const address9P6KzM = accounts[3]
		const addressN29Hpdj = accounts[3]
		const byteTzPgrKM = "0x130015011a07140b0808100b0506101d021e0d100a0f090505111d1300011311"
//		const addressn4BRP2i = await Vat7hjKam.move.call(addressj034xf7, addressQoMEXp, uintP6ICTy2, {from: accounts[5]});
//		const bytes32vHDNOAF = await Vat7hjKam.fork.call(byteF33EI1s, addressSuRiWWv, addressxeQfot8, int0UPo2N, intFNoAURT, {from: accounts[0]});
//		await Vat7hjKam.note.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresslU0Zq1 = await Vat7hjKam.move.call(addressezLaJbN, addressppCiFY0, uinttZx8Ip2, {from: accounts[0]});
//		const bytes32X6JlEAQ = await Vat7hjKam.frob.call(byteZcbPRu9, addressZ4V60cR, addressZDBoIUK, addressIDZyV8V, intSB8JnR9, intPMqXSrH, {from: accounts[0]});
//		const bytes32ELWbtRt = await Vat7hjKam.frob.call(bytet0RDQAC, addressBhBeKW, addresso5wdHpt, addressYQwEV3, intJt8xS97, intlocLz8d, {from: accounts[5]});
//		await Vat7hjKam.note.call({from: accounts[5]});
//		const addressI3CmCjk = await Vat7hjKam.suck.call(addressN29Hpdj, address9P6KzM, uintGZZabwI, {from: accounts[5]});
//		const bytes32g5PuC0 = await Vat7hjKam.init.call(byteTzPgrKM, {from: accounts[2]});

		await expect(Vat7hjKam.move.call(addressj034xf7, addressQoMEXp, uintP6ICTy2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatQ7i0km = await Vat.new({from: accounts[3]});
		const address7cjBLz = accounts[0]
		const uinto6RZmVh = BigInt("1471")
		const byteaWwm6ov = "0x060a17030305140c05171c05091c1e0915191e18150a050d0b1a0f151d171704"
		const bytezQcMopK = "0x0b180e12120c16000200050013060d180616040b0f0b0702191d1e0b0b19170a"
		const uintZZcjAhe = BigInt("1830")
		const byteqwy2eGy = "0x1b1319120d0d1e0c0f0c1e0d031612151907030e181f18180d070c0f151c1b03"
		const bytev8WBWOi = "0x04050e18070603071202060402091a07031d1e0001091f190913180b191d030b"
		const addressfWOZD9 = await VatQ7i0km.nope.call(address7cjBLz, {from: accounts[2]});
//		const bytes32m0BP5c = await VatQ7i0km.file.call(byteaWwm6ov, uinto6RZmVh, {from: accounts[2]});
//		const bytes32lUojwW7 = await VatQ7i0km.init.call(bytezQcMopK, {from: accounts[1]});
//		const bytes32IlVqq23 = await VatQ7i0km.file.call(bytev8WBWOi, byteqwy2eGy, uintZZcjAhe, {from: accounts[0]});

		await expect(VatQ7i0km.file.call(byteaWwm6ov, uinto6RZmVh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatajay3sZ = await Vat.new({from: accounts[4]});
		const addressNm5q0dN = accounts[3]
		const uintCymk14D = BigInt("752")
		const byteOTkLuP = "0x090f140a0e1d1e0a0a000b161e0b06120a0f0c04051416071d07141c1c181d04"
		const byteMaEIbk0 = "0x190a0e021a100819091b1108081f041606190a1c150e11101b08041f131b061b"
		const uintoplhaK = BigInt("438")
		const addressc7KcCqD = accounts[0]
		const addressay68FLf = accounts[4]
		const byteDhGTedK = "0x11020f11080e101c0c1c12040d070a150f02010b08070e020911110c10070815"
		const intYtAts7 = BigInt("-1163")
		const intDhjIaAR = BigInt("-1065")
		const addressBk3MQF = accounts[5]
		const addressbjDxL1J = accounts[2]
		const addressakXqCzR = "0x0000000000000000000000000000000000000001"
		const byteGGc4l41 = "0x151e1c111c0d1418101e1813160d020c130e131406171310090c0f07140d0d09"
		const intUarzzE2 = BigInt("-1911")
		const intJWw4GNp = BigInt("-578")
		const addressYs6VGvV = accounts[1]
		const addressJgo8uZ0 = accounts[0]
		const byteongMNOh = "0x111e030f0e180e0a0f0e20000713061c1d1b0302101d0d020c170e061b0c061d"
		const addresswC5fL6 = await Vatajay3sZ.deny.call(addressNm5q0dN, {from: accounts[4]});
//		const bytes32rFqLW6G = await Vatajay3sZ.file.call(byteMaEIbk0, byteOTkLuP, uintCymk14D, {from: accounts[4]});
//		const bytes32FnMxVC = await Vatajay3sZ.flux.call(byteDhGTedK, addressay68FLf, addressc7KcCqD, uintoplhaK, {from: accounts[4]});
//		const bytes32QwEENko = await Vatajay3sZ.frob.call(byteGGc4l41, addressakXqCzR, addressbjDxL1J, addressBk3MQF, intDhjIaAR, intYtAts7, {from: accounts[2]});
//		const bytes32jY5lIo3 = await Vatajay3sZ.fork.call(byteongMNOh, addressJgo8uZ0, addressYs6VGvV, intJWw4GNp, intUarzzE2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Vatajay3sZ.file.call(byteMaEIbk0, byteOTkLuP, uintCymk14D, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatajay3sZ = await Vat.new({from: accounts[4]});
		const intYyc9gUa = BigInt("437")
		const intVOK60bS = BigInt("-1472")
		const addressQcwanhj = accounts[3]
		const addressj0lRe3f = accounts[1]
		const addressEefzRzX = "0x0000000000000000000000000000000000000001"
		const byteIhxBgr = "0x18051d091a0712050a1502050a0a1c0d1c171a0e0a0e0c1f0c05130a11091103"
		const addressdoralF7 = accounts[3]
		const uintXQxNrdE = BigInt("752")
		const bytenIZFdmZ = "0x090f140a0e1d1e0a0a000b161e0b06120a0f0c04051416071d07141c1c181d04"
		const byteFCRpojl = "0x190a0e021a100819091b1108081f041606190a1c150e11101b08041f131b061b"
		const intQbfNdVl = BigInt("-1163")
		const intSnyKoJF = BigInt("-1065")
		const addressxROBNo = accounts[5]
		const addressQnSCdwu = accounts[2]
		const addresstREw0jW = "0x0000000000000000000000000000000000000001"
		const bytevJY0Cx = "0x151e1c111c0d1418101e1813160d020c130e131406171310090c0f07140d0d09"
		const intYNxv7VK = BigInt("-1911")
		const intIEFGdSU = BigInt("-578")
		const addressOlfPLMD = accounts[1]
		const addressGX1X4AY = accounts[0]
		const byteXZqNsFl = "0x111e030f0e180e0a0f0e20000713061c1d1b0302101d0d020c170e061b0c061d"
//		const bytes32om87NY8 = await Vatajay3sZ.frob.call(byteIhxBgr, addressEefzRzX, addressj0lRe3f, addressQcwanhj, intVOK60bS, intYyc9gUa, {from: accounts[0]});
//		const addresswC5fL6 = await Vatajay3sZ.deny.call(addressdoralF7, {from: accounts[4]});
//		const bytes32rFqLW6G = await Vatajay3sZ.file.call(byteFCRpojl, bytenIZFdmZ, uintXQxNrdE, {from: accounts[4]});
//		const bytes32QwEENko = await Vatajay3sZ.frob.call(bytevJY0Cx, addresstREw0jW, addressQnSCdwu, addressxROBNo, intSnyKoJF, intQbfNdVl, {from: accounts[2]});
//		const bytes32jY5lIo3 = await Vatajay3sZ.fork.call(byteXZqNsFl, addressGX1X4AY, addressOlfPLMD, intIEFGdSU, intYNxv7VK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Vatajay3sZ.frob.call(byteIhxBgr, addressEefzRzX, addressj0lRe3f, addressQcwanhj, intVOK60bS, intYyc9gUa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatQ7i0km = await Vat.new({from: accounts[3]});
		const addressFhTHmub = accounts[0]
		const bytezzBH25r = "0x181f05050210061020160c070b041018141f17051d101b130c1e1e03010f2017"
		const intayHcoQ = BigInt("668")
		const intpkMdF7l = BigInt("1780")
		const addressvBLv37A = "0x0000000000000000000000000000000000000001"
		const addressPQWoWUr = accounts[1]
		const addressfwnPhLo = accounts[2]
		const byteTQunDyx = "0x110116060203200e1f0f0b0405041903041b190c11081b0d100c1f2001170e12"
		const addressfWOZD9 = await VatQ7i0km.nope.call(addressFhTHmub, {from: accounts[2]});
		const bytes32ZJrrFwD = await VatQ7i0km.init.call(bytezzBH25r, {from: accounts[3]});
//		const bytes32fyCVVCy = await VatQ7i0km.grab.call(byteTQunDyx, addressfwnPhLo, addressPQWoWUr, addressvBLv37A, intpkMdF7l, intayHcoQ, {from: accounts[1]});

		await expect(VatQ7i0km.grab.call(byteTQunDyx, addressfwnPhLo, addressPQWoWUr, addressvBLv37A, intpkMdF7l, intayHcoQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatAOtUXRU = await Vat.new({from: accounts[0]});
		const uintMzudAx = BigInt("1457")
		const addressQlLYH4a = accounts[3]
		const addressuAvYfBc = accounts[4]
		const addressYYLqif6 = accounts[3]
		const addressjxkpsm4 = await VatAOtUXRU.suck.call(addressuAvYfBc, addressQlLYH4a, uintMzudAx, {from: accounts[0]});
//		await VatAOtUXRU.auth.call({from: accounts[0]});
//		await VatAOtUXRU.note.call({from: accounts[2]});
//		const addressucPTPj0 = await VatAOtUXRU.nope.call(addressYYLqif6, {from: accounts[2]});

		await expect(VatAOtUXRU.auth.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatajay3sZ = await Vat.new({from: accounts[4]});
		const intG9UmMVS = BigInt("-1626")
		const intrULZ2Kn = BigInt("1257")
		const addresspWaX88 = "0x0000000000000000000000000000000000000001"
		const addressAPmXUs = accounts[2]
		const addressbZbk80 = accounts[0]
		const bytetLQYzzk = "0x100418161b0c1b0b08151106031d0b000e0b1b1515121b1f0300090216010c0f"
		const addressztXrbkS = accounts[3]
		const uintbvHwDDW = BigInt("752")
		const byte3elhaV = "0x090f140a0e1d1e0a0a000b161e0b06120a0f0c04051416071d07141c1c181d04"
		const byteDlfFmzh = "0x190a0e021a100819091b1108081f041606190a1c150e11101b08041f131b061b"
		const uintGt4A3Og = BigInt("438")
		const addressjH8nxz = accounts[0]
		const addresskKwl1vw = accounts[5]
		const byteNTIn6Y = "0x11020f11080e101c0c1c12040d070a150f02010b08070e020911110c10070815"
		const intg2num31 = BigInt("1604")
		const intOzHizlf = BigInt("610")
		const addressJ0k3Fcm = accounts[1]
		const addressjQuEGLJ = "0x0000000000000000000000000000000000000001"
		const addressVeig6St = accounts[0]
		const bytenJZNHMg = "0x0101021f01160a0a1c01100c0e111a160714190f0217151e04011610041e1705"
		const intenlstEk = BigInt("-1163")
		const intr5echfS = BigInt("-1065")
		const addressw10b0RP = accounts[5]
		const addressiJV9THe = accounts[2]
		const addressYmodeTb = "0x0000000000000000000000000000000000000001"
		const byteWzokNTU = "0x151e1c111c0d1418101e1813160d020c130e131406171310090c0f07140d0d09"
		const into375Ig = BigInt("-1911")
		const intjH7qEN = BigInt("-578")
		const addresskIVgnz = accounts[1]
		const addressfoHSt2z = accounts[0]
		const bytePlrrw9w = "0x111e030f0e180e0a0f0e20000713061c1d1b0302101d0d020c170e061b0c061d"
//		const bytes32jWDPEoj = await Vatajay3sZ.grab.call(bytetLQYzzk, addressbZbk80, addressAPmXUs, addresspWaX88, intrULZ2Kn, intG9UmMVS, {from: accounts[4]});
//		const addresswC5fL6 = await Vatajay3sZ.deny.call(addressztXrbkS, {from: accounts[4]});
//		const bytes32rFqLW6G = await Vatajay3sZ.file.call(byteDlfFmzh, byte3elhaV, uintbvHwDDW, {from: accounts[4]});
//		const bytes32FnMxVC = await Vatajay3sZ.flux.call(byteNTIn6Y, addresskKwl1vw, addressjH8nxz, uintGt4A3Og, {from: accounts[4]});
//		const bytes327AFdLD = await Vatajay3sZ.frob.call(bytenJZNHMg, addressVeig6St, addressjQuEGLJ, addressJ0k3Fcm, intOzHizlf, intg2num31, {from: accounts[3]});
//		const bytes32QwEENko = await Vatajay3sZ.frob.call(byteWzokNTU, addressYmodeTb, addressiJV9THe, addressw10b0RP, intr5echfS, intenlstEk, {from: accounts[2]});
//		const bytes32jY5lIo3 = await Vatajay3sZ.fork.call(bytePlrrw9w, addressfoHSt2z, addresskIVgnz, intjH7qEN, into375Ig, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Vatajay3sZ.grab.call(bytetLQYzzk, addressbZbk80, addressAPmXUs, addresspWaX88, intrULZ2Kn, intG9UmMVS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatajay3sZ = await Vat.new({from: accounts[4]});
		const uintXWNqxf = BigInt("752")
		const byteLLRriwn = "0x090f140a0e1d1e0a0afffffffd0b161e0b06120a0f0c04051416071d07141c1c181d04"
		const bytevjWgC46 = "0x190a0e021a100819091b1108081f041606190a1c150e11101b08041f131b061b"
		const byteQtcUG99 = "0x1e1b03200d0e1d0216031301141b120f070e010b030d1f13121b021c1f20080b"
		const intSFxXUUG = BigInt("982")
		const addressDiUmT86 = accounts[3]
		const byteeXMXpVf = "0x1207060d0411030a05021700061716201c190101051103011c120b12141e1101"
		const intvYi46bL = BigInt("-1163")
		const intyX9ghGr = BigInt("-1065")
		const addressw82GsfI = accounts[5]
		const addressYYXlizd = accounts[2]
		const addressTvQQvi7 = "0x0000000000000000000000000000000000000001"
		const byteVOHxUE = "0x151e1c111c0d1418101e1813160d020c130e131406171310090c0f07140d0d09"
//		const bytes32rFqLW6G = await Vatajay3sZ.file.call(bytevjWgC46, byteLLRriwn, uintXWNqxf, {from: accounts[4]});
//		const bytes32Nccximo = await Vatajay3sZ.init.call(byteQtcUG99, {from: accounts[1]});
//		await Vatajay3sZ.cage.call({from: accounts[4]});
//		const bytes32L97aK76 = await Vatajay3sZ.slip.call(byteeXMXpVf, addressDiUmT86, intSFxXUUG, {from: accounts[3]});
//		const bytes32QwEENko = await Vatajay3sZ.frob.call(byteVOHxUE, addressTvQQvi7, addressYYXlizd, addressw82GsfI, intyX9ghGr, intvYi46bL, {from: accounts[2]});

		await expect(Vatajay3sZ.file.call(bytevjWgC46, byteLLRriwn, uintXWNqxf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatajay3sZ = await Vat.new({from: accounts[4]});
		const intuxO4FTw = BigInt("-1038")
		const addressIKVEZoA = accounts[3]
		const bytejqSoTzO = "0x0b18051c14140219020d08071b02001e0b040e05131a0c1a00111a170515121c"
		const uinteGCHnfA = BigInt("752")
		const byte5PV2lk = "0x090f140a0e1d1e0a0a000b161e0b06120a0f0c04051416071d07141c1c181d04"
		const byteO1Y6CY4 = "0x190a0e021a100819091b1108081f041606190a1c150e11101b08041f131b061b"
		const uintLl0JY8R = BigInt("509")
		const addressYeasF5 = "0x0000000000000000000000000000000000000001"
		const addresscUQcvAF = accounts[1]
//		const bytes32dawRLE = await Vatajay3sZ.slip.call(bytejqSoTzO, addressIKVEZoA, intuxO4FTw, {from: accounts[4]});
//		const bytes32rFqLW6G = await Vatajay3sZ.file.call(byteO1Y6CY4, byte5PV2lk, uinteGCHnfA, {from: accounts[4]});
//		const addressDRqKX4y = await Vatajay3sZ.move.call(addresscUQcvAF, addressYeasF5, uintLl0JY8R, {from: accounts[1]});

		await expect(Vatajay3sZ.slip.call(bytejqSoTzO, addressIKVEZoA, intuxO4FTw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatQ7i0km = await Vat.new({from: accounts[3]});
		const intq41NoEv = BigInt("-32")
		const intjx6RpK6 = BigInt("-305")
		const addressfIrPZQx = accounts[0]
		const addressbvOEq2D = accounts[0]
		const byter5gUTup = "0x06191a04110c1e111d180e0817140f1400101d03110901172019161d0b090b15"
		const addressZZgvjXH = accounts[1]
		const bytes32Tahxd8K = await VatQ7i0km.fork.call(byter5gUTup, addressbvOEq2D, addressfIrPZQx, intjx6RpK6, intq41NoEv, {from: accounts[0]});
		const addressfWOZD9 = await VatQ7i0km.nope.call(addressZZgvjXH, {from: accounts[2]});
	});

	it('test for Vat', async () => {
		const Vatajay3sZ = await Vat.new({from: accounts[4]});
		const uintT9fJY0d = BigInt("752")
		const bytefR4n7F5 = "0x090f140a0e1d1e0a0afffffffc0b161e0b06120a0f0c04051416071d07141c1c181d04"
		const byteWPUHZnO = "0x190a0e021a100819091b1108081f041606190a1c150e11101b08041f131b061b"
		const uintyYIFLu8 = BigInt("1589")
		const intIutxM7E = BigInt("-1163")
		const intgkQSIQR = BigInt("-1065")
		const addressqmK5klb = accounts[5]
		const addressIOKLovO = accounts[2]
		const addressxQflRDM = "0x0000000000000000000000000000000000000001"
		const bytekMFRCt = "0x151e1c111c0d1418101e1813160d020c130e131406171310090c0f07140d0d09"
//		const bytes32rFqLW6G = await Vatajay3sZ.file.call(byteWPUHZnO, bytefR4n7F5, uintT9fJY0d, {from: accounts[4]});
//		const uintX821sw8 = await Vatajay3sZ.heal.call(uintyYIFLu8, {from: accounts[4]});
//		const bytes32QwEENko = await Vatajay3sZ.frob.call(bytekMFRCt, addressxQflRDM, addressIOKLovO, addressqmK5klb, intgkQSIQR, intIutxM7E, {from: accounts[2]});

		await expect(Vatajay3sZ.file.call(byteWPUHZnO, bytefR4n7F5, uintT9fJY0d, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatajay3sZ = await Vat.new({from: accounts[4]});
		const intWJSVA5F = BigInt("574")
		const addresseCE7bkV = accounts[5]
		const byteuQ9euPn = "0x0714160805030201101a1a0d0a1812010e080c1f041d121f02000a1f0f0c1215"
		const intxrJiB2A = BigInt("1984")
		const intNV937il = BigInt("25")
		const addressPPd3WBw = accounts[1]
		const addressdzVLwVU = accounts[1]
		const addressyPFP8dF = accounts[2]
		const byteBad6fDx = "0x020707141e06081d080d190f13050c09201b0b1f1e011006170d17011b0d101b"
		const uint88x6sr = BigInt("752")
		const byteb7AVvYY = "0x090f140a0e1d1e0a0a000b161e0b06120a0f0c04051416071d07141c1c181d04"
		const byteKXpLZLg = "0x190a0e021a100819091b1108081f041606190a1c150e11101b08041f131b061b"
		const uinta3KJa7 = BigInt("438")
		const addressNQ20RKc = accounts[0]
		const addresszVyAjRp = accounts[4]
		const byteJA2gybm = "0x11020f11080e101c0c1c12040d070a150f02010b08070e020911110c10070815"
		const intuPa3QDU = BigInt("-1163")
		const intlFU43mr = BigInt("-1064")
		const addressichy4P = accounts[5]
		const addresssr155Hd = accounts[2]
		const addressckJRdsE = "0x0000000000000000000000000000000000000001"
		const bytefpdOY3D = "0x151e1c111c0d1418101e1813160d020c130e131406171310090c0f07140d0d09"
		const bytes32GVeKHty = await Vatajay3sZ.fold.call(byteuQ9euPn, addresseCE7bkV, intWJSVA5F, {from: accounts[4]});
//		const bytes32aurel7y = await Vatajay3sZ.grab.call(byteBad6fDx, addressyPFP8dF, addressdzVLwVU, addressPPd3WBw, intNV937il, intxrJiB2A, {from: accounts[0]});
//		const bytes32rFqLW6G = await Vatajay3sZ.file.call(byteKXpLZLg, byteb7AVvYY, uint88x6sr, {from: accounts[4]});
//		const bytes32FnMxVC = await Vatajay3sZ.flux.call(byteJA2gybm, addresszVyAjRp, addressNQ20RKc, uinta3KJa7, {from: accounts[4]});
//		const bytes32QwEENko = await Vatajay3sZ.frob.call(bytefpdOY3D, addressckJRdsE, addresssr155Hd, addressichy4P, intlFU43mr, intuPa3QDU, {from: accounts[2]});

		await expect(Vatajay3sZ.grab.call(byteBad6fDx, addressyPFP8dF, addressdzVLwVU, addressPPd3WBw, intNV937il, intxrJiB2A, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatbx2TfHs = await Vat.new({from: accounts[4]});
		const addressLolelwx = accounts[3]
		const uintlYWkYCQ = BigInt("697")
		const addresscit9DP1 = accounts[3]
		const addressBB7lUFa = accounts[1]
		const bytezQAeabQ = "0x17100a11100b0117030e051f20010e0f0c0107000c0b15061e050a181c0f081f"
		const uintE5Wrj0E = BigInt("968")
		const byteh2VIR9a = "0x1a011f161c1f0a0f0b1f1a0b1a1d0a0618090b0413091d14091d18181c080214"
		const addressfZyRexR = accounts[1]
		const addressN9QPNFH = await Vatbx2TfHs.rely.call(addressLolelwx, {from: accounts[4]});
//		const bytes32VbA5Sm = await Vatbx2TfHs.flux.call(bytezQAeabQ, addressBB7lUFa, addresscit9DP1, uintlYWkYCQ, {from: accounts[4]});
//		const bytes32INeNrDk = await Vatbx2TfHs.file.call(byteh2VIR9a, uintE5Wrj0E, {from: accounts[2]});
//		const addresskoQMKHM = await Vatbx2TfHs.nope.call(addressfZyRexR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Vatbx2TfHs.flux.call(bytezQAeabQ, addressBB7lUFa, addresscit9DP1, uintlYWkYCQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatajay3sZ = await Vat.new({from: accounts[4]});
		const addressB5AFS3z = accounts[3]
		const uintoaerC6W = BigInt("752")
		const byteKjuf89p = "0x090f140a0e1d1e0a0afffffffe0b161e0b06120a0f0c04051416071d07141c1c181d04"
		const byteUA8jcOW = "0x190a0e021a100819091b1108081f041606190a1c150e11101b08041f131b061b"
		const intSpWs497 = BigInt("-2038")
		const addressUqIrJiT = "0x0000000000000000000000000000000000000001"
		const bytevWPqGxa = "0x0807030a0608191a111513100b030919061a160b1d1e140e120110041c1a1c01"
		const intHC9bvFI = BigInt("-1163")
		const inttE8TXbu = BigInt("-1065")
		const addressiiLqyS2 = accounts[5]
		const addresstyYYmuY = accounts[2]
		const addressPZB0gsu = "0x0000000000000000000000000000000000000001"
		const bytedZxAQAZ = "0x151e1c111c0d1418101e1813160d020c130e131406171310090c0f07140d0d09"
		const intwUQvhZu = BigInt("-1911")
		const intDUx0xjk = BigInt("-578")
		const addresseVD35Yp = accounts[1]
		const addressKNIXX1q = accounts[0]
		const byteqVDJoLP = "0x111e030f0e180e0a0f0e20000713061c1d1b0302101d0d020c170e061b0c061d"
		const addresswC5fL6 = await Vatajay3sZ.deny.call(addressB5AFS3z, {from: accounts[4]});
//		const bytes32rFqLW6G = await Vatajay3sZ.file.call(byteUA8jcOW, byteKjuf89p, uintoaerC6W, {from: accounts[4]});
//		const bytes32mfBjHX = await Vatajay3sZ.fold.call(bytevWPqGxa, addressUqIrJiT, intSpWs497, {from: accounts[4]});
//		const bytes32QwEENko = await Vatajay3sZ.frob.call(bytedZxAQAZ, addressPZB0gsu, addresstyYYmuY, addressiiLqyS2, inttE8TXbu, intHC9bvFI, {from: accounts[2]});
//		const bytes32jY5lIo3 = await Vatajay3sZ.fork.call(byteqVDJoLP, addressKNIXX1q, addresseVD35Yp, intDUx0xjk, intwUQvhZu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Vatajay3sZ.file.call(byteUA8jcOW, byteKjuf89p, uintoaerC6W, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatajay3sZ = await Vat.new({from: accounts[4]});
		const addressYqdgxSD = accounts[3]
		const uintp0ouPi = BigInt("752")
		const byteFrtf9ES = "0x090f140a0e1d1e0a0a000b161e0b06120a0f0c04051416071d07141c1c181d04"
		const bytey7YdO2a = "0x190a0efffffffd1a100819091b1108081f041606190a1c150e11101b08041f131b061b"
		const uintCXGumz = BigInt("438")
		const addresshT9yFDg = accounts[0]
		const addresszAAoYoJ = accounts[4]
		const bytexKpME2t = "0x11020f11080e101c0c1c12040d070a150f02010b08070e020911110c10070815"
		const addressiCNmqrf = accounts[4]
		const uintMoY3QrM = BigInt("2025")
		const bytex6mb1dd = "0x180610101a1d071d191003131a0a16040d001714161403011b020d0b1204011e"
		const byteRF38gsr = "0x1b141b15060f070a1b1f10020600201d090d170a0c0a1116110e131901170f0a"
		const intzzsP6rW = BigInt("-1163")
		const intDWioCh = BigInt("-1065")
		const address8Mtfjh = accounts[5]
		const addressdHZKpjQ = accounts[2]
		const addressQMJ6pHr = "0x0000000000000000000000000000000000000001"
		const byteJsg8j19 = "0x151e1c111c0d1418101e1813160d020c130e131406171310090c0f07140d0d09"
		const intEnyEWj = BigInt("-1911")
		const intWMVHvad = BigInt("-578")
		const addressZjaN9N = accounts[1]
		const addressnglo3UT = accounts[0]
		const bytexvXJg2Z = "0x111e030f0e180e0a0f0e20000713061c1d1b0302101d0d020c170e061b0c061d"
		const addresswC5fL6 = await Vatajay3sZ.deny.call(addressYqdgxSD, {from: accounts[4]});
//		const bytes32rFqLW6G = await Vatajay3sZ.file.call(bytey7YdO2a, byteFrtf9ES, uintp0ouPi, {from: accounts[4]});
//		await Vatajay3sZ.cage.call({from: accounts[4]});
//		const bytes32FnMxVC = await Vatajay3sZ.flux.call(bytexKpME2t, addresszAAoYoJ, addresshT9yFDg, uintCXGumz, {from: accounts[4]});
//		await Vatajay3sZ.note.call({from: accounts[0]});
//		const addressVxOgJNv = await Vatajay3sZ.rely.call(addressiCNmqrf, {from: accounts[2]});
//		const bytes32G6M61iD = await Vatajay3sZ.file.call(byteRF38gsr, bytex6mb1dd, uintMoY3QrM, {from: accounts[1]});
//		const bytes32QwEENko = await Vatajay3sZ.frob.call(byteJsg8j19, addressQMJ6pHr, addressdHZKpjQ, address8Mtfjh, intDWioCh, intzzsP6rW, {from: accounts[2]});
//		const bytes32jY5lIo3 = await Vatajay3sZ.fork.call(bytexvXJg2Z, addressnglo3UT, addressZjaN9N, intWMVHvad, intEnyEWj, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Vatajay3sZ.file.call(bytey7YdO2a, byteFrtf9ES, uintp0ouPi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})