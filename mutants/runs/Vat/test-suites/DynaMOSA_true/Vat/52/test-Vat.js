const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatHUxgOxE = await Vat.new({from: accounts[2]});
		const byteAsW9cOp = "0x0b0a171b160e0c0f02180808060c051b061405160b151b050810061f121f1106"
		const uintmboqgnh = BigInt("1671")
		const uintPY0gSQQ = BigInt("309")
		const byteRsKQyB2 = "0x06070a110a0708040a120d031411021416060d13091e1e0f131c0601080b1b1f"
		const bytes32LjsP43q = await VatHUxgOxE.init.call(byteAsW9cOp, {from: accounts[0]});
		const uintgXSQ1Ac = await VatHUxgOxE.heal.call(uintmboqgnh, {from: accounts[3]});
		const bytes32clemqAv = await VatHUxgOxE.file.call(byteRsKQyB2, uintPY0gSQQ, {from: accounts[0]});

		await expect(VatHUxgOxE.init.call(byteAsW9cOp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatA4qsc8 = await Vat.new({from: accounts[5]});
		const intVeLeFb9 = BigInt("-827")
		const addressnHobSRV = accounts[1]
		const byteLZbFKHH = "0x0b161e061d0c1c0d070f191311141b0d0c05131a1c110d0c181c1911030b1f04"
		const uintQLQXcU3 = BigInt("237")
		const byteF9mjJtw = "0x1506110c16071110020f1d030a131f05031612061a0d1f190b170f0807131c10"
		const byteyEDT9ex = "0x1b0c1116200a140a051617160d181c100d041f111c0d0418121e1b1d0b080e1e"
		const intXu8b2g8 = BigInt("8")
		const intCASXbux = BigInt("923")
		const addressMYcsVJK = accounts[3]
		const addressqfKUnrL = accounts[2]
		const addressP0b9gXB = accounts[5]
		const byteSgqYmRA = "0x140d1f1b1e1c07081d090b071e1516090d041a0a200d1b170d121c1a06110612"
		const bytes32raMiqnT = await VatA4qsc8.slip.call(byteLZbFKHH, addressnHobSRV, intVeLeFb9, {from: accounts[5]});
		const bytes32Rxo25J4 = await VatA4qsc8.file.call(byteyEDT9ex, byteF9mjJtw, uintQLQXcU3, {from: accounts[3]});
		const bytes32HmFfbF9 = await VatA4qsc8.grab.call(byteSgqYmRA, addressP0b9gXB, addressqfKUnrL, addressMYcsVJK, intCASXbux, intXu8b2g8, {from: accounts[1]});

		await expect(VatA4qsc8.slip.call(byteLZbFKHH, addressnHobSRV, intVeLeFb9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatgL7qJb = await Vat.new({from: accounts[4]});
		const addressluS74Yu = accounts[3]
		const addressMRp7PK = accounts[1]
		const uintTTMr9MZ = BigInt("1189")
		const byteO4kUUC1 = "0x151d1d11121d020b0b0a100004181d071f1c07181608140f0302062012140d08"
		const byteVmn3qC = "0x1008151918170215030618121e0b171909030d050b1b1c070c06010409151b0b"
		const uintS5kJLMo = BigInt("465")
		const addressrrdRbJ = accounts[3]
		const addressrK4eQBm = accounts[1]
		const intsUz3iXU = BigInt("-396")
		const intToh4qB = BigInt("743")
		const addressdflaKSd = accounts[1]
		const addressKzoXjde = "0x0000000000000000000000000000000000000001"
		const addressUjv4Dmq = "0x0000000000000000000000000000000000000001"
		const bytean5j9qj = "0x0207080603110b111a041a0e0a190f1b13121b0a161d0b0710151d110a1f151e"
		const addressd4i3QUk = await VatgL7qJb.nope.call(addressluS74Yu, {from: accounts[5]});
		const addressIgqbnP = await VatgL7qJb.hope.call(addressMRp7PK, {from: accounts[0]});
		const bytes32G5guLV = await VatgL7qJb.file.call(byteVmn3qC, byteO4kUUC1, uintTTMr9MZ, {from: accounts[2]});
		const addressy4Q1naS = await VatgL7qJb.move.call(addressrK4eQBm, addressrrdRbJ, uintS5kJLMo, {from: accounts[5]});
		const bytes32kQfIgO = await VatgL7qJb.frob.call(bytean5j9qj, addressUjv4Dmq, addressKzoXjde, addressdflaKSd, intToh4qB, intsUz3iXU, {from: accounts[3]});

		await expect(VatgL7qJb.file.call(byteVmn3qC, byteO4kUUC1, uintTTMr9MZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatt1Ojmt = await Vat.new({from: accounts[1]});
		const uintAi1oKxX = BigInt("1125")
		const intdnOYtWW = BigInt("-479")
		const intFcy5Lc2 = BigInt("1982")
		const addressm81BxbX = accounts[2]
		const addresswAS7wGA = accounts[4]
		const bytenYeFvIN = "0x0a1c160e0a161a0112080c0410120a09011407141916190320171c0308111319"
		const uintCLh9wWT = BigInt("1759")
		const addressBC3V7iS = accounts[2]
		const addressGxZ0I9n = accounts[3]
		const bytelpqsGjR = "0x0f060d081e1e1b041009011b0a0f021d09100b0b05071f1507181b0b0409010a"
		const uintpozvOP1 = await Vatt1Ojmt.heal.call(uintAi1oKxX, {from: accounts[3]});
		const bytes32rc4YUoy = await Vatt1Ojmt.fork.call(bytenYeFvIN, addresswAS7wGA, addressm81BxbX, intFcy5Lc2, intdnOYtWW, {from: accounts[1]});
		const addressgZ5WH2q = await Vatt1Ojmt.move.call(addressGxZ0I9n, addressBC3V7iS, uintCLh9wWT, {from: accounts[1]});
		const bytes32jnuHp0i = await Vatt1Ojmt.init.call(bytelpqsGjR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Vatt1Ojmt.heal.call(uintAi1oKxX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatoNSWGYz = await Vat.new({from: accounts[3]});
		const intnpRtd95 = BigInt("558")
		const intQ80xKan = BigInt("-612")
		const addressjmqe3h8 = accounts[1]
		const addressZQwbJ1N = accounts[0]
		const addressc4JR10p = accounts[0]
		const byterfwoTlF = "0x0e110210171d200e04020e13020a081f1a1a0c19011d06061a1305100b111d02"
		const intvl3rxw9 = BigInt("-98")
		const intfzl40jF = BigInt("-970")
		const addressICjoDfz = "0x0000000000000000000000000000000000000001"
		const addresslI5bek9 = accounts[1]
		const byteMLEsg1 = "0x0a0b01150f071109141a1f081e04181c10020a1f18051b00051f1b181e1f1316"
		const uintbY6GaMi = BigInt("1830")
		const addressL8sLwo5 = accounts[1]
		const addressvjxjmuK = accounts[2]
		const bytedaCxlSk = "0x12061d131e0a06031806130f06151c170c1a071a1d0219141e1c011015190c1f"
		const bytes32fPc46ik = await VatoNSWGYz.frob.call(byterfwoTlF, addressc4JR10p, addressZQwbJ1N, addressjmqe3h8, intQ80xKan, intnpRtd95, {from: accounts[3]});
		const bytes32ao3Ndz = await VatoNSWGYz.fork.call(byteMLEsg1, addresslI5bek9, addressICjoDfz, intfzl40jF, intvl3rxw9, {from: accounts[1]});
		const bytes32O1rOJ1K = await VatoNSWGYz.flux.call(bytedaCxlSk, addressvjxjmuK, addressL8sLwo5, uintbY6GaMi, {from: "0x0000000000000000000000000000000000000001"});
		await VatoNSWGYz.cage.call({from: accounts[5]});

		await expect(VatoNSWGYz.frob.call(byterfwoTlF, addressc4JR10p, addressZQwbJ1N, addressjmqe3h8, intQ80xKan, intnpRtd95, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vaty4WTx1W = await Vat.new({from: accounts[0]});
		const intMXfkMHw = BigInt("1676")
		const intP1e8p7e = BigInt("2009")
		const addressNBILZKl = accounts[2]
		const addresswLC228Z = accounts[4]
		const byteP8ogQYS = "0x1a081f14131e121b0f0518040b141d00140d1b0e0a1602171e0b06181210111f"
		const uintcHsWaul = BigInt("699")
		const intBEeVTIf = BigInt("-87")
		const intMHGg076 = BigInt("539")
		const addressSO7K9e = accounts[0]
		const addressmhKbF3n = accounts[3]
		const byteaGjSD2O = "0x0b0b1c19051314070d021f1b1b0a161919191d08121e0e041f130616080b1316"
		const uint6Np3n7 = BigInt("1447")
		const addressjFQJYMf = accounts[5]
		const addressh6zIz9 = accounts[1]
		const uintBwt3Z4p = BigInt("2038")
		const byteIV24xw = "0x0e1c0602151d191516191e16101d071d08011a03191607070b0f06071a030b18"
		const bytes32guRGV0T = await Vaty4WTx1W.fork.call(byteP8ogQYS, addresswLC228Z, addressNBILZKl, intP1e8p7e, intMXfkMHw, {from: accounts[0]});
		const uintzZla6xX = await Vaty4WTx1W.heal.call(uintcHsWaul, {from: accounts[2]});
		const bytes32YG1JNqz = await Vaty4WTx1W.fork.call(byteaGjSD2O, addressmhKbF3n, addressSO7K9e, intMHGg076, intBEeVTIf, {from: accounts[3]});
		const addresssNw26Zp = await Vaty4WTx1W.move.call(addressh6zIz9, addressjFQJYMf, uint6Np3n7, {from: accounts[0]});
		const bytes32DVqCRak = await Vaty4WTx1W.file.call(byteIV24xw, uintBwt3Z4p, {from: accounts[0]});

		await expect(Vaty4WTx1W.fork.call(byteP8ogQYS, addresswLC228Z, addressNBILZKl, intP1e8p7e, intMXfkMHw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatA34NTzA = await Vat.new({from: accounts[3]});
		const uint97Tt4f = BigInt("1254")
		const intEesbDjH = BigInt("815")
		const intPnU4vWb = BigInt("-1547")
		const addresszcU0lHN = accounts[0]
		const addressRLPA0Bs = accounts[0]
		const addressOdd0xWL = accounts[2]
		const byteE8e786R = "0x020b11100515040a0b2007090811121f1e0617070c120d0c17041a130f1a081d"
		const uintZGnfUf = BigInt("2006")
		const addressnoERJ6n = accounts[4]
		const addressOFHjESj = accounts[0]
		await VatA34NTzA.auth.call({from: accounts[0]});
		const uintZqFqtqz = await VatA34NTzA.heal.call(uint97Tt4f, {from: accounts[4]});
		const bytes32nUVlure = await VatA34NTzA.grab.call(byteE8e786R, addressOdd0xWL, addressRLPA0Bs, addresszcU0lHN, intPnU4vWb, intEesbDjH, {from: accounts[1]});
		const addressll6MDf7 = await VatA34NTzA.move.call(addressOFHjESj, addressnoERJ6n, uintZGnfUf, {from: accounts[1]});

		await expect(VatA34NTzA.auth.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatoNSWGYz = await Vat.new({from: accounts[3]});
		const addressIZ0dA71 = accounts[2]
		const intqdZUgbF = BigInt("558")
		const intseqomkH = BigInt("-612")
		const addressJn8O8OE = accounts[1]
		const addressMlipxbf = accounts[0]
		const addressjcLrWEX = accounts[0]
		const byteSAZtYr = "0x0e110210171d200e04020e13020a081f1a1a0c19011d06061a1305100b111d02"
		const intyW16hWd = BigInt("-98")
		const intuvimSpc = BigInt("-949")
		const addresssNPAo7n = "0x0000000000000000000000000000000000000001"
		const addressl2kgIae = accounts[1]
		const bytebLhNvwC = "0x0a0b01150f071109141a1f081e04181c10020a1f18051b00051f1b181e1f1316"
		const uintSV9VmO = BigInt("1830")
		const addresstspQt4r = accounts[1]
		const addressO3TPRf0 = accounts[2]
		const byteA8muS5 = "0x12061d131e0a06031806130f06151c170c1a071a1d0219141e1c011015190c1f"
		const addressNVj4TDn = await VatoNSWGYz.rely.call(addressIZ0dA71, {from: accounts[3]});
		const bytes32fPc46ik = await VatoNSWGYz.frob.call(byteSAZtYr, addressjcLrWEX, addressMlipxbf, addressJn8O8OE, intseqomkH, intqdZUgbF, {from: accounts[3]});
		const bytes32ao3Ndz = await VatoNSWGYz.fork.call(bytebLhNvwC, addressl2kgIae, addresssNPAo7n, intuvimSpc, intyW16hWd, {from: accounts[1]});
		const bytes32O1rOJ1K = await VatoNSWGYz.flux.call(byteA8muS5, addressO3TPRf0, addresstspQt4r, uintSV9VmO, {from: "0x0000000000000000000000000000000000000001"});
		await VatoNSWGYz.cage.call({from: accounts[5]});

		await expect(VatoNSWGYz.frob.call(byteSAZtYr, addressjcLrWEX, addressMlipxbf, addressJn8O8OE, intseqomkH, intqdZUgbF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatoNSWGYz = await Vat.new({from: accounts[3]});
		const inthquSqs1 = BigInt("-98")
		const intP7lK2C9 = BigInt("-970")
		const addressyDCcl6 = "0x0000000000000000000000000000000000000001"
		const addressDGmWf5S = accounts[1]
		const byteU535ugs = "0x0a0b01150f071109141a1f081e04181c10020a1f18051b00051f1b181e1f1316"
		const uintcuOmw2i = BigInt("1830")
		const addressfEmSqoO = accounts[1]
		const addressT906iwD = accounts[2]
		const byteOjJKJvs = "0x12061d131e0a06031806130f06151c170c1a071a1d0219141e1c011015190c1f"
		const bytes32ao3Ndz = await VatoNSWGYz.fork.call(byteU535ugs, addressDGmWf5S, addressyDCcl6, intP7lK2C9, inthquSqs1, {from: accounts[1]});
		const bytes32O1rOJ1K = await VatoNSWGYz.flux.call(byteOjJKJvs, addressT906iwD, addressfEmSqoO, uintcuOmw2i, {from: "0x0000000000000000000000000000000000000001"});
		await VatoNSWGYz.cage.call({from: accounts[5]});

		await expect(VatoNSWGYz.fork.call(byteU535ugs, addressDGmWf5S, addressyDCcl6, intP7lK2C9, inthquSqs1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vaty4WTx1W = await Vat.new({from: accounts[0]});
		const uintBnSxP9 = BigInt("692")
		const addressmNAKrk3 = accounts[2]
		const addressEUZthM8 = accounts[1]
		const bytenmawyaX = "0x1b01160e01081d18101b091a1516091e160d080c1f151e0f13141d081d071e15"
		const intLjHqm5p = BigInt("1676")
		const into4LIo46 = BigInt("2009")
		const addressE6ujO3s = accounts[2]
		const addresspCInTi = accounts[4]
		const bytelC60XtL = "0x1a081f14131e121b0f0518040b141d00140d1b0e0a1602171e0b06181210111f"
		const uintD2Vktph = BigInt("699")
		const intkvzDqNr = BigInt("-87")
		const intMevBKRf = BigInt("539")
		const addressvR7iuvw = accounts[0]
		const addressy9dn5H = accounts[3]
		const bytesdyAqnx = "0x0b0b1c19051314070d021f1b1b0a161919191d08121e0e041f130616080b1316"
		const uintPUsALqi = BigInt("1613")
		const addressl8G53HT = accounts[2]
		const addressIrGpHtJ = accounts[4]
		const byteYY1DPFF = "0x1007011a060f1d1a0214190a1407052003080b0b130c050416130b0f0f08101f"
		const uintqii8W14 = BigInt("2057")
		const byteGGthv7j = "0x0e1c0602151d191516191e16101d071d08011a03191607070b0f06071a030b18"
		const bytes32CXutcy = await Vaty4WTx1W.flux.call(bytenmawyaX, addressEUZthM8, addressmNAKrk3, uintBnSxP9, {from: accounts[2]});
		const bytes32guRGV0T = await Vaty4WTx1W.fork.call(bytelC60XtL, addresspCInTi, addressE6ujO3s, into4LIo46, intLjHqm5p, {from: accounts[0]});
		const uintzZla6xX = await Vaty4WTx1W.heal.call(uintD2Vktph, {from: accounts[2]});
		const bytes32YG1JNqz = await Vaty4WTx1W.fork.call(bytesdyAqnx, addressy9dn5H, addressvR7iuvw, intMevBKRf, intkvzDqNr, {from: accounts[3]});
		const bytes32hY3z3OW = await Vaty4WTx1W.flux.call(byteYY1DPFF, addressIrGpHtJ, addressl8G53HT, uintPUsALqi, {from: accounts[0]});
		const bytes32DVqCRak = await Vaty4WTx1W.file.call(byteGGthv7j, uintqii8W14, {from: accounts[0]});
		await Vaty4WTx1W.note.call({from: accounts[4]});

		await expect(Vaty4WTx1W.flux.call(bytenmawyaX, addressEUZthM8, addressmNAKrk3, uintBnSxP9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatf2YYJZS = await Vat.new({from: accounts[5]});
		const uintFxq01Yk = BigInt("1376")
		const bytee2AM47 = "0x200811101e081d1c1a0913101e1304191a071d0f140d171c1d1e061a01140e08"
		const uintiyFteN = BigInt("70")
		const addressEeH7R6w = accounts[0]
		const addresszktyYlN = accounts[1]
		const intadXSdrL = BigInt("-1226")
		const intow50xTT = BigInt("8")
		const addressNAbvcgn = accounts[4]
		const addresssoB1D0S = accounts[4]
		const byteSmmKFZi = "0x0e1400041c1b150d101f0d151311161f191b1e15051c0a0b17030a091a04140a"
		const bytes32jdoKDMU = await Vatf2YYJZS.file.call(bytee2AM47, uintFxq01Yk, {from: accounts[4]});
		const addressWzrJl9g = await Vatf2YYJZS.suck.call(addresszktyYlN, addressEeH7R6w, uintiyFteN, {from: "0x0000000000000000000000000000000000000001"});
		const bytes32rleDuJn = await Vatf2YYJZS.fork.call(byteSmmKFZi, addresssoB1D0S, addressNAbvcgn, intow50xTT, intadXSdrL, {from: accounts[1]});

		await expect(Vatf2YYJZS.file.call(bytee2AM47, uintFxq01Yk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat6zxLF5 = await Vat.new({from: accounts[2]});
		const uintyCixIc1 = BigInt("535")
		const addressMcOCb0e = accounts[0]
		const addresstDzVVN = "0x0000000000000000000000000000000000000001"
		const address82qbAz = accounts[5]
		const intalOOfnL = BigInt("-758")
		const intPhsP4TM = BigInt("-957")
		const address2veVlN = accounts[0]
		const addresso774xtD = accounts[5]
		const byteR6qYI9c = "0x1f0b0e0d1f110c150c0c0f09010d03040c1f0307191b060e160c191e1a08151f"
		const addressNvXZ7JP = await Vat6zxLF5.move.call(addresstDzVVN, addressMcOCb0e, uintyCixIc1, {from: accounts[1]});
		const addressMuqYvw2 = await Vat6zxLF5.nope.call(address82qbAz, {from: accounts[4]});
		const bytes32voRlIct = await Vat6zxLF5.fork.call(byteR6qYI9c, addresso774xtD, address2veVlN, intPhsP4TM, intalOOfnL, {from: accounts[2]});

		await expect(Vat6zxLF5.move.call(addresstDzVVN, addressMcOCb0e, uintyCixIc1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatYUbBxfd = await Vat.new({from: accounts[1]});
		const uintLLYQfb6 = BigInt("1658")
		const addressvrNVX84 = accounts[0]
		const addresssn9l5jk = accounts[3]
		const byteI9NTFI6 = "0x14000c12121e010911050e0e181a1c000b171707030f12030c0c071804200e1a"
		const uintjQn9gCs = BigInt("1855")
		const intwMx9o1C = BigInt("1547")
		const intAq5RJDj = BigInt("716")
		const addressJ1I1t01 = accounts[2]
		const addresstID8BXo = accounts[2]
		const addressie0mg2J = accounts[4]
		const byteciWQlk9 = "0x1e0d03180d0917190508050a191c1c1118050c02151e0f041f051b150b051d16"
		const uinttYz4wHW = BigInt("856")
		const bytes32tKxZkYZ = await VatYUbBxfd.flux.call(byteI9NTFI6, addresssn9l5jk, addressvrNVX84, uintLLYQfb6, {from: accounts[3]});
		const uintBoAuMbO = await VatYUbBxfd.heal.call(uintjQn9gCs, {from: accounts[4]});
		await VatYUbBxfd.note.call({from: accounts[4]});
		const bytes32JjteI4 = await VatYUbBxfd.frob.call(byteciWQlk9, addressie0mg2J, addresstID8BXo, addressJ1I1t01, intAq5RJDj, intwMx9o1C, {from: accounts[4]});
		const uintlD7Al7H = await VatYUbBxfd.heal.call(uinttYz4wHW, {from: accounts[3]});

		await expect(VatYUbBxfd.flux.call(byteI9NTFI6, addresssn9l5jk, addressvrNVX84, uintLLYQfb6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatoNSWGYz = await Vat.new({from: accounts[3]});
		const intNxdZUN = BigInt("97")
		const intJPLURYW = BigInt("246")
		const addressT51uea = accounts[2]
		const addressZiLr6Vl = accounts[4]
		const addressvgdBVK7 = accounts[2]
		const byteDj15Oz = "0x180c1e05131e0d1911191803021c1b060a14180b010712170e1b121813120a1a"
		const intZp8t0v2 = BigInt("-98")
		const intCAmJElQ = BigInt("-970")
		const addressHKNqRJY = "0x0000000000000000000000000000000000000001"
		const addressq3s32c = accounts[1]
		const byteinbaKe3 = "0x0a0b01150f041109141a1f081e04181c10020a1f18051b00051f1b181e1f1316"
		await VatoNSWGYz.cage.call({from: accounts[3]});
		const bytes32neqbx5t = await VatoNSWGYz.grab.call(byteDj15Oz, addressvgdBVK7, addressZiLr6Vl, addressT51uea, intJPLURYW, intNxdZUN, {from: accounts[5]});
		const bytes32ao3Ndz = await VatoNSWGYz.fork.call(byteinbaKe3, addressq3s32c, addressHKNqRJY, intCAmJElQ, intZp8t0v2, {from: accounts[1]});

		await expect(VatoNSWGYz.cage.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatoNSWGYz = await Vat.new({from: accounts[3]});
		const addresshwYKjUZ = accounts[2]
		const intUZaDpS = BigInt("-98")
		const intiM73IOV = BigInt("-970")
		const address8wifl3 = "0x0000000000000000000000000000000000000001"
		const addressMZmXXKp = accounts[2]
		const byteLt47NHC = "0x0a0b01150f071109141a1f081e04181c10020a1f18051b00051f1b181e1f1316"
		const addressnq337T = accounts[2]
		const addressMcfMRED = await VatoNSWGYz.deny.call(addresshwYKjUZ, {from: accounts[3]});
		const bytes32ao3Ndz = await VatoNSWGYz.fork.call(byteLt47NHC, addressMZmXXKp, address8wifl3, intiM73IOV, intUZaDpS, {from: accounts[1]});
		const addressyYjjMek = await VatoNSWGYz.nope.call(addressnq337T, {from: accounts[5]});

		await expect(VatoNSWGYz.fork.call(byteLt47NHC, addressMZmXXKp, address8wifl3, intiM73IOV, intUZaDpS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatBNx3Nro = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const addressY8pYyC2 = accounts[1]
		const uintqPi49v5 = BigInt("1462")
		const bytecCg2Epr = "0x201e1a1214071b1815060e161b0f1114041a0a100e0f0d120f0a200119090219"
		const addressLVFNtJt = accounts[3]
		const uintAO63zlq = BigInt("746")
		const byteguq4TbA = "0x090b0908140f18081c0c041e050f0f1d1a1809180101061f0816040f110d0600"
		const bytepY8SQlr = "0x15180e0b13171c0b080f180e1611070c0c1a161a18050b0f0c0810080806091b"
		const addresskJclo4s = await VatBNx3Nro.hope.call(addressY8pYyC2, {from: accounts[2]});
		const bytes32iPdW6eG = await VatBNx3Nro.file.call(bytecCg2Epr, uintqPi49v5, {from: accounts[0]});
		const addressSoFVdp7 = await VatBNx3Nro.deny.call(addressLVFNtJt, {from: accounts[5]});
		await VatBNx3Nro.auth.call({from: accounts[4]});
		const bytes32W2Ialm = await VatBNx3Nro.file.call(bytepY8SQlr, byteguq4TbA, uintAO63zlq, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Vat', async () => {
		const VatA4qsc8 = await Vat.new({from: accounts[5]});
		const uintamBnyz = BigInt("1344")
		const addressL1i6NPk = "0x0000000000000000000000000000000000000001"
		const addressPTlIybn = accounts[2]
		const intZ5u73Lg = BigInt("535")
		const intCkukLBw = BigInt("844")
		const addressTVkfAvg = accounts[4]
		const addressrQsI9pq = accounts[0]
		const addressJA4wDR = accounts[3]
		const bytefUGxKui = "0x0712020907150b14160407141a0c0c041e120d120f011e1b200e141519161404"
		const intWZNrQA7 = BigInt("-827")
		const addressN9iCjH = accounts[1]
		const byteCfbD1N = "0x0b161e061d0c1c0d070f191311141b0d0c05131a1c110d0c181c1911030b1f04"
		const uintVbuViu9 = BigInt("237")
		const byteAB5w85k = "0x1506110c16071110020f1d030a131f05031612061a0d1f190b170f0807131c10"
		const bytexjkfXIB = "0x1b0c1116200a140a051617160d181c100d031f111c0d0418121e1b1d0b080e1e"
		const inthIKMje = BigInt("8")
		const inttqMl18 = BigInt("923")
		const addressTFmxX0S = accounts[3]
		const addressLEIgEYe = accounts[2]
		const addressXsPRyYx = accounts[5]
		const byteq5RUCSp = "0x140d1f1b1e1c07081d090b071e1516090d041a0a200d1b170d121c1a06110612"
		const addressaX76Ex8 = await VatA4qsc8.suck.call(addressPTlIybn, addressL1i6NPk, uintamBnyz, {from: accounts[5]});
		const bytes32fop3aaJ = await VatA4qsc8.frob.call(bytefUGxKui, addressJA4wDR, addressrQsI9pq, addressTVkfAvg, intCkukLBw, intZ5u73Lg, {from: accounts[4]});
		const bytes32raMiqnT = await VatA4qsc8.slip.call(byteCfbD1N, addressN9iCjH, intWZNrQA7, {from: accounts[5]});
		const bytes32Rxo25J4 = await VatA4qsc8.file.call(bytexjkfXIB, byteAB5w85k, uintVbuViu9, {from: accounts[3]});
		const bytes32HmFfbF9 = await VatA4qsc8.grab.call(byteq5RUCSp, addressXsPRyYx, addressLEIgEYe, addressTFmxX0S, inttqMl18, inthIKMje, {from: accounts[1]});

		await expect(VatA4qsc8.frob.call(bytefUGxKui, addressJA4wDR, addressrQsI9pq, addressTVkfAvg, intCkukLBw, intZ5u73Lg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatoNSWGYz = await Vat.new({from: accounts[3]});
		const uintTIhbtWe = BigInt("54")
		const byteAK5hr9 = "0x1a14050c0f170213100e05200b0b10071a0b1a20030a171d1b021a131a0d190d"
		const byteQNptIxF = "0x08181e021116011f021112160d1d0e171214040e1317131e100e1c041916101d"
		const intBokQk3v = BigInt("558")
		const inteWazigv = BigInt("-612")
		const addressoYD1D2W = accounts[1]
		const addresspWhcn46 = accounts[0]
		const addressmb8FCTZ = accounts[0]
		const byteQQsNBe = "0x060d0b091914131c070b1b1c06101c140a011e1e02141d030e0b1b1f081d1c01"
		const address4w4o2y = accounts[2]
		const uintngv43S = BigInt("1274")
		const bytex4EGoQ8 = "0x050d160a1e10150a16120f0f180c1903191d17200d041c00161a060907040d0c"
		const byteiuz51w = "0x201f0f16101c0c091e140e1815101919010a030a04170b1f1d09090f0317121e"
		const bytes32xQ0A4q2 = await VatoNSWGYz.file.call(byteQNptIxF, byteAK5hr9, uintTIhbtWe, {from: accounts[3]});
		const bytes32fPc46ik = await VatoNSWGYz.frob.call(byteQQsNBe, addressmb8FCTZ, addresspWhcn46, addressoYD1D2W, inteWazigv, intBokQk3v, {from: accounts[3]});
		const addressDDzbp8i = await VatoNSWGYz.hope.call(address4w4o2y, {from: accounts[2]});
		const bytes32EEqO00V = await VatoNSWGYz.file.call(byteiuz51w, bytex4EGoQ8, uintngv43S, {from: accounts[1]});

		await expect(VatoNSWGYz.file.call(byteQNptIxF, byteAK5hr9, uintTIhbtWe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatqk0s3dn = await Vat.new({from: accounts[4]});
		const intXgWBjx = BigInt("-2019")
		const addressLo785yW = "0x0000000000000000000000000000000000000001"
		const bytepoF09Kh = "0x151b0f1b1c0a0a100518030115070701201f18021714030f1b171213041e1a1a"
		const intV36FUaY = BigInt("-951")
		const intBgNKMAt = BigInt("1774")
		const addresseqZd3vn = accounts[0]
		const addresslxzc8J9 = accounts[0]
		const bytecPRL4q7 = "0x16090e0c0e1114080f0e060d150e001411120e1d080b14151119040e10121618"
		const uintWTvxr2v = BigInt("1084")
		const intK5inPK4 = BigInt("-1858")
		const addressnZ6d1iJ = "0x0000000000000000000000000000000000000001"
		const byteXkUGxH = "0x0a0e1e03081200061a141b1c0806050c15052016000616172015180d03161105"
		const bytes32ypHq089 = await Vatqk0s3dn.fold.call(bytepoF09Kh, addressLo785yW, intXgWBjx, {from: accounts[4]});
		const bytes32mTCWQB = await Vatqk0s3dn.fork.call(bytecPRL4q7, addresslxzc8J9, addresseqZd3vn, intBgNKMAt, intV36FUaY, {from: accounts[1]});
		const uintINNbpQ7 = await Vatqk0s3dn.heal.call(uintWTvxr2v, {from: accounts[3]});
		const bytes32S7b3wLR = await Vatqk0s3dn.slip.call(byteXkUGxH, addressnZ6d1iJ, intK5inPK4, {from: accounts[2]});

		await expect(Vatqk0s3dn.fold.call(bytepoF09Kh, addressLo785yW, intXgWBjx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatqk0s3dn = await Vat.new({from: accounts[4]});
		const intUrQ1o3s = BigInt("1635")
		const addressyS5Tzne = accounts[3]
		const byteCjOYxhw = "0x071e1a11151d02051d1c15181f090d050c200a1e030b1f09131e130a0b1d1e0e"
		const uintjq4hYSh = BigInt("68")
		const uintuoSSMZS = BigInt("1084")
		const bytes32P099son = await Vatqk0s3dn.slip.call(byteCjOYxhw, addressyS5Tzne, intUrQ1o3s, {from: accounts[4]});
		const uintBX2qH6O = await Vatqk0s3dn.heal.call(uintjq4hYSh, {from: accounts[2]});
		const uintINNbpQ7 = await Vatqk0s3dn.heal.call(uintuoSSMZS, {from: accounts[3]});

		await expect(Vatqk0s3dn.heal.call(uintjq4hYSh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat6zxLF5 = await Vat.new({from: accounts[2]});
		const uintYqhEI8b = BigInt("535")
		const addressZ7pbxTC = accounts[0]
		const addressGxoLxJk = "0x00000000000000000000000000000000000000-1"
		const addressNvXZ7JP = await Vat6zxLF5.move.call(addressGxoLxJk, addressZ7pbxTC, uintYqhEI8b, {from: accounts[1]});
		await Vat6zxLF5.note.call({from: accounts[1]});

		await expect(Vat6zxLF5.move.call(addressGxoLxJk, addressZ7pbxTC, uintYqhEI8b, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vat6zxLF5 = await Vat.new({from: accounts[2]});
		const uintlDr1umH = BigInt("540")
		const addressbsvN0k = accounts[1]
		const addressKyrmaIK = accounts[0]
		const uintOtseH2z = BigInt("535")
		const addressLtWwMr = accounts[0]
		const addressIKTiTVp = "0x0000000000000000000000000000000000000001"
		const byteFzaegwl = "0x030703050a1e0815061d1e17170d040c03180108150c1c0d1c1c150b11020b01"
		const addressnmQLWP4 = await Vat6zxLF5.move.call(addressKyrmaIK, addressbsvN0k, uintlDr1umH, {from: accounts[0]});
		const addressNvXZ7JP = await Vat6zxLF5.move.call(addressIKTiTVp, addressLtWwMr, uintOtseH2z, {from: accounts[1]});
		const bytes32Wrrafy = await Vat6zxLF5.init.call(byteFzaegwl, {from: accounts[4]});

		await expect(Vat6zxLF5.move.call(addressKyrmaIK, addressbsvN0k, uintlDr1umH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatoNSWGYz = await Vat.new({from: accounts[3]});
		const int7bfgj3 = BigInt("-1576")
		const intdt3PYS = BigInt("1677")
		const addressqPQCSe = accounts[0]
		const addresslrsCTot = accounts[1]
		const addresslWwepCS = accounts[3]
		const byteq9rOncY = "0x061d0310011b070e0301011c09091d0f0e1c0e0b171a1a160b1f0a1516090407"
		const intCc2AO6G = BigInt("-1428")
		const intqrpNSRd = BigInt("-1396")
		const addressLNeLkhN = accounts[1]
		const addressUmnl74J = accounts[3]
		const addressE6BNn8 = accounts[4]
		const byteObTFpx = "0x0306040b180d0d1b0214131e03121a161f191b17041c191f1a090a13060f1319"
		const uintPLNh4Km = BigInt("1612")
		const byteGWCOj5l = "0x05201f200a141d1c0d111d1110031b190e0c0310130102090214141414191f05"
		const byteS6qqlJ = "0x0a08020f02061d000016121a180c1f0218141b0502120e0611041d1314201c0d"
		const bytes32kxqQUx8 = await VatoNSWGYz.grab.call(byteq9rOncY, addresslWwepCS, addresslrsCTot, addressqPQCSe, intdt3PYS, int7bfgj3, {from: accounts[3]});
		const bytes32dnGjF4G = await VatoNSWGYz.frob.call(byteObTFpx, addressE6BNn8, addressUmnl74J, addressLNeLkhN, intqrpNSRd, intCc2AO6G, {from: accounts[0]});
		const bytes32ZSG06Qq = await VatoNSWGYz.file.call(byteS6qqlJ, byteGWCOj5l, uintPLNh4Km, {from: accounts[2]});

		await expect(VatoNSWGYz.grab.call(byteq9rOncY, addresslWwepCS, addresslrsCTot, addressqPQCSe, intdt3PYS, int7bfgj3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatoNSWGYz = await Vat.new({from: accounts[3]});
		const bytexnnFJ3e = "0x0a16181c0b1b16060c1e0703200812010e0820101311081b041313021700051f"
		const intmwieaNI = BigInt("-1569")
		const addressm2xHNi8 = accounts[4]
		const byteU1u3vNc = "0x061e161c0b070b17060b1a141e0704170214110d1103081c0607081d0b1b1f08"
		const intgq9st6e = BigInt("1508")
		const addressxVeWOqz = accounts[1]
		const byteMk9AS8Z = "0x1f0d1f0614020a120f14050d0f1b1d160201171e1713140d1a140c20011f0613"
		const bytes32AyVeOI = await VatoNSWGYz.init.call(bytexnnFJ3e, {from: accounts[3]});
		const bytes32DfyWxvM = await VatoNSWGYz.fold.call(byteU1u3vNc, addressm2xHNi8, intmwieaNI, {from: accounts[4]});
		const bytes32izm3Tat = await VatoNSWGYz.slip.call(byteMk9AS8Z, addressxVeWOqz, intgq9st6e, {from: accounts[3]});

		await expect(VatoNSWGYz.fold.call(byteU1u3vNc, addressm2xHNi8, intmwieaNI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatoNSWGYz = await Vat.new({from: accounts[3]});
		const inttreMFDT = BigInt("552")
		const intdRC56e = BigInt("157")
		const addressv4zUVyg = accounts[0]
		const addressDl18QeN = accounts[0]
		const addressJAOS4QA = accounts[4]
		const byte7BNcpa = "0x140d06170b0b1f10121d150e11140d151e20170b05062001170611171a01001e"
		const intIx8bZl2 = BigInt("-98")
		const intgX29GZm = BigInt("-958")
		const addressGaylAbm = "0x0000000000000000000000000000000000000001"
		const addressiwjkZHN = accounts[1]
		const byteAvWYdW6 = "0x0a0b01150f071109141a1f081e04181c10020a1f18051b00051f1b181e1f1316"
		const bytes32tVH8yIy = await VatoNSWGYz.grab.call(byte7BNcpa, addressJAOS4QA, addressDl18QeN, addressv4zUVyg, intdRC56e, inttreMFDT, {from: accounts[3]});
		const bytes32ao3Ndz = await VatoNSWGYz.fork.call(byteAvWYdW6, addressiwjkZHN, addressGaylAbm, intgX29GZm, intIx8bZl2, {from: accounts[1]});

		await expect(VatoNSWGYz.grab.call(byte7BNcpa, addressJAOS4QA, addressDl18QeN, addressv4zUVyg, intdRC56e, inttreMFDT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatoNSWGYz = await Vat.new({from: accounts[3]});
		const uintEcMvPN9 = BigInt("54")
		const byteyqBGCwj = "0x1a14050c0f170213100e05200b0b10071a0b1a20030a171d1b021a131a0d190d"
		const bytevf0ixOB = "0x08181e021116ffffffff1f021112160d1d0e171214040e1317131e100e1c041916101d"
		const uintwfUGc5r = BigInt("131")
		const address52qrHs = accounts[2]
		const addressC6xcB4v = accounts[5]
		const uintzyKPbQo = BigInt("1568")
		const addresscsFr5qZ = accounts[0]
		const addressEhIBtkF = accounts[2]
		const bytes32xQ0A4q2 = await VatoNSWGYz.file.call(bytevf0ixOB, byteyqBGCwj, uintEcMvPN9, {from: accounts[3]});
		const addressyR07A7 = await VatoNSWGYz.suck.call(addressC6xcB4v, address52qrHs, uintwfUGc5r, {from: accounts[3]});
		const addressHHWnQ0c = await VatoNSWGYz.move.call(addressEhIBtkF, addresscsFr5qZ, uintzyKPbQo, {from: accounts[0]});

		await expect(VatoNSWGYz.file.call(bytevf0ixOB, byteyqBGCwj, uintEcMvPN9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatoNSWGYz = await Vat.new({from: accounts[3]});
		const uintnDo9jfZ = BigInt("54")
		const byteFq75YJM = "0x1a14030c0f170013131005200b0b10071a0b1a20030a171d1b021a131a0d190d"
		const bytejtiaLPd = "0x08181e021116011ffffffffe0f12160d1d0e171214040e1317131e100e1c041916101d"
		const uintZmAroN8 = BigInt("404")
		const byteJ99TIB = "0x0211030d1919121f161d0a1f000815150c1a111212200409040019020a111115"
		const byteWM4i4A6 = "0x161f061b010d1d1f1a11131f1f150509050c080b1f141a19140204030d190b0e"
		const byteHRPvSJ = "0x0f191f0b0b1413040c051c02051d1316111f15061a0c1b0f1d0412141f161513"
		const intOtjvl4s = BigInt("-687")
		const intV3fGlBJ = BigInt("487")
		const addressx7DM9Sd = "0x0000000000000000000000000000000000000001"
		const addressrwKSbY7 = accounts[3]
		const addressDMD4G0o = accounts[1]
		const byteh77h7B8 = "0x101d0a16171e0d1417061c201f1e07081f120209170e050217160f161b0b0509"
		const uintcaOWMTU = BigInt("1478")
		const byteXKv4pkx = "0x171d1d1e0e09071113071e1e1009041a0f1a010c0b02070c031c031a0b04020b"
		const uintgirLT4B = BigInt("125")
		const bytem073T4y = "0x0a030a111a00200f01130609021c0d0a1118171d140a021f161119051a191401"
		const intdFUGCap = BigInt("1237")
		const intViipdeg = BigInt("1889")
		const addressDGmT9Fw = accounts[2]
		const addressIaY98M = accounts[1]
		const byteUUQ9ntH = "0x0d0f1016171b1e1e0e0216031c09160c1d1f0f0b1a0b111314100e00170a1706"
		const bytes32xQ0A4q2 = await VatoNSWGYz.file.call(bytejtiaLPd, byteFq75YJM, uintnDo9jfZ, {from: accounts[3]});
		const bytes32wEpYDBd = await VatoNSWGYz.file.call(byteWM4i4A6, byteJ99TIB, uintZmAroN8, {from: accounts[1]});
		const bytes32AkNubS8 = await VatoNSWGYz.init.call(byteHRPvSJ, {from: accounts[2]});
		const bytes32Luc8Rgy = await VatoNSWGYz.grab.call(byteh77h7B8, addressDMD4G0o, addressrwKSbY7, addressx7DM9Sd, intV3fGlBJ, intOtjvl4s, {from: accounts[4]});
		const bytes32x0CfEXM = await VatoNSWGYz.file.call(byteXKv4pkx, uintcaOWMTU, {from: accounts[2]});
		const bytes32sVa9cN2 = await VatoNSWGYz.file.call(bytem073T4y, uintgirLT4B, {from: accounts[1]});
		const bytes32emlsbM = await VatoNSWGYz.fork.call(byteUUQ9ntH, addressIaY98M, addressDGmT9Fw, intViipdeg, intdFUGCap, {from: accounts[4]});

		await expect(VatoNSWGYz.file.call(bytejtiaLPd, byteFq75YJM, uintnDo9jfZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatoNSWGYz = await Vat.new({from: accounts[3]});
		const intVMzhxDW = BigInt("558")
		const intZT6F7zg = BigInt("-612")
		const addressNJrCRG7 = accounts[1]
		const addressUiBMuQd = accounts[0]
		const addressHRnMFne = accounts[0]
		const byteVo3SurT = "0x0e110210171d200e04ffffffff0e13020a081f1a1a0c19011d06061a1305100b111d02"
		const intVvwraaz = BigInt("1023")
		const addressgY86UPR = accounts[1]
		const byteeMVscgX = "0x1319071c101b0f1a1d061811021b1206110d06051e0f0c021304051d1f100f0f"
		const bytes32fPc46ik = await VatoNSWGYz.frob.call(byteVo3SurT, addressHRnMFne, addressUiBMuQd, addressNJrCRG7, intZT6F7zg, intVMzhxDW, {from: accounts[3]});
		const bytes32vww2o2d = await VatoNSWGYz.fold.call(byteeMVscgX, addressgY86UPR, intVvwraaz, {from: accounts[0]});

		await expect(VatoNSWGYz.frob.call(byteVo3SurT, addressHRnMFne, addressUiBMuQd, addressNJrCRG7, intZT6F7zg, intVMzhxDW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatoNSWGYz = await Vat.new({from: accounts[3]});
		const uintAOcU7fv = BigInt("54")
		const byteBwNOqn = "0x1a14050c0f170213100e05200b0b10071a0b1a20030a171d1b021a131a0d190d"
		const byteZqIXbg = "0x08181efffffffe1116011f021112160d1d0e171214040e1317131e100e1c041916101d"
		const addressmAw6WNy = accounts[2]
		const bytes32xQ0A4q2 = await VatoNSWGYz.file.call(byteZqIXbg, byteBwNOqn, uintAOcU7fv, {from: accounts[3]});
		const addressRRSMEcR = await VatoNSWGYz.nope.call(addressmAw6WNy, {from: accounts[5]});

		await expect(VatoNSWGYz.file.call(byteZqIXbg, byteBwNOqn, uintAOcU7fv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatoNSWGYz = await Vat.new({from: accounts[3]});
		const addressg075A0i = accounts[5]
		const addresshS7Zoj = accounts[2]
		const uintkRqAQFT = BigInt("62")
		const bytejPm6znG = "0x091d0517181d1e1717020b010619051f0303191909041b1c20131c1b1601fffffffe13"
		const byteJ9qBwX5 = "0x08181e021116011f021112160d1d0e171214040e1317131e100e1c041916101d"
		const uintqmAql5j = BigInt("1123")
		const addressCKzmlaf = accounts[2]
		const addressbcvycNh = accounts[0]
		const bytebDX1rsc = "0x0c13011f010a151d181e1115130d0e1501140701011d160c1c071c02130d0507"
		const addressmJ1VObk = await VatoNSWGYz.hope.call(addressg075A0i, {from: accounts[5]});
		const addressX0yapu3 = await VatoNSWGYz.hope.call(addresshS7Zoj, {from: accounts[5]});
		const bytes32xQ0A4q2 = await VatoNSWGYz.file.call(byteJ9qBwX5, bytejPm6znG, uintkRqAQFT, {from: accounts[3]});
		const addressOzGWQJM = await VatoNSWGYz.move.call(addressbcvycNh, addressCKzmlaf, uintqmAql5j, {from: accounts[5]});
		const bytes32HanmJdQ = await VatoNSWGYz.init.call(bytebDX1rsc, {from: accounts[0]});

		await expect(VatoNSWGYz.file.call(byteJ9qBwX5, bytejPm6znG, uintkRqAQFT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatoNSWGYz = await Vat.new({from: accounts[3]});
		const addressXHKoRlm = accounts[5]
		const uintpq0JIio = BigInt("62")
		const byteDu716MT = "0x091d0517181d1e1717020bfffffffd0619051f0303191909041b1c20131c1b16010413"
		const byteIraKvvQ = "0x08181e021116011f021112160d1d0e171214040e1317131e100e1c041916101d"
		const uintki7l2bx = BigInt("1133")
		const byteW8QYdMP = "0x0d1f1b170e09130a1b1a0a130b021114170e0a12181c1d1b0c170e11060b0010"
		const addressBgNyLxT = accounts[3]
		const intdgOn9XY = BigInt("1975")
		const addressCnInbYN = accounts[3]
		const bytekq5segq = "0x1712011b1d18041b1604020d070b0a200912131316060e0d161b0b0b14110014"
		const addressmJ1VObk = await VatoNSWGYz.hope.call(addressXHKoRlm, {from: accounts[5]});
		const bytes32xQ0A4q2 = await VatoNSWGYz.file.call(byteIraKvvQ, byteDu716MT, uintpq0JIio, {from: accounts[3]});
		const bytes32Z7qMl9 = await VatoNSWGYz.file.call(byteW8QYdMP, uintki7l2bx, {from: accounts[2]});
		const addressa48ICQF = await VatoNSWGYz.hope.call(addressBgNyLxT, {from: accounts[3]});
		const bytes32NwiUCgf = await VatoNSWGYz.slip.call(bytekq5segq, addressCnInbYN, intdgOn9XY, {from: accounts[0]});

		await expect(VatoNSWGYz.file.call(byteIraKvvQ, byteDu716MT, uintpq0JIio, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatoNSWGYz = await Vat.new({from: accounts[3]});
		const intxLBZXcP = BigInt("-1411")
		const intQGvcIVx = BigInt("-2010")
		const addressJSUnk0T = accounts[0]
		const addresstuzauVN = accounts[0]
		const byteMOzuDt = "0x200611200301160a04081f0e051f14050c0b121f171f081a0a190c03160b181c"
		const inthZFIoo = BigInt("2041")
		const intveIMYRp = BigInt("-193")
		const addressBzxQvJV = accounts[4]
		const addressscHiJYa = accounts[1]
		const addressyPULYCo = accounts[5]
		const byteevUONJ3 = "0x0411071b08031d100d1700031d160a0b040c031c0c0f011e0f0f200515110900"
		const addresssCEnOw3 = accounts[5]
		const addressUVPe9SJ = accounts[1]
		const uinteOzUEWc = BigInt("1133")
		const byteuITI7MA = "0x0d1f1b170e09130a1b1a0a130b021114170e0a12181c1d1b0c170e11060b0010"
		const bytes32xzJDqIz = await VatoNSWGYz.fork.call(byteMOzuDt, addresstuzauVN, addressJSUnk0T, intQGvcIVx, intxLBZXcP, {from: accounts[3]});
		const bytes32WF8VRqI = await VatoNSWGYz.grab.call(byteevUONJ3, addressyPULYCo, addressscHiJYa, addressBzxQvJV, intveIMYRp, inthZFIoo, {from: accounts[4]});
		const addressmJ1VObk = await VatoNSWGYz.hope.call(addresssCEnOw3, {from: accounts[5]});
		const addressLYZGHxq = await VatoNSWGYz.hope.call(addressUVPe9SJ, {from: accounts[1]});
		const bytes32Z7qMl9 = await VatoNSWGYz.file.call(byteuITI7MA, uinteOzUEWc, {from: accounts[2]});

		await expect(VatoNSWGYz.fork.call(byteMOzuDt, addresstuzauVN, addressJSUnk0T, intQGvcIVx, intxLBZXcP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})