const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contracttSZgJqT = await HTDD_contract.new({from: accounts[2]});
		const uintgWaymPH = BigInt("616")
		const addressuWl7Aa = accounts[4]
		const addressbDhc54 = accounts[3]
		const uintkxnk1J = BigInt("1536")
		const addressEviri6 = accounts[0]
		const uint1DnFsG = BigInt("1867")
		const addressJKHjC1Z = accounts[1]
		const uintjuXat5i = BigInt("1218")
		const addresstQw1s2 = accounts[3]
		const boolVs9jBXP = await HTDD_contracttSZgJqT.transferFrom.call(addressbDhc54, addressuWl7Aa, uintgWaymPH, {from: accounts[3]});
		const boolvkQiufg = await HTDD_contracttSZgJqT.transfer.call(addressEviri6, uintkxnk1J, {from: accounts[3]});
		const boolyFknXc4 = await HTDD_contracttSZgJqT.approve.call(addressJKHjC1Z, uint1DnFsG, {from: accounts[1]});
		const bool2dpblL = await HTDD_contracttSZgJqT.transfer.call(addresstQw1s2, uintjuXat5i, {from: accounts[1]});

		await expect(HTDD_contracttSZgJqT.transferFrom.call(addressbDhc54, addressuWl7Aa, uintgWaymPH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractbWOUTlL = await HTDD_contract.new({from: accounts[0]});
		const uinthPnwNc = BigInt("109")
		const addresslafQlLT = accounts[2]
		const uintv8KSKM = BigInt("170")
		const addressbsX9jR9 = accounts[5]
		const addressHnj37Rd = accounts[5]
		const addressHaPRPEk = accounts[1]
		const uintVpVe68o = BigInt("663")
		const addresstHul2VI = accounts[0]
		const addressAON6hJl = accounts[2]
		const boolv0cRYXV = await HTDD_contractbWOUTlL.transfer.call(addresslafQlLT, uinthPnwNc, {from: accounts[1]});
		const boolUPWuxXr = await HTDD_contractbWOUTlL.approve.call(addressbsX9jR9, uintv8KSKM, {from: accounts[4]});
		const uint256znHoNl1 = await HTDD_contractbWOUTlL.allowance.call(addressHaPRPEk, addressHnj37Rd, {from: accounts[3]});
		const boolcl2JNt = await HTDD_contractbWOUTlL.transferFrom.call(addressAON6hJl, addresstHul2VI, uintVpVe68o, {from: accounts[2]});

		await expect(HTDD_contractbWOUTlL.transfer.call(addresslafQlLT, uinthPnwNc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractmU1yrD = await HTDD_contract.new({from: accounts[5]});
		const uintCubW5Ol = BigInt("844")
		const addressrMnuMZY = accounts[5]
		const uintLvU3yF6 = BigInt("215")
		const address0hkxvi = accounts[1]
		const uintxWIIicD = BigInt("1515")
		const addressmljVmlS = accounts[0]
		const uinty7psDWU = BigInt("339")
		const addressAfKMcRf = accounts[4]
		const uintLpwQArr = BigInt("374")
		const addressF2xqfsM = "0x0000000000000000000000000000000000000001"
		const addressvHdGoth = accounts[2]
		const boolf1sUOpX = await HTDD_contractmU1yrD.transfer.call(addressrMnuMZY, uintCubW5Ol, {from: accounts[5]});
		const booljtpUxKx = await HTDD_contractmU1yrD.approve.call(address0hkxvi, uintLvU3yF6, {from: accounts[5]});
		const boolVGafMg1 = await HTDD_contractmU1yrD.approve.call(addressmljVmlS, uintxWIIicD, {from: "0x0000000000000000000000000000000000000001"});
		const boolROUKSjH = await HTDD_contractmU1yrD.approve.call(addressAfKMcRf, uinty7psDWU, {from: "0x0000000000000000000000000000000000000001"});
		const boolD6U4d3U = await HTDD_contractmU1yrD.transferFrom.call(addressvHdGoth, addressF2xqfsM, uintLpwQArr, {from: accounts[5]});

		assert.equal(boolROUKSjH, true)
		assert.equal(boolVGafMg1, true)
		assert.equal(boolf1sUOpX, true)
		assert.equal(booljtpUxKx, true)
		await expect(HTDD_contractmU1yrD.transferFrom.call(addressvHdGoth, addressF2xqfsM, uintLpwQArr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractLwMYjfN = await HTDD_contract.new({from: accounts[1]});
		const addressA12YFLl = accounts[2]
		const addresscY8uNXp = accounts[3]
		const uintKcMFAsv = BigInt("660")
		const address6TeBt8 = accounts[3]
		const addressR8BZkgg = accounts[0]
		const addressNhWPcV = accounts[1]
		const uinteEXd5dV = BigInt("1192")
		const addresstvUTr5 = accounts[2]
		const uint256mVZDhua = await HTDD_contractLwMYjfN.allowance.call(addresscY8uNXp, addressA12YFLl, {from: accounts[0]});
		const boolRGtDXl5 = await HTDD_contractLwMYjfN.transfer.call(address6TeBt8, uintKcMFAsv, {from: accounts[1]});
		const uint256lDNKXQ = await HTDD_contractLwMYjfN.allowance.call(addressNhWPcV, addressR8BZkgg, {from: accounts[1]});
		const boolFqDBLhn = await HTDD_contractLwMYjfN.transfer.call(addresstvUTr5, uinteEXd5dV, {from: accounts[0]});

		assert.equal(boolRGtDXl5, true)
		assert.equal(uint256lDNKXQ, BigInt("0"))
		assert.equal(uint256mVZDhua, BigInt("0"))
		await expect(HTDD_contractLwMYjfN.transfer.call(addresstvUTr5, uinteEXd5dV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractkJqlW0R = await HTDD_contract.new({from: accounts[3]});
		const uintsZez8p = BigInt("1434")
		const addresseUdvc8H = "0x0000000000000000000000000000000000000001"
		const addressdUJlaAf = accounts[3]
		const uintDX90nrl = BigInt("341")
		const addressMSwXBq = accounts[0]
		const boolQtDYZu5 = await HTDD_contractkJqlW0R.transferFrom.call(addressdUJlaAf, addresseUdvc8H, uintsZez8p, {from: accounts[3]});
		const boolWWbli0r = await HTDD_contractkJqlW0R.transfer.call(addressMSwXBq, uintDX90nrl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(HTDD_contractkJqlW0R.transferFrom.call(addressdUJlaAf, addresseUdvc8H, uintsZez8p, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contract58qWkh = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintMjjmwRi = BigInt("1294")
		const addressBoUTZ18 = accounts[4]
		const uintT4sKyJN = BigInt("1900")
		const addressmDNvTbT = accounts[3]
		const uintzTLi9I = BigInt("1994")
		const addressMQjPv0V = accounts[3]
		const uintRgoCBHI = BigInt("1593")
		const addressyfDqX7x = accounts[2]
		const uintEze15J = BigInt("1687")
		const addressdybPg8w = accounts[2]
		const boolkUi4uP = await HTDD_contract58qWkh.approve.call(addressBoUTZ18, uintMjjmwRi, {from: accounts[2]});
		const boolvKjZqft = await HTDD_contract58qWkh.approve.call(addressmDNvTbT, uintT4sKyJN, {from: accounts[3]});
		const boolzX9LAUG = await HTDD_contract58qWkh.approve.call(addressMQjPv0V, uintzTLi9I, {from: accounts[3]});
		const boolUs7qWjM = await HTDD_contract58qWkh.transfer.call(addressyfDqX7x, uintRgoCBHI, {from: accounts[3]});
		const boolw8KzWHK = await HTDD_contract58qWkh.transfer.call(addressdybPg8w, uintEze15J, {from: accounts[1]});
	});
})