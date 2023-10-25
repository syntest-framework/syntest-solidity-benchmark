const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addresstn6NnGX = accounts[0]
		const addressMB0bYj0 = accounts[3]
		const QuickTokenoqCSgrQ = await QuickToken.new(addresstn6NnGX, addressMB0bYj0, {from: accounts[5]});
		const uintNDJaA9 = BigInt("90")
		const addressKssbPSf = accounts[1]
		const uinteyyiFA = BigInt("422")
		const addressprdOWW0 = accounts[5]
		const addressiqh4HaO = accounts[1]
		const uintpCyESau = BigInt("393")
		const addressxJ7KuEk = accounts[2]
		const addressWe5WRqU = accounts[1]
		const uintgjDFAb2 = BigInt("857")
		const addressZdDK9H = "0x0000000000000000000000000000000000000001"
		const boolYXJKWDd = await QuickTokenoqCSgrQ.approve.call(addressKssbPSf, uintNDJaA9, {from: accounts[2]});
		const boolvRTByI7 = await QuickTokenoqCSgrQ.transferFrom.call(addressiqh4HaO, addressprdOWW0, uinteyyiFA, {from: accounts[2]});
		const boolH1puj37 = await QuickTokenoqCSgrQ.transferFrom.call(addressWe5WRqU, addressxJ7KuEk, uintpCyESau, {from: accounts[1]});
		const boolAp0VQh2 = await QuickTokenoqCSgrQ.transfer.call(addressZdDK9H, uintgjDFAb2, {from: accounts[1]});

		assert.equal(boolYXJKWDd, true)
		await expect(QuickTokenoqCSgrQ.transferFrom.call(addressiqh4HaO, addressprdOWW0, uinteyyiFA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresskAVA7p = accounts[0]
		const addressBl6OwPn = "0x0000000000000000000000000000000000000001"
		const QuickTokenpdEtkJB = await QuickToken.new(addresskAVA7p, addressBl6OwPn, {from: accounts[1]});
		const address8NHaG7 = accounts[3]
		const addressP9mjkLg = accounts[3]
		const addressC21IfA = accounts[4]
		const uintXOOzhTL = await QuickTokenpdEtkJB.balanceOf.call(address8NHaG7, {from: accounts[3]});
		const uinthQp7l0 = await QuickTokenpdEtkJB.balanceOf.call(addressP9mjkLg, {from: accounts[3]});
		const uintMIPwrFJ = await QuickTokenpdEtkJB.balanceOf.call(addressC21IfA, {from: accounts[4]});

		assert.equal(uintMIPwrFJ, BigInt("0"))
		assert.equal(uintXOOzhTL, BigInt("0"))
		assert.equal(uinthQp7l0, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addresskhWICgH = accounts[3]
		const addressdBeDN3G = accounts[2]
		const QuickTokenS46AlEO = await QuickToken.new(addresskhWICgH, addressdBeDN3G, {from: accounts[4]});
		const uintzMyuhBb = BigInt("2001")
		const addressJqiV2I1 = accounts[2]
		const addressWKA37a = accounts[3]
		const addressJxPwedd = accounts[1]
		const addressv67URJQ = accounts[0]
		const addressEO5amuf = accounts[4]
		const uintnX3Tm2w = BigInt("85")
		const addressxU5DUZ5 = accounts[0]
		const addressmXbkXGg = accounts[3]
		const uintksffbD2 = BigInt("1691")
		const addressMMdrM4Y = accounts[3]
		const addressx5sNWuh = "0x0000000000000000000000000000000000000001"
		const addressvl5TTyX = accounts[3]
		const addressaFgVf3t = await QuickTokenS46AlEO.mint.call(addressJqiV2I1, uintzMyuhBb, {from: "0x0000000000000000000000000000000000000001"});
		const uintf8aZztL = await QuickTokenS46AlEO.allowance.call(addressJxPwedd, addressWKA37a, {from: accounts[0]});
		const uintohOPlL6 = await QuickTokenS46AlEO.allowance.call(addressEO5amuf, addressv67URJQ, {from: accounts[2]});
		const boollOkQODu = await QuickTokenS46AlEO.transferFrom.call(addressmXbkXGg, addressxU5DUZ5, uintnX3Tm2w, {from: accounts[3]});
		const booluWku5aO = await QuickTokenS46AlEO.approve.call(addressMMdrM4Y, uintksffbD2, {from: "0x0000000000000000000000000000000000000001"});
		const uintaKAyyPz = await QuickTokenS46AlEO.allowance.call(addressvl5TTyX, addressx5sNWuh, {from: accounts[5]});

		await expect(QuickTokenS46AlEO.mint.call(addressJqiV2I1, uintzMyuhBb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressIFgpTD = accounts[1]
		const addressc92wiSD = "0x0000000000000000000000000000000000000001"
		const QuickTokenDlQTOE9 = await QuickToken.new(addressIFgpTD, addressc92wiSD, {from: accounts[0]});
		const addressyLraX9 = accounts[4]
		const addressxmvIlUP = accounts[5]
		const uintgrzOXBS = BigInt("1726")
		const addresssi7nsHv = accounts[1]
		const uintaiv4pmt = BigInt("841")
		const addressHcRur9G = accounts[2]
		const uinteT9jEP = BigInt("1894")
		const addressKI3vIm = accounts[1]
		const uintt2sNGLy = await QuickTokenDlQTOE9.balanceOf.call(addressyLraX9, {from: accounts[1]});
		const addressac6C3Yt = await QuickTokenDlQTOE9.setMinter.call(addressxmvIlUP, {from: accounts[1]});
		const addresssnyCbsO = await QuickTokenDlQTOE9.mint.call(addresssi7nsHv, uintgrzOXBS, {from: accounts[4]});
		const addresssCeW9Mp = await QuickTokenDlQTOE9.mint.call(addressHcRur9G, uintaiv4pmt, {from: accounts[4]});
		const boolHMFHqd2 = await QuickTokenDlQTOE9.transfer.call(addressKI3vIm, uinteT9jEP, {from: accounts[3]});

		assert.equal(uintt2sNGLy, BigInt("0"))
		await expect(QuickTokenDlQTOE9.setMinter.call(addressxmvIlUP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressel1Zv6 = accounts[2]
		const addressPJXjHu = "0x0000000000000000000000000000000000000001"
		const QuickTokencjWJ1Z2 = await QuickToken.new(addressel1Zv6, addressPJXjHu, {from: "0x0000000000000000000000000000000000000001"});
		const addressaY8k4ZB = "0x0000000000000000000000000000000000000001"
		const addressJqrYeu = accounts[1]
		const addressyGw5W8s = accounts[2]
		const addressAV4704F = accounts[2]
		const addresssEwrX3b = accounts[3]
		const uintuyngv3F = BigInt("1513")
		const addresstW5Dg1D = accounts[0]
		const addressRfhgr5 = accounts[1]
		const uintR1DyHiT = BigInt("204")
		const addressdCmwFAA = accounts[3]
		const addressQCB2tLG = accounts[4]
		const uintfgGgTDc = await QuickTokencjWJ1Z2.balanceOf.call(addressaY8k4ZB, {from: accounts[0]});
		const uintiozUpWl = await QuickTokencjWJ1Z2.allowance.call(addressyGw5W8s, addressJqrYeu, {from: accounts[1]});
		const uintUGFqhAr = await QuickTokencjWJ1Z2.allowance.call(addresssEwrX3b, addressAV4704F, {from: accounts[1]});
		const boolkuSng43 = await QuickTokencjWJ1Z2.transferFrom.call(addressRfhgr5, addresstW5Dg1D, uintuyngv3F, {from: accounts[2]});
		const boolXVZwHfB = await QuickTokencjWJ1Z2.transfer.call(addressdCmwFAA, uintR1DyHiT, {from: accounts[4]});
		const addressrjkUIJw = await QuickTokencjWJ1Z2.setMinter.call(addressQCB2tLG, {from: accounts[3]});
	});

	it('test for QuickToken', async () => {
		const addressgAFS6py = accounts[0]
		const addressxF2s9ut = accounts[3]
		const QuickTokenoqCSgrQ = await QuickToken.new(addressgAFS6py, addressxF2s9ut, {from: accounts[5]});
		const uintPyWEKYf = BigInt("90")
		const addressaKFjBQL = accounts[1]
		const uintVfDAjI9 = BigInt("393")
		const addressg2baAjk = accounts[2]
		const address7hDxeF = accounts[1]
		const uintAoAKPGH = BigInt("1922")
		const addressNcFABOI = accounts[1]
		const addressGLQZJGG = accounts[2]
		const uintpx82z5a = BigInt("1988")
		const addressmIO1PNr = "0x0000000000000000000000000000000000000001"
		const boolYXJKWDd = await QuickTokenoqCSgrQ.approve.call(addressaKFjBQL, uintPyWEKYf, {from: accounts[2]});
		const boolH1puj37 = await QuickTokenoqCSgrQ.transferFrom.call(address7hDxeF, addressg2baAjk, uintVfDAjI9, {from: accounts[1]});
		const boolKB3coMV = await QuickTokenoqCSgrQ.transferFrom.call(addressGLQZJGG, addressNcFABOI, uintAoAKPGH, {from: accounts[0]});
		const boolAp0VQh2 = await QuickTokenoqCSgrQ.transfer.call(addressmIO1PNr, uintpx82z5a, {from: accounts[1]});

		assert.equal(boolYXJKWDd, true)
		await expect(QuickTokenoqCSgrQ.transferFrom.call(address7hDxeF, addressg2baAjk, uintVfDAjI9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresslaeNilj = accounts[3]
		const addresskyWvfy = accounts[1]
		const QuickTokenkaDbFwk = await QuickToken.new(addresslaeNilj, addresskyWvfy, {from: accounts[1]});
		const uintzmJzI6T = BigInt("559")
		const addressRaFFRFq = accounts[1]
		const uintvppttsf = BigInt("141")
		const addressFghGqgM = accounts[0]
		const addressMWKM6Ul = accounts[1]
		const address2ip6Qw = accounts[4]
		const uintG5cy0SC = BigInt("259")
		const addressBBIxs3z = accounts[0]
		const addressdvlZket = accounts[1]
		const addressTchaAMd = accounts[3]
		const uintNMADWLC = BigInt("1487")
		const addressNVKrPxT = accounts[3]
		const uintodC6FJu = BigInt("148")
		const addressD5wu3A = accounts[5]
		const uintlnUJ1l = BigInt("333")
		const addressmw7fsTe = accounts[2]
		const boolBhmvmcK = await QuickTokenkaDbFwk.transfer.call(addressRaFFRFq, uintzmJzI6T, {from: accounts[0]});
		const boolqkGcYB5 = await QuickTokenkaDbFwk.transferFrom.call(addressMWKM6Ul, addressFghGqgM, uintvppttsf, {from: "0x0000000000000000000000000000000000000001"});
		const addressO9SHc0Y = await QuickTokenkaDbFwk.setMinter.call(address2ip6Qw, {from: accounts[4]});
		const addressL12guZs = await QuickTokenkaDbFwk.mint.call(addressBBIxs3z, uintG5cy0SC, {from: accounts[1]});
		const uintYWOwTbT = await QuickTokenkaDbFwk.allowance.call(addressTchaAMd, addressdvlZket, {from: accounts[0]});
		const addressi699e4w = await QuickTokenkaDbFwk.mint.call(addressNVKrPxT, uintNMADWLC, {from: accounts[1]});
		const boolObYlycN = await QuickTokenkaDbFwk.approve.call(addressD5wu3A, uintodC6FJu, {from: accounts[1]});
		const boolwLGKI5 = await QuickTokenkaDbFwk.transfer.call(addressmw7fsTe, uintlnUJ1l, {from: accounts[3]});

		await expect(QuickTokenkaDbFwk.transfer.call(addressRaFFRFq, uintzmJzI6T, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresssqXUsTy = accounts[0]
		const addressq0Wcv2w = accounts[3]
		const QuickTokenoqCSgrQ = await QuickToken.new(addresssqXUsTy, addressq0Wcv2w, {from: accounts[5]});
		const uint35b0pZ = BigInt("90")
		const addressr1t87nb = accounts[1]
		const addressjeMurcK = "0x0000000000000000000000000000000000000001"
		const addresskcbsfYo = accounts[3]
		const uintnitrZg = BigInt("422")
		const addressDW1iYyG = accounts[0]
		const addressH8Fjhef = accounts[1]
		const boolYXJKWDd = await QuickTokenoqCSgrQ.approve.call(addressr1t87nb, uint35b0pZ, {from: accounts[2]});
		const uintoJWe2vW = await QuickTokenoqCSgrQ.allowance.call(addresskcbsfYo, addressjeMurcK, {from: accounts[0]});
		const boolvRTByI7 = await QuickTokenoqCSgrQ.transferFrom.call(addressH8Fjhef, addressDW1iYyG, uintnitrZg, {from: accounts[2]});

		assert.equal(boolYXJKWDd, true)
		assert.equal(uintoJWe2vW, BigInt("0"))
		await expect(QuickTokenoqCSgrQ.transferFrom.call(addressH8Fjhef, addressDW1iYyG, uintnitrZg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressJbzzAEJ = accounts[5]
		const addressaWvlSuC = accounts[0]
		const QuickTokenZKnkOOw = await QuickToken.new(addressJbzzAEJ, addressaWvlSuC, {from: accounts[4]});
		const addressPM4L9zX = accounts[3]
		const uintvy7jOSV = BigInt("32")
		const addressE93H3jZ = accounts[4]
		const addressIYGboNR = accounts[2]
		const addressILcE0Lp = accounts[5]
		const addressmf45sjr = accounts[4]
		const uintnhHpLs0 = BigInt("14")
		const addressxs4cgvt = accounts[0]
		const uintqXNsD1K = BigInt("1985")
		const addressCBpfmQB = accounts[5]
		const uintq59gg21 = BigInt("1891")
		const addresspSQIiz = accounts[2]
		const addressqgG7VQx = accounts[0]
		const uintNVmiSOS = BigInt("859")
		const addressS6KNjUH = accounts[0]
		const uintoJF1Hu = await QuickTokenZKnkOOw.balanceOf.call(addressPM4L9zX, {from: accounts[3]});
		const addressFWfhEM5 = await QuickTokenZKnkOOw.mint.call(addressE93H3jZ, uintvy7jOSV, {from: accounts[0]});
		const uintLhAWEbT = await QuickTokenZKnkOOw.balanceOf.call(addressIYGboNR, {from: accounts[3]});
		const uinttksF2l = await QuickTokenZKnkOOw.allowance.call(addressmf45sjr, addressILcE0Lp, {from: accounts[1]});
		const boolQuqQvor = await QuickTokenZKnkOOw.approve.call(addressxs4cgvt, uintnhHpLs0, {from: "0x0000000000000000000000000000000000000001"});
		const boolO6wosl6 = await QuickTokenZKnkOOw.approve.call(addressCBpfmQB, uintqXNsD1K, {from: accounts[3]});
		const addressdDjhGUe = await QuickTokenZKnkOOw.mint.call(addresspSQIiz, uintq59gg21, {from: accounts[4]});
		const addressNRh6rIu = await QuickTokenZKnkOOw.setMinter.call(addressqgG7VQx, {from: accounts[2]});
		const boolnvHddl = await QuickTokenZKnkOOw.approve.call(addressS6KNjUH, uintNVmiSOS, {from: accounts[2]});

		assert.equal(boolO6wosl6, true)
		assert.equal(boolQuqQvor, true)
		assert.equal(uintLhAWEbT, BigInt("0"))
		assert.equal(uintoJF1Hu, BigInt("0"))
		assert.equal(uinttksF2l, BigInt("0"))
		await expect(QuickTokenZKnkOOw.mint.call(addresspSQIiz, uintq59gg21, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})