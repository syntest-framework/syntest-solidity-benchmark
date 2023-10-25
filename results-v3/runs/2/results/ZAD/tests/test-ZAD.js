const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADZiMPJai = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const addressVdHGiQs = "0x0000000000000000000000000000000000000001"
		const stringSu1YNTE = await ZADZiMPJai.name.call({from: accounts[2]});
		const uint256vfOlUmv = await ZADZiMPJai.balanceOf.call(addressVdHGiQs, {from: accounts[0]});
	});

	it('test for ZAD', async () => {
		const ZADd7Qwxsf = await ZAD.new({from: accounts[3]});
		const uintN8NC0KQ = BigInt("1885")
		const addressDqF9lPh = accounts[2]
		const addresslGu2oOL = accounts[3]
		const uintarNAg2c = BigInt("468")
		const addressQoi6Usk = accounts[0]
		const uint8lL8Mc9q = await ZADd7Qwxsf.decimals.call({from: accounts[2]});
		const boolaIuw5b = await ZADd7Qwxsf.transferFrom.call(addresslGu2oOL, addressDqF9lPh, uintN8NC0KQ, {from: accounts[3]});
		const boolimh8voq = await ZADd7Qwxsf.approve.call(addressQoi6Usk, uintarNAg2c, {from: accounts[1]});

		assert.equal(uint8lL8Mc9q, BigInt("18"))
		await expect(ZADd7Qwxsf.transferFrom.call(addresslGu2oOL, addressDqF9lPh, uintN8NC0KQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADPw4tbqK = await ZAD.new({from: accounts[0]});
		const uintMmnfl81 = BigInt("270")
		const addressx5lAmPY = accounts[0]
		const uintSTi3tet = BigInt("1113")
		const address6Z4hCF = accounts[1]
		const stringUclNcLi = await ZADPw4tbqK.name.call({from: accounts[4]});
		const stringX6j8GhT = await ZADPw4tbqK.symbol.call({from: accounts[3]});
		const boolI7zpg7J = await ZADPw4tbqK.approve.call(addressx5lAmPY, uintMmnfl81, {from: accounts[4]});
		const boollvPl2NV = await ZADPw4tbqK.transfer.call(address6Z4hCF, uintSTi3tet, {from: accounts[0]});

		assert.equal(boolI7zpg7J, true)
		assert.equal(stringUclNcLi, "Zadkiel")
		assert.equal(stringX6j8GhT, "ZAD")
		await expect(ZADPw4tbqK.transfer.call(address6Z4hCF, uintSTi3tet, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADREHPsB = await ZAD.new({from: accounts[4]});
		const uintIcYQvW8 = BigInt("1355")
		const addressPStSpAb = accounts[3]
		const uintptVKe6i = BigInt("681")
		const addressgaGDfnD = accounts[1]
		const uintLXTL3c7 = BigInt("1916")
		const addressDM1xPnW = "0x0000000000000000000000000000000000000001"
		const addressbaejf8B = accounts[3]
		const boolYuwqqNr = await ZADREHPsB.decreaseAllowance.call(addressPStSpAb, uintIcYQvW8, {from: accounts[4]});
		const boolcBC29zh = await ZADREHPsB.approve.call(addressgaGDfnD, uintptVKe6i, {from: "0x0000000000000000000000000000000000000001"});
		const booliOZJZPI = await ZADREHPsB.approve.call(addressDM1xPnW, uintLXTL3c7, {from: accounts[4]});
		const uint256eEmCbjB = await ZADREHPsB.balanceOf.call(addressbaejf8B, {from: accounts[1]});
		const uint8Z0gHmYK = await ZADREHPsB.decimals.call({from: accounts[0]});

		await expect(ZADREHPsB.decreaseAllowance.call(addressPStSpAb, uintIcYQvW8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADdFQ2rdl = await ZAD.new({from: accounts[2]});
		const uintK55q5R = BigInt("1954")
		const uint8FvlsdVm = await ZADdFQ2rdl.decimals.call({from: accounts[3]});
		const uint256PLxpSf = await ZADdFQ2rdl._burn.call(uintK55q5R, {from: accounts[0]});
		const stringY4gGfQ = await ZADdFQ2rdl.symbol.call({from: accounts[1]});

		assert.equal(uint8FvlsdVm, BigInt("18"))
		await expect(ZADdFQ2rdl._burn.call(uintK55q5R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADb1SkLrL = await ZAD.new({from: accounts[1]});
		const addressJ8TQSI = accounts[3]
		const uintngxvM76 = BigInt("1276")
		const addressX1wZnAZ = accounts[3]
		const uintGcUaTUl = BigInt("1370")
		const addressAN76P76 = accounts[0]
		const addressRfJR6qV = accounts[5]
		const uint256YzPTZL3 = await ZADb1SkLrL.balanceOf.call(addressJ8TQSI, {from: accounts[3]});
		const booloahpSuo = await ZADb1SkLrL.approve.call(addressX1wZnAZ, uintngxvM76, {from: accounts[3]});
		const bool9VTWnA = await ZADb1SkLrL.transferFrom.call(addressRfJR6qV, addressAN76P76, uintGcUaTUl, {from: accounts[2]});

		assert.equal(booloahpSuo, true)
		assert.equal(uint256YzPTZL3, BigInt("0"))
		await expect(ZADb1SkLrL.transferFrom.call(addressRfJR6qV, addressAN76P76, uintGcUaTUl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADeBWLkI = await ZAD.new({from: accounts[0]});
		const addresslJwnALt = accounts[1]
		const addresst3x2lmM = accounts[2]
		const addressGF5DMNx = "0x0000000000000000000000000000000000000001"
		const stringwTXTLLs = await ZADeBWLkI.symbol.call({from: accounts[1]});
		const uint256JULb2OG = await ZADeBWLkI.balanceOf.call(addresslJwnALt, {from: accounts[5]});
		const uint256QEYkRK0 = await ZADeBWLkI.allowance.call(addressGF5DMNx, addresst3x2lmM, {from: accounts[0]});
		const stringu0hvMzM = await ZADeBWLkI.symbol.call({from: accounts[1]});
		const uint8P5xlAzp = await ZADeBWLkI.decimals.call({from: accounts[2]});
		const stringdlvTBjA = await ZADeBWLkI.name.call({from: accounts[0]});

		assert.equal(stringdlvTBjA, "Zadkiel")
		assert.equal(stringu0hvMzM, "ZAD")
		assert.equal(stringwTXTLLs, "ZAD")
		assert.equal(uint256JULb2OG, BigInt("0"))
		assert.equal(uint256QEYkRK0, BigInt("0"))
		assert.equal(uint8P5xlAzp, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADmj5PdoC = await ZAD.new({from: accounts[1]});
		const uintID2ojnI = BigInt("916")
		const addressVyIY7GK = accounts[4]
		const uintDChKS26 = BigInt("759")
		const addressV0g9Lom = accounts[2]
		const uintLBYhvZo = BigInt("1323")
		const addressJgpyqbX = "0x0000000000000000000000000000000000000001"
		const stringwnSHGjy = await ZADmj5PdoC.symbol.call({from: accounts[0]});
		const boolAJXksB6 = await ZADmj5PdoC.increaseAllowance.call(addressVyIY7GK, uintID2ojnI, {from: accounts[0]});
		const boolkvQQvm3 = await ZADmj5PdoC.decreaseAllowance.call(addressV0g9Lom, uintDChKS26, {from: accounts[3]});
		const stringcwboCA8 = await ZADmj5PdoC.symbol.call({from: accounts[0]});
		const booly0gYnIU = await ZADmj5PdoC.increaseAllowance.call(addressJgpyqbX, uintLBYhvZo, {from: accounts[5]});

		assert.equal(boolAJXksB6, true)
		assert.equal(stringwnSHGjy, "ZAD")
		await expect(ZADmj5PdoC.decreaseAllowance.call(addressV0g9Lom, uintDChKS26, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADrdK1vHX = await ZAD.new({from: accounts[2]});
		const addressTWpnB3n = accounts[0]
		const addressObrcgxI = accounts[4]
		const uint256Yb3MzaT = await ZADrdK1vHX.totalSupply.call({from: accounts[4]});
		const stringT5HCl96 = await ZADrdK1vHX.symbol.call({from: accounts[2]});
		const uint256VfT9ukD = await ZADrdK1vHX.allowance.call(addressObrcgxI, addressTWpnB3n, {from: accounts[2]});
		const stringr5Yf8Pe = await ZADrdK1vHX.symbol.call({from: accounts[2]});

		assert.equal(stringT5HCl96, "ZAD")
		assert.equal(stringr5Yf8Pe, "ZAD")
		assert.equal(uint256VfT9ukD, BigInt("0"))
		assert.equal(uint256Yb3MzaT, BigInt("100000000000000000000000000"))
	});
})