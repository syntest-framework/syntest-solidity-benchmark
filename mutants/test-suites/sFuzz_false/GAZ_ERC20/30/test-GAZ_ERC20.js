const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC208fNftp = await GAZ_ERC20.new({from: accounts[2]});
		const uintvihqch1 = BigInt("994")
		const addressBbV6Kc1 = accounts[1]
		const uintYTizJTA = BigInt("407")
		const addressLU9Sz9u = accounts[3]
		const addressJD1QjE = accounts[1]
		const boolpF80bSU = await GAZ_ERC208fNftp.approve.call(addressBbV6Kc1, uintvihqch1, {from: accounts[5]});
//		const boolkdEGOjg = await GAZ_ERC208fNftp.transfer.call(addressLU9Sz9u, uintYTizJTA, {from: accounts[0]});
//		const boolBdLWjr3 = await GAZ_ERC208fNftp.approve.call(addressJD1QjE, {from: accounts[0]});

		assert.equal(boolpF80bSU, true)
		await expect(GAZ_ERC208fNftp.transfer.call(addressLU9Sz9u, uintYTizJTA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20Qoa8GOG = await GAZ_ERC20.new({from: accounts[1]});
		const uintyfpKgQo = BigInt("1457")
		const addressq2fvoCB = accounts[0]
		const addressaW5QAuA = accounts[2]
		const uintR3x9ij = BigInt("112")
		const addresskLsflTd = accounts[5]
		const addressYdMYoV4 = accounts[0]
		const uintkzejPOU = BigInt("1320")
		const addresszXfbdMW = accounts[2]
		const addressPfsUT4R = accounts[0]
		const uintYgZP5dQ = BigInt("1675")
		const addresshL536z = accounts[4]
		const addressrYE84OU = accounts[0]
//		const boolq8rVw1e = await GAZ_ERC20Qoa8GOG.transferFrom.call(addressaW5QAuA, addressq2fvoCB, uintyfpKgQo, {from: "0x0000000000000000000000000000000000000001"});
//		const bool0EqAQk = await GAZ_ERC20Qoa8GOG.transferFrom.call(addressYdMYoV4, addresskLsflTd, uintR3x9ij, {from: "0x0000000000000000000000000000000000000001"});
//		const boolQymdfJ6 = await GAZ_ERC20Qoa8GOG.transfer.call(addresszXfbdMW, uintkzejPOU, {from: accounts[4]});
//		const boolnZpta6J = await GAZ_ERC20Qoa8GOG.approve.call(addressPfsUT4R, {from: accounts[0]});
//		const boolKTBjdm0 = await GAZ_ERC20Qoa8GOG.transferFrom.call(addressrYE84OU, addresshL536z, uintYgZP5dQ, {from: accounts[5]});

		await expect(GAZ_ERC20Qoa8GOG.transferFrom.call(addressaW5QAuA, addressq2fvoCB, uintyfpKgQo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20AkQjEc5 = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintKqUiyYQ = BigInt("1499")
		const addressAQBU4JR = accounts[4]
		const addressZu7cvGf = "0x0000000000000000000000000000000000000001"
		const address5JvGXX = accounts[2]
		const uintC3SaKxA = BigInt("1034")
		const addressAu0hpO8 = accounts[4]
		const addressVeTrAf8 = accounts[0]
		const addressXmuvGB = accounts[4]
		const uintdF4qmN = BigInt("398")
		const addressMSrYB7l = accounts[4]
		const bool3YCHUx = await GAZ_ERC20AkQjEc5.transferFrom.call(addressZu7cvGf, addressAQBU4JR, uintKqUiyYQ, {from: accounts[0]});
		const boolOU6y40J = await GAZ_ERC20AkQjEc5.approve.call(address5JvGXX, {from: accounts[2]});
		const boolGqj8Ztx = await GAZ_ERC20AkQjEc5.transfer.call(addressAu0hpO8, uintC3SaKxA, {from: accounts[2]});
		const boolNnU13J2 = await GAZ_ERC20AkQjEc5.approve.call(addressVeTrAf8, {from: accounts[3]});
		const boolcz4w1X = await GAZ_ERC20AkQjEc5.approve.call(addressXmuvGB, {from: accounts[1]});
		const bool7OG245 = await GAZ_ERC20AkQjEc5.approve.call(addressMSrYB7l, uintdF4qmN, {from: accounts[1]});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20BU57GVN = await GAZ_ERC20.new({from: accounts[1]});
		const addressCU72hI = "0x0000000000000000000000000000000000000001"
		const uintxXnQCcU = BigInt("909")
		const addressrnn7wWU = accounts[1]
		const uintcpNeJns = BigInt("493")
		const addressoxg9zkl = accounts[1]
//		const boolvNC98G4 = await GAZ_ERC20BU57GVN.approve.call(addressCU72hI, {from: accounts[1]});
//		const boolBVzQQop = await GAZ_ERC20BU57GVN.approve.call(addressrnn7wWU, uintxXnQCcU, {from: accounts[4]});
//		const boolaBrUW2j = await GAZ_ERC20BU57GVN.transfer.call(addressoxg9zkl, uintcpNeJns, {from: accounts[1]});

		await expect(GAZ_ERC20BU57GVN.approve.call(addressCU72hI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20xDNa95y = await GAZ_ERC20.new({from: accounts[4]});
		const uintSokVu5l = BigInt("668")
		const addressWjCy2ZC = accounts[0]
		const uintrdjfgKB = BigInt("793")
		const addressznhaVs = accounts[0]
		const addressyjXS2y8 = accounts[2]
		const boolb37sHP6 = await GAZ_ERC20xDNa95y.transfer.call(addressWjCy2ZC, uintSokVu5l, {from: accounts[4]});
//		const boolTc7zfts = await GAZ_ERC20xDNa95y.transferFrom.call(addressyjXS2y8, addressznhaVs, uintrdjfgKB, {from: accounts[3]});

		assert.equal(boolb37sHP6, true)
		await expect(GAZ_ERC20xDNa95y.transferFrom.call(addressyjXS2y8, addressznhaVs, uintrdjfgKB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20gUrt5Fd = await GAZ_ERC20.new({from: accounts[4]});
		const addressfTv3MFS = accounts[2]
		const uintFJkcRBv = BigInt("1971")
		const addresshAEV840 = accounts[3]
		const uintopeXzZP = BigInt("209")
		const addressemdlJC = accounts[0]
//		const boolXBwxGiu = await GAZ_ERC20gUrt5Fd.approve.call(addressfTv3MFS, {from: accounts[4]});
//		const boolXoxwQSP = await GAZ_ERC20gUrt5Fd.approve.call(addresshAEV840, uintFJkcRBv, {from: "0x0000000000000000000000000000000000000001"});
//		const boolamIXTb = await GAZ_ERC20gUrt5Fd.approve.call(addressemdlJC, uintopeXzZP, {from: accounts[5]});

		await expect(GAZ_ERC20gUrt5Fd.approve.call(addressfTv3MFS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20SFVjeDK = await GAZ_ERC20.new({from: accounts[5]});
		const uintMzsRYb3 = BigInt("752")
		const addressOiAqHO3 = accounts[1]
		const addressGBzgTaZ = accounts[4]
		const uintKEY1fWE = BigInt("1105")
		const addressIAIAYK6 = accounts[5]
		const addressM52dNii = accounts[0]
		const uintKpKI40e = BigInt("2039")
		const addressca56dAs = accounts[0]
		const boolGQedUY = await GAZ_ERC20SFVjeDK.approve.call(addressOiAqHO3, uintMzsRYb3, {from: accounts[0]});
//		const booliVccUHx = await GAZ_ERC20SFVjeDK.approve.call(addressGBzgTaZ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolKuQfmk = await GAZ_ERC20SFVjeDK.approve.call(addressIAIAYK6, uintKEY1fWE, {from: accounts[5]});
//		const boolwI4xaST = await GAZ_ERC20SFVjeDK.approve.call(addressM52dNii, {from: accounts[4]});
//		const bool7opi79 = await GAZ_ERC20SFVjeDK.approve.call(addressca56dAs, uintKpKI40e, {from: accounts[1]});

		assert.equal(boolGQedUY, true)
		await expect(GAZ_ERC20SFVjeDK.approve.call(addressGBzgTaZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20xDNa95y = await GAZ_ERC20.new({from: accounts[4]});
		const uintoMwZ0h9 = BigInt("668")
		const addresse5BkM16 = accounts[1]
		const addressArys3B6 = accounts[4]
		const uintw832j0 = BigInt("109")
		const addresseT9oSs = accounts[4]
		const uintWgfSh6U = BigInt("793")
		const addresstzCbdin = accounts[0]
		const addressTguD3tr = accounts[2]
		const uintDdDQo7G = BigInt("467")
		const addresso5FeQey = accounts[2]
		const boolb37sHP6 = await GAZ_ERC20xDNa95y.transfer.call(addresse5BkM16, uintoMwZ0h9, {from: accounts[4]});
//		const boolxlTdphj = await GAZ_ERC20xDNa95y.approve.call(addressArys3B6, {from: accounts[3]});
//		const booljEmZ26z = await GAZ_ERC20xDNa95y.approve.call(addresseT9oSs, uintw832j0, {from: accounts[2]});
//		const boolTc7zfts = await GAZ_ERC20xDNa95y.transferFrom.call(addressTguD3tr, addresstzCbdin, uintWgfSh6U, {from: accounts[3]});
//		const boolbzUmTM = await GAZ_ERC20xDNa95y.transfer.call(addresso5FeQey, uintDdDQo7G, {from: accounts[2]});

		assert.equal(boolb37sHP6, true)
		await expect(GAZ_ERC20xDNa95y.approve.call(addressArys3B6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20xDNa95y = await GAZ_ERC20.new({from: accounts[4]});
		const addressXGyPPZ = accounts[1]
		const uintW9ap1LY = BigInt("668")
		const addressqYzJewb = accounts[0]
		const uinttkGXNkw = BigInt("793")
		const addresswHfk5hy = accounts[1]
		const addressjiIsHg = accounts[2]
//		const bools2VSgWi = await GAZ_ERC20xDNa95y.approve.call(addressXGyPPZ, {from: accounts[0]});
//		const boolb37sHP6 = await GAZ_ERC20xDNa95y.transfer.call(addressqYzJewb, uintW9ap1LY, {from: accounts[4]});
//		const boolTc7zfts = await GAZ_ERC20xDNa95y.transferFrom.call(addressjiIsHg, addresswHfk5hy, uinttkGXNkw, {from: accounts[3]});

		await expect(GAZ_ERC20xDNa95y.approve.call(addressXGyPPZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20NOGyBn9 = await GAZ_ERC20.new({from: accounts[3]});
		const addressqIBjUTr = accounts[4]
		const uintwzzpk2x = BigInt("683")
		const addressYJHRh4Y = accounts[2]
//		const boolt0NdGXR = await GAZ_ERC20NOGyBn9.approve.call(addressqIBjUTr, {from: accounts[5]});
//		const boolAXqjeos = await GAZ_ERC20NOGyBn9.approve.call(addressYJHRh4Y, uintwzzpk2x, {from: accounts[3]});

		await expect(GAZ_ERC20NOGyBn9.approve.call(addressqIBjUTr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20xDNa95y = await GAZ_ERC20.new({from: accounts[4]});
		const uintCn7HzT = BigInt("1277")
		const addressqfZmo86 = accounts[3]
		const addressp2pr4w3 = accounts[3]
		const uinteJvN9M7 = BigInt("777")
		const addressEzVv9Ds = accounts[1]
		const addressErxLVIg = accounts[2]
		const booltRr5NC = await GAZ_ERC20xDNa95y.transfer.call(addressqfZmo86, uintCn7HzT, {from: accounts[4]});
//		const boolAE1JtwE = await GAZ_ERC20xDNa95y.approve.call(addressp2pr4w3, {from: accounts[2]});
//		const boolTc7zfts = await GAZ_ERC20xDNa95y.transferFrom.call(addressErxLVIg, addressEzVv9Ds, uinteJvN9M7, {from: accounts[3]});

		assert.equal(booltRr5NC, true)
		await expect(GAZ_ERC20xDNa95y.approve.call(addressp2pr4w3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})