const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADX5XyT5p = await ZAD.new({from: accounts[1]});
		const uintXThTsch = BigInt("797")
		const addressw0EF66C = accounts[0]
		const uintNmFRQ85 = BigInt("1750")
		const addressxv54wks = accounts[3]
		const addressf0KMmxY = accounts[0]
		const uintZUT6xth = BigInt("705")
		const uintnneJtOL = BigInt("1023")
		const addressuJ6VFFc = accounts[5]
		const boolV5wcZpx = await ZADX5XyT5p.increaseAllowance.call(addressw0EF66C, uintXThTsch, {from: accounts[2]});
		const uint8G4TXLRN = await ZADX5XyT5p.decimals.call({from: accounts[1]});
		const stringrDuAhiH = await ZADX5XyT5p.name.call({from: accounts[1]});
		const boolkohPooi = await ZADX5XyT5p.transferFrom.call(addressf0KMmxY, addressxv54wks, uintNmFRQ85, {from: accounts[0]});
		const uint256DRI0Vc2 = await ZADX5XyT5p._burn.call(uintZUT6xth, {from: accounts[3]});
		const boollHVwDAu = await ZADX5XyT5p.decreaseAllowance.call(addressuJ6VFFc, uintnneJtOL, {from: accounts[1]});

		assert.equal(boolV5wcZpx, true)
		assert.equal(stringrDuAhiH, "Zadkiel")
		assert.equal(uint8G4TXLRN, BigInt("18"))
		await expect(ZADX5XyT5p.transferFrom.call(addressf0KMmxY, addressxv54wks, uintNmFRQ85, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADNc7kc5C = await ZAD.new({from: accounts[1]});
		const addresshBrFsPM = accounts[4]
		const addressr7ouqR6 = accounts[4]
		const uint256pokeZP = await ZADNc7kc5C.balanceOf.call(addresshBrFsPM, {from: accounts[4]});
		const uint256eNa3tEU = await ZADNc7kc5C.balanceOf.call(addressr7ouqR6, {from: accounts[1]});
		const stringCgXXB5L = await ZADNc7kc5C.symbol.call({from: accounts[3]});

		assert.equal(stringCgXXB5L, "ZAD")
		assert.equal(uint256eNa3tEU, BigInt("0"))
		assert.equal(uint256pokeZP, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADbIUOPKJ = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintI6ZvzPR = BigInt("1850")
		const addressmYTP75y = accounts[4]
		const boolXGkje4m = await ZADbIUOPKJ.decreaseAllowance.call(addressmYTP75y, uintI6ZvzPR, {from: accounts[4]});
		const uint256V8TBhQz = await ZADbIUOPKJ.totalSupply.call({from: accounts[5]});
	});

	it('test for ZAD', async () => {
		const ZADbE0B1mv = await ZAD.new({from: accounts[4]});
		const uintsKd1km4 = BigInt("1142")
		const addressAixu5F = accounts[0]
		const address2VJ3pX = accounts[1]
		const uintZWmJa46 = BigInt("168")
		const addressI13tVTW = accounts[1]
		const addressqbdNtf0 = "0x0000000000000000000000000000000000000001"
		const stringojxzCNS = await ZADbE0B1mv.symbol.call({from: accounts[4]});
		const uint256hPuvcfm = await ZADbE0B1mv._burn.call(uintsKd1km4, {from: accounts[1]});
		const uint256MdF0zl = await ZADbE0B1mv.allowance.call(address2VJ3pX, addressAixu5F, {from: accounts[0]});
		const boolUU7gnn = await ZADbE0B1mv.transferFrom.call(addressqbdNtf0, addressI13tVTW, uintZWmJa46, {from: accounts[2]});
		const uint8YDtYq7 = await ZADbE0B1mv.decimals.call({from: accounts[3]});

		assert.equal(stringojxzCNS, "ZAD")
		await expect(ZADbE0B1mv._burn.call(uintsKd1km4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADzqXRkU8 = await ZAD.new({from: accounts[0]});
		const addressXKFedqB = accounts[4]
		const addressPiJfJUz = accounts[3]
		const uintGjY3AX3 = BigInt("1793")
		const addressFZPj63g = accounts[5]
		const uintCRB3Hub = BigInt("1782")
		const addresshdzrx6V = accounts[2]
		const uint256CDRNBp = await ZADzqXRkU8.allowance.call(addressPiJfJUz, addressXKFedqB, {from: accounts[1]});
		const boolPrshu2K = await ZADzqXRkU8.increaseAllowance.call(addressFZPj63g, uintGjY3AX3, {from: accounts[2]});
		const boolQznsTE4 = await ZADzqXRkU8.approve.call(addresshdzrx6V, uintCRB3Hub, {from: accounts[3]});
		const stringVmyLgWo = await ZADzqXRkU8.symbol.call({from: accounts[4]});

		assert.equal(boolPrshu2K, true)
		assert.equal(boolQznsTE4, true)
		assert.equal(stringVmyLgWo, "ZAD")
		assert.equal(uint256CDRNBp, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADSKXftsG = await ZAD.new({from: accounts[4]});
		const uintjG9YMdO = BigInt("1167")
		const addressMyOySb = accounts[3]
		const uintVQ8jpcA = BigInt("1398")
		const addressAq84Bi5 = accounts[1]
		const addressJc1yKcE = accounts[2]
		const boolylIl4s7 = await ZADSKXftsG.transfer.call(addressMyOySb, uintjG9YMdO, {from: accounts[3]});
		const boolxj0bVXf = await ZADSKXftsG.transferFrom.call(addressJc1yKcE, addressAq84Bi5, uintVQ8jpcA, {from: accounts[2]});

		await expect(ZADSKXftsG.transfer.call(addressMyOySb, uintjG9YMdO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADc7E8GV = await ZAD.new({from: accounts[0]});
		const addressQknkcbt = accounts[4]
		const uintPtfuUS4 = BigInt("596")
		const addressfR4biQ9 = accounts[3]
		const uintH4SeL1s = BigInt("1664")
		const addressWdRGEv6 = accounts[5]
		const uint256E3ssngD = await ZADc7E8GV.balanceOf.call(addressQknkcbt, {from: accounts[0]});
		const stringy4MDfyj = await ZADc7E8GV.symbol.call({from: accounts[0]});
		const boolsDAvlb = await ZADc7E8GV.decreaseAllowance.call(addressfR4biQ9, uintPtfuUS4, {from: accounts[1]});
		const boolxgqJd5A = await ZADc7E8GV.transfer.call(addressWdRGEv6, uintH4SeL1s, {from: accounts[4]});

		assert.equal(stringy4MDfyj, "ZAD")
		assert.equal(uint256E3ssngD, BigInt("0"))
		await expect(ZADc7E8GV.decreaseAllowance.call(addressfR4biQ9, uintPtfuUS4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADlBa197h = await ZAD.new({from: accounts[5]});
		const addressiAPEzec = accounts[4]
		const addressurZm6zT = accounts[3]
		const addressLGKAOUD = "0x0000000000000000000000000000000000000002"
		const uintwGv71fz = BigInt("152")
		const addressRMuNDDA = "0x0000000000000000000000000000000000000001"
		const addressnurLp6W = accounts[1]
		const uint256oLiRAE9 = await ZADlBa197h.allowance.call(addressurZm6zT, addressiAPEzec, {from: accounts[3]});
		const uint256nNVDQpP = await ZADlBa197h.totalSupply.call({from: accounts[3]});
		const uint256oCC6DHp = await ZADlBa197h.balanceOf.call(addressLGKAOUD, {from: accounts[1]});
		const boolNtHIZQN = await ZADlBa197h.transferFrom.call(addressnurLp6W, addressRMuNDDA, uintwGv71fz, {from: accounts[0]});

		assert.equal(uint256nNVDQpP, BigInt("100000000000000000000000000"))
		assert.equal(uint256oCC6DHp, BigInt("0"))
		assert.equal(uint256oLiRAE9, BigInt("0"))
		await expect(ZADlBa197h.transferFrom.call(addressnurLp6W, addressRMuNDDA, uintwGv71fz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADlBa197h = await ZAD.new({from: accounts[5]});
		const uintR9OnH6H = BigInt("1771")
		const addressDerwGiI = "0x0000000000000000000000000000000000000000"
		const addresse6O8oQJ = "0x0000000000000000000000000000000000000001"
		const stringWtchkH2 = await ZADlBa197h.name.call({from: accounts[0]});
		const boolICznryS = await ZADlBa197h.transferFrom.call(addresse6O8oQJ, addressDerwGiI, uintR9OnH6H, {from: accounts[5]});

		assert.equal(stringWtchkH2, "Zadkiel")
		await expect(ZADlBa197h.transferFrom.call(addresse6O8oQJ, addressDerwGiI, uintR9OnH6H, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADlBa197h = await ZAD.new({from: accounts[5]});
		const uintEE6U5h = BigInt("191")
		const addressRgLLTrV = accounts[0]
		const uintnzWtG2t = BigInt("1771")
		const addressKOMsncs = "0x0000000000000000000000000000000000000001"
		const addressf6qnFno = "0x0000000000000000000000000000000000000000"
		const boolBWHfqKA = await ZADlBa197h.approve.call(addressRgLLTrV, uintEE6U5h, {from: accounts[0]});
		const boolICznryS = await ZADlBa197h.transferFrom.call(addressf6qnFno, addressKOMsncs, uintnzWtG2t, {from: accounts[5]});

		assert.equal(boolBWHfqKA, true)
		await expect(ZADlBa197h.transferFrom.call(addressf6qnFno, addressKOMsncs, uintnzWtG2t, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})