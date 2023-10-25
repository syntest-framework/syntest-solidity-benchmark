const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintZ1gaQ0L = BigInt("979")
		const stringnYTdbTL = "R4RK423JBlU8veE0dijNt3Gvk2AqPXaWCbT"
		const stringKBuitYG = "6W7Zd46OJERsKWl4c"
		const MARVELCOINmQoXCxJ = await MARVELCOIN.new(uintZ1gaQ0L, stringnYTdbTL, stringKBuitYG, {from: accounts[1]});
		const bytenw7r2t7 = "0x1b1c1e03121c1f150114140b011a"
		const uintD5Z7g24 = BigInt("127")
		const addressfMhkJNx = accounts[5]
		const uintP58nFR = BigInt("490")
		const addressBtoMbPt = accounts[4]
//		const boolQdqNqTl = await MARVELCOINmQoXCxJ.approveAndCall.call(addressfMhkJNx, uintD5Z7g24, bytenw7r2t7, {from: accounts[2]});
//		const boolmLAp4w9 = await MARVELCOINmQoXCxJ.transfer.call(addressBtoMbPt, uintP58nFR, {from: accounts[5]});

		await expect(MARVELCOINmQoXCxJ.approveAndCall.call(addressfMhkJNx, uintD5Z7g24, bytenw7r2t7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintz3tl099 = BigInt("547")
		const stringWtGL0IQ = "jcGTh3QFAGACQtTruyPn8ysUwp4SGNKR0yNkOoqCTFQywM6Yl"
		const stringDOiWNk3 = "Jq8EoDvaMD8iEhBH9tjAwhhHkW3JKGJovB84TQHoxpL8QUvaQXUsCPcDdPiKvUWZvgmefxVgWTB34zgf"
		const MARVELCOINZyJi9mR = await MARVELCOIN.new(uintz3tl099, stringWtGL0IQ, stringDOiWNk3, {from: "0x0000000000000000000000000000000000000001"});
		const uintLExP0wV = BigInt("975")
		const addresscnt1Zp = accounts[0]
		const addressjaEgOWQ = accounts[5]
		const uintUiJDMFp = BigInt("2045")
		const addressuJk6EVd = accounts[3]
		const addressV2LJ1JB = "0x0000000000000000000000000000000000000001"
		const boolNHysik = await MARVELCOINZyJi9mR.transferFrom.call(addressjaEgOWQ, addresscnt1Zp, uintLExP0wV, {from: accounts[1]});
		const boolFsnCPtr = await MARVELCOINZyJi9mR.transferFrom.call(addressV2LJ1JB, addressuJk6EVd, uintUiJDMFp, {from: accounts[5]});
	});

	it('test for MARVELCOIN', async () => {
		const uintWFuhxc = BigInt("1710")
		const stringePzClu5 = "I3Wen6A55QWTMaDnyPdcB908XbOpSoIS7iiv1voO7TcfApya7"
		const stringVNImdUK = "GVWEBUHPzqlzy5eXFMGl8DIhSSl6pmBN1Kcryvf"
		const MARVELCOINxjcnEgt = await MARVELCOIN.new(uintWFuhxc, stringePzClu5, stringVNImdUK, {from: accounts[3]});
		const uintVthDCkX = BigInt("1813")
		const uintMu5iIwZ = BigInt("184")
//		const boolKca884P = await MARVELCOINxjcnEgt.burn.call(uintVthDCkX, {from: accounts[2]});
//		const boolxsMk2ZC = await MARVELCOINxjcnEgt.burn.call(uintMu5iIwZ, {from: accounts[2]});

		await expect(MARVELCOINxjcnEgt.burn.call(uintVthDCkX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintLKWlRSN = BigInt("1168")
		const stringaXeu85P = "MeKerlI9zY"
		const stringjuklDsk = "xjYKxZOjbllBSO1NVKmOji6pRHweFxYhP0LiqxxAuQxR8zEYgSoVleUUmpx8ISbCUIVzl1JZWiURb5k4zJzzJ"
		const MARVELCOINijAuA7N = await MARVELCOIN.new(uintLKWlRSN, stringaXeu85P, stringjuklDsk, {from: accounts[4]});
		const uintXb3y55K = BigInt("1538")
		const addressCfhr5im = accounts[1]
		const uintzydtov9 = BigInt("2004")
		const addressftiUJLw = accounts[0]
		const addressmJkGFvV = accounts[5]
		const byteiJEdnKq = "0x1413160f14160b1204151f181e13181e09121d1502191d150d0408041f08191b"
		const uintvhVuSHM = BigInt("1722")
		const addressO1DWliM = accounts[5]
		const uintZEiz6Zz = BigInt("282")
		const addressoRFVNGG = accounts[4]
		const addressToyWmVd = accounts[1]
		const uintnliUV4 = BigInt("1019")
		const addressxjwWo4A = accounts[3]
		const boolk3R520J = await MARVELCOINijAuA7N.approve.call(addressCfhr5im, uintXb3y55K, {from: accounts[5]});
//		const boolCQkBena = await MARVELCOINijAuA7N.transferFrom.call(addressmJkGFvV, addressftiUJLw, uintzydtov9, {from: accounts[4]});
//		const boolpVzAv7y = await MARVELCOINijAuA7N.approveAndCall.call(addressO1DWliM, uintvhVuSHM, byteiJEdnKq, {from: accounts[3]});
//		const boolvRVxIwJ = await MARVELCOINijAuA7N.transferFrom.call(addressToyWmVd, addressoRFVNGG, uintZEiz6Zz, {from: accounts[3]});
//		const boolNiD1zxs = await MARVELCOINijAuA7N.transfer.call(addressxjwWo4A, uintnliUV4, {from: accounts[1]});

		assert.equal(boolk3R520J, true)
		await expect(MARVELCOINijAuA7N.transferFrom.call(addressmJkGFvV, addressftiUJLw, uintzydtov9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintXkZRHk = BigInt("182")
		const stringJKGghxK = "qgxmjuAC3cCYUhhN7AkdVQE2sjOvQD3TiY1gl2bz716ryplpOPeV0hbulXsaa"
		const stringFXKuBT0 = "nrE54l7ZaeTMEgp3kXiBYIV6EUY7Fy6uWdAqIcetSHhJgS"
		const MARVELCOINxJua0On = await MARVELCOIN.new(uintXkZRHk, stringJKGghxK, stringFXKuBT0, {from: accounts[4]});
		const uintZMzide1 = BigInt("955")
		const addressGN3dEA4 = accounts[5]
		const byteks2mKP = "0x081c071a12191201180808031a020310"
		const uintC2Ks5YC = BigInt("635")
		const addressckGh9m7 = accounts[1]
		const uintoVju8my = BigInt("1426")
		const addressseo1ZMm = accounts[0]
		const addresswp3uO13 = accounts[3]
		const uintNnRmMqZ = BigInt("1953")
		const addressmcYmjyD = accounts[4]
//		const boolcj58J5I = await MARVELCOINxJua0On.transfer.call(addressGN3dEA4, uintZMzide1, {from: accounts[2]});
//		const boolQzM4H1 = await MARVELCOINxJua0On.approveAndCall.call(addressckGh9m7, uintC2Ks5YC, byteks2mKP, {from: "0x0000000000000000000000000000000000000001"});
//		const boolSSqeA34 = await MARVELCOINxJua0On.transferFrom.call(addresswp3uO13, addressseo1ZMm, uintoVju8my, {from: accounts[5]});
//		const bool5MHnZ4 = await MARVELCOINxJua0On.transfer.call(addressmcYmjyD, uintNnRmMqZ, {from: accounts[0]});

		await expect(MARVELCOINxJua0On.transfer.call(addressGN3dEA4, uintZMzide1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintmRXGe2c = BigInt("1998")
		const stringC1RLR6L = "jpcyUa7rCxfevRJ9AcO2Q50OTPujLwT5XRGnZjRdtpThbQd3jVD45wIbHUvI65IHyJY"
		const stringJq4fhPG = "S84XcEpCIGEQikM"
		const MARVELCOINSf4o9Ql = await MARVELCOIN.new(uintmRXGe2c, stringC1RLR6L, stringJq4fhPG, {from: accounts[2]});
		const uintxZ2iUIm = BigInt("1524")
		const addressaakiUYw = accounts[3]
		const uintOMyRbpO = BigInt("406")
		const uintQPs8N7X = BigInt("1097")
		const addressXu6kMsf = accounts[2]
		const uintc9EmhsI = BigInt("703")
		const addressKuKgSuV = accounts[0]
		const boolLGKxG5j = await MARVELCOINSf4o9Ql.approve.call(addressaakiUYw, uintxZ2iUIm, {from: "0x0000000000000000000000000000000000000001"});
		const boolJJABpi6 = await MARVELCOINSf4o9Ql.burn.call(uintOMyRbpO, {from: accounts[2]});
//		const boolXalo4NU = await MARVELCOINSf4o9Ql.burnFrom.call(addressXu6kMsf, uintQPs8N7X, {from: accounts[0]});
//		const booldWIKBiV = await MARVELCOINSf4o9Ql.approve.call(addressKuKgSuV, uintc9EmhsI, {from: accounts[4]});

		assert.equal(boolJJABpi6, true)
		assert.equal(boolLGKxG5j, true)
		await expect(MARVELCOINSf4o9Ql.burnFrom.call(addressXu6kMsf, uintQPs8N7X, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintxeXBlMp = BigInt("1104")
		const stringwCy50WH = "GrykSkhhfJfCKlSFeIV3McC0lo0WIitV8vHPitQ82TLJ2elp1NJ"
		const stringRLSRJlG = "UsTsXM1gZTt5ljkIzGsXFcCFCYTp0bMm6ElC9eCjORiCmjE"
		const MARVELCOINv5BUsjJ = await MARVELCOIN.new(uintxeXBlMp, stringwCy50WH, stringRLSRJlG, {from: accounts[3]});
		const uintTaVhOh = BigInt("1931")
		const addressqQD0zjE = "0x00000000000000000000000000000000000000-1"
		const addressJzs3n4w = accounts[5]
		const uintZvRfWt = BigInt("1602")
		const addressPSTaTiy = accounts[0]
		const addressHwneDc = accounts[2]
		const byteX1rcihT = "0x1a0510110b1b0715"
		const uintHrIgDDi = BigInt("364")
		const addressJL0nec7 = accounts[3]
		const bytekqeG0oo = "0x07"
		const uintETb8oR = BigInt("1149")
		const addresshGAGBAs = accounts[0]
		const byteBa09L6b = "0x0a080317051c10141c0402011d1a1f17071d19061501031c1518"
		const uintTY9XrU5 = BigInt("350")
		const addressoca7X3c = accounts[0]
//		const bool15Sw0K = await MARVELCOINv5BUsjJ.transferFrom.call(addressJzs3n4w, addressqQD0zjE, uintTaVhOh, {from: accounts[2]});
//		const boolArwOdo8 = await MARVELCOINv5BUsjJ.transferFrom.call(addressHwneDc, addressPSTaTiy, uintZvRfWt, {from: accounts[1]});
//		const boolmWaJfcM = await MARVELCOINv5BUsjJ.approveAndCall.call(addressJL0nec7, uintHrIgDDi, byteX1rcihT, {from: accounts[1]});
//		const boolUe9lyky = await MARVELCOINv5BUsjJ.approveAndCall.call(addresshGAGBAs, uintETb8oR, bytekqeG0oo, {from: accounts[5]});
//		const booluoubpx3 = await MARVELCOINv5BUsjJ.approveAndCall.call(addressoca7X3c, uintTY9XrU5, byteBa09L6b, {from: accounts[2]});

		await expect(MARVELCOINv5BUsjJ.transferFrom.call(addressJzs3n4w, addressqQD0zjE, uintTaVhOh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintcIMs1sh = BigInt("1104")
		const stringwCy50WH = "GrykSkhhfJfCKlSFeIV3McC0lo0WIitV8vHPitQ82TLJ2elp1NJ"
		const stringRLSRJlG = "UsTsXM1gZTt5ljkIzGsXFcCFCYTp0bMm6ElC9eCjORiCmjE"
		const MARVELCOINv5BUsjJ = await MARVELCOIN.new(uintcIMs1sh, stringwCy50WH, stringRLSRJlG, {from: accounts[3]});
		const uintWTwEzn6 = BigInt("1350")
		const addressJuEydAe = accounts[2]
		const uinta8AlAve = BigInt("1931")
		const address67UP9h = "0x0000000000000000000000000000000000000000"
		const addressAfYCMl = accounts[5]
		const uintQoWPyTF = BigInt("1602")
		const addresscuAgNXn = accounts[0]
		const addresspEhqnas = accounts[2]
		const boolp7UImxb = await MARVELCOINv5BUsjJ.transfer.call(addressJuEydAe, uintWTwEzn6, {from: accounts[3]});
//		const bool15Sw0K = await MARVELCOINv5BUsjJ.transferFrom.call(addressAfYCMl, address67UP9h, uinta8AlAve, {from: accounts[2]});
//		const boolArwOdo8 = await MARVELCOINv5BUsjJ.transferFrom.call(addresspEhqnas, addresscuAgNXn, uintQoWPyTF, {from: accounts[1]});

		assert.equal(boolp7UImxb, true)
		await expect(MARVELCOINv5BUsjJ.transferFrom.call(addressAfYCMl, address67UP9h, uinta8AlAve, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})