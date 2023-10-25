const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const WeedburnRH0xOvG = await Weedburn.new({from: accounts[2]});
		const uintqB1I3zG = BigInt("439")
		const addressuUNWBHo = accounts[3]
		const addressgEF9W2p = accounts[5]
		const addressYs5YCDP = accounts[2]
		await WeedburnRH0xOvG.disableDevMode.call({from: accounts[2]});
		await WeedburnRH0xOvG.disableLimitMode.call({from: accounts[1]});
		await WeedburnRH0xOvG.enableDevMode.call({from: accounts[4]});
		const boolLPtIz3 = await WeedburnRH0xOvG.increaseAllowance.call(addressuUNWBHo, uintqB1I3zG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256s1BdQCt = await WeedburnRH0xOvG.allowance.call(addressYs5YCDP, addressgEF9W2p, {from: accounts[4]});

		await expect(WeedburnRH0xOvG.disableDevMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnQO6ABcE = await Weedburn.new({from: accounts[1]});
		const uintd6teK0b = BigInt("1281")
		const addressJa7Nog6 = accounts[3]
		const uintEhiQnsp = BigInt("2043")
		const addressOj3IAjr = await WeedburnQO6ABcE.burnFrom.call(addressJa7Nog6, uintd6teK0b, {from: accounts[2]});
		const uint256mF2awLF = await WeedburnQO6ABcE.burn.call(uintEhiQnsp, {from: accounts[4]});

		await expect(WeedburnQO6ABcE.burnFrom.call(addressJa7Nog6, uintd6teK0b, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnPR9e3Xw = await Weedburn.new({from: accounts[4]});
		const uintzUs9n7h = BigInt("1792")
		const addressJyjqtO = accounts[3]
		const addressAnYjCHx = "0x0000000000000000000000000000000000000001"
		const boolozEP2G2 = await WeedburnPR9e3Xw.transferFrom.call(addressAnYjCHx, addressJyjqtO, uintzUs9n7h, {from: accounts[5]});
		await WeedburnPR9e3Xw.disableLimitMode.call({from: accounts[0]});
		await WeedburnPR9e3Xw.disableLimitMode.call({from: accounts[4]});

		await expect(WeedburnPR9e3Xw.transferFrom.call(addressAnYjCHx, addressJyjqtO, uintzUs9n7h, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const stringTIHcjUY = "cBEgBv6gFSV8rIOw9Nunod1ZIJcyAlkNxX9RLEEn1RvjK6tf7jKaHdi5HszZuV"
		const stringKtN3ugl = "ARGOjvU9GJJSfqKP29MMj2TGfSGQw1tkdVNYkEhaTwl2NRRFHGgx37dRdpNxb"
		const uintN5PXTUb = BigInt("157")
		const WeedburnhW6TcDw = await Weedburn.new(stringTIHcjUY, stringKtN3ugl, uintN5PXTUb, {from: accounts[5]});
		const uintLFmt03T = BigInt("1836")
		const addressn2m3IQl = accounts[2]
		const uintzt9xC6 = BigInt("1745")
		const boolyV0A9Ox = await WeedburnhW6TcDw.transfer.call(addressn2m3IQl, uintLFmt03T, {from: accounts[4]});
		const uint256kHw0Fba = await WeedburnhW6TcDw.burn.call(uintzt9xC6, {from: accounts[1]});
		const uint256vNHgmn6 = await WeedburnhW6TcDw.totalSupply.call({from: accounts[4]});
		const uint256YldxIfC = await WeedburnhW6TcDw.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Weedburn', async () => {
		const WeedburnFTkh5wF = await Weedburn.new({from: accounts[0]});
		const addresskCf3I4R = accounts[2]
		const addressD7WUspz = accounts[4]
		const uintJtQypDa = BigInt("652")
		const addresscTUXXVs = accounts[0]
		const uint256oc2Pa6 = await WeedburnFTkh5wF.allowance.call(addressD7WUspz, addresskCf3I4R, {from: accounts[4]});
		const bool8blZdB = await WeedburnFTkh5wF.increaseAllowance.call(addresscTUXXVs, uintJtQypDa, {from: "0x0000000000000000000000000000000000000001"});
		await WeedburnFTkh5wF.enableDevMode.call({from: accounts[3]});

		assert.equal(bool8blZdB, true)
		assert.equal(uint256oc2Pa6, BigInt("0"))
		await expect(WeedburnFTkh5wF.enableDevMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburngG3YxDe = await Weedburn.new({from: accounts[5]});
		const uintuBW3HKU = BigInt("1817")
		const addressQ1Qn2Cn = accounts[0]
		const uintdLosjgu = BigInt("1518")
		const addressuUPzQrG = accounts[3]
		const uintk8Ioo7D = BigInt("808")
		const addressQ84yVEG = accounts[1]
		const uintwXw93RL = BigInt("1878")
		const addressoY4fCPf = accounts[5]
		const boolBEmiRVq = await WeedburngG3YxDe.decreaseAllowance.call(addressQ1Qn2Cn, uintuBW3HKU, {from: accounts[3]});
		const uint256iSB2B5X = await WeedburngG3YxDe.totalSupply.call({from: accounts[4]});
		const boolojJug0 = await WeedburngG3YxDe.increaseAllowance.call(addressuUPzQrG, uintdLosjgu, {from: accounts[2]});
		const boolzsSjv38 = await WeedburngG3YxDe.approve.call(addressQ84yVEG, uintk8Ioo7D, {from: accounts[4]});
		const boolMqJyUCa = await WeedburngG3YxDe.increaseAllowance.call(addressoY4fCPf, uintwXw93RL, {from: accounts[5]});
		await WeedburngG3YxDe.enableLimitMode.call({from: accounts[4]});

		await expect(WeedburngG3YxDe.decreaseAllowance.call(addressQ1Qn2Cn, uintuBW3HKU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnQO6ABcE = await Weedburn.new({from: accounts[1]});
		const uintqGnXZd8 = BigInt("2043")
		const uint256mF2awLF = await WeedburnQO6ABcE.burn.call(uintqGnXZd8, {from: accounts[4]});
		const stringmez22pn = await WeedburnQO6ABcE.symbol.call({from: accounts[3]});

		await expect(WeedburnQO6ABcE.burn.call(uintqGnXZd8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnQO6ABcE = await Weedburn.new({from: accounts[1]});
		const uintYPzJiAa = BigInt("1281")
		const addressBKcM5xi = accounts[3]
		const uintP4nBoQG = BigInt("2024")
		await WeedburnQO6ABcE.enableLimitMode.call({from: accounts[2]});
		const addressOj3IAjr = await WeedburnQO6ABcE.burnFrom.call(addressBKcM5xi, uintYPzJiAa, {from: accounts[2]});
		const uint256mF2awLF = await WeedburnQO6ABcE.burn.call(uintP4nBoQG, {from: accounts[4]});

		await expect(WeedburnQO6ABcE.enableLimitMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnQO6ABcE = await Weedburn.new({from: accounts[1]});
		const uintZbbqeHi = BigInt("1927")
		const addressr9UxAXa = accounts[5]
		const uintKc4ozx = BigInt("1281")
		const addressyw4NT5G = accounts[3]
		const addressgxsyGzI = accounts[4]
		const uintmnaZP8Z = BigInt("2028")
		const boolrWEerHJ = await WeedburnQO6ABcE.transfer.call(addressr9UxAXa, uintZbbqeHi, {from: "0x0000000000000000000000000000000000000001"});
		const addressOj3IAjr = await WeedburnQO6ABcE.burnFrom.call(addressyw4NT5G, uintKc4ozx, {from: accounts[2]});
		const uint2568Kdib5 = await WeedburnQO6ABcE.balanceOf.call(addressgxsyGzI, {from: accounts[4]});
		const uint256mF2awLF = await WeedburnQO6ABcE.burn.call(uintmnaZP8Z, {from: accounts[4]});

		await expect(WeedburnQO6ABcE.transfer.call(addressr9UxAXa, uintZbbqeHi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnQO6ABcE = await Weedburn.new({from: accounts[1]});
		const uintFIBHgcR = BigInt("57")
		const addresskwcdshj = accounts[1]
		const uintgh7eI2i = BigInt("885")
		const addressVGa0a9L = accounts[5]
		const uintaiMzzL8 = BigInt("1511")
		const addressNvODKex = accounts[5]
		const addressVtZKv2 = accounts[4]
		const uintx3AMNYK = BigInt("1245")
		const boolklJEEoj = await WeedburnQO6ABcE.approve.call(addresskwcdshj, uintFIBHgcR, {from: accounts[2]});
		const boolmQGVPbs = await WeedburnQO6ABcE.approve.call(addressVGa0a9L, uintgh7eI2i, {from: accounts[3]});
		await WeedburnQO6ABcE.enableDevMode.call({from: accounts[0]});
		const boolf212npg = await WeedburnQO6ABcE.transferFrom.call(addressVtZKv2, addressNvODKex, uintaiMzzL8, {from: accounts[5]});
		const uint256mF2awLF = await WeedburnQO6ABcE.burn.call(uintx3AMNYK, {from: accounts[4]});

		assert.equal(boolklJEEoj, true)
		assert.equal(boolmQGVPbs, true)
		await expect(WeedburnQO6ABcE.enableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnPR9e3Xw = await Weedburn.new({from: accounts[4]});
		const uintAaNeXCN = BigInt("905")
		const uint256NhOqViG = await WeedburnPR9e3Xw.totalSupply.call({from: accounts[5]});
		const uint256zMstq11 = await WeedburnPR9e3Xw.burn.call(uintAaNeXCN, {from: accounts[2]});
		await WeedburnPR9e3Xw.disableDevMode.call({from: accounts[1]});
		await WeedburnPR9e3Xw.enableDevMode.call({from: accounts[4]});
		await WeedburnPR9e3Xw.disableLimitMode.call({from: accounts[0]});
		await WeedburnPR9e3Xw.disableLimitMode.call({from: accounts[4]});

		assert.equal(uint256NhOqViG, BigInt("100000000000000000000000"))
		await expect(WeedburnPR9e3Xw.burn.call(uintAaNeXCN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnPR9e3Xw = await Weedburn.new({from: accounts[4]});
		const addressVhZVor = accounts[0]
		const uint256TQPyDG = await WeedburnPR9e3Xw.balanceOf.call(addressVhZVor, {from: accounts[4]});
		await WeedburnPR9e3Xw.enableDevMode.call({from: accounts[4]});
		await WeedburnPR9e3Xw.disableLimitMode.call({from: accounts[0]});
		await WeedburnPR9e3Xw.disableLimitMode.call({from: accounts[4]});

		assert.equal(uint256TQPyDG, BigInt("0"))
		await expect(WeedburnPR9e3Xw.enableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnQO6ABcE = await Weedburn.new({from: accounts[1]});
		const uintzZl5nqo = BigInt("1514")
		const addressxNmdbHP = accounts[6]
		const addressfJtliC0 = accounts[4]
		const stringu4rI3kK = await WeedburnQO6ABcE.symbol.call({from: accounts[3]});
		const boolf212npg = await WeedburnQO6ABcE.transferFrom.call(addressfJtliC0, addressxNmdbHP, uintzZl5nqo, {from: accounts[5]});

		assert.equal(stringu4rI3kK, "Weedburn")
		await expect(WeedburnQO6ABcE.transferFrom.call(addressfJtliC0, addressxNmdbHP, uintzZl5nqo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnBX6pbJ = await Weedburn.new({from: accounts[5]});
		const addressf9N6iB3 = accounts[4]
		const uint8Yvu3fNv = await WeedburnBX6pbJ.decimals.call({from: accounts[4]});
		await WeedburnBX6pbJ.enableLimitMode.call({from: accounts[4]});
		await WeedburnBX6pbJ.enableDevMode.call({from: accounts[4]});
		const uint8WXn69ZQ = await WeedburnBX6pbJ.decimals.call({from: accounts[1]});
		const uint256xnXDB2A = await WeedburnBX6pbJ.balanceOf.call(addressf9N6iB3, {from: accounts[1]});

		assert.equal(uint8Yvu3fNv, BigInt("18"))
		await expect(WeedburnBX6pbJ.enableLimitMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnfG4MIjO = await Weedburn.new({from: accounts[3]});
		const uintKM2Cls = BigInt("1857")
		const addressFcDxjhX = accounts[3]
		const stringTNXjSew = await WeedburnfG4MIjO.name.call({from: accounts[3]});
		const booly1swDNk = await WeedburnfG4MIjO.transfer.call(addressFcDxjhX, uintKM2Cls, {from: accounts[1]});

		assert.equal(stringTNXjSew, "t.me/burnweed1")
		await expect(WeedburnfG4MIjO.transfer.call(addressFcDxjhX, uintKM2Cls, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnQO6ABcE = await Weedburn.new({from: accounts[1]});
		const uintMtPvJoX = BigInt("237")
		const addressac6nEMI = "0x0000000000000000000000000000000000000001"
		const addressvhmcrzY = accounts[1]
		const uintTrWVFg1 = BigInt("736")
		const addressEdRmDU = accounts[3]
		const uintVMfGkD = BigInt("1511")
		const addressaoMl7vL = accounts[6]
		const addressJ4lr1IS = accounts[4]
		const booln9wksKQ = await WeedburnQO6ABcE.transferFrom.call(addressvhmcrzY, addressac6nEMI, uintMtPvJoX, {from: "0x0000000000000000000000000000000000000001"});
		const boolk0ab76H = await WeedburnQO6ABcE.transfer.call(addressEdRmDU, uintTrWVFg1, {from: accounts[2]});
		const boolf212npg = await WeedburnQO6ABcE.transferFrom.call(addressJ4lr1IS, addressaoMl7vL, uintVMfGkD, {from: accounts[5]});

		await expect(WeedburnQO6ABcE.transferFrom.call(addressvhmcrzY, addressac6nEMI, uintMtPvJoX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnQO6ABcE = await Weedburn.new({from: accounts[1]});
		const uintNBJaGUX = BigInt("14")
		const uintn6T8L2w = BigInt("1250")
		const uint256zyEEmYr = await WeedburnQO6ABcE.burn.call(uintNBJaGUX, {from: accounts[1]});
		const uint256mF2awLF = await WeedburnQO6ABcE.burn.call(uintn6T8L2w, {from: accounts[4]});

		await expect(WeedburnQO6ABcE.burn.call(uintn6T8L2w, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnwaBxbDX = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintl3WbVYU = BigInt("452")
		const addressOi0RCYw = accounts[5]
		const uintBJnoj8d = BigInt("1027")
		const uintiuyg5Ac = BigInt("1368")
		const addresseoOQrcK = accounts[0]
		const boolriLNB4D = await WeedburnwaBxbDX.decreaseAllowance.call(addressOi0RCYw, uintl3WbVYU, {from: "0x0000000000000000000000000000000000000001"});
		await WeedburnwaBxbDX.disableLimitMode.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256B0JaHu7 = await WeedburnwaBxbDX.burn.call(uintBJnoj8d, {from: accounts[1]});
		await WeedburnwaBxbDX.enableDevMode.call({from: "0x0000000000000000000000000000000000000001"});
		await WeedburnwaBxbDX.disableLimitMode.call({from: accounts[2]});
		const boolA2kV4B = await WeedburnwaBxbDX.approve.call(addresseoOQrcK, uintiuyg5Ac, {from: accounts[3]});
	});

	it('test for Weedburn', async () => {
		const WeedburnfG4MIjO = await Weedburn.new({from: accounts[3]});
		const uintg7YMTD1 = BigInt("597")
		const addressR25frw = accounts[0]
		const uintJlWdNAi = BigInt("1899")
		const addresssisobez = accounts[3]
		const uintxbWWPiE = BigInt("41")
		const addressHuIIttI = accounts[2]
		const booloZ4Lw7b = await WeedburnfG4MIjO.transfer.call(addressR25frw, uintg7YMTD1, {from: accounts[3]});
		const booly1swDNk = await WeedburnfG4MIjO.transfer.call(addresssisobez, uintJlWdNAi, {from: accounts[1]});
		const boolEyaSDd = await WeedburnfG4MIjO.decreaseAllowance.call(addressHuIIttI, uintxbWWPiE, {from: accounts[1]});

		assert.equal(booloZ4Lw7b, true)
		await expect(WeedburnfG4MIjO.transfer.call(addresssisobez, uintJlWdNAi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})