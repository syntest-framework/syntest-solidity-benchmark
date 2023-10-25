const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addresswdU998 = accounts[4]
		const Fomp0VszkD = await Fomp.new(addresswdU998, {from: accounts[0]});
		const byte6zU7dL = "0x14141314060b0519200b181c121604140c0c0908010f1b0617091e11011f1200"
		const byteOCQzFBJ = "0x001b020a1a0b0d18071600201602060f191f0612151b0e0d1e0402181909131d"
		const uintFQqDRyi = BigInt("237")
		const uintX5w2zEJ = BigInt("986")
		const uinthL5UHCz = BigInt("420")
		const addressEw5kC3 = accounts[0]
		const addressEXYgxIt = accounts[1]
		const addresspk0PP6 = accounts[4]
		const uintDfUm7dl = BigInt("1879")
		const addressZqxWSW = accounts[2]
		const addressS9MMDre = accounts[1]
		const addressJ2Mcc6a = await Fomp0VszkD.delegateBySig.call(addressEw5kC3, uinthL5UHCz, uintX5w2zEJ, uintFQqDRyi, byteOCQzFBJ, byte6zU7dL, {from: accounts[0]});
		const uintMQByya8 = await Fomp0VszkD.allowance.call(addresspk0PP6, addressEXYgxIt, {from: accounts[0]});
		const boolPxEZtsG = await Fomp0VszkD.transferFrom.call(addressS9MMDre, addressZqxWSW, uintDfUm7dl, {from: accounts[0]});

		await expect(Fomp0VszkD.delegateBySig.call(addressEw5kC3, uinthL5UHCz, uintX5w2zEJ, uintFQqDRyi, byteOCQzFBJ, byte6zU7dL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressltYq96 = accounts[0]
		const Fompd9mSJzk = await Fomp.new(addressltYq96, {from: accounts[3]});
		const uintVZISel = BigInt("188")
		const addressZENnJKo = accounts[3]
		const addressaK57ZvC = accounts[3]
		const addressqDaXiSm = accounts[5]
		const addressb0Szkap = accounts[1]
		const uintN1RjIeB = BigInt("599")
		const addressrl2zbU7 = accounts[2]
		const uintLnWsCgQ = BigInt("1475")
		const addressp01dFwb = "0x0000000000000000000000000000000000000001"
		const uintyQ85wt = BigInt("289")
		const addressoe86pRU = accounts[4]
		const addressTv1a6PK = "0x0000000000000000000000000000000000000001"
		const boolyyi4pOd = await Fompd9mSJzk.transferFrom.call(addressaK57ZvC, addressZENnJKo, uintVZISel, {from: accounts[1]});
		const uint96uMa4aK = await Fompd9mSJzk.getCurrentVotes.call(addressqDaXiSm, {from: accounts[3]});
		const addressYevA9oI = await Fompd9mSJzk.delegate.call(addressb0Szkap, {from: accounts[3]});
		const bools3PMlKb = await Fompd9mSJzk.approve.call(addressrl2zbU7, uintN1RjIeB, {from: accounts[5]});
		const boolNatEtFg = await Fompd9mSJzk.transfer.call(addressp01dFwb, uintLnWsCgQ, {from: accounts[0]});
		const booljRsI01T = await Fompd9mSJzk.transferFrom.call(addressTv1a6PK, addressoe86pRU, uintyQ85wt, {from: accounts[3]});

		await expect(Fompd9mSJzk.transferFrom.call(addressaK57ZvC, addressZENnJKo, uintVZISel, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressprVCP6Z = accounts[2]
		const FompbmqRyW = await Fomp.new(addressprVCP6Z, {from: accounts[2]});
		const uintGE214LE = BigInt("1231")
		const addressyTSPEg = accounts[3]
		const addressADl5EG3 = accounts[3]
		const boolDIhmynD = await FompbmqRyW.approve.call(addressyTSPEg, uintGE214LE, {from: accounts[4]});
		const uint96Wiicf9A = await FompbmqRyW.getCurrentVotes.call(addressADl5EG3, {from: accounts[2]});

		assert.equal(boolDIhmynD, true)
		assert.equal(uint96Wiicf9A, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressmhM5xuE = accounts[3]
		const FompvUCqtaN = await Fomp.new(addressmhM5xuE, {from: accounts[5]});
		const uintaNa4ykT = BigInt("216")
		const addressSWkapZl = accounts[4]
		const uintsoPpjol = BigInt("81")
		const addressTC786d = accounts[0]
		const uintVRSUFD = BigInt("1795")
		const addresspoOs8oz = accounts[0]
		const boolZfRzUk2 = await FompvUCqtaN.transfer.call(addressSWkapZl, uintaNa4ykT, {from: accounts[4]});
		const boolKLTGozr = await FompvUCqtaN.approve.call(addressTC786d, uintsoPpjol, {from: "0x0000000000000000000000000000000000000001"});
		const boolIy8eMe = await FompvUCqtaN.approve.call(addresspoOs8oz, uintVRSUFD, {from: accounts[1]});

		await expect(FompvUCqtaN.transfer.call(addressSWkapZl, uintaNa4ykT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressFxAaznD = accounts[2]
		const FompI8hM0X0 = await Fomp.new(addressFxAaznD, {from: accounts[4]});
		const addressdwcCcd = "0x0000000000000000000000000000000000000001"
		const uintugXHBCW = BigInt("1387")
		const addressIqbM5mu = accounts[2]
		const uintBumuSds = await FompI8hM0X0.balanceOf.call(addressdwcCcd, {from: accounts[2]});
		const boolB0yMcNS = await FompI8hM0X0.transfer.call(addressIqbM5mu, uintugXHBCW, {from: accounts[2]});

		assert.equal(boolB0yMcNS, true)
		assert.equal(uintBumuSds, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressI1oLpKX = accounts[2]
		const FompWQjpJHy = await Fomp.new(addressI1oLpKX, {from: accounts[0]});
		const uinta7VjuaY = BigInt("255")
		const addressXvoWU0L = accounts[1]
		const byteB6LiVpi = "0x0f1f1b10060214030819151c070104141f02121c1f03051a0d0307200c061011"
		const bytee8lkIYA = "0x18111c0203090e18170b070a01191f1c120e191408171413180b060102170101"
		const uint0ZLr7X = BigInt("78")
		const uintfjxOQkz = BigInt("904")
		const uintFpWmMo7 = BigInt("665")
		const addressRhOHAev = accounts[3]
		const addressqD2lrc9 = "0x0000000000000000000000000000000000000001"
		const addressYoo7WYY = accounts[3]
		const addressSaLESH3 = accounts[1]
		const uint96cB4tLHP = await FompWQjpJHy.getPriorVotes.call(addressXvoWU0L, uinta7VjuaY, {from: accounts[5]});
		const addressskcniAJ = await FompWQjpJHy.delegateBySig.call(addressRhOHAev, uintFpWmMo7, uintfjxOQkz, uint0ZLr7X, bytee8lkIYA, byteB6LiVpi, {from: accounts[4]});
		const uintNv5WUB2 = await FompWQjpJHy.balanceOf.call(addressqD2lrc9, {from: accounts[5]});
		const uintyJUqCoy = await FompWQjpJHy.balanceOf.call(addressYoo7WYY, {from: accounts[4]});
		const uint96bm9VuxW = await FompWQjpJHy.getCurrentVotes.call(addressSaLESH3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint96cB4tLHP, BigInt("0"))
		await expect(FompWQjpJHy.delegateBySig.call(addressRhOHAev, uintFpWmMo7, uintfjxOQkz, uint0ZLr7X, bytee8lkIYA, byteB6LiVpi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresse8wot8 = accounts[4]
		const Fomp0VszkD = await Fomp.new(addresse8wot8, {from: accounts[0]});
		const addressBTFreb9 = accounts[1]
		const addressds5rBg6 = accounts[4]
		const uintBTgzu53 = BigInt("1879")
		const addressB9441C = accounts[4]
		const addresszBiev7Q = accounts[1]
		const uintMQByya8 = await Fomp0VszkD.allowance.call(addressds5rBg6, addressBTFreb9, {from: accounts[0]});
		const boolPxEZtsG = await Fomp0VszkD.transferFrom.call(addresszBiev7Q, addressB9441C, uintBTgzu53, {from: accounts[0]});

		assert.equal(uintMQByya8, BigInt("0"))
		await expect(Fomp0VszkD.transferFrom.call(addresszBiev7Q, addressB9441C, uintBTgzu53, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressDmN2axv = accounts[4]
		const FompLRBoPes = await Fomp.new(addressDmN2axv, {from: accounts[1]});
		const addressGTu9wGx = accounts[1]
		const byteWKXoRou = "0x1420110310031113101f0d1b1e1a1a11140f0c10110b03160c01070702170e05"
		const byteuNAHtL5 = "0x0f061b0802090105110f080f161d160a170604131e0e0b05151c121e0f1e1819"
		const uinthwIvg3z = BigInt("198")
		const uintJjMnGUn = BigInt("75")
		const uintgsPeYob = BigInt("1422")
		const addressCAa38ck = accounts[1]
		const addressvIwEFqE = accounts[0]
		const addressYy1Yjtq = accounts[1]
		const addressgnXm4ru = await FompLRBoPes.delegate.call(addressGTu9wGx, {from: accounts[1]});
		const addressqXdmePo = await FompLRBoPes.delegateBySig.call(addressCAa38ck, uintgsPeYob, uintJjMnGUn, uinthwIvg3z, byteuNAHtL5, byteWKXoRou, {from: accounts[2]});
		const uintPrPpjt8 = await FompLRBoPes.allowance.call(addressYy1Yjtq, addressvIwEFqE, {from: accounts[0]});

		await expect(FompLRBoPes.delegateBySig.call(addressCAa38ck, uintgsPeYob, uintJjMnGUn, uinthwIvg3z, byteuNAHtL5, byteWKXoRou, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressYu7ZUBL = accounts[2]
		const FompI8hM0X0 = await Fomp.new(addressYu7ZUBL, {from: accounts[4]});
		const addressLGOlUu9 = "0x0000000000000000000000000000000000000000"
		const addressKiX9wAV = accounts[1]
		const addressxIh9Zv = accounts[1]
		const uinthKtHAL7 = BigInt("1387")
		const addressLoJAaxJ = accounts[2]
		const uintBumuSds = await FompI8hM0X0.balanceOf.call(addressLGOlUu9, {from: accounts[2]});
		const addressS749Cl = await FompI8hM0X0.delegate.call(addressKiX9wAV, {from: accounts[2]});
		const addresswX7d8tC = await FompI8hM0X0.delegate.call(addressxIh9Zv, {from: accounts[0]});
		const boolB0yMcNS = await FompI8hM0X0.transfer.call(addressLoJAaxJ, uinthKtHAL7, {from: accounts[2]});

		assert.equal(boolB0yMcNS, true)
		assert.equal(uintBumuSds, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const address7L6KHZ = accounts[2]
		const FompI8hM0X0 = await Fomp.new(address7L6KHZ, {from: accounts[4]});
		const addressIxRoX0T = "0x00000000000000000000000000000000000000-1"
		const address6AWKvR = "0x0000000000000000000000000000000000000001"
		const addressj0vmTv8 = accounts[1]
		const uint7fSjoy = BigInt("1387")
		const addressiXsnyK = accounts[2]
		const uintBumuSds = await FompI8hM0X0.balanceOf.call(addressIxRoX0T, {from: accounts[2]});
		const addressS749Cl = await FompI8hM0X0.delegate.call(address6AWKvR, {from: accounts[2]});
		const addresswX7d8tC = await FompI8hM0X0.delegate.call(addressj0vmTv8, {from: accounts[0]});
		const boolB0yMcNS = await FompI8hM0X0.transfer.call(addressiXsnyK, uint7fSjoy, {from: accounts[2]});

		await expect(FompI8hM0X0.balanceOf.call(addressIxRoX0T, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressL86PKUV = accounts[3]
		const FompcJdlUII = await Fomp.new(addressL86PKUV, {from: "0x0000000000000000000000000000000000000001"});
		const bytehAaLYE6 = "0x100d0e0604130e1f0911120e0507140d020a071b10000c05181f02051a0f1b0c"
		const bytervqrFHU = "0x1f100109040e151e1b151f0216061f10181d040504040712100c080a0d061f20"
		const uintczMdHJR = BigInt("50")
		const uintx5iHL2 = BigInt("1461")
		const uintmHJjSF8 = BigInt("39")
		const addressbxoWoA = accounts[4]
		const addressIS6tgH = accounts[4]
		const addressTOZbdhT = accounts[1]
		const uintkpmWIj = BigInt("523")
		const addressug4G6uY = accounts[0]
		const addressfomiTyt = await FompcJdlUII.delegateBySig.call(addressbxoWoA, uintmHJjSF8, uintx5iHL2, uintczMdHJR, bytervqrFHU, bytehAaLYE6, {from: accounts[0]});
		const uintUQzWNre = await FompcJdlUII.balanceOf.call(addressIS6tgH, {from: accounts[5]});
		const uint96RdJglTa = await FompcJdlUII.getCurrentVotes.call(addressTOZbdhT, {from: "0x0000000000000000000000000000000000000001"});
		const uint96Cro9iXl = await FompcJdlUII.getPriorVotes.call(addressug4G6uY, uintkpmWIj, {from: accounts[4]});
	});

	it('test for Fomp', async () => {
		const addressLuRKsNX = accounts[4]
		const Fomp0VszkD = await Fomp.new(addressLuRKsNX, {from: accounts[0]});
		const uintVkvRVQw = BigInt("868")
		const addresshpTdTY7 = accounts[5]
		const byteqv6DquS = "0x14141314060b0519200b181c121604140c0c0908010f1b0617091e11011f1200"
		const bytez9tQobT = "0x001b020a1a0b0d180716ffffffff201602060f191f0612151b0e0d1e0402181909131d"
		const uintAz0b5B = BigInt("237")
		const uintpVywOBb = BigInt("986")
		const uintFkeY6ou = BigInt("420")
		const addressprfG5sE = accounts[0]
		const addressJCQRmR8 = accounts[1]
		const boolkPQP7XW = await Fomp0VszkD.approve.call(addresshpTdTY7, uintVkvRVQw, {from: accounts[2]});
		const addressJ2Mcc6a = await Fomp0VszkD.delegateBySig.call(addressprfG5sE, uintFkeY6ou, uintpVywOBb, uintAz0b5B, bytez9tQobT, byteqv6DquS, {from: accounts[0]});
		const uint96RCyoGbQ = await Fomp0VszkD.getCurrentVotes.call(addressJCQRmR8, {from: accounts[3]});

		assert.equal(boolkPQP7XW, true)
		await expect(Fomp0VszkD.delegateBySig.call(addressprfG5sE, uintFkeY6ou, uintpVywOBb, uintAz0b5B, bytez9tQobT, byteqv6DquS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressk8fHOb0 = "0x0000000000000000000000000000000000000001"
		const FomptHdQvXg = await Fomp.new(addressk8fHOb0, {from: accounts[3]});
		const addressLBl27YT = accounts[5]
		const addressAvjGeft = accounts[4]
		const uintTqSskAA = BigInt("139")
		const address0CbRJS = accounts[5]
		const addressZ7larmq = await FomptHdQvXg.delegate.call(addressLBl27YT, {from: "0x0000000000000000000000000000000000000001"});
		const uintep8EgP0 = await FomptHdQvXg.balanceOf.call(addressAvjGeft, {from: accounts[3]});
		const uint96st5GRSJ = await FomptHdQvXg.getPriorVotes.call(address0CbRJS, uintTqSskAA, {from: accounts[2]});

		assert.equal(uint96st5GRSJ, BigInt("0"))
		assert.equal(uintep8EgP0, BigInt("0"))
	});
})