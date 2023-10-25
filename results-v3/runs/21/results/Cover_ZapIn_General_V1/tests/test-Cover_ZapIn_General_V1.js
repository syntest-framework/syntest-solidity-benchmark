const Cover_ZapIn_General_V1 = artifacts.require("Cover_ZapIn_General_V1");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cover_ZapIn_General_V1', (accounts) => {
	it('test for Cover_ZapIn_General_V1', async () => {
		const uintrO0IURT = BigInt("1803")
		const Cover_ZapIn_General_V15X9Ht3 = await Cover_ZapIn_General_V1.new(uintrO0IURT, {from: accounts[5]});
		const byteuu5dz8G = "0x1900071604031917160b1c1605171211"
		const addressA6056Y = accounts[2]
		const addressCwOvzZD = accounts[1]
		const uintc1ZWl5H = BigInt("1571")
		const addressvHGgCff = accounts[5]
		const addressJnb0UOn = accounts[0]
		const addressE9vw5Y0 = accounts[1]
		const addressZpdvejp = accounts[4]
		const boola9BHvi5 = await Cover_ZapIn_General_V15X9Ht3.isOwner.call({from: accounts[3]});
		const 
WriykPl = await Cover_ZapIn_General_V15X9Ht3.ZapIn.call(addressZpdvejp, addressE9vw5Y0, addressJnb0UOn, addressvHGgCff, uintc1ZWl5H, addressCwOvzZD, addressA6056Y, byteuu5dz8G, {from: accounts[2]});
		const addressrxmnm2C = await Cover_ZapIn_General_V15X9Ht3.owner.call({from: accounts[4]});
		await Cover_ZapIn_General_V15X9Ht3.renounceOwnership.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintwaSL73f = BigInt("767")
		const Cover_ZapIn_General_V1CTMcfjs = await Cover_ZapIn_General_V1.new(uintwaSL73f, {from: accounts[1]});
		const uintl8MMiiM = BigInt("1344")
		const addresshf764eE = accounts[0]
		const uintpNFSADt = BigInt("1115")
		const addressSRnfPoA = accounts[0]
		const uint16yekxN6 = await Cover_ZapIn_General_V1CTMcfjs.set_new_goodwill.call(uintl8MMiiM, {from: accounts[4]});
		const addressn2QchuH = await Cover_ZapIn_General_V1CTMcfjs.toPayable.call(addresshf764eE, {from: accounts[1]});
		await Cover_ZapIn_General_V1CTMcfjs._enterCover.call(addressSRnfPoA, uintpNFSADt, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintGUO26Vv = BigInt("1334")
		const Cover_ZapIn_General_V1DYDR3v = await Cover_ZapIn_General_V1.new(uintGUO26Vv, {from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1DYDR3v.renounceOwnership.call({from: accounts[1]});
		const addresslMhhdgW = await Cover_ZapIn_General_V1DYDR3v.owner.call({from: accounts[5]});
		await Cover_ZapIn_General_V1DYDR3v.stopInEmergency.call({from: accounts[4]});
		const addressVkDBJnV = await Cover_ZapIn_General_V1DYDR3v.owner.call({from: accounts[0]});
		await Cover_ZapIn_General_V1DYDR3v.renounceOwnership.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintpXuor3W = BigInt("2009")
		const Cover_ZapIn_General_V1bXJpAsh = await Cover_ZapIn_General_V1.new(uintpXuor3W, {from: accounts[4]});
		const addresszqkZ4qG = "0x0000000000000000000000000000000000000001"
		const addresstK1rpMN = accounts[0]
		const uintbuihtp = BigInt("1148")
		const addressmdXuIBT = accounts[4]
		const addressae5Z0dO = accounts[2]
		const addresssx2WDT2 = accounts[0]
		const uintC1a454 = BigInt("1129")
		const addressoXW6pgK = accounts[5]
		const addressh7rDnre = accounts[2]
		const addressMG6xvWS = accounts[4]
		const 
cOMNSIm = await Cover_ZapIn_General_V1bXJpAsh._enterPosition.call(addressmdXuIBT, uintbuihtp, addresstK1rpMN, addresszqkZ4qG, {from: accounts[1]});
		await Cover_ZapIn_General_V1bXJpAsh.stopInEmergency.call({from: accounts[0]});
		const 
O8Qv8GA = await Cover_ZapIn_General_V1bXJpAsh._enterPosition.call(addressoXW6pgK, uintC1a454, addresssx2WDT2, addressae5Z0dO, {from: accounts[2]});
		const addressRb36TbD = await Cover_ZapIn_General_V1bXJpAsh.toPayable.call(addressh7rDnre, {from: accounts[0]});
		const addresspjIfFu = await Cover_ZapIn_General_V1bXJpAsh.transferOwnership.call(addressMG6xvWS, {from: accounts[3]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintc54YLrz = BigInt("795")
		const Cover_ZapIn_General_V1WxQ3BIP = await Cover_ZapIn_General_V1.new(uintc54YLrz, {from: accounts[0]});
		const addressFpo1C1d = accounts[4]
		const addresswZEXiHJ = await Cover_ZapIn_General_V1WxQ3BIP.owner.call({from: accounts[1]});
		await Cover_ZapIn_General_V1WxQ3BIP.stopInEmergency.call({from: accounts[2]});
		const addressZ539az = await Cover_ZapIn_General_V1WxQ3BIP.owner.call({from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1WxQ3BIP.nonReentrant.call({from: accounts[5]});
		await Cover_ZapIn_General_V1WxQ3BIP.onlyOwner.call({from: accounts[3]});
		const addressXT4OH0P = await Cover_ZapIn_General_V1WxQ3BIP.transferOwnership.call(addressFpo1C1d, {from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintAYSctU5 = BigInt("767")
		const Cover_ZapIn_General_V1CTMcfjs = await Cover_ZapIn_General_V1.new(uintAYSctU5, {from: accounts[1]});
		const addresslBBnn3N = accounts[2]
		await Cover_ZapIn_General_V1CTMcfjs.renounceOwnership.call({from: accounts[1]});
		const addressn2QchuH = await Cover_ZapIn_General_V1CTMcfjs.toPayable.call(addresslBBnn3N, {from: accounts[1]});
		await Cover_ZapIn_General_V1CTMcfjs.renounceOwnership.call({from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintwrsckK = BigInt("1601")
		const Cover_ZapIn_General_V1MOr0dW4 = await Cover_ZapIn_General_V1.new(uintwrsckK, {from: accounts[1]});
		const addresssseQDf = accounts[5]
		const uintOSDd8Qy = BigInt("1258")
		const addressLP6jRzJ = accounts[3]
		await Cover_ZapIn_General_V1MOr0dW4.toggleContractActive.call({from: accounts[1]});
		const addressuxifXhJ = await Cover_ZapIn_General_V1MOr0dW4.inCaseTokengetsStuck.call(addresssseQDf, {from: accounts[3]});
		await Cover_ZapIn_General_V1MOr0dW4._enterCover.call(addressLP6jRzJ, uintOSDd8Qy, {from: "0x0000000000000000000000000000000000000001"});
		await Cover_ZapIn_General_V1MOr0dW4.renounceOwnership.call({from: accounts[4]});
		await Cover_ZapIn_General_V1MOr0dW4.stopInEmergency.call({from: accounts[0]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintvYc71pI = BigInt("1803")
		const Cover_ZapIn_General_V15X9Ht3 = await Cover_ZapIn_General_V1.new(uintvYc71pI, {from: accounts[5]});
		const addressnQv9sR3 = accounts[2]
		const bytepMuwHeD = "0x121408191a1e1c1515130b1b"
		const addressD8cOFx = accounts[4]
		const addressrHcdgS2 = accounts[1]
		const uintOjsJh2 = BigInt("2023")
		const addressmM6nTzk = accounts[4]
		const addressO1UJVWb = accounts[2]
		const addressXz4YpG = accounts[1]
		const addressWWGuAqL = "0x0000000000000000000000000000000000000001"
		const byte9BJEWk = "0x1900071604031917160b1c1605171211"
		const addressatRXIyl = accounts[2]
		const addressOaRYlct = accounts[1]
		const uints98mcGi = BigInt("1571")
		const addressdZqgLiJ = accounts[5]
		const addressq84vRft = accounts[0]
		const addressjqVZeqv = accounts[1]
		const addresswOSFfoG = accounts[5]
		const addressCAbD0iZ = await Cover_ZapIn_General_V15X9Ht3.inCaseTokengetsStuck.call(addressnQv9sR3, {from: accounts[5]});
		const 
uPJ2Qwu = await Cover_ZapIn_General_V15X9Ht3.ZapIn.call(addressWWGuAqL, addressXz4YpG, addressO1UJVWb, addressmM6nTzk, uintOjsJh2, addressrHcdgS2, addressD8cOFx, bytepMuwHeD, {from: "0x0000000000000000000000000000000000000001"});
		const 
WriykPl = await Cover_ZapIn_General_V15X9Ht3.ZapIn.call(addresswOSFfoG, addressjqVZeqv, addressq84vRft, addressdZqgLiJ, uints98mcGi, addressOaRYlct, addressatRXIyl, byte9BJEWk, {from: accounts[2]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uintMaOBZFC = BigInt("767")
		const Cover_ZapIn_General_V1CTMcfjs = await Cover_ZapIn_General_V1.new(uintMaOBZFC, {from: accounts[1]});
		const uintR3tZzXm = BigInt("523")
		const addressjMD1SJ8 = accounts[2]
		const uint16dmuPPQY = await Cover_ZapIn_General_V1CTMcfjs.set_new_goodwill.call(uintR3tZzXm, {from: accounts[1]});
		const addressn2QchuH = await Cover_ZapIn_General_V1CTMcfjs.toPayable.call(addressjMD1SJ8, {from: accounts[1]});
	});

	it('test for Cover_ZapIn_General_V1', async () => {
		const uinttBku2H = BigInt("767")
		const Cover_ZapIn_General_V1CTMcfjs = await Cover_ZapIn_General_V1.new(uinttBku2H, {from: accounts[1]});
		const addressm4eRB3 = accounts[2]
		await Cover_ZapIn_General_V1CTMcfjs.withdraw.call({from: accounts[1]});
		const addressn2QchuH = await Cover_ZapIn_General_V1CTMcfjs.toPayable.call(addressm4eRB3, {from: accounts[1]});
	});
})