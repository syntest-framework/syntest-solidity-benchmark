const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const string5KKJIz = "LhiR5YspfnaJvnBsPfMHwfFngpJFWKIFbNL"
		const stringY3FnUzj = "DnKMY64SuMVuk6aoAO7QaFK2zh1RUNk9z0cb2npzrdPIRy56rHKfttbiqD27kANFzkrgHcFuV4b2N4YI9Q2fC"
		const uintZHgbDLe = BigInt("1118")
		const uintk6T2syT = BigInt("252")
		const XenoFelixOWaF2wy = await XenoFelix.new(string5KKJIz, stringY3FnUzj, uintZHgbDLe, uintk6T2syT, {from: accounts[3]});
		const booltdKdW02 = await XenoFelixOWaF2wy.acceptOwnership.call({from: accounts[3]});
		await XenoFelixOWaF2wy.onlyPauser.call({from: accounts[3]});

		await expect(XenoFelixOWaF2wy.acceptOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringXeE2x9j = "ktMTu5fMru4qfDI1RnTPr7tXuJQ2OvA4Cdckk00LU89jvNdN"
		const stringriLVkyS = "4Qzi8P1Q1HaTh24sFXNr7utIh15EXr03K5CSauhrGXqf8roC3skdXXRQ2O69"
		const uintfdm6cCQ = BigInt("70")
		const XenoFelixtZTqcB = await XenoFelix.new(stringXeE2x9j, stringriLVkyS, uintfdm6cCQ, {from: accounts[3]});
		const uintOx6tRvZ = BigInt("426")
		const uintJnlQRJG = BigInt("502")
		const addressnfYwXgM = accounts[0]
		const addressmlNtB94 = "0x0000000000000000000000000000000000000001"
		const addressWU85gsj = accounts[4]
		const uintc2kQFuI = BigInt("1841")
		const uintPyzIKg7 = BigInt("1958")
		const addressN9Ota65 = accounts[5]
		const boollINgBiA = await XenoFelixtZTqcB.acceptOwnership.call({from: accounts[3]});
		await XenoFelixtZTqcB.whenPaused.call({from: accounts[1]});
		const boolgeuzjEk = await XenoFelixtZTqcB.transferWithLock.call(addressnfYwXgM, uintJnlQRJG, uintOx6tRvZ, {from: accounts[0]});
		const uint256FqzIgVE = await XenoFelixtZTqcB.balanceOf.call(addressmlNtB94, {from: accounts[2]});
		const boolu5sIH59 = await XenoFelixtZTqcB.unfreezeAccount.call(addressWU85gsj, {from: accounts[5]});
		const boolbtNn2g = await XenoFelixtZTqcB.lock.call(addressN9Ota65, uintPyzIKg7, uintc2kQFuI, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringHOnpRHt = "YOg1dJfXvDJIhUhkQU8mPgy65NYFFyLaMJ2f1D9vxet"
		const stringlL2hyTX = "JD8RVrGqmOHJYU7q87MDbiFUpyrJRybhZrjtoS78NWGccCgWJ6135AwU4aANbPMaYHWqFVOoM67zjChL"
		const uintImBn0qu = BigInt("52")
		const XenoFelixtnROZaI = await XenoFelix.new(stringHOnpRHt, stringlL2hyTX, uintImBn0qu, {from: accounts[5]});
		const uintxhqZdf = BigInt("733")
		const addresskm4wFYc = accounts[2]
		const uintjzLlfsM = BigInt("1252")
		const addressnH4AunG = accounts[0]
		const addressvYSU24c = accounts[4]
		const addressmbdgQxU = accounts[3]
		await XenoFelixtnROZaI.onlyOwner.call({from: accounts[0]});
		const boolQBELgL = await XenoFelixtnROZaI.decreaseAllowance.call(addresskm4wFYc, uintxhqZdf, {from: accounts[2]});
		const boolnUywkpU = await XenoFelixtnROZaI.transfer.call(addressnH4AunG, uintjzLlfsM, {from: accounts[1]});
		const boolPq7PX98 = await XenoFelixtnROZaI.paused.call({from: accounts[2]});
		const uint256bz3o1Ko = await XenoFelixtnROZaI.allowance.call(addressmbdgQxU, addressvYSU24c, {from: accounts[0]});
		await XenoFelixtnROZaI.renouncePauser.call({from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringTHuuWpQ = "DKg3pzbocM9eibe84bmf36osCbnYLS9i"
		const stringyDKzNbb = "fKdDxIssmJW6aQjwGUTcrZIbpGoOapAeQOYQPn1DNn6DVmkTaoSdI"
		const uintK39N6Y3 = BigInt("1097")
		const uintyrdMb0i = BigInt("72")
		const XenoFelixtgWphhv = await XenoFelix.new(stringTHuuWpQ, stringyDKzNbb, uintK39N6Y3, uintyrdMb0i, {from: accounts[1]});
		const uinttKmQwTC = BigInt("341")
		const addressebK3171 = accounts[3]
		const uintc1VEdze = BigInt("942")
		const addressNGZUZNt = "0x0000000000000000000000000000000000000001"
		const boolJayawnG = await XenoFelixtgWphhv.unlock.call(addressebK3171, uinttKmQwTC, {from: accounts[4]});
		const addressRwvjOnV = await XenoFelixtgWphhv.burnFrom.call(addressNGZUZNt, uintc1VEdze, {from: accounts[0]});
		const stringXMq7loq = await XenoFelixtgWphhv.symbol.call({from: accounts[4]});

		await expect(XenoFelixtgWphhv.unlock.call(addressebK3171, uinttKmQwTC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringu9tDURJ = "BrgOdUkNapl9g9u"
		const stringr4pbLVi = "v1RzisnfnahuPksvMlr8f76G9fi4SNOhbiBbayvyWrrifU9qIyGohrtqXIKVGHWYTX1uqfeyUPPbsIhS0QW6AFF6DzHWKd8"
		const uintXadol6F = BigInt("29")
		const XenoFelixiegDMIg = await XenoFelix.new(stringu9tDURJ, stringr4pbLVi, uintXadol6F, {from: "0x0000000000000000000000000000000000000001"});
		const uintS5gP4LC = BigInt("1921")
		const uintoJ4csS2 = BigInt("436")
		const addressQInn40g = accounts[0]
		const addresssxt5v8F = accounts[0]
		const uintbWCWw6l = BigInt("328")
		const address9M1tAT = accounts[3]
		const addressfPRkMv8 = accounts[1]
		const boolJc4XqWA = await XenoFelixiegDMIg.transferWithLock.call(addressQInn40g, uintoJ4csS2, uintS5gP4LC, {from: accounts[2]});
		const address96RbaE = await XenoFelixiegDMIg.addPauser.call(addresssxt5v8F, {from: accounts[4]});
		const boolqbqiRru = await XenoFelixiegDMIg.transferFrom.call(addressfPRkMv8, address9M1tAT, uintbWCWw6l, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const XenoFelixjlcq3vf = await XenoFelix.new({from: accounts[3]});
		const addressnsh74bi = accounts[0]
		const uintYuUXBoB = BigInt("959")
		const addressay3bvl = accounts[1]
		const addressTL3ztqS = accounts[2]
		const addressycutaPw = await XenoFelixjlcq3vf.removePauser.call(addressnsh74bi, {from: accounts[4]});
		await XenoFelixjlcq3vf.onlyNewOwner.call({from: accounts[4]});
		const boolJ9B0zjE = await XenoFelixjlcq3vf.transferFrom.call(addressTL3ztqS, addressay3bvl, uintYuUXBoB, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringM3c0Lib = "b5QadHdjZ70jmIGwVjLxjfB8f47vuccFuIxbWj3rHxlXwgfP0l5R81hxnQSxVbQQqEeo8RDhgYG3zqV"
		const stringzSY4mk = "Oe5qx08epRWxTPtklMqKU4w"
		const uintROx3pVX = BigInt("58")
		const XenoFelixwUY21iK = await XenoFelix.new(stringM3c0Lib, stringzSY4mk, uintROx3pVX, {from: accounts[0]});
		const uinteKdJNa = BigInt("1959")
		const addressPv79BbJ = accounts[1]
		const addressyw2MU8S = accounts[1]
		const uintwceE0ot = BigInt("790")
		const addressRuLqq5A = accounts[3]
		const addressfNijpFI = accounts[0]
		const boolh358kgi = await XenoFelixwUY21iK.transfer.call(addressPv79BbJ, uinteKdJNa, {from: accounts[1]});
		const uint256JggVb1c = await XenoFelixwUY21iK.balanceOf.call(addressyw2MU8S, {from: accounts[3]});
		const boolSvpD4Z = await XenoFelixwUY21iK.transferFrom.call(addressfNijpFI, addressRuLqq5A, uintwceE0ot, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringCCjRqPS = "KUcWLpTDgFebHCwRekXk6Ddks8ixPDYNtKiMa69"
		const stringMxbMXKK = "xWLqIShEjIjLaM3N9yjkrs2VwRRh5pKKnLrLSBl3UQCX1YHNx8ypkaARpgYoGyGdo4UP2ZisfYR9fVqkRzf51"
		const uintnxoZwbc = BigInt("222")
		const XenoFelixMIa9w88 = await XenoFelix.new(stringCCjRqPS, stringMxbMXKK, uintnxoZwbc, {from: accounts[4]});
		const uintIKJA3cL = BigInt("1361")
		const addressnJ15eTe = accounts[0]
		const uintkEmxqf4 = BigInt("50")
		const addressfT40Lew = accounts[3]
		await XenoFelixMIa9w88.unpause.call({from: accounts[0]});
		const boolfe8pz9 = await XenoFelixMIa9w88.burnOwner.call(addressnJ15eTe, uintIKJA3cL, {from: accounts[1]});
		await XenoFelixMIa9w88.onlyNewOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const stringZMNR9p = await XenoFelixMIa9w88.symbol.call({from: accounts[2]});
		const boole6ppEHw = await XenoFelixMIa9w88.unlock.call(addressfT40Lew, uintkEmxqf4, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringtNeugEr = "jrFfC2DVXKETuIAfKiInLo2LFrR"
		const stringSFBRnS = "z8leROmKO2i9cEQ"
		const uintb04PSu9 = BigInt("30")
		const XenoFelixsBawbOH = await XenoFelix.new(stringtNeugEr, stringSFBRnS, uintb04PSu9, {from: accounts[1]});
		const addressttmT2f8 = accounts[3]
		const addressUliyGp = accounts[4]
		const addressAg2zfUS = accounts[5]
		const uintUMjSmr0 = BigInt("385")
		const uinto5krBxG = BigInt("781")
		const addressdWU5WWp = accounts[1]
		const addressMdAq7V = accounts[2]
		const addressu8Ums2l = await XenoFelixsBawbOH.transferOwnership.call(addressttmT2f8, {from: accounts[3]});
		await XenoFelixsBawbOH.onlyNewOwner.call({from: accounts[4]});
		const addressWlUfjU2 = await XenoFelixsBawbOH.notFrozenAndTransaction.call(addressAg2zfUS, addressUliyGp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256zqblbGA = await XenoFelixsBawbOH.burn.call(uintUMjSmr0, {from: accounts[1]});
		const boolCJxeqMt = await XenoFelixsBawbOH.transferFrom.call(addressMdAq7V, addressdWU5WWp, uinto5krBxG, {from: accounts[0]});
		await XenoFelixsBawbOH.onlyNewOwner.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringg5GzWQG = "u2EK6TzaNmrGIgH74dU8qihtroWfzycFFQ9Po1MW146SADS5CXvuWgfg3FDhEcnL2rvddDbh1kptjgLMmhHgACT3SgN1VsUt"
		const stringTVbdkLx = "w1MivherYd0WKdXAvjpmMtrA8NeyVdegvQEtSfGqwAMjY9zxhFbfTuyM9zjUwTu8TLaO3wIHVx"
		const uintXzdj97z = BigInt("154")
		const XenoFelixdHiIfsF = await XenoFelix.new(stringg5GzWQG, stringTVbdkLx, uintXzdj97z, {from: accounts[2]});
		const addressWLwlDZ1 = accounts[3]
		const addresskTPirkx = accounts[4]
		const uintMYrx8P = BigInt("93")
		const addressuurMavc = accounts[2]
		const addressfsqFZhp = "0x0000000000000000000000000000000000000001"
		const addressIibgLhf = accounts[2]
		const addressaujN6og = "0x0000000000000000000000000000000000000001"
		const uint8ZzmpGjm = await XenoFelixdHiIfsF.decimals.call({from: accounts[2]});
		const uint256bgieLTl = await XenoFelixdHiIfsF.allowance.call(addresskTPirkx, addressWLwlDZ1, {from: accounts[0]});
		const boolpLrzrgk = await XenoFelixdHiIfsF.paused.call({from: accounts[4]});
		const boolz11tib0 = await XenoFelixdHiIfsF.transferFrom.call(addressfsqFZhp, addressuurMavc, uintMYrx8P, {from: accounts[0]});
		const uint256rITUFB = await XenoFelixdHiIfsF.allowance.call(addressaujN6og, addressIibgLhf, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintNabVhCE = BigInt("1491")
		const uintZrCA9tf = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintNabVhCE, uintZrCA9tf, {from: accounts[1]});
		const uintEZyU7sJ = BigInt("1734")
		const addressje0CVUS = accounts[4]
		const uintLw3tCMU = BigInt("1619")
		const addresseJevhpd = accounts[0]
		const addressBSpsS8H = accounts[0]
		const boolw3VmfxT = await XenoFelixmRygWjy.approve.call(addressje0CVUS, uintEZyU7sJ, {from: accounts[3]});
		const uint256jJ4PXET = await XenoFelixmRygWjy.totalSupply.call({from: accounts[4]});
		const boolHshNaxq = await XenoFelixmRygWjy.transferFrom.call(addressBSpsS8H, addresseJevhpd, uintLw3tCMU, {from: accounts[0]});
		const booloaUkEP5 = await XenoFelixmRygWjy.paused.call({from: accounts[0]});

		assert.equal(boolw3VmfxT, true)
		assert.equal(uint256jJ4PXET, BigInt("30606767420068687074463810571134946655572653780255290065594404746240100139008"))
		await expect(XenoFelixmRygWjy.transferFrom.call(addressBSpsS8H, addresseJevhpd, uintLw3tCMU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintXeWYQxB = BigInt("1491")
		const uinte6WAyVX = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintXeWYQxB, uinte6WAyVX, {from: accounts[1]});
		const uints9LFnAV = BigInt("633")
		const uintcRZnC5v = BigInt("1734")
		const addressflP0udK = accounts[5]
		const uintICu0UJj = BigInt("1619")
		const addressd9YwEFW = accounts[0]
		const addressoBlF1kP = accounts[0]
		const uint256avcU4NR = await XenoFelixmRygWjy.burn.call(uints9LFnAV, {from: accounts[2]});
		const boolw3VmfxT = await XenoFelixmRygWjy.approve.call(addressflP0udK, uintcRZnC5v, {from: accounts[3]});
		const uint256jJ4PXET = await XenoFelixmRygWjy.totalSupply.call({from: accounts[4]});
		const boolHshNaxq = await XenoFelixmRygWjy.transferFrom.call(addressoBlF1kP, addressd9YwEFW, uintICu0UJj, {from: accounts[0]});
		const booloaUkEP5 = await XenoFelixmRygWjy.paused.call({from: accounts[0]});

		await expect(XenoFelixmRygWjy.burn.call(uints9LFnAV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringHCHuZvS = "i6mVh1rQaKCcxillentce1RixyjhcDmVl8TpGzwAGERLMvE4eKnlJv"
		const stringryNNIQT = "p32WCi0KE6B9ylIvFC3BevzrILSe8j2duX8g4tlvsem5HuIsNlfrGaFJXGXlBj5Es9xGNNEDNN78PnUWfTzbuWW8Gdzjx"
		const uintQywKK6Y = BigInt("81")
		const uintGVt4ydX = BigInt("185")
		const XenoFelixUhFbH4b = await XenoFelix.new(stringHCHuZvS, stringryNNIQT, uintQywKK6Y, uintGVt4ydX, {from: "0x0000000000000000000000000000000000000001"});
		const addressULpYJUS = accounts[4]
		const uintpR6ytb2 = BigInt("1146")
		const addressPQh7LF8 = accounts[4]
		const uint3cf4s8 = BigInt("1774")
		const addressfqu5nb = accounts[2]
		const stringjw1ZV0Z = await XenoFelixUhFbH4b.name.call({from: accounts[4]});
		const boolRmqxslg = await XenoFelixUhFbH4b.isOwner.call(addressULpYJUS, {from: accounts[4]});
		const boolaqfr5QW = await XenoFelixUhFbH4b.burnOwner.call(addressPQh7LF8, uintpR6ytb2, {from: accounts[1]});
		const boolCPV43tk = await XenoFelixUhFbH4b.transfer.call(addressfqu5nb, uint3cf4s8, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintmXMA7J2 = BigInt("1491")
		const uintJ1J5hZ5 = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintmXMA7J2, uintJ1J5hZ5, {from: accounts[1]});
		const uint2cRhr9 = BigInt("1734")
		const addressJqynpg5 = accounts[4]
		const addressCsYnkD = accounts[2]
		const uintRFHr59 = BigInt("1616")
		const addresspxT2oSd = accounts[0]
		const addressHLjk08q = accounts[0]
		const boolw3VmfxT = await XenoFelixmRygWjy.approve.call(addressJqynpg5, uint2cRhr9, {from: accounts[3]});
		const uint256jJ4PXET = await XenoFelixmRygWjy.totalSupply.call({from: accounts[4]});
		const uint256unbCtjk = await XenoFelixmRygWjy.balanceOf.call(addressCsYnkD, {from: accounts[1]});
		const boolHshNaxq = await XenoFelixmRygWjy.transferFrom.call(addressHLjk08q, addresspxT2oSd, uintRFHr59, {from: accounts[0]});
		const booloaUkEP5 = await XenoFelixmRygWjy.paused.call({from: accounts[0]});

		assert.equal(boolw3VmfxT, true)
		assert.equal(uint256jJ4PXET, BigInt("30606767420068687074463810571134946655572653780255290065594404746240100139008"))
		assert.equal(uint256unbCtjk, BigInt("0"))
		await expect(XenoFelixmRygWjy.transferFrom.call(addressHLjk08q, addresspxT2oSd, uintRFHr59, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintMbd7SV9 = BigInt("1491")
		const uintkyfNx6I = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintMbd7SV9, uintkyfNx6I, {from: accounts[1]});
		const uintLMatLco = BigInt("1734")
		const addressXiXdKr6 = accounts[4]
		const addressFKJf1vn = accounts[2]
		const uintFjoZqJq = BigInt("1616")
		const addressrlWBKYY = accounts[0]
		const addresse9vURXU = accounts[0]
		const boolw3VmfxT = await XenoFelixmRygWjy.approve.call(addressXiXdKr6, uintLMatLco, {from: accounts[3]});
		const uint256jJ4PXET = await XenoFelixmRygWjy.totalSupply.call({from: accounts[4]});
		await XenoFelixmRygWjy.pause.call({from: accounts[1]});
		const uint256unbCtjk = await XenoFelixmRygWjy.balanceOf.call(addressFKJf1vn, {from: accounts[1]});
		const boolHshNaxq = await XenoFelixmRygWjy.transferFrom.call(addresse9vURXU, addressrlWBKYY, uintFjoZqJq, {from: accounts[0]});
		const booloaUkEP5 = await XenoFelixmRygWjy.paused.call({from: accounts[0]});

		assert.equal(boolw3VmfxT, true)
		assert.equal(uint256jJ4PXET, BigInt("30606767420068687074463810571134946655572653780255290065594404746240100139008"))
		await expect(XenoFelixmRygWjy.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintYWK7TDW = BigInt("1491")
		const uintDJgZMEb = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintYWK7TDW, uintDJgZMEb, {from: accounts[1]});
		const uintTV7ruGL = BigInt("1734")
		const addresspEJ2kj5 = accounts[4]
		const uintNKmZBqA = BigInt("1619")
		const addressF88TW9v = accounts[0]
		const addressOBPPwdz = accounts[1]
		const uintnTdTkOC = BigInt("648")
		const boolw3VmfxT = await XenoFelixmRygWjy.approve.call(addresspEJ2kj5, uintTV7ruGL, {from: accounts[3]});
		const uint256jJ4PXET = await XenoFelixmRygWjy.totalSupply.call({from: accounts[4]});
		await XenoFelixmRygWjy.onlyPauser.call({from: accounts[2]});
		const boolHshNaxq = await XenoFelixmRygWjy.transferFrom.call(addressOBPPwdz, addressF88TW9v, uintNKmZBqA, {from: accounts[0]});
		const booloaUkEP5 = await XenoFelixmRygWjy.paused.call({from: accounts[0]});
		const uint256KXxyuY4 = await XenoFelixmRygWjy.burn.call(uintnTdTkOC, {from: accounts[3]});
		await XenoFelixmRygWjy.onlyNewOwner.call({from: accounts[2]});

		assert.equal(boolw3VmfxT, true)
		assert.equal(uint256jJ4PXET, BigInt("30606767420068687074463810571134946655572653780255290065594404746240100139008"))
		await expect(XenoFelixmRygWjy.onlyPauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uint5lEMdH = BigInt("1491")
		const uintlgQZcpZ = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uint5lEMdH, uintlgQZcpZ, {from: accounts[1]});
		const uintcLJtxsN = BigInt("1734")
		const addressJr3jFs = accounts[4]
		const uintbAJNqEa = BigInt("1735")
		const addressmIjtXu = accounts[0]
		const uintcq7unIo = BigInt("1619")
		const addressOHD9WtE = accounts[0]
		const addressj02RlmT = accounts[0]
		const boolw3VmfxT = await XenoFelixmRygWjy.approve.call(addressJr3jFs, uintcLJtxsN, {from: accounts[3]});
		const boolirbDeDi = await XenoFelixmRygWjy.transfer.call(addressmIjtXu, uintbAJNqEa, {from: accounts[1]});
		const uint256jJ4PXET = await XenoFelixmRygWjy.totalSupply.call({from: accounts[4]});
		const boolHshNaxq = await XenoFelixmRygWjy.transferFrom.call(addressj02RlmT, addressOHD9WtE, uintcq7unIo, {from: accounts[0]});
		const booloaUkEP5 = await XenoFelixmRygWjy.paused.call({from: accounts[0]});

		assert.equal(boolirbDeDi, true)
		assert.equal(boolw3VmfxT, true)
		assert.equal(uint256jJ4PXET, BigInt("30606767420068687074463810571134946655572653780255290065594404746240100139008"))
		await expect(XenoFelixmRygWjy.transferFrom.call(addressj02RlmT, addressOHD9WtE, uintcq7unIo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintr9iPtzY = BigInt("1491")
		const uintbneD7Ji = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintr9iPtzY, uintbneD7Ji, {from: accounts[1]});
		const uintOn5oMvZ = BigInt("1734")
		const addressix8mnZm = accounts[4]
		const uintXN7O9s = BigInt("1741")
		const addressoe95Cm4 = accounts[0]
		const boolw3VmfxT = await XenoFelixmRygWjy.approve.call(addressix8mnZm, uintOn5oMvZ, {from: accounts[3]});
		const boolirbDeDi = await XenoFelixmRygWjy.transfer.call(addressoe95Cm4, uintXN7O9s, {from: accounts[1]});
		const uint256jJ4PXET = await XenoFelixmRygWjy.totalSupply.call({from: accounts[4]});
		const booloaUkEP5 = await XenoFelixmRygWjy.paused.call({from: accounts[0]});

		assert.equal(boolirbDeDi, true)
		assert.equal(booloaUkEP5, false)
		assert.equal(boolw3VmfxT, true)
		assert.equal(uint256jJ4PXET, BigInt("30606767420068687074463810571134946655572653780255290065594404746240100139008"))
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintW8NKddX = BigInt("1491")
		const uintvu2FFz = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintW8NKddX, uintvu2FFz, {from: accounts[1]});
		const uintfuaUsAh = BigInt("1734")
		const addressp6uAFGM = accounts[4]
		const addressKsg4Yew = accounts[2]
		const boolw3VmfxT = await XenoFelixmRygWjy.approve.call(addressp6uAFGM, uintfuaUsAh, {from: accounts[3]});
		await XenoFelixmRygWjy.renouncePauser.call({from: accounts[3]});
		await XenoFelixmRygWjy.whenPaused.call({from: accounts[1]});
		const uint256jJ4PXET = await XenoFelixmRygWjy.totalSupply.call({from: accounts[4]});
		const uint256unbCtjk = await XenoFelixmRygWjy.balanceOf.call(addressKsg4Yew, {from: accounts[1]});
		const booloaUkEP5 = await XenoFelixmRygWjy.paused.call({from: accounts[0]});

		assert.equal(boolw3VmfxT, true)
		await expect(XenoFelixmRygWjy.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintlzf3T5G = BigInt("1491")
		const uintkn2Cx2D = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintlzf3T5G, uintkn2Cx2D, {from: accounts[1]});
		const uintQ7QIlTa = BigInt("1509")
		const addressqhbNL3L = accounts[0]
		const addressBZovGfS = accounts[0]
		const uint256jJ4PXET = await XenoFelixmRygWjy.totalSupply.call({from: accounts[4]});
		const uint8GU1PsfW = await XenoFelixmRygWjy.decimals.call({from: accounts[2]});
		const boolHshNaxq = await XenoFelixmRygWjy.transferFrom.call(addressBZovGfS, addressqhbNL3L, uintQ7QIlTa, {from: accounts[0]});
		const booloaUkEP5 = await XenoFelixmRygWjy.paused.call({from: accounts[0]});

		assert.equal(uint256jJ4PXET, BigInt("30606767420068687074463810571134946655572653780255290065594404746240100139008"))
		assert.equal(uint8GU1PsfW, BigInt("205"))
		await expect(XenoFelixmRygWjy.transferFrom.call(addressBZovGfS, addressqhbNL3L, uintQ7QIlTa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintXFGcIvS = BigInt("1491")
		const uintw4DYzdQ = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintXFGcIvS, uintw4DYzdQ, {from: accounts[1]});
		const uintsdf0t3U = BigInt("1734")
		const addressSZzQCYU = accounts[4]
		const uintt0ySFOZ = BigInt("1741")
		const addressWnFKTof = accounts[0]
		const boolw3VmfxT = await XenoFelixmRygWjy.approve.call(addressSZzQCYU, uintsdf0t3U, {from: accounts[3]});
		const boolirbDeDi = await XenoFelixmRygWjy.transfer.call(addressWnFKTof, uintt0ySFOZ, {from: accounts[1]});
		const uint256jJ4PXET = await XenoFelixmRygWjy.totalSupply.call({from: accounts[4]});
		const stringB7pGv4W = await XenoFelixmRygWjy.name.call({from: accounts[0]});
		const booloaUkEP5 = await XenoFelixmRygWjy.paused.call({from: accounts[0]});

		assert.equal(boolirbDeDi, true)
		assert.equal(booloaUkEP5, false)
		assert.equal(boolw3VmfxT, true)
		assert.equal(stringB7pGv4W, "6QglJuOAVlFt")
		assert.equal(uint256jJ4PXET, BigInt("30606767420068687074463810571134946655572653780255290065594404746240100139008"))
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintxUadO31 = BigInt("1491")
		const uintJx2gfGC = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintxUadO31, uintJx2gfGC, {from: accounts[1]});
		const uintDMIIg3w = BigInt("1734")
		const addressIS7tG0y = accounts[4]
		const addressiu4gnq = accounts[2]
		const uintHMznSga = BigInt("343")
		const addressA7XY01A = accounts[4]
		const uintmbRxHf3 = BigInt("1616")
		const addressaL64KGO = accounts[0]
		const addressSrUYF0 = accounts[0]
		const boolw3VmfxT = await XenoFelixmRygWjy.approve.call(addressIS7tG0y, uintDMIIg3w, {from: accounts[3]});
		const uint256unbCtjk = await XenoFelixmRygWjy.balanceOf.call(addressiu4gnq, {from: accounts[1]});
		const addressKD9fyeL = await XenoFelixmRygWjy.burnFrom.call(addressA7XY01A, uintHMznSga, {from: accounts[4]});
		const boolHshNaxq = await XenoFelixmRygWjy.transferFrom.call(addressSrUYF0, addressaL64KGO, uintmbRxHf3, {from: accounts[0]});

		assert.equal(boolw3VmfxT, true)
		assert.equal(uint256unbCtjk, BigInt("0"))
		await expect(XenoFelixmRygWjy.burnFrom.call(addressA7XY01A, uintHMznSga, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintwAHZv7m = BigInt("1491")
		const uintHHLgpaV = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintwAHZv7m, uintHHLgpaV, {from: accounts[1]});
		const uintto6MlAE = BigInt("1325")
		const addressUaoXrG = accounts[0]
		const uintazwa76z = BigInt("1734")
		const addresssPBjrl = accounts[4]
		const addresstOXeQbc = accounts[4]
		const uintodq9YNw = BigInt("1616")
		const addressXsWvwh5 = accounts[0]
		const addresseXB6osr = accounts[0]
		const uintQ5ohuK5 = BigInt("327")
		const addressYQUcSpp = accounts[3]
		const boolJKzvULA = await XenoFelixmRygWjy.increaseAllowance.call(addressUaoXrG, uintto6MlAE, {from: accounts[2]});
		const boolw3VmfxT = await XenoFelixmRygWjy.approve.call(addresssPBjrl, uintazwa76z, {from: accounts[3]});
		const addressebigd0I = await XenoFelixmRygWjy.removePauser.call(addresstOXeQbc, {from: accounts[4]});
		const boolHshNaxq = await XenoFelixmRygWjy.transferFrom.call(addresseXB6osr, addressXsWvwh5, uintodq9YNw, {from: accounts[0]});
		const boolX2PP9Do = await XenoFelixmRygWjy.transfer.call(addressYQUcSpp, uintQ5ohuK5, {from: accounts[4]});
		const boolumLRvLS = await XenoFelixmRygWjy.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const booloaUkEP5 = await XenoFelixmRygWjy.paused.call({from: accounts[0]});

		assert.equal(boolJKzvULA, true)
		assert.equal(boolw3VmfxT, true)
		await expect(XenoFelixmRygWjy.removePauser.call(addresstOXeQbc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintwDSWIXD = BigInt("1491")
		const uintrarWrKD = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintwDSWIXD, uintrarWrKD, {from: accounts[1]});
		const uintDZLGFT0 = BigInt("1734")
		const addressubdMjGN = accounts[4]
		const addressSIcZVoZ = accounts[0]
		const uintlMOHsXX = BigInt("1616")
		const addressmwYRjQK = accounts[0]
		const addressRK3CrI = accounts[0]
		const uintO0HHlra = BigInt("414")
		const addressd22ANpo = accounts[0]
		const boolw3VmfxT = await XenoFelixmRygWjy.approve.call(addressubdMjGN, uintDZLGFT0, {from: accounts[3]});
		const boolx4rj5BP = await XenoFelixmRygWjy.freezeAccount.call(addressSIcZVoZ, {from: accounts[1]});
		const boolHshNaxq = await XenoFelixmRygWjy.transferFrom.call(addressRK3CrI, addressmwYRjQK, uintlMOHsXX, {from: accounts[0]});
		const boolfuhZEoQ = await XenoFelixmRygWjy.transfer.call(addressd22ANpo, uintO0HHlra, {from: accounts[1]});
		const booloaUkEP5 = await XenoFelixmRygWjy.paused.call({from: accounts[0]});

		assert.equal(boolw3VmfxT, true)
		assert.equal(boolx4rj5BP, true)
		await expect(XenoFelixmRygWjy.transferFrom.call(addressRK3CrI, addressmwYRjQK, uintlMOHsXX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintPadgiTR = BigInt("1491")
		const uintiBRiM5E = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintPadgiTR, uintiBRiM5E, {from: accounts[1]});
		const uintXQzf9vK = BigInt("1271")
		const addressgnDqQn = accounts[2]
		const uintEBdWYXF = BigInt("46")
		const addressUZpnNXB = accounts[0]
		const uintwERscZ = BigInt("1619")
		const addressW6P41oH = accounts[2]
		const addressZzXEf7y = accounts[0]
		const boolXxt9Ynb = await XenoFelixmRygWjy.decreaseAllowance.call(addressgnDqQn, uintXQzf9vK, {from: accounts[0]});
		const boolrc4KsR = await XenoFelixmRygWjy.decreaseAllowance.call(addressUZpnNXB, uintEBdWYXF, {from: accounts[4]});
		await XenoFelixmRygWjy.renouncePauser.call({from: accounts[5]});
		const boolHshNaxq = await XenoFelixmRygWjy.transferFrom.call(addressZzXEf7y, addressW6P41oH, uintwERscZ, {from: accounts[0]});

		await expect(XenoFelixmRygWjy.decreaseAllowance.call(addressgnDqQn, uintXQzf9vK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintVVixTKX = BigInt("1491")
		const uintD0boKy7 = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintVVixTKX, uintD0boKy7, {from: accounts[1]});
		const uintKgD0yd7 = BigInt("408")
		const uintEsZ0jgy = BigInt("258")
		const addressZ6olZw6 = accounts[1]
		const uintGFuC3PR = BigInt("1619")
		const addressD4BekKX = accounts[2]
		const addressoQVY0Y8 = accounts[0]
		const booliCwpVUJ = await XenoFelixmRygWjy.lock.call(addressZ6olZw6, uintEsZ0jgy, uintKgD0yd7, {from: accounts[1]});
		const boolHshNaxq = await XenoFelixmRygWjy.transferFrom.call(addressoQVY0Y8, addressD4BekKX, uintGFuC3PR, {from: accounts[0]});

		assert.equal(booliCwpVUJ, true)
		await expect(XenoFelixmRygWjy.transferFrom.call(addressoQVY0Y8, addressD4BekKX, uintGFuC3PR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintfqPglc9 = BigInt("1491")
		const uintVEh3PH2 = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintfqPglc9, uintVEh3PH2, {from: accounts[1]});
		const addressMi6XZZf = accounts[1]
		const uintmrBCPj = BigInt("1734")
		const addressFFbiBTa = accounts[4]
		const addressKxjrqtM = accounts[2]
		const uintLvwz5ax = BigInt("750")
		const addressORFVUAV = accounts[2]
		const uintn0Ik1W4 = BigInt("1616")
		const addresst5EVWFe = accounts[0]
		const addressXOdRyC6 = accounts[0]
		const addressJ5J3WWw = await XenoFelixmRygWjy.transferOwnership.call(addressMi6XZZf, {from: accounts[1]});
		const boolw3VmfxT = await XenoFelixmRygWjy.approve.call(addressFFbiBTa, uintmrBCPj, {from: accounts[3]});
		const uint256unbCtjk = await XenoFelixmRygWjy.balanceOf.call(addressKxjrqtM, {from: accounts[1]});
		const addressgNrm1wn = await XenoFelixmRygWjy.burnFrom.call(addressORFVUAV, uintLvwz5ax, {from: accounts[2]});
		const boolHshNaxq = await XenoFelixmRygWjy.transferFrom.call(addressXOdRyC6, addresst5EVWFe, uintn0Ik1W4, {from: accounts[0]});

		assert.equal(boolw3VmfxT, true)
		assert.equal(uint256unbCtjk, BigInt("0"))
		await expect(XenoFelixmRygWjy.burnFrom.call(addressORFVUAV, uintLvwz5ax, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintABMhRCZ = BigInt("1491")
		const uintnjvc6aI = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintABMhRCZ, uintnjvc6aI, {from: accounts[1]});
		const addressYl9xCeD = accounts[3]
		const addressLOoe2W4 = accounts[4]
		const addressDbc9DY = accounts[3]
		const uintAiCGYMK = BigInt("1619")
		const addressQ0MFjHS = accounts[1]
		const address0gCRIu = accounts[0]
		const uint256FwhW36A = await XenoFelixmRygWjy.allowance.call(addressLOoe2W4, addressYl9xCeD, {from: accounts[5]});
		const booliwr66co = await XenoFelixmRygWjy.unfreezeAccount.call(addressDbc9DY, {from: accounts[2]});
		const stringZ8LgrbA = await XenoFelixmRygWjy.symbol.call({from: accounts[0]});
		const boolHshNaxq = await XenoFelixmRygWjy.transferFrom.call(address0gCRIu, addressQ0MFjHS, uintAiCGYMK, {from: accounts[0]});

		assert.equal(uint256FwhW36A, BigInt("0"))
		await expect(XenoFelixmRygWjy.unfreezeAccount.call(addressDbc9DY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintqjmT3Nt = BigInt("1491")
		const uintk6hBwzs = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintqjmT3Nt, uintk6hBwzs, {from: accounts[1]});
		const uinteRsZ7E1 = BigInt("1741")
		const addresskUYU9rs = accounts[0]
		const addressMDjyubG = accounts[2]
		const stringhYENfXe = await XenoFelixmRygWjy.symbol.call({from: accounts[3]});
		const boolirbDeDi = await XenoFelixmRygWjy.transfer.call(addresskUYU9rs, uinteRsZ7E1, {from: accounts[1]});
		const booloaUkEP5 = await XenoFelixmRygWjy.paused.call({from: accounts[0]});
		const addressZMTFVvz = await XenoFelixmRygWjy.addPauser.call(addressMDjyubG, {from: accounts[3]});

		assert.equal(boolirbDeDi, true)
		assert.equal(booloaUkEP5, false)
		assert.equal(stringhYENfXe, "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR")
		await expect(XenoFelixmRygWjy.addPauser.call(addressMDjyubG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintuDCqg4j = BigInt("1491")
		const uintSBAn553 = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintuDCqg4j, uintSBAn553, {from: accounts[1]});
		const uintKQhH3oR = BigInt("843")
		const uintelpga41 = BigInt("501")
		const addresste08FiQ = accounts[4]
		const addressphF3Ktu = accounts[2]
		const uintWZpPgbO = BigInt("1601")
		const addressyBJZUnX = accounts[1]
		const addressoquwlVC = accounts[0]
		const bool169jSu = await XenoFelixmRygWjy.lock.call(addresste08FiQ, uintelpga41, uintKQhH3oR, {from: accounts[1]});
		const uint256JrWGh5D = await XenoFelixmRygWjy.balanceOf.call(addressphF3Ktu, {from: accounts[4]});
		const boolHshNaxq = await XenoFelixmRygWjy.transferFrom.call(addressoquwlVC, addressyBJZUnX, uintWZpPgbO, {from: accounts[0]});

		await expect(XenoFelixmRygWjy.lock.call(addresste08FiQ, uintelpga41, uintKQhH3oR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintQWo3AtG = BigInt("1491")
		const uintbGBXdLo = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintQWo3AtG, uintbGBXdLo, {from: accounts[1]});
		const uintrDZRDII = BigInt("1873")
		const addressIvrIHmr = accounts[1]
		const uint6g3bAM = BigInt("1619")
		const addressWDf7cUN = accounts[1]
		const address0xyeC1 = accounts[0]
		const boolZdM43WG = await XenoFelixmRygWjy.unlock.call(addressIvrIHmr, uintrDZRDII, {from: accounts[1]});
		const boolHshNaxq = await XenoFelixmRygWjy.transferFrom.call(address0xyeC1, addressWDf7cUN, uint6g3bAM, {from: accounts[0]});
		const uint8Cutq3Cs = await XenoFelixmRygWjy.decimals.call({from: accounts[1]});

		await expect(XenoFelixmRygWjy.unlock.call(addressIvrIHmr, uintrDZRDII, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringAOSYzK = "6QglJuOAVlFt"
		const stringUjBEy9 = "q9BjgkGpgPlHjLqtQNuZhFzNvnk3DJARAHGQuuVmLnVjn9dGIuzQnktkY2ANN1V7WZRn8OIj1rcefCl6exXoZXEMQFWDk2I2XR"
		const uintwxe50Pq = BigInt("1491")
		const uintY4HapN1 = BigInt("205")
		const XenoFelixmRygWjy = await XenoFelix.new(stringAOSYzK, stringUjBEy9, uintwxe50Pq, uintY4HapN1, {from: accounts[1]});
		const addressEcSgGWG = accounts[3]
		const addressetQUvRx = accounts[4]
		const uint256unbCtjk = await XenoFelixmRygWjy.balanceOf.call(addressEcSgGWG, {from: accounts[1]});
		const boolwc9f4D = await XenoFelixmRygWjy.unfreezeAccount.call(addressetQUvRx, {from: accounts[1]});

		assert.equal(uint256unbCtjk, BigInt("0"))
		await expect(XenoFelixmRygWjy.unfreezeAccount.call(addressetQUvRx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})