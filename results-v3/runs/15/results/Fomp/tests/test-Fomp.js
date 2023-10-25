const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressPhFvhKM = accounts[5]
		const FompNUrSdhq = await Fomp.new(addressPhFvhKM, {from: accounts[4]});
		const uintAGyKuty = BigInt("1825")
		const addressUuTMdu3 = accounts[0]
		const addressAEWmUuB = accounts[4]
		const uintYLvHK3Z = BigInt("882")
		const addresspkI09d4 = accounts[2]
		const addresshXWx5tB = accounts[1]
		const addresskoKcdWH = accounts[4]
		const boolm6AWMWM = await FompNUrSdhq.transfer.call(addressUuTMdu3, uintAGyKuty, {from: accounts[1]});
		const uint96P28tZvn = await FompNUrSdhq.getCurrentVotes.call(addressAEWmUuB, {from: accounts[0]});
		const boolSFfobr = await FompNUrSdhq.transferFrom.call(addresshXWx5tB, addresspkI09d4, uintYLvHK3Z, {from: accounts[3]});
		const uint5xQbpZ = await FompNUrSdhq.balanceOf.call(addresskoKcdWH, {from: accounts[3]});

		await expect(FompNUrSdhq.transfer.call(addressUuTMdu3, uintAGyKuty, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressMJB6En = accounts[2]
		const FompyktCSMx = await Fomp.new(addressMJB6En, {from: accounts[0]});
		const addressaBzjkZw = accounts[2]
		const addressLSymX1a = accounts[3]
		const uintvlmoA6u = BigInt("7")
		const addressuGGC66s = accounts[1]
		const addressfSsFFtl = accounts[3]
		const addressqmvyOGm = accounts[1]
		const addresscuHbG4H = await FompyktCSMx.delegate.call(addressaBzjkZw, {from: accounts[0]});
		const uint96EUIIJYr = await FompyktCSMx.getCurrentVotes.call(addressLSymX1a, {from: accounts[3]});
		const boolm4BTKLE = await FompyktCSMx.transferFrom.call(addressfSsFFtl, addressuGGC66s, uintvlmoA6u, {from: accounts[1]});
		const addresscIzkgoU = await FompyktCSMx.delegate.call(addressqmvyOGm, {from: accounts[5]});

		assert.equal(uint96EUIIJYr, BigInt("0"))
		await expect(FompyktCSMx.transferFrom.call(addressfSsFFtl, addressuGGC66s, uintvlmoA6u, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressXZSJ1uE = accounts[4]
		const FompyBtsv5s = await Fomp.new(addressXZSJ1uE, {from: accounts[0]});
		const bytemIGBICw = "0x17050c0a03151c0b0a07140403101b0906040616020b120908111b0711062017"
		const byteEja05kH = "0x0d181109130c10131b031c0407032017160e111a090a130d0d181920080e0f01"
		const uintpMaVExE = BigInt("142")
		const uintJXB2vPj = BigInt("1628")
		const uintWz1UvXw = BigInt("1225")
		const addresskKqw8gY = accounts[3]
		const addressHBgMvEz = accounts[4]
		const addresscREQHF = accounts[4]
		const addresscv0iKj0 = accounts[1]
		const uintWVsiCiD = BigInt("1055")
		const addressXeITIsi = accounts[0]
		const uintOUM0phW = BigInt("811")
		const addressaRi3X93 = accounts[3]
		const addressJ6mKHGZ = await FompyBtsv5s.delegateBySig.call(addresskKqw8gY, uintWz1UvXw, uintJXB2vPj, uintpMaVExE, byteEja05kH, bytemIGBICw, {from: accounts[2]});
		const uintgQJQ95 = await FompyBtsv5s.balanceOf.call(addressHBgMvEz, {from: accounts[2]});
		const uintUfMov7D = await FompyBtsv5s.allowance.call(addresscv0iKj0, addresscREQHF, {from: accounts[4]});
		const boolOGMIOri = await FompyBtsv5s.transfer.call(addressXeITIsi, uintWVsiCiD, {from: accounts[4]});
		const uint96ZrFfMtv = await FompyBtsv5s.getPriorVotes.call(addressaRi3X93, uintOUM0phW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FompyBtsv5s.delegateBySig.call(addresskKqw8gY, uintWz1UvXw, uintJXB2vPj, uintpMaVExE, byteEja05kH, bytemIGBICw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressoKfSFNK = accounts[4]
		const FompO1U2x7r = await Fomp.new(addressoKfSFNK, {from: accounts[3]});
		const addresseJ9FQwb = accounts[5]
		const byteozPVIl = "0x141a0c081a030812181116171c201b1b0f0f1b08031513011c040c031c1d1608"
		const byteHbQkK7H = "0x160b121706130a050b1b1d060a0b021817141307131c150d1610131f00161b19"
		const uintbzFqj1W = BigInt("69")
		const uintpIMHpac = BigInt("1683")
		const uintOurkeJI = BigInt("1113")
		const addressglsHyoX = "0x0000000000000000000000000000000000000001"
		const uintEIpBB45 = BigInt("1410")
		const addressUOedUwa = accounts[5]
		const addressUFuWKb = accounts[4]
		const uintPRj7Ejd = BigInt("1611")
		const addressD4lGzuh = accounts[1]
		const uintlNkkNdl = await FompO1U2x7r.balanceOf.call(addresseJ9FQwb, {from: accounts[2]});
		const addresszpjwQyw = await FompO1U2x7r.delegateBySig.call(addressglsHyoX, uintOurkeJI, uintpIMHpac, uintbzFqj1W, byteHbQkK7H, byteozPVIl, {from: accounts[2]});
		const boolIovyR2X = await FompO1U2x7r.transferFrom.call(addressUFuWKb, addressUOedUwa, uintEIpBB45, {from: accounts[3]});
		const uint96H1818cj = await FompO1U2x7r.getPriorVotes.call(addressD4lGzuh, uintPRj7Ejd, {from: accounts[0]});

		assert.equal(uintlNkkNdl, BigInt("0"))
		await expect(FompO1U2x7r.delegateBySig.call(addressglsHyoX, uintOurkeJI, uintpIMHpac, uintbzFqj1W, byteHbQkK7H, byteozPVIl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressNbOhxd = accounts[1]
		const FomppIUxYjV = await Fomp.new(addressNbOhxd, {from: accounts[1]});
		const uintTnEfV7Y = BigInt("1287")
		const addressyrWrimB = accounts[2]
		const addressOswR0RU = accounts[4]
		const addressnkLyXg = accounts[3]
		const uintdUfujle = BigInt("1710")
		const addressVYISw9p = accounts[2]
		const addressgiaUJ3 = accounts[2]
		const boolcWfzoKk = await FomppIUxYjV.approve.call(addressyrWrimB, uintTnEfV7Y, {from: accounts[3]});
		const uintb02SGfl = await FomppIUxYjV.allowance.call(addressnkLyXg, addressOswR0RU, {from: accounts[0]});
		const boold70ly33 = await FomppIUxYjV.transferFrom.call(addressgiaUJ3, addressVYISw9p, uintdUfujle, {from: accounts[3]});

		assert.equal(boolcWfzoKk, true)
		assert.equal(uintb02SGfl, BigInt("0"))
		await expect(FomppIUxYjV.transferFrom.call(addressgiaUJ3, addressVYISw9p, uintdUfujle, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressNky20qN = accounts[1]
		const FomppIUxYjV = await Fomp.new(addressNky20qN, {from: accounts[1]});
		const uintfzwjO1y = BigInt("1287")
		const addressehAqzws = accounts[2]
		const uintyDJxLN8 = BigInt("937")
		const addressDJ6jRZx = accounts[1]
		const addresshFaSNCU = accounts[5]
		const address5UQqON = accounts[1]
		const addressNBYNgza = accounts[4]
		const uintiHsfNC = BigInt("1710")
		const addressSDwuxPa = accounts[2]
		const addresssUcWSho = accounts[2]
		const boolcWfzoKk = await FomppIUxYjV.approve.call(addressehAqzws, uintfzwjO1y, {from: accounts[3]});
		const uint96n7F99t4 = await FomppIUxYjV.getPriorVotes.call(addressDJ6jRZx, uintyDJxLN8, {from: accounts[4]});
		const uintb02SGfl = await FomppIUxYjV.allowance.call(address5UQqON, addresshFaSNCU, {from: accounts[0]});
		const uintewXpdfy = await FomppIUxYjV.balanceOf.call(addressNBYNgza, {from: accounts[1]});
		const boold70ly33 = await FomppIUxYjV.transferFrom.call(addresssUcWSho, addressSDwuxPa, uintiHsfNC, {from: accounts[3]});

		assert.equal(boolcWfzoKk, true)
		assert.equal(uint96n7F99t4, BigInt("0"))
		assert.equal(uintb02SGfl, BigInt("0"))
		assert.equal(uintewXpdfy, BigInt("0"))
		await expect(FomppIUxYjV.transferFrom.call(addresssUcWSho, addressSDwuxPa, uintiHsfNC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressswrpd0 = accounts[2]
		const FompKkCJjFn = await Fomp.new(addressswrpd0, {from: accounts[5]});
		const uintMhjunrg = BigInt("1501")
		const addressjfteuFA = accounts[1]
		const addressAOTrLVG = "0x0000000000000000000000000000000000000001"
		const uintzYEeY29 = BigInt("707")
		const addressXdlpYNv = accounts[0]
		const boolyJrYvl5 = await FompKkCJjFn.approve.call(addressjfteuFA, uintMhjunrg, {from: accounts[0]});
		const addresskMnCgyY = await FompKkCJjFn.delegate.call(addressAOTrLVG, {from: accounts[2]});
		const uint96zYjNeB = await FompKkCJjFn.getPriorVotes.call(addressXdlpYNv, uintzYEeY29, {from: accounts[4]});

		assert.equal(boolyJrYvl5, true)
		assert.equal(uint96zYjNeB, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressb73j62J = accounts[4]
		const Fompd706m6j = await Fomp.new(addressb73j62J, {from: "0x0000000000000000000000000000000000000001"});
		const bytea3NXQlP = "0x1504061e14081801020a18091e0314000b0906010b0719100415010b16181a10"
		const byteuaYNbrJ = "0x16150f101f03031e190e0d07021b0f080f0a051a0c0f03121a0b1509060e1d05"
		const uintGct035 = BigInt("158")
		const uintJ2MZDPL = BigInt("700")
		const uintLB4KGjr = BigInt("347")
		const addressHeRnpeY = accounts[2]
		const uintDb9HKE8 = BigInt("731")
		const addresszvC1nYZ = accounts[4]
		const addressXe1Mv2T = accounts[4]
		const addressgBVMv7M = accounts[4]
		const uintbrTyaDe = BigInt("440")
		const addressxS4wvnS = accounts[4]
		const addressBHSFxLD = await Fompd706m6j.delegateBySig.call(addressHeRnpeY, uintLB4KGjr, uintJ2MZDPL, uintGct035, byteuaYNbrJ, bytea3NXQlP, {from: accounts[5]});
		const boolcKXG8Yq = await Fompd706m6j.transfer.call(addresszvC1nYZ, uintDb9HKE8, {from: accounts[5]});
		const addressKM6vEuY = await Fompd706m6j.delegate.call(addressXe1Mv2T, {from: accounts[2]});
		const uintLOq05Rv = await Fompd706m6j.balanceOf.call(addressgBVMv7M, {from: accounts[2]});
		const boolLhpstM0 = await Fompd706m6j.transfer.call(addressxS4wvnS, uintbrTyaDe, {from: accounts[3]});
	});

	it('test for Fomp', async () => {
		const addresseW14zXR = accounts[2]
		const FompKkCJjFn = await Fomp.new(addresseW14zXR, {from: accounts[5]});
		const uintL1B1Cax = BigInt("226")
		const addressul10P2K = accounts[0]
		const uint96zYjNeB = await FompKkCJjFn.getPriorVotes.call(addressul10P2K, uintL1B1Cax, {from: accounts[4]});

		assert.equal(uint96zYjNeB, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressBfH7QZZ = accounts[2]
		const FompKkCJjFn = await Fomp.new(addressBfH7QZZ, {from: accounts[5]});
		const bytefHSRL5i = "0x1c08071a0c0f0c1d1e0a1b091b140f000c1c182007040d18020a190112190807"
		const byteNIBmViv = "0x000806011e1f00160a040e0e0d191b041f190808080d1e1a0e11121a1d1b0201"
		const uintZd12MbB = BigInt("28")
		const uintcAPjnye = BigInt("880")
		const uintoEMuYfb = BigInt("1689")
		const addressIC9xFuC = accounts[1]
		const addressJTNCPO5 = "0x0000000000000000000000000000000000000000"
		const uintmNRiSzU = BigInt("707")
		const addressB5jrUy = accounts[0]
		const uintIt5Vatw = BigInt("1405")
		const addressjTwoCyR = accounts[1]
		const addressfcGm7C = await FompKkCJjFn.delegateBySig.call(addressIC9xFuC, uintoEMuYfb, uintcAPjnye, uintZd12MbB, byteNIBmViv, bytefHSRL5i, {from: accounts[1]});
		const addresskMnCgyY = await FompKkCJjFn.delegate.call(addressJTNCPO5, {from: accounts[2]});
		const uint96zYjNeB = await FompKkCJjFn.getPriorVotes.call(addressB5jrUy, uintmNRiSzU, {from: accounts[4]});
		const boolszqnFg = await FompKkCJjFn.approve.call(addressjTwoCyR, uintIt5Vatw, {from: accounts[0]});

		await expect(FompKkCJjFn.delegateBySig.call(addressIC9xFuC, uintoEMuYfb, uintcAPjnye, uintZd12MbB, byteNIBmViv, bytefHSRL5i, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})