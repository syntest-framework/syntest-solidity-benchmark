const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractiJU2BHX = await HTDD_contract.new({from: accounts[1]});
		const uintXescZ7g = BigInt("1380")
		const addressh19Pkd5 = accounts[2]
		const uintGt2Hod = BigInt("1836")
		const addressf5EQsA2 = accounts[1]
		const uintrs7epvu = BigInt("390")
		const addressHTTIiBN = accounts[0]
		const boolf9iI0ww = await HTDD_contractiJU2BHX.transfer.call(addressh19Pkd5, uintXescZ7g, {from: accounts[2]});
		const boolhLUmqBG = await HTDD_contractiJU2BHX.approve.call(addressf5EQsA2, uintGt2Hod, {from: accounts[4]});
		const booljxqMdpa = await HTDD_contractiJU2BHX.approve.call(addressHTTIiBN, uintrs7epvu, {from: accounts[2]});

		await expect(HTDD_contractiJU2BHX.transfer.call(addressh19Pkd5, uintXescZ7g, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractgXuah6i = await HTDD_contract.new({from: accounts[1]});
		const uintfbkMx5j = BigInt("1961")
		const addressUlWgkNH = accounts[2]
		const uintTiKs3Wy = BigInt("1394")
		const addressCi8ZQcH = accounts[2]
		const uintNH86d5 = BigInt("1982")
		const addressHxEpMjC = accounts[0]
		const uintE19qown = BigInt("693")
		const addressdnEOtqP = accounts[3]
		const boolhJLQbli = await HTDD_contractgXuah6i.approve.call(addressUlWgkNH, uintfbkMx5j, {from: "0x0000000000000000000000000000000000000001"});
		const boolYBUt0S0 = await HTDD_contractgXuah6i.approve.call(addressCi8ZQcH, uintTiKs3Wy, {from: accounts[0]});
		const boolXubiP9I = await HTDD_contractgXuah6i.approve.call(addressHxEpMjC, uintNH86d5, {from: accounts[0]});
		const boolmHiuWyi = await HTDD_contractgXuah6i.approve.call(addressdnEOtqP, uintE19qown, {from: accounts[3]});

		assert.equal(boolXubiP9I, true)
		assert.equal(boolYBUt0S0, true)
		assert.equal(boolhJLQbli, true)
		assert.equal(boolmHiuWyi, true)
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractkbpbS2L = await HTDD_contract.new({from: accounts[3]});
		const addressQ0uhdZa = accounts[3]
		const addressjhf911C = accounts[1]
		const uintiu19pb8 = BigInt("364")
		const addressQLheikM = accounts[4]
		const addressb13gIIY = accounts[3]
		const uintuhTFMbH = BigInt("1567")
		const addressLfA66Gb = accounts[3]
		const uint256jnuNIV5 = await HTDD_contractkbpbS2L.allowance.call(addressjhf911C, addressQ0uhdZa, {from: accounts[4]});
		const boolEDNYI4C = await HTDD_contractkbpbS2L.transferFrom.call(addressb13gIIY, addressQLheikM, uintiu19pb8, {from: "0x0000000000000000000000000000000000000001"});
		const boolmPOQiK = await HTDD_contractkbpbS2L.transfer.call(addressLfA66Gb, uintuhTFMbH, {from: accounts[5]});

		assert.equal(uint256jnuNIV5, BigInt("0"))
		await expect(HTDD_contractkbpbS2L.transferFrom.call(addressb13gIIY, addressQLheikM, uintiu19pb8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractxMBXIvz = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintNywRNm = BigInt("797")
		const addressZKRUaPv = accounts[4]
		const addressO3VHXYW = accounts[4]
		const uintiMmmX7s = BigInt("670")
		const addressJ8Y1AB = accounts[1]
		const uintKezIVBz = BigInt("626")
		const addressBbBZIbC = accounts[4]
		const uintHjX5Giw = BigInt("1534")
		const addressv3m1TYP = accounts[3]
		const addressHZoyWw7 = accounts[2]
		const uintFw1wKdf = BigInt("10")
		const addressAlCPOyD = accounts[2]
		const addressgQAVFak = accounts[4]
		const boolGtYi6Gu = await HTDD_contractxMBXIvz.transferFrom.call(addressO3VHXYW, addressZKRUaPv, uintNywRNm, {from: accounts[5]});
		const boolgERI1p8 = await HTDD_contractxMBXIvz.transfer.call(addressJ8Y1AB, uintiMmmX7s, {from: accounts[1]});
		const boolZweKKe = await HTDD_contractxMBXIvz.approve.call(addressBbBZIbC, uintKezIVBz, {from: "0x0000000000000000000000000000000000000001"});
		const boolyMaRKc5 = await HTDD_contractxMBXIvz.transferFrom.call(addressHZoyWw7, addressv3m1TYP, uintHjX5Giw, {from: "0x0000000000000000000000000000000000000001"});
		const boolJlfcwL2 = await HTDD_contractxMBXIvz.transferFrom.call(addressgQAVFak, addressAlCPOyD, uintFw1wKdf, {from: "0x0000000000000000000000000000000000000001"});
	});
})