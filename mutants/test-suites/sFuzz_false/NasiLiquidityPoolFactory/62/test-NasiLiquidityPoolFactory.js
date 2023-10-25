const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const stringHb6YXr = "HXA"
		const stringvCbKLW = "xdPLPu5xqfeQHQYbaRhsohHHqeqocmOnkodx3llprJUj7rUsHVLURR6eGmuWkRKY4"
		const uint1EUIiE = BigInt("103")
		const NasiLiquidityPoolFactoryzaJB4nR = await NasiLiquidityPoolFactory.new(stringHb6YXr, stringvCbKLW, uint1EUIiE, {from: accounts[4]});
		const uint9TovOZ = BigInt("1047")
		const bytehkemmLh = "0x03010a071b03100811081302100a031b1a1015040d0218020c191415110a2001"
		const byteIbZrqvK = "0x14031b0e1208200909120b0211010c090c0212110b1102040b12060f0f011b0c"
		const uintorIk565 = BigInt("55")
		const uintHmZtbcc = BigInt("151")
		const uintDmp5w0 = BigInt("925")
		const addressL7v2VZt = accounts[2]
		await NasiLiquidityPoolFactoryzaJB4nR.pause.call({from: accounts[3]});
		const uint256ZFz95N4 = await NasiLiquidityPoolFactoryzaJB4nR.burn.call(uint9TovOZ, {from: accounts[3]});
		const 
hHIGAx = await NasiLiquidityPoolFactoryzaJB4nR.delegateBySig.call(addressL7v2VZt, uintDmp5w0, uintHmZtbcc, uintorIk565, byteIbZrqvK, bytehkemmLh, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressEZoe1I = accounts[3]
		const address9vFdLT = accounts[2]
		const uintazlr6I = BigInt("818")
		const uintvjcrEkO = BigInt("1884")
		const NasiLiquidityPoolFactorydW6pyQx = await NasiLiquidityPoolFactory.new(addressEZoe1I, address9vFdLT, uintazlr6I, uintvjcrEkO, {from: accounts[0]});
		const uintEy8JcfM = BigInt("1027")
		const addressHiG8cLo = accounts[4]
		const addressDdEAHor = accounts[3]
		const boolY9iTchu = await NasiLiquidityPoolFactorydW6pyQx.mint.call(addressHiG8cLo, uintEy8JcfM, {from: accounts[1]});
		const addresswGt3Ra9 = await NasiLiquidityPoolFactorydW6pyQx.transferOwnership.call(addressDdEAHor, {from: accounts[4]});
		const addressoFCnR3u = await NasiLiquidityPoolFactorydW6pyQx.owner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringU5i8Dnp = "zKup"
		const string6a3gid = "mVeyA2vSZ3vzlsTlEMc"
		const uintKAnzTIl = BigInt("187")
		const NasiLiquidityPoolFactoryvh9PMD = await NasiLiquidityPoolFactory.new(stringU5i8Dnp, string6a3gid, uintKAnzTIl, {from: accounts[5]});
		const boolJKr1scP = false
		const uintFRNcfxc = BigInt("1516")
		const uintSCum3F = BigInt("243")
		const addressQ5wloPA = accounts[1]
		const addressrQmUExE = accounts[3]
		const uint256n7Lt22 = await NasiLiquidityPoolFactoryvh9PMD.setAllocationPoint.call(uintSCum3F, uintFRNcfxc, boolJKr1scP, {from: accounts[4]});
		const addressZjwCur = await NasiLiquidityPoolFactoryvh9PMD._delegate.call(addressrQmUExE, addressQ5wloPA, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringujNYTbC = "lOqZQ"
		const stringlMSkHTI = "XWNzYyfuvbgk9sMrB7HEb4sYERwDHvmEXlqNGGEPQw2PjSwPBJ2jjcr7loSrU2M2ziwvdkqOWyzDcJCQC"
		const uintMMwKizh = BigInt("146")
		const NasiLiquidityPoolFactoryZcqM3jD = await NasiLiquidityPoolFactory.new(stringujNYTbC, stringlMSkHTI, uintMMwKizh, {from: "0x0000000000000000000000000000000000000001"});
		const addressz55oTZv = accounts[2]
		const addressDLGUyo = accounts[4]
		const uintoiG2aqP = BigInt("959")
		const addressWj7nn5K = await NasiLiquidityPoolFactoryZcqM3jD._delegate.call(addressDLGUyo, addressz55oTZv, {from: accounts[1]});
		const uint256VRaX7vJ = await NasiLiquidityPoolFactoryZcqM3jD.burn.call(uintoiG2aqP, {from: accounts[5]});
		await NasiLiquidityPoolFactoryZcqM3jD.renouncePauser.call({from: accounts[3]});
		await NasiLiquidityPoolFactoryZcqM3jD.unpause.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringk8pKUSY = "1VvJl27DGlyIUzTn8JI5mcaqvD46223Zp6wtnMDH"
		const stringD5f2nqj = "0pxCWj23VUjihswnBfnveQsB2Kbi56wX"
		const uintqjWjmKi = BigInt("80")
		const NasiLiquidityPoolFactoryFc9t1PQ = await NasiLiquidityPoolFactory.new(stringk8pKUSY, stringD5f2nqj, uintqjWjmKi, {from: accounts[2]});
		const boolgSNNyHb = false
		const uintZUKbP1N = BigInt("24")
		const uintLXE0nXS = BigInt("1627")
		const addressDFlMKhR = accounts[1]
		const addressEjwBzeJ = accounts[2]
		const uintOL4pWPF = BigInt("45")
		const addressOzSSJFt = accounts[1]
		const uint256xx5Ma0v = await NasiLiquidityPoolFactoryFc9t1PQ.setAllocationPoint.call(uintLXE0nXS, uintZUKbP1N, boolgSNNyHb, {from: accounts[4]});
		await NasiLiquidityPoolFactoryFc9t1PQ.renounceMinter.call({from: accounts[5]});
		const stringGKESRVx = await NasiLiquidityPoolFactoryFc9t1PQ.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolUfLr9xA = await NasiLiquidityPoolFactoryFc9t1PQ.isMinter.call(addressDFlMKhR, {from: accounts[1]});
		const addressSXJUopd = await NasiLiquidityPoolFactoryFc9t1PQ.addMinter.call(addressEjwBzeJ, {from: accounts[2]});
		const boolHH5Mojy = await NasiLiquidityPoolFactoryFc9t1PQ.increaseAllowance.call(addressOzSSJFt, uintOL4pWPF, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressQHRovVv = accounts[1]
		const address6Lu6dZ = accounts[4]
		const uintR7OLbMz = BigInt("1836")
		const uintVrRVO4T = BigInt("72")
		const NasiLiquidityPoolFactoryOGs67A1 = await NasiLiquidityPoolFactory.new(addressQHRovVv, address6Lu6dZ, uintR7OLbMz, uintVrRVO4T, {from: accounts[0]});
		const uintxKCUeAj = BigInt("1166")
		const uintCHF3xvR = BigInt("697")
		const uintnkKoyal = BigInt("493")
		const uintrWWTqf = BigInt("1044")
		const addressFwFdKQg = accounts[1]
		const addressv1UBOpB = accounts[4]
		const uint256zqVH7W9 = await NasiLiquidityPoolFactoryOGs67A1.deposit.call(uintCHF3xvR, uintxKCUeAj, {from: accounts[2]});
		const uint256F1j76R = await NasiLiquidityPoolFactoryOGs67A1.enterStaking.call(uintnkKoyal, {from: accounts[2]});
		const boold1AT4r8 = await NasiLiquidityPoolFactoryOGs67A1.approve.call(addressFwFdKQg, uintrWWTqf, {from: accounts[0]});
		const addressiO26Sa1 = await NasiLiquidityPoolFactoryOGs67A1.dev.call(addressv1UBOpB, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringZDg8S06 = "W8R9u8qe9mpKrVIc8wShBzNGUgfMDzsbz3S7meL"
		const stringhlEpEVL = "RTOoI3M73bbZckSazBbNhhoxizW5FpejjDwD3dD1IOBwan3BjwCjA1kpT8a7CWKe3jldr7"
		const uintj5ZMJEh = BigInt("225")
		const NasiLiquidityPoolFactorytYV3fOB = await NasiLiquidityPoolFactory.new(stringZDg8S06, stringhlEpEVL, uintj5ZMJEh, {from: accounts[1]});
		const addresssdfsmy6 = accounts[3]
		const addressM8tNEow = await NasiLiquidityPoolFactorytYV3fOB.transferOwnership.call(addresssdfsmy6, {from: accounts[4]});
		const stringgYs2htK = await NasiLiquidityPoolFactorytYV3fOB.name.call({from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressrmQRk9W = accounts[4]
		const addressRpIsyH6 = accounts[3]
		const uintC34qysW = BigInt("1817")
		const uint4o4zVQ = BigInt("1703")
		const NasiLiquidityPoolFactoryDKaYo9F = await NasiLiquidityPoolFactory.new(addressrmQRk9W, addressRpIsyH6, uintC34qysW, uint4o4zVQ, {from: accounts[2]});
		const uintLQ5tmf0 = BigInt("752")
		const uint1yy25q = BigInt("667")
		const uintrs8780q = BigInt("1043")
		const addressGoLXIVV = accounts[3]
		const addressW1APO6 = accounts[4]
		const addressEptEbEO = accounts[4]
		const uint256HVOmK3v = await NasiLiquidityPoolFactoryDKaYo9F.getBonusMultiplier.call(uint1yy25q, uintLQ5tmf0, {from: accounts[2]});
		const addressbaZIzcL = await NasiLiquidityPoolFactoryDKaYo9F.burnFrom.call(addressGoLXIVV, uintrs8780q, {from: accounts[1]});
		const uint256dTgfOCS = await NasiLiquidityPoolFactoryDKaYo9F.allowance.call(addressEptEbEO, addressW1APO6, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringcfpc6yK = "7WNYCBtXmoJignjHEP"
		const stringolFoyNI = "9bKFMmTVCKFwTwU3KrsAOuXttUv35LXzwy5e8FIkbp2cMMaPEbHYMiFcEX4DWbcV0eZMCBEkty92B6XdVtPMepPfPorBdmkrf"
		const uintCwP6fi4 = BigInt("88")
		const NasiLiquidityPoolFactoryxSdpWcQ = await NasiLiquidityPoolFactory.new(stringcfpc6yK, stringolFoyNI, uintCwP6fi4, {from: accounts[1]});
		const uintqHj0Zb7 = BigInt("714")
		const addressoRnsf2P = accounts[2]
		const uinty6l1Dg = BigInt("601")
		const addresspTXx6DZ = accounts[2]
		const addressN7tvuRa = accounts[0]
		const uinthfdPo0I = BigInt("456")
		const boolXcToBpD = await NasiLiquidityPoolFactoryxSdpWcQ.increaseAllowance.call(addressoRnsf2P, uintqHj0Zb7, {from: accounts[5]});
		const addressQ7ogiFi = await NasiLiquidityPoolFactoryxSdpWcQ.burnFrom.call(addresspTXx6DZ, uinty6l1Dg, {from: accounts[0]});
		const uint256bePhWHM = await NasiLiquidityPoolFactoryxSdpWcQ.pendingNasi.call(uinthfdPo0I, addressN7tvuRa, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringsjn582 = "8yu9rZT2AvZNjbLEdAWsFzEbKkwcNsIIvXywWPCWt36pkpqdHknTnYYweOH7JF1G"
		const stringuvSXFZv = "pimC"
		const uintMqpReuA = BigInt("191")
		const NasiLiquidityPoolFactorypVbWa3n = await NasiLiquidityPoolFactory.new(stringsjn582, stringuvSXFZv, uintMqpReuA, {from: accounts[2]});
		const uintLrcyArT = BigInt("1167")
		const addressotubrYd = accounts[1]
		const addressXJ1uG0v = accounts[0]
		const boolm3mYlYx = await NasiLiquidityPoolFactorypVbWa3n.transfer.call(addressotubrYd, uintLrcyArT, {from: accounts[3]});
		const addressooDh6Y = await NasiLiquidityPoolFactorypVbWa3n.delegate.call(addressXJ1uG0v, {from: accounts[3]});
		await NasiLiquidityPoolFactorypVbWa3n.whenNotPaused.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringuewYakF = "JgP41XYxb193YUo1Q7jxk4ME5fapPLIwXBddSsqINCa37Y5i6l"
		const stringKEHTFJ = "Q3VRcBTX"
		const uintmxUM3Ur = BigInt("160")
		const NasiLiquidityPoolFactoryyqDYgo = await NasiLiquidityPoolFactory.new(stringuewYakF, stringKEHTFJ, uintmxUM3Ur, {from: accounts[2]});
		const addressnwCXmTG = accounts[3]
		const addressYdEZHCb = accounts[4]
		const uintjDoiZ8L = BigInt("1861")
		const boolNBh9LDG = await NasiLiquidityPoolFactoryyqDYgo.isMinter.call(addressnwCXmTG, {from: accounts[3]});
		const address8AsM2J = await NasiLiquidityPoolFactoryyqDYgo.addPauser.call(addressYdEZHCb, {from: accounts[2]});
		await NasiLiquidityPoolFactoryyqDYgo.onlyPauser.call({from: accounts[0]});
		const stringj5MOO1h = await NasiLiquidityPoolFactoryyqDYgo.symbol.call({from: accounts[3]});
		const uint256HTHoBQ0 = await NasiLiquidityPoolFactoryyqDYgo.migrate.call(uintjDoiZ8L, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringM0iMaLQ = "3hxSry3Ll3wPg26XKQckv8BEie"
		const stringOTGvHEc = "FkyHreLmRn7Hif7ECxwWc19q2dUPb6Uv6"
		const uintINWFgq = BigInt("22")
		const NasiLiquidityPoolFactorywSrDmP7 = await NasiLiquidityPoolFactory.new(stringM0iMaLQ, stringOTGvHEc, uintINWFgq, {from: accounts[1]});
		const uinthTSLS7H = BigInt("1818")
		const addressKeW60bu = accounts[1]
		const uintSmt9b0i = BigInt("188")
		const addressGrVKzz = accounts[4]
		const addressCron35L = accounts[3]
		const addressSNaGE7 = accounts[2]
		const addressdBw6JhM = accounts[0]
		const addresscmyvgB = accounts[0]
		const uintWhzRwdl = BigInt("1084")
		const addressWNirK1K = accounts[0]
		const addresswTqiP5N = accounts[5]
		const uintvDBnD3U = BigInt("381")
		const bool4sHgvB = await NasiLiquidityPoolFactorywSrDmP7.transfer.call(addressKeW60bu, uinthTSLS7H, {from: accounts[4]});
		const boolCVwgEO8 = await NasiLiquidityPoolFactorywSrDmP7.transferFrom.call(addressCron35L, addressGrVKzz, uintSmt9b0i, {from: accounts[1]});
		const uint256KkTOyZf = await NasiLiquidityPoolFactorywSrDmP7.allowance.call(addressdBw6JhM, addressSNaGE7, {from: accounts[2]});
		const addresssuA2yjH = await NasiLiquidityPoolFactorywSrDmP7.addPauser.call(addresscmyvgB, {from: accounts[5]});
		const boolT0q6Luv = await NasiLiquidityPoolFactorywSrDmP7.approve.call(addressWNirK1K, uintWhzRwdl, {from: "0x0000000000000000000000000000000000000001"});
		const uint256MYYNIQ = await NasiLiquidityPoolFactorywSrDmP7.pendingNasi.call(uintvDBnD3U, addresswTqiP5N, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringlOwn0zB = "98RdVcmH4AU4iPIxHhaaFI"
		const stringDrLbV1E = "pojOaJCt1IbsXv6Eav7XOMrJmY"
		const uintX0Cvu7o = BigInt("161")
		const NasiLiquidityPoolFactoryGAxnIVg = await NasiLiquidityPoolFactory.new(stringlOwn0zB, stringDrLbV1E, uintX0Cvu7o, {from: accounts[0]});
		const uintVgIxuOD = BigInt("628")
		const addressE0ulw2Y = accounts[2]
		await NasiLiquidityPoolFactoryGAxnIVg.unpause.call({from: accounts[3]});
		const boolXIBFT8f = await NasiLiquidityPoolFactoryGAxnIVg.approve.call(addressE0ulw2Y, uintVgIxuOD, {from: accounts[1]});
		const stringyauB5to = await NasiLiquidityPoolFactoryGAxnIVg.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringJbsUQFZ = "SWcarh5pItNk1tUyuQ9pzYv2KktlLJiFzSdPqIF2"
		const stringt5JIAyS = "SYAq6Om"
		const uintSx5857t = BigInt("43")
		const NasiLiquidityPoolFactoryM718tim = await NasiLiquidityPoolFactory.new(stringJbsUQFZ, stringt5JIAyS, uintSx5857t, {from: accounts[1]});
		const booljakfJFd = true
		const addresskt4Ufob = "0x0000000000000000000000000000000000000001"
		const uintir9dTbb = BigInt("647")
		const addressiIK3zP5 = accounts[4]
		const uint256Q8QDDxz = await NasiLiquidityPoolFactoryM718tim.addLpToken.call(uintir9dTbb, addresskt4Ufob, booljakfJFd, {from: accounts[5]});
		const addressVEYGm6 = await NasiLiquidityPoolFactoryM718tim.dev.call(addressiIK3zP5, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringu02bItb = "5CW8GObVgSCPz1mvH91XYvssCQTnUENZRMA7rccyMl86alMpVDz6wi0NGItDZAgFtPqIFRNyaJ"
		const string4BqMe5 = "khRBTQtS8wgdN2Ju1ayTORjwnCWl49dExqqIOA9kc6atjULm99jM6h9xiAOoDauGWvuONTtjhF90F5uB6CCk1"
		const uintAgaTGL = BigInt("2")
		const NasiLiquidityPoolFactoryD2Y8ul9 = await NasiLiquidityPoolFactory.new(stringu02bItb, string4BqMe5, uintAgaTGL, {from: accounts[2]});
		const uinthLiuaeQ = BigInt("760")
		const addressyTEdTNr = accounts[4]
		const addresseEiMmL = accounts[4]
		const addressRVGkOc2 = "0x0000000000000000000000000000000000000001"
		const addressZXSbf9B = accounts[2]
		const addressOOIWr7K = accounts[2]
		const boolINcEnGG = await NasiLiquidityPoolFactoryD2Y8ul9.transfer.call(addressyTEdTNr, uinthLiuaeQ, {from: accounts[4]});
		const addressxyqPVml = await NasiLiquidityPoolFactoryD2Y8ul9._delegate.call(addressRVGkOc2, addresseEiMmL, {from: accounts[4]});
		await NasiLiquidityPoolFactoryD2Y8ul9.onlyPauser.call({from: accounts[4]});
		const uint256rG7mcbo = await NasiLiquidityPoolFactoryD2Y8ul9.getCurrentVotes.call(addressZXSbf9B, {from: accounts[1]});
		const addressEJLhyYj = await NasiLiquidityPoolFactoryD2Y8ul9.addPauser.call(addressOOIWr7K, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringFtqMcH = "vWsCpu49Gg6AKNmQSF0UoKa9jP27pTiob9bCLgcJGVkA3GYm7pht37pWFR3TFx2xZwC513cmv7V"
		const stringIbLHRvZ = "H8EckaEhhydcZ63Vcht5t4Kwj"
		const uintwBylsJw = BigInt("81")
		const NasiLiquidityPoolFactorysFQDGp = await NasiLiquidityPoolFactory.new(stringFtqMcH, stringIbLHRvZ, uintwBylsJw, {from: accounts[1]});
		const byteLp6x1Uw = "0x12101806091a0b0b1306040c1709040d141f1504070e091f1a05161b11030113"
		const bytemXE963i = "0x1c011e120802090a030b040e1f1f010c1f0a0f14180608050f02131b14051b0a"
		const uintwf3K3wt = BigInt("221")
		const uintEMVF8oS = BigInt("1456")
		const uintqc4s7G7 = BigInt("1905")
		const addressDNmW52E = accounts[3]
		const boolfEXZeHC = await NasiLiquidityPoolFactorysFQDGp.paused.call({from: accounts[3]});
		await NasiLiquidityPoolFactorysFQDGp.renounceMinter.call({from: accounts[5]});
		await NasiLiquidityPoolFactorysFQDGp.onlyPauser.call({from: accounts[3]});
		const 
jIyg7Gy = await NasiLiquidityPoolFactorysFQDGp.delegateBySig.call(addressDNmW52E, uintqc4s7G7, uintEMVF8oS, uintwf3K3wt, bytemXE963i, byteLp6x1Uw, {from: accounts[5]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringycnD2D = "l6BhnvXXiEpIMxHqrxki8teWNhAdmbC6ErRNge3bizdXqIHSvq"
		const stringmApyV3G = "LVdCSCMa7EHkWq97oaenA3tO9bqO9JrFM"
		const uintTCPzqTv = BigInt("54")
		const NasiLiquidityPoolFactorymNz35nt = await NasiLiquidityPoolFactory.new(stringycnD2D, stringmApyV3G, uintTCPzqTv, {from: accounts[1]});
		const uintbdpWL81 = BigInt("129")
		const addressSBTp6uR = accounts[4]
		const uintnNTdek = BigInt("764")
		const addresssyunq8 = accounts[0]
		const addressoP2Jmsw = accounts[2]
		const uintraUN5HL = BigInt("1801")
		const uintmawdWhi = BigInt("2031")
		const bool5fS0yB = await NasiLiquidityPoolFactorymNz35nt.mint.call(addressSBTp6uR, uintbdpWL81, {from: "0x0000000000000000000000000000000000000001"});
		const boolBhcHP3 = await NasiLiquidityPoolFactorymNz35nt.decreaseAllowance.call(addresssyunq8, uintnNTdek, {from: accounts[4]});
		const uint256gUlBp5 = await NasiLiquidityPoolFactorymNz35nt.balanceOf.call(addressoP2Jmsw, {from: accounts[1]});
		const uint256SPOATdy = await NasiLiquidityPoolFactorymNz35nt.getBonusMultiplier.call(uintmawdWhi, uintraUN5HL, {from: accounts[1]});
		await NasiLiquidityPoolFactorymNz35nt.pause.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringGCoGJOi = "i3lYHPLIiiqlbk8lr3HBL9XvEdDn9GuTn2x197XUq1fU32ss30EqzBq8Sxqm4hbTRGsf7gUYCduHd2AFwx9YoxAnXyDgUS"
		const stringDRJuUQ4 = "guqg03q93xTRCPpE6u0T"
		const uintSxZDV8t = BigInt("86")
		const NasiLiquidityPoolFactorypzzi4hh = await NasiLiquidityPoolFactory.new(stringGCoGJOi, stringDRJuUQ4, uintSxZDV8t, {from: accounts[4]});
		const addressWlX0kAl = accounts[2]
		await NasiLiquidityPoolFactorypzzi4hh.onlyPauser.call({from: accounts[1]});
		const addressmHdhAmH = await NasiLiquidityPoolFactorypzzi4hh.setMigrator.call(addressWlX0kAl, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const string0mzyVV = "TZyF8wbFWj1L2TRviTRQKxLtXFLWbEYt6IbcwE57iEW2tLvaFf2HjjXibVTaCNa5AjtE5w6igGB1"
		const stringzDUlsZF = "UCfGl1V"
		const uinthvETzbD = BigInt("220")
		const NasiLiquidityPoolFactorybPAU3R = await NasiLiquidityPoolFactory.new(string0mzyVV, stringzDUlsZF, uinthvETzbD, {from: accounts[1]});
		const uintIXQX8JU = BigInt("1013")
		const addressOyc4qGE = accounts[2]
		const address7LqBJZ = accounts[1]
		const addressSqX7xK = accounts[4]
		const uintTBBIJPk = BigInt("1564")
		const uintpVSP0qr = BigInt("701")
		const boolPoh3k8c = await NasiLiquidityPoolFactorybPAU3R.transferFrom.call(address7LqBJZ, addressOyc4qGE, uintIXQX8JU, {from: accounts[5]});
		const addressyeRmzYJ = await NasiLiquidityPoolFactorybPAU3R.setMigrator.call(addressSqX7xK, {from: "0x0000000000000000000000000000000000000001"});
		const boolHMTbeWp = await NasiLiquidityPoolFactorybPAU3R.paused.call({from: accounts[0]});
		const uint256tFq0C91 = await NasiLiquidityPoolFactorybPAU3R.getBonusMultiplier.call(uintpVSP0qr, uintTBBIJPk, {from: accounts[3]});
		const booljyZTqcA = await NasiLiquidityPoolFactorybPAU3R.isOwner.call({from: accounts[4]});
	});
})