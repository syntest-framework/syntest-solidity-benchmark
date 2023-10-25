const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringhvs6O3y = "EX1kjRzvjxstNRlfVrvZW"
		const stringHE9GwrG = "V5DBaiU5lqYtB0XfwRHF3sLbH4AQUVUelgvfq3STzpUoh1Dy"
		const uintC9d1av = BigInt("1654")
		const DipexxTETj6k = await Dipex.new(stringhvs6O3y, stringHE9GwrG, uintC9d1av, {from: accounts[1]});
		const uintYq7kV4 = BigInt("1904")
		const addressO0bZuGC = accounts[4]
		const uintVUTYL9q = BigInt("848")
		const addressb4Jo0kD = accounts[0]
		const addressKkZEVcM = accounts[2]
		const boolSvEK2Tk = await DipexxTETj6k.approveAndCall.call(addressO0bZuGC, uintYq7kV4, {from: accounts[0]});
		const boolAYeEwpe = await DipexxTETj6k.transferFrom.call(addressKkZEVcM, addressb4Jo0kD, uintVUTYL9q, {from: accounts[5]});

		await expect(DipexxTETj6k.approveAndCall.call(addressO0bZuGC, uintYq7kV4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringJvegj94 = "U9deOWHlWBROt1C8JSfUuub9VKw4ttiahJxnhDxtKgHqydW7l9Vkq0pJx9glaxWowiKYxchJaGvq"
		const stringw4t0QA = "R3jZRPXIisPPGGGf7olqLszPG4TrqKJaPp3UD3LXnqHG1UEFkSjdYtFGUgEFU8bdiVWmm24apWoyLBjheUnPb6I7nQt"
		const uintuKfIkXc = BigInt("731")
		const DipexWy8HPj3 = await Dipex.new(stringJvegj94, stringw4t0QA, uintuKfIkXc, {from: accounts[5]});
		const uintTAhfZPe = BigInt("490")
		const addressqWjbDvh = accounts[2]
		const uintg0uUCFX = BigInt("981")
		const addressz4jYUoc = accounts[3]
		const boolDWBaIYb = await DipexWy8HPj3.approve.call(addressqWjbDvh, uintTAhfZPe, {from: accounts[2]});
		const boolIOGpknG = await DipexWy8HPj3.approve.call(addressz4jYUoc, uintg0uUCFX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolDWBaIYb, true)
		assert.equal(boolIOGpknG, true)
	});

	it('test for Dipex', async () => {
		const stringIHd7JyI = "hhxTsnmi417uN3tQ7tQitO9LEGTjx1jO7528JXSqAgb5bxZ67ojzFl"
		const stringEinjEfZ = "PkSqzqmMwKESu692SPhPHqhpheDnaEKMLs5sXfHATBqcFhIUuH7YmDwUdtOh1YMFDNxDe6bgI"
		const uintYRJrc0T = BigInt("1235")
		const Dipexi1fthc0 = await Dipex.new(stringIHd7JyI, stringEinjEfZ, uintYRJrc0T, {from: accounts[4]});
		const uintNlbEFv = BigInt("319")
		const addressxdw4rLS = accounts[0]
		const uintJMNYNAh = BigInt("369")
		const addresseIzPCM = accounts[3]
		const addressgzaKHUL = accounts[0]
		const uintau9cV6o = BigInt("1873")
		const addressgZTwEkQ = accounts[2]
		const addressCBAWkzD = accounts[1]
		const uintzMTiENf = BigInt("829")
		const addressPP1DuWe = accounts[2]
		const boolJtucZqA = await Dipexi1fthc0.transfer.call(addressxdw4rLS, uintNlbEFv, {from: accounts[4]});
		const boolqznoBVj = await Dipexi1fthc0.transferFrom.call(addressgzaKHUL, addresseIzPCM, uintJMNYNAh, {from: accounts[3]});
		const boolAR7u9Gp = await Dipexi1fthc0.transferFrom.call(addressCBAWkzD, addressgZTwEkQ, uintau9cV6o, {from: accounts[5]});
		const boolmmriM0u = await Dipexi1fthc0.approve.call(addressPP1DuWe, uintzMTiENf, {from: accounts[2]});

		assert.equal(boolJtucZqA, true)
		await expect(Dipexi1fthc0.transferFrom.call(addressgzaKHUL, addresseIzPCM, uintJMNYNAh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringT5xsnLM = "NedhGCdBpkT7i5cwMhD6qhnf0sCFfoNmwo9Ft99"
		const stringg9hfhs1 = "8WJXsvatWcOOPCoKrwQ5tDw1vua5Lx5hwYEZjVcSfrMIFbvuQbjxk9Y0ekElZvRXA"
		const uintPZAaGM = BigInt("638")
		const Dipexsx1K45 = await Dipex.new(stringT5xsnLM, stringg9hfhs1, uintPZAaGM, {from: accounts[0]});
		const addressC04mIa6 = accounts[0]
		const uintAIXVuXC = BigInt("1040")
		const addressRIsABfK = accounts[0]
		const addresszUg6YuS = accounts[0]
		const uintbGUXyqI = BigInt("1106")
		const address3b61gP = accounts[2]
		const addressKUb3Wl9 = accounts[3]
		const uintGETwupg = BigInt("1878")
		const addressM2tMhln = accounts[1]
		const boolrgMLx4F = await Dipexsx1K45.transferownership.call(addressC04mIa6, {from: accounts[1]});
		const boolyV8zciK = await Dipexsx1K45.transferFrom.call(addresszUg6YuS, addressRIsABfK, uintAIXVuXC, {from: accounts[1]});
		const boolZd0ZDRg = await Dipexsx1K45.transferFrom.call(addressKUb3Wl9, address3b61gP, uintbGUXyqI, {from: accounts[3]});
		const bool5sgdYw = await Dipexsx1K45.approveAndCall.call(addressM2tMhln, uintGETwupg, {from: accounts[3]});

		await expect(Dipexsx1K45.transferownership.call(addressC04mIa6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringKM8M5bR = "Hu9vDBQg5WdvzyOUn"
		const stringLKZc4Ij = "L6W3IguedRmW4J9pL29VikkXeTwAnyLykVpOhTvc5LxIJ4vvb89iKwREAGhPD"
		const uintQZZv1Qt = BigInt("934")
		const DipexbUfWnsg = await Dipex.new(stringKM8M5bR, stringLKZc4Ij, uintQZZv1Qt, {from: accounts[0]});
		const addressasV7FEx = "0x0000000000000000000000000000000000000001"
		const uint9qwOza = BigInt("875")
		const addressZQkErmV = accounts[2]
		const uintif9f2DR = BigInt("1844")
		const addressj1aEkJD = accounts[2]
		const uintVDdMTn = BigInt("285")
		const addressAfZ10p1 = accounts[0]
		const uintiOyxA23 = BigInt("1445")
		const addressX0vJRY8 = accounts[2]
		const addresshWesXR = "0x0000000000000000000000000000000000000001"
		const addressymCsHp = accounts[2]
		const boolm9R7Vjb = await DipexbUfWnsg.transferownership.call(addressasV7FEx, {from: accounts[0]});
		const boolE9yrUf3 = await DipexbUfWnsg.transfer.call(addressZQkErmV, uint9qwOza, {from: accounts[0]});
		const boolrNKOUWJ = await DipexbUfWnsg.approveAndCall.call(addressj1aEkJD, uintif9f2DR, {from: accounts[3]});
		const boolqSRVQQJ = await DipexbUfWnsg.approve.call(addressAfZ10p1, uintVDdMTn, {from: accounts[3]});
		const bool3U3Y1L = await DipexbUfWnsg.transferFrom.call(addresshWesXR, addressX0vJRY8, uintiOyxA23, {from: accounts[3]});
		const boolUaJlc7G = await DipexbUfWnsg.transferownership.call(addressymCsHp, {from: accounts[3]});

		assert.equal(boolE9yrUf3, true)
		assert.equal(boolm9R7Vjb, true)
		await expect(DipexbUfWnsg.approveAndCall.call(addressj1aEkJD, uintif9f2DR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringXF42QHu = "9EYJRQQ48SvSvr8YjAuaPtZ9RsbVKdhCja6zNvxkhkooE5ipW1bCNgmkLFuLWr5QiG1CrIQZAAEjgKjFgI"
		const stringObQvBDO = "EGJmnKqncT"
		const uintodG8LPo = BigInt("634")
		const DipexQb2ASEo = await Dipex.new(stringXF42QHu, stringObQvBDO, uintodG8LPo, {from: accounts[2]});
		const uintPviQ8rw = BigInt("1480")
		const addressIyqOBt = accounts[3]
		const uintva2Vv9M = BigInt("938")
		const addressqkQBNN5 = accounts[0]
		const addressxNHGqas = accounts[3]
		const uintESYqQN8 = BigInt("688")
		const addresskkVAJSw = accounts[0]
		const address9DmgGk = accounts[4]
		const boolnMPyIo6 = await DipexQb2ASEo.approveAndCall.call(addressIyqOBt, uintPviQ8rw, {from: accounts[2]});
		const boolc1L1K34 = await DipexQb2ASEo.transferFrom.call(addressxNHGqas, addressqkQBNN5, uintva2Vv9M, {from: accounts[2]});
		const boolN9Jiakl = await DipexQb2ASEo.transferFrom.call(address9DmgGk, addresskkVAJSw, uintESYqQN8, {from: accounts[3]});

		assert.equal(boolnMPyIo6, true)
		await expect(DipexQb2ASEo.transferFrom.call(addressxNHGqas, addressqkQBNN5, uintva2Vv9M, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringXF42QHu = "9EYJRQQ48SvSvr8YjAuaPtZ9RsbVKdhCja6zNvxkhkooE5ipW1bCNgmkLFuLWr5QiG1CrIQZAAEjgKjFgI"
		const stringObQvBDO = "EGJmnKqncT"
		const uintDJ0TacT = BigInt("634")
		const DipexQb2ASEo = await Dipex.new(stringXF42QHu, stringObQvBDO, uintDJ0TacT, {from: accounts[2]});
		const uintlAUS94z = BigInt("678")
		const addressdYmf1O7 = accounts[4]
		const addressfFNosSn = accounts[4]
		const uintCHUH5p4 = BigInt("1480")
		const addressaCNoU4g = accounts[3]
		const uintZVxq1Aq = BigInt("1760")
		const addresshgKAMCS = accounts[1]
		const uintwbxLrOK = BigInt("938")
		const addressl06RQQX = accounts[0]
		const address3r7mCf = accounts[3]
		const uinthqDDN5B = BigInt("688")
		const addressv4v9JkP = accounts[0]
		const addressRnrFDJe = accounts[4]
		const boollqwV39p = await DipexQb2ASEo.transferFrom.call(addressfFNosSn, addressdYmf1O7, uintlAUS94z, {from: accounts[4]});
		const boolnMPyIo6 = await DipexQb2ASEo.approveAndCall.call(addressaCNoU4g, uintCHUH5p4, {from: accounts[2]});
		const boolmhaXClZ = await DipexQb2ASEo.transfer.call(addresshgKAMCS, uintZVxq1Aq, {from: "0x0000000000000000000000000000000000000001"});
		const boolc1L1K34 = await DipexQb2ASEo.transferFrom.call(address3r7mCf, addressl06RQQX, uintwbxLrOK, {from: accounts[2]});
		const boolN9Jiakl = await DipexQb2ASEo.transferFrom.call(addressRnrFDJe, addressv4v9JkP, uinthqDDN5B, {from: accounts[3]});

		await expect(DipexQb2ASEo.transferFrom.call(addressfFNosSn, addressdYmf1O7, uintlAUS94z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringWL8yPJ8 = "fLCi437ctlPQ6fvriH5x6eFFcvvXAanxsO5fGeF4geEQ91U6eALZzj"
		const string0i5tJ6 = "QOo5Ro3jTwvK8UE"
		const uintM4jbSb = BigInt("2000")
		const DipexD2meB0 = await Dipex.new(stringWL8yPJ8, string0i5tJ6, uintM4jbSb, {from: "0x0000000000000000000000000000000000000001"});
		const addressQl9lm5u = accounts[4]
		const addressGffjkRG = accounts[3]
		const uintNhQ7bL0 = BigInt("232")
		const addressNVcmK3 = accounts[1]
		const uintcbQbgH4 = BigInt("292")
		const addressyTmLd5b = accounts[5]
		const addressyBcUC0 = accounts[2]
		const uintcObloxc = BigInt("967")
		const addressr1wb4MI = accounts[3]
		const addressQLJr1Ln = accounts[0]
		const uintUJiqX36 = BigInt("86")
		const addressYemCxcj = accounts[3]
		const boolK1Ipibh = await DipexD2meB0.transferownership.call(addressQl9lm5u, {from: accounts[5]});
		const boolo9sUlTx = await DipexD2meB0.transferownership.call(addressGffjkRG, {from: accounts[1]});
		const boolSMWlgG2 = await DipexD2meB0.approveAndCall.call(addressNVcmK3, uintNhQ7bL0, {from: accounts[1]});
		const boolmsq8gLH = await DipexD2meB0.transferFrom.call(addressyBcUC0, addressyTmLd5b, uintcbQbgH4, {from: accounts[4]});
		const boolrY5pUUn = await DipexD2meB0.transferFrom.call(addressQLJr1Ln, addressr1wb4MI, uintcObloxc, {from: accounts[0]});
		const boolhCRnnVn = await DipexD2meB0.approveAndCall.call(addressYemCxcj, uintUJiqX36, {from: accounts[5]});
	});

	it('test for Dipex', async () => {
		const stringXF42QHu = "9EYJRQQ48SvSvr8YjAuaPtZ9RsbVKdhCja6zNvxkhkooE5ipW1bCNgmkLFuLWr5QiG1CrIQZAAEjgKjFgI"
		const stringObQvBDO = "EGJmnKqncT"
		const uintH4XYuYv = BigInt("634")
		const DipexQb2ASEo = await Dipex.new(stringXF42QHu, stringObQvBDO, uintH4XYuYv, {from: accounts[2]});
		const uintLIwSSt = BigInt("0")
		const addressnKPyVPN = accounts[2]
		const boolKQJ2gW7 = await DipexQb2ASEo.transfer.call(addressnKPyVPN, uintLIwSSt, {from: accounts[3]});

		assert.equal(boolKQJ2gW7, true)
	});

	it('test for Dipex', async () => {
		const stringXF42QHu = "9EYJRQQ48SvSvr8YjAuaPtZ9RsbVKdhCja6zNvxkhkooE5ipW1bCNgmkLFuLWr5QiG1CrIQZAAEjgKjFgI"
		const stringObQvBDO = "EGJmnKqncT"
		const uintIw7qYP = BigInt("634")
		const DipexQb2ASEo = await Dipex.new(stringXF42QHu, stringObQvBDO, uintIw7qYP, {from: accounts[2]});
		const uintuGDqVBv = BigInt("0")
		const addressXv4wrGT = accounts[5]
		const boolnMPyIo6 = await DipexQb2ASEo.approveAndCall.call(addressXv4wrGT, uintuGDqVBv, {from: accounts[2]});

		assert.equal(boolnMPyIo6, true)
	});
})