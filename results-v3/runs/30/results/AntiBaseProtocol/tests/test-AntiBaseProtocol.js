const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolK8mUsvH = await AntiBaseProtocol.new({from: accounts[0]});
		const uintgpZaJiF = BigInt("1226")
		const addressR4psiW0 = accounts[1]
		const uintgGRyhIr = BigInt("740")
		const addressWmtKn3n = accounts[1]
		const addressdTcBeTG = accounts[0]
		const stringl08Niza = await AntiBaseProtocolK8mUsvH.name.call({from: accounts[2]});
		const boolIOckB9b = await AntiBaseProtocolK8mUsvH.approve.call(addressR4psiW0, uintgpZaJiF, {from: accounts[3]});
		const addresss7ZhX9Z = await AntiBaseProtocolK8mUsvH._approve.call(addressdTcBeTG, addressWmtKn3n, uintgGRyhIr, {from: accounts[3]});
		const boolKCvQFz4 = await AntiBaseProtocolK8mUsvH.isOwner.call({from: accounts[0]});

		assert.equal(boolIOckB9b, true)
		assert.equal(stringl08Niza, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolK8mUsvH._approve.call(addressdTcBeTG, addressWmtKn3n, uintgGRyhIr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolBoqgOQJ = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uinty4lkzqK = BigInt("1857")
		const uintx7t5PK = BigInt("1195")
		const address58LebP = accounts[3]
		const addressbpk76Cs = accounts[2]
		const addressBJiCmlE = accounts[4]
		const uint256TmKTeD2 = await AntiBaseProtocolBoqgOQJ.findBurnFee.call(uinty4lkzqK, {from: accounts[4]});
		const boolZVzoxLH = await AntiBaseProtocolBoqgOQJ.decreaseAllowance.call(address58LebP, uintx7t5PK, {from: accounts[2]});
		const uint256Twu23NP = await AntiBaseProtocolBoqgOQJ.allowance.call(addressBJiCmlE, addressbpk76Cs, {from: accounts[2]});
		const uint8W5IsAmS = await AntiBaseProtocolBoqgOQJ.decimals.call({from: accounts[2]});
	});

	it('test for AntiBaseProtocol', async () => {
		const stringkeLel3 = "iAKeMVz3GPSEkBejBFGD2"
		const stringUnegdWC = "ylgKR3Xtw9Adp3o5EFxbDvTQz8LGeN7Sv53oAT3KKS0UAz4bCy7gMaKk9Golbx7hi07nGo5siDjksqee0Kwt6sibCjUt"
		const uintSJ8NKMe = BigInt("112")
		const AntiBaseProtocolDnSvoit = await AntiBaseProtocol.new(stringkeLel3, stringUnegdWC, uintSJ8NKMe, {from: accounts[1]});
		const addresswsIv7lb = accounts[3]
		const addressWpCNyXo = accounts[2]
		const uint256wtDAJHe = await AntiBaseProtocolDnSvoit.allowance.call(addressWpCNyXo, addresswsIv7lb, {from: accounts[3]});
		const uint8uItwngs = await AntiBaseProtocolDnSvoit.decimals.call({from: accounts[0]});
		const stringX7p44Q = await AntiBaseProtocolDnSvoit.name.call({from: accounts[3]});
		const uint8UiI7WuB = await AntiBaseProtocolDnSvoit.decimals.call({from: accounts[3]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolarajAqe = await AntiBaseProtocol.new({from: accounts[3]});
		const addressUeEQAbj = accounts[5]
		const addressOKPxWki = accounts[3]
		const uintNQEwSDo = BigInt("506")
		const addressvUVRttU = accounts[0]
		const uintKsL0erM = BigInt("1430")
		const addressXQKoB6T = accounts[1]
		const uintzbKI3A = BigInt("1639")
		const addressJi33u4s = accounts[4]
		const addressFZiepBI = accounts[1]
		const uintpLXwGaq = BigInt("512")
		const addressSZvFJuH = accounts[4]
		const addressiiJQrtZ = accounts[2]
		const uint256LEzJpUq = await AntiBaseProtocolarajAqe.allowance.call(addressOKPxWki, addressUeEQAbj, {from: accounts[2]});
		const boolgtwMr4I = await AntiBaseProtocolarajAqe.transfer.call(addressvUVRttU, uintNQEwSDo, {from: accounts[1]});
		const boole5Bplk5 = await AntiBaseProtocolarajAqe.transfer.call(addressXQKoB6T, uintKsL0erM, {from: accounts[3]});
		const boolOAs9mBF = await AntiBaseProtocolarajAqe.transferFrom.call(addressFZiepBI, addressJi33u4s, uintzbKI3A, {from: accounts[4]});
		const addressWsT0mq = await AntiBaseProtocolarajAqe._approve.call(addressiiJQrtZ, addressSZvFJuH, uintpLXwGaq, {from: accounts[3]});

		assert.equal(uint256LEzJpUq, BigInt("0"))
		await expect(AntiBaseProtocolarajAqe.transfer.call(addressvUVRttU, uintNQEwSDo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolvULeaQj = await AntiBaseProtocol.new({from: accounts[1]});
		const uintdh3IUCR = BigInt("1714")
		const addressnJQc7bc = accounts[4]
		const address2KzgbD = accounts[5]
		const uintEb4AcbP = BigInt("344")
		const addresshj6VAOP = accounts[4]
		const addressASPYK9N = accounts[1]
		const uintz9l7fA = BigInt("228")
		const addressxgrNqMu = accounts[3]
		const boolwNIo63Y = await AntiBaseProtocolvULeaQj.transferFrom.call(address2KzgbD, addressnJQc7bc, uintdh3IUCR, {from: accounts[2]});
		const boolPzHkKzD = await AntiBaseProtocolvULeaQj.transfer.call(addresshj6VAOP, uintEb4AcbP, {from: accounts[2]});
		const addressxbhln02 = await AntiBaseProtocolvULeaQj.transferOwnership.call(addressASPYK9N, {from: accounts[0]});
		const boolu7w0oK2 = await AntiBaseProtocolvULeaQj.approve.call(addressxgrNqMu, uintz9l7fA, {from: accounts[2]});
		const uint8RYnnXCT = await AntiBaseProtocolvULeaQj.decimals.call({from: accounts[1]});
		await AntiBaseProtocolvULeaQj.requestGas.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(AntiBaseProtocolvULeaQj.transferFrom.call(address2KzgbD, addressnJQc7bc, uintdh3IUCR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolfB0FUaD = await AntiBaseProtocol.new({from: accounts[1]});
		const uintXhAe5PY = BigInt("279")
		const addresscFaE3Rl = accounts[4]
		const uintDbS0Ets = BigInt("837")
		await AntiBaseProtocolfB0FUaD.renounceOwnership.call({from: accounts[1]});
		const booldydWKWV = await AntiBaseProtocolfB0FUaD.approve.call(addresscFaE3Rl, uintXhAe5PY, {from: accounts[1]});
		const uint8Va1c63f = await AntiBaseProtocolfB0FUaD.decimals.call({from: accounts[3]});
		const uint256uMn0Pji = await AntiBaseProtocolfB0FUaD.findBurnFee.call(uintDbS0Ets, {from: accounts[1]});

		await expect(AntiBaseProtocolfB0FUaD.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolD1hWUNJ = await AntiBaseProtocol.new({from: accounts[4]});
		const uintHi25gDW = BigInt("207")
		const uintwmdLuOT = BigInt("1545")
		const uintibc4M0 = BigInt("1252")
		const addressYdnx75j = accounts[2]
		const stringPUbBi5v = await AntiBaseProtocolD1hWUNJ.symbol.call({from: accounts[2]});
		const boolai1spOo = await AntiBaseProtocolD1hWUNJ.isOwner.call({from: accounts[1]});
		const uint256jBFe3Cg = await AntiBaseProtocolD1hWUNJ.findRewardFee.call(uintHi25gDW, {from: accounts[5]});
		const uint256GV0J9Ir = await AntiBaseProtocolD1hWUNJ.burn.call(uintwmdLuOT, {from: accounts[2]});
		const addressUBFn0jq = await AntiBaseProtocolD1hWUNJ._burn.call(addressYdnx75j, uintibc4M0, {from: accounts[4]});

		assert.equal(boolai1spOo, false)
		assert.equal(stringPUbBi5v, "ABASE")
		assert.equal(uint256jBFe3Cg, BigInt("15"))
		await expect(AntiBaseProtocolD1hWUNJ.burn.call(uintwmdLuOT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolP47Exn = await AntiBaseProtocol.new({from: accounts[1]});
		const addressTg1SkV4 = accounts[2]
		const addressTHa1pMl = accounts[4]
		const uintWDZ52XU = BigInt("1898")
		const uint256W5D5smv = await AntiBaseProtocolP47Exn.balanceOf.call(addressTg1SkV4, {from: accounts[0]});
		const addresszpWwJCn = await AntiBaseProtocolP47Exn._transferOwnership.call(addressTHa1pMl, {from: accounts[0]});
		const uint256OZuVLg = await AntiBaseProtocolP47Exn.findBurnFee.call(uintWDZ52XU, {from: accounts[1]});

		assert.equal(uint256W5D5smv, BigInt("0"))
		await expect(AntiBaseProtocolP47Exn._transferOwnership.call(addressTHa1pMl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolD1hWUNJ = await AntiBaseProtocol.new({from: accounts[4]});
		const uintr03NzN = BigInt("207")
		const uintUysBTIZ = BigInt("1531")
		const uintjnnrgI1 = BigInt("1252")
		const addressNvbNRAP = accounts[2]
		const stringPUbBi5v = await AntiBaseProtocolD1hWUNJ.symbol.call({from: accounts[2]});
		const addressCTwG8uJ = await AntiBaseProtocolD1hWUNJ.owner.call({from: accounts[2]});
		const boolai1spOo = await AntiBaseProtocolD1hWUNJ.isOwner.call({from: accounts[1]});
		const uint256jBFe3Cg = await AntiBaseProtocolD1hWUNJ.findRewardFee.call(uintr03NzN, {from: accounts[5]});
		const uint256GV0J9Ir = await AntiBaseProtocolD1hWUNJ.burn.call(uintUysBTIZ, {from: accounts[2]});
		const addressUBFn0jq = await AntiBaseProtocolD1hWUNJ._burn.call(addressNvbNRAP, uintjnnrgI1, {from: accounts[4]});

		assert.equal(addressCTwG8uJ, 0x95b112f268F908aE8198C689FC343088a84B85bd)
		assert.equal(boolai1spOo, false)
		assert.equal(stringPUbBi5v, "ABASE")
		assert.equal(uint256jBFe3Cg, BigInt("15"))
		await expect(AntiBaseProtocolD1hWUNJ.burn.call(uintUysBTIZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolP47Exn = await AntiBaseProtocol.new({from: accounts[1]});
		const addresse1XIef2 = "0x0000000000000000000000000000000000000001"
		const uintvyY43G9 = BigInt("1876")
		const addresszgYaI0 = await AntiBaseProtocolP47Exn.transferOwnership.call(addresse1XIef2, {from: accounts[1]});
		await AntiBaseProtocolP47Exn.onlyOwner.call({from: accounts[0]});
		const uint256OZuVLg = await AntiBaseProtocolP47Exn.findBurnFee.call(uintvyY43G9, {from: accounts[1]});
		await AntiBaseProtocolP47Exn.requestGas.call({from: accounts[1]});

		await expect(AntiBaseProtocolP47Exn.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolD1hWUNJ = await AntiBaseProtocol.new({from: accounts[4]});
		const uintffjHcno = BigInt("197")
		const uintymxIsv = BigInt("2003")
		const addressPFGheDt = accounts[3]
		const uintWmGUbOQ = BigInt("1545")
		const uintFFMvBuk = BigInt("1252")
		const addressge0nRI6 = accounts[2]
		const stringPUbBi5v = await AntiBaseProtocolD1hWUNJ.symbol.call({from: accounts[2]});
		const uint256jBFe3Cg = await AntiBaseProtocolD1hWUNJ.findRewardFee.call(uintffjHcno, {from: accounts[5]});
		const boolVFWgx2r = await AntiBaseProtocolD1hWUNJ.increaseAllowance.call(addressPFGheDt, uintymxIsv, {from: accounts[4]});
		const uint256GV0J9Ir = await AntiBaseProtocolD1hWUNJ.burn.call(uintWmGUbOQ, {from: accounts[2]});
		const addressUBFn0jq = await AntiBaseProtocolD1hWUNJ._burn.call(addressge0nRI6, uintFFMvBuk, {from: accounts[4]});

		assert.equal(boolVFWgx2r, true)
		assert.equal(stringPUbBi5v, "ABASE")
		assert.equal(uint256jBFe3Cg, BigInt("10"))
		await expect(AntiBaseProtocolD1hWUNJ.burn.call(uintWmGUbOQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolP47Exn = await AntiBaseProtocol.new({from: accounts[1]});
		const uint5Axh6u = BigInt("1383")
		const addressIv6NDxz = accounts[0]
		const uintU6vGQ3x = BigInt("1858")
		const boolFBjufhX = await AntiBaseProtocolP47Exn.decreaseAllowance.call(addressIv6NDxz, uint5Axh6u, {from: accounts[4]});
		const uint256OZuVLg = await AntiBaseProtocolP47Exn.findBurnFee.call(uintU6vGQ3x, {from: accounts[1]});

		await expect(AntiBaseProtocolP47Exn.decreaseAllowance.call(addressIv6NDxz, uint5Axh6u, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolD1hWUNJ = await AntiBaseProtocol.new({from: accounts[4]});
		const uintPYrdydX = BigInt("417")
		const addressYuDFyvj = accounts[2]
		const uintcwCFvv = BigInt("198")
		const uintgj5wuN2 = BigInt("134")
		const uintyqIGItm = BigInt("1252")
		const addresszObWsF3 = accounts[2]
		const stringhm8vIlM = await AntiBaseProtocolD1hWUNJ.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const stringPUbBi5v = await AntiBaseProtocolD1hWUNJ.symbol.call({from: accounts[2]});
		const addressLTlL86T = await AntiBaseProtocolD1hWUNJ.burnFrom.call(addressYuDFyvj, uintPYrdydX, {from: accounts[5]});
		const uint256jBFe3Cg = await AntiBaseProtocolD1hWUNJ.findRewardFee.call(uintcwCFvv, {from: accounts[5]});
		const uint256GV0J9Ir = await AntiBaseProtocolD1hWUNJ.burn.call(uintgj5wuN2, {from: accounts[2]});
		const addressUBFn0jq = await AntiBaseProtocolD1hWUNJ._burn.call(addresszObWsF3, uintyqIGItm, {from: accounts[4]});

		assert.equal(stringPUbBi5v, "ABASE")
		assert.equal(stringhm8vIlM, "ABASE")
		await expect(AntiBaseProtocolD1hWUNJ.burnFrom.call(addressYuDFyvj, uintPYrdydX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolP47Exn = await AntiBaseProtocol.new({from: accounts[1]});
		const uintA0lrbxc = BigInt("2028")
		await AntiBaseProtocolP47Exn.renounceOwnership.call({from: accounts[5]});
		const uint256OZuVLg = await AntiBaseProtocolP47Exn.findBurnFee.call(uintA0lrbxc, {from: accounts[1]});

		await expect(AntiBaseProtocolP47Exn.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolD1hWUNJ = await AntiBaseProtocol.new({from: accounts[4]});
		const uintEOCPNTU = BigInt("205")
		const uintWJOkFPv = BigInt("1252")
		const addressrC3hy8 = accounts[2]
		const uint256PtjsuKp = await AntiBaseProtocolD1hWUNJ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const stringPUbBi5v = await AntiBaseProtocolD1hWUNJ.symbol.call({from: accounts[2]});
		const uint256jBFe3Cg = await AntiBaseProtocolD1hWUNJ.findRewardFee.call(uintEOCPNTU, {from: accounts[5]});
		const addressUBFn0jq = await AntiBaseProtocolD1hWUNJ._burn.call(addressrC3hy8, uintWJOkFPv, {from: accounts[4]});

		assert.equal(stringPUbBi5v, "ABASE")
		assert.equal(uint256PtjsuKp, BigInt("31250000000000000000"))
		assert.equal(uint256jBFe3Cg, BigInt("15"))
		await expect(AntiBaseProtocolD1hWUNJ._burn.call(addressrC3hy8, uintWJOkFPv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolP47Exn = await AntiBaseProtocol.new({from: accounts[1]});
		const uintrw8iMON = BigInt("243")
		const addressCmhYZtM = accounts[4]
		const addressExo3ITg = accounts[1]
		const uintJMtEZL = BigInt("632")
		const addressPVkAuuc = accounts[4]
		const uintRdUUPUt = BigInt("1657")
		const boolrMGXukE = await AntiBaseProtocolP47Exn.transferFrom.call(addressExo3ITg, addressCmhYZtM, uintrw8iMON, {from: accounts[4]});
		const boolYpPepy = await AntiBaseProtocolP47Exn.approve.call(addressPVkAuuc, uintJMtEZL, {from: accounts[2]});
		const uint256OZuVLg = await AntiBaseProtocolP47Exn.findBurnFee.call(uintRdUUPUt, {from: accounts[1]});

		await expect(AntiBaseProtocolP47Exn.transferFrom.call(addressExo3ITg, addressCmhYZtM, uintrw8iMON, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolRcBW80 = await AntiBaseProtocol.new({from: accounts[0]});
		const uintwkyIINL = BigInt("903")
		const addressrHU1gyd = accounts[0]
		const uintmQ44mKe = BigInt("1297")
		const addresseviFoJh = accounts[4]
		const uintEf5g7l = BigInt("862")
		const addresss7hdox = accounts[0]
		const uintEWXvlRn = BigInt("1639")
		const addressIu81r1A = accounts[1]
		const addressUzTe9iB = accounts[1]
		const addressOphRLpa = await AntiBaseProtocolRcBW80.burnFrom.call(addressrHU1gyd, uintwkyIINL, {from: accounts[3]});
		await AntiBaseProtocolRcBW80.onlyOwner.call({from: accounts[1]});
		const uint256yCwDTmU = await AntiBaseProtocolRcBW80.burn.call(uintmQ44mKe, {from: accounts[3]});
		const addressNMZDftw = await AntiBaseProtocolRcBW80.transferOwnership.call(addresseviFoJh, {from: accounts[5]});
		const addressXkIzUqQ = await AntiBaseProtocolRcBW80.burnFrom.call(addresss7hdox, uintEf5g7l, {from: accounts[3]});
		const boolBVlOOc0 = await AntiBaseProtocolRcBW80.transferFrom.call(addressUzTe9iB, addressIu81r1A, uintEWXvlRn, {from: accounts[2]});

		await expect(AntiBaseProtocolRcBW80.burnFrom.call(addressrHU1gyd, uintwkyIINL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolD1hWUNJ = await AntiBaseProtocol.new({from: accounts[4]});
		const uintSKfFD0 = BigInt("0")
		const addresspjQwiK8 = "0x0000000000000000000000000000000000000001"
		const addresshjvMBb = accounts[3]
		const uint256jBFe3Cg = await AntiBaseProtocolD1hWUNJ.findRewardFee.call(uintSKfFD0, {from: accounts[5]});
		const addressvYJL6NW = await AntiBaseProtocolD1hWUNJ.transferOwnership.call(addresspjQwiK8, {from: accounts[3]});
		const addressz4LiDS = await AntiBaseProtocolD1hWUNJ.transferOwnership.call(addresshjvMBb, {from: accounts[2]});

		assert.equal(uint256jBFe3Cg, BigInt("0"))
		await expect(AntiBaseProtocolD1hWUNJ.transferOwnership.call(addresspjQwiK8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})