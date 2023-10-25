const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressvVIoi9a = accounts[0]
		const addressXN2HxiC = accounts[5]
		const SpiritCoinoqbccq1 = await SpiritCoin.new(addressvVIoi9a, addressXN2HxiC, {from: accounts[2]});
		const uintGFRdJRU = BigInt("1694")
		const address3qOJYJ = "0x0000000000000000000000000000000000000001"
		const addresshCrbtJt = accounts[1]
		const addresseDBYdDQ = accounts[0]
		const uintIMqqUoA = BigInt("1806")
		const addressuE18Puj = accounts[2]
		const addressqCU4xC9 = accounts[0]
		const uintxbKKgU9 = BigInt("1743")
		const addressOeWTydy = accounts[3]
		const boolmkOpZfu = await SpiritCoinoqbccq1.transfer.call(address3qOJYJ, uintGFRdJRU, {from: accounts[5]});
		const uintykCcG2 = await SpiritCoinoqbccq1.allowance.call(addresseDBYdDQ, addresshCrbtJt, {from: accounts[2]});
		const boolIFp5mL6 = await SpiritCoinoqbccq1.transferFrom.call(addressqCU4xC9, addressuE18Puj, uintIMqqUoA, {from: accounts[5]});
		const addressTUNLet2 = await SpiritCoinoqbccq1.mint.call(addressOeWTydy, uintxbKKgU9, {from: accounts[4]});

		await expect(SpiritCoinoqbccq1.transfer.call(address3qOJYJ, uintGFRdJRU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressOpAjtRm = accounts[3]
		const address77CIWT = accounts[1]
		const SpiritCoinyGnt1HO = await SpiritCoin.new(addressOpAjtRm, address77CIWT, {from: accounts[5]});
		const addressxpWqpVJ = "0x0000000000000000000000000000000000000001"
		const uintNfPJ9jn = BigInt("403")
		const addressk5qa0Pb = accounts[0]
		const addressO2jtYhv = accounts[0]
		const uintwvyjdV2 = BigInt("264")
		const addressmiME30Y = accounts[0]
		const uinteQoeiby = await SpiritCoinyGnt1HO.balanceOf.call(addressxpWqpVJ, {from: accounts[1]});
		const boolS5is9a = await SpiritCoinyGnt1HO.transfer.call(addressk5qa0Pb, uintNfPJ9jn, {from: accounts[2]});
		const uintzUkgwKC = await SpiritCoinyGnt1HO.balanceOf.call(addressO2jtYhv, {from: accounts[1]});
		const addressTH80h6 = await SpiritCoinyGnt1HO.mint.call(addressmiME30Y, uintwvyjdV2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uinteQoeiby, BigInt("0"))
		await expect(SpiritCoinyGnt1HO.transfer.call(addressk5qa0Pb, uintNfPJ9jn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressWyhOSGQ = "0x0000000000000000000000000000000000000001"
		const addresslOu7IlA = accounts[3]
		const SpiritCoinhTTIpPc = await SpiritCoin.new(addressWyhOSGQ, addresslOu7IlA, {from: accounts[1]});
		const addresscgiRgAe = accounts[1]
		const addressGrACzxq = accounts[4]
		const addresstNGG8iL = "0x0000000000000000000000000000000000000001"
		const uintleDl3UP = await SpiritCoinhTTIpPc.balanceOf.call(addresscgiRgAe, {from: "0x0000000000000000000000000000000000000001"});
		const uintwHfoTXX = await SpiritCoinhTTIpPc.allowance.call(addresstNGG8iL, addressGrACzxq, {from: accounts[2]});

		assert.equal(uintleDl3UP, BigInt("0"))
		assert.equal(uintwHfoTXX, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addresssQsR2Je = accounts[3]
		const addressmlXeozm = "0x0000000000000000000000000000000000000001"
		const SpiritCoinm4CuMz9 = await SpiritCoin.new(addresssQsR2Je, addressmlXeozm, {from: accounts[5]});
		const addressdpfyUiE = accounts[5]
		const uintgUfO6O = BigInt("64")
		const addressFxoKIZf = accounts[3]
		const uintnOhXWUh = BigInt("1985")
		const addresszMkiEFW = accounts[4]
		const uintcGpenf = BigInt("894")
		const addressvQAXU5V = accounts[3]
		const addresspGcXTFf = accounts[2]
		const addressm83tQ3 = accounts[3]
		const uintBYviUWC = await SpiritCoinm4CuMz9.balanceOf.call(addressdpfyUiE, {from: accounts[2]});
		const addresswb5Ylkz = await SpiritCoinm4CuMz9.mint.call(addressFxoKIZf, uintgUfO6O, {from: accounts[5]});
		const booloodQ7e = await SpiritCoinm4CuMz9.transfer.call(addresszMkiEFW, uintnOhXWUh, {from: accounts[0]});
		const addresshZzPbBO = await SpiritCoinm4CuMz9.mint.call(addressvQAXU5V, uintcGpenf, {from: accounts[2]});
		const uintBwg3aV6 = await SpiritCoinm4CuMz9.allowance.call(addressm83tQ3, addresspGcXTFf, {from: accounts[2]});

		assert.equal(uintBYviUWC, BigInt("0"))
		await expect(SpiritCoinm4CuMz9.mint.call(addressFxoKIZf, uintgUfO6O, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressbyISsea = accounts[2]
		const addressqfFXhw = accounts[1]
		const SpiritCoinH6efwQA = await SpiritCoin.new(addressbyISsea, addressqfFXhw, {from: accounts[3]});
		const addressaEImnHE = accounts[4]
		const addresspX49O5G = accounts[1]
		const addresstlPc9p = accounts[3]
		const addressZDSsAwn = accounts[3]
		const uintgztgnzA = BigInt("1110")
		const addressqZKuMfy = accounts[1]
		const uinth6vG0WQ = BigInt("227")
		const addressRvPmm7M = "0x0000000000000000000000000000000000000001"
		const uintiMdGEIX = await SpiritCoinH6efwQA.balanceOf.call(addressaEImnHE, {from: accounts[0]});
		const addressIr3GSLX = await SpiritCoinH6efwQA.setMinter.call(addresspX49O5G, {from: accounts[0]});
		const uintP2YzUDk = await SpiritCoinH6efwQA.allowance.call(addressZDSsAwn, addresstlPc9p, {from: accounts[1]});
		const addressxms6jDt = await SpiritCoinH6efwQA.mint.call(addressqZKuMfy, uintgztgnzA, {from: accounts[2]});
		const boolN8bk7s = await SpiritCoinH6efwQA.transfer.call(addressRvPmm7M, uinth6vG0WQ, {from: accounts[0]});

		assert.equal(uintiMdGEIX, BigInt("0"))
		await expect(SpiritCoinH6efwQA.setMinter.call(addresspX49O5G, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresso0CTjBD = accounts[0]
		const addressnSpliAR = accounts[0]
		const SpiritCoinil6IN7A = await SpiritCoin.new(addresso0CTjBD, addressnSpliAR, {from: accounts[1]});
		const uintSpDG3CA = BigInt("1804")
		const addressPoFpUDC = accounts[2]
		const addressMWZDFM5 = accounts[4]
		const boolLSdhjl = await SpiritCoinil6IN7A.approve.call(addressPoFpUDC, uintSpDG3CA, {from: accounts[5]});
		const uintJYC3bcQ = await SpiritCoinil6IN7A.balanceOf.call(addressMWZDFM5, {from: accounts[5]});

		assert.equal(boolLSdhjl, true)
		assert.equal(uintJYC3bcQ, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressdDTUKCG = "0x0000000000000000000000000000000000000001"
		const addressOPVhpy = accounts[3]
		const SpiritCoinhTTIpPc = await SpiritCoin.new(addressdDTUKCG, addressOPVhpy, {from: accounts[1]});
		const addresslih3gx = accounts[4]
		const addressJkXE8WY = accounts[2]
		const uintyLhnLhS = BigInt("1943")
		const addressFKvDaLz = accounts[2]
		const addressd0Zm1Q = accounts[0]
		const addressxxJNAa = accounts[2]
		const addresss3CHJT = accounts[0]
		const addressepxJW7V = "0x0000000000000000000000000000000000000001"
		const uinta8Lacq4 = await SpiritCoinhTTIpPc.allowance.call(addressJkXE8WY, addresslih3gx, {from: accounts[0]});
		const boolkRwdEdi = await SpiritCoinhTTIpPc.transferFrom.call(addressd0Zm1Q, addressFKvDaLz, uintyLhnLhS, {from: accounts[3]});
		const uintleDl3UP = await SpiritCoinhTTIpPc.balanceOf.call(addressxxJNAa, {from: "0x0000000000000000000000000000000000000001"});
		const uintwHfoTXX = await SpiritCoinhTTIpPc.allowance.call(addressepxJW7V, addresss3CHJT, {from: accounts[2]});

		assert.equal(uinta8Lacq4, BigInt("0"))
		await expect(SpiritCoinhTTIpPc.transferFrom.call(addressd0Zm1Q, addressFKvDaLz, uintyLhnLhS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const address3rwEYJ = accounts[4]
		const addresszWEMlb = accounts[4]
		const SpiritCoinxUhmOKF = await SpiritCoin.new(address3rwEYJ, addresszWEMlb, {from: accounts[2]});
		const addressFKK3xm3 = accounts[4]
		const addressjAz2pAq = accounts[3]
		const uintG3Nx5Vr = BigInt("1785")
		const addressGHE0vRJ = accounts[3]
		const uintwVTq6kK = BigInt("1480")
		const addressUG2HjOq = accounts[3]
		const uintTdAKcrP = BigInt("1248")
		const addressQckPys8 = accounts[1]
		const uintk4NqblD = BigInt("990")
		const addressNXN4JBc = accounts[3]
		const uintDLkeJdR = BigInt("652")
		const addresstuWgnC = accounts[1]
		const uintxRwU24F = await SpiritCoinxUhmOKF.allowance.call(addressjAz2pAq, addressFKK3xm3, {from: accounts[1]});
		const addresszeasG6n = await SpiritCoinxUhmOKF.mint.call(addressGHE0vRJ, uintG3Nx5Vr, {from: accounts[4]});
		const boolwOrPQYB = await SpiritCoinxUhmOKF.transfer.call(addressUG2HjOq, uintwVTq6kK, {from: accounts[4]});
		const boolUigbKbv = await SpiritCoinxUhmOKF.approve.call(addressQckPys8, uintTdAKcrP, {from: accounts[2]});
		const address0l6QcV = await SpiritCoinxUhmOKF.mint.call(addressNXN4JBc, uintk4NqblD, {from: accounts[2]});
		const boolfEanmdG = await SpiritCoinxUhmOKF.transfer.call(addresstuWgnC, uintDLkeJdR, {from: accounts[1]});

		assert.equal(boolUigbKbv, true)
		assert.equal(boolwOrPQYB, true)
		assert.equal(uintxRwU24F, BigInt("0"))
		await expect(SpiritCoinxUhmOKF.mint.call(addressNXN4JBc, uintk4NqblD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressKebeD2J = accounts[4]
		const addresstrmSgw = accounts[0]
		const SpiritCoinR8mOyxG = await SpiritCoin.new(addressKebeD2J, addresstrmSgw, {from: "0x0000000000000000000000000000000000000001"});
		const uint79mhcH = BigInt("942")
		const addressMh2iIy6 = accounts[0]
		const uintA2FOVzA = BigInt("1435")
		const address9iRUvL = accounts[0]
		const uintmeM6cZz = BigInt("530")
		const addressVC8fnW5 = accounts[5]
		const addressCpHiq8K = accounts[5]
		const addressSbr4729 = accounts[4]
		const uintQRxhpXv = BigInt("52")
		const addressnVrPSFY = accounts[3]
		const boolU9JuvK7 = await SpiritCoinR8mOyxG.transfer.call(addressMh2iIy6, uint79mhcH, {from: accounts[0]});
		const boolqEDD2Jt = await SpiritCoinR8mOyxG.transfer.call(address9iRUvL, uintA2FOVzA, {from: accounts[0]});
		const addressp0Im6Xa = await SpiritCoinR8mOyxG.mint.call(addressVC8fnW5, uintmeM6cZz, {from: accounts[3]});
		const uintNl56ssO = await SpiritCoinR8mOyxG.allowance.call(addressSbr4729, addressCpHiq8K, {from: accounts[0]});
		const boollj6Aj50 = await SpiritCoinR8mOyxG.approve.call(addressnVrPSFY, uintQRxhpXv, {from: accounts[4]});
	});
})