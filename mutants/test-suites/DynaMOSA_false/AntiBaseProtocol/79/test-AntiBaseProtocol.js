const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnkWZS9e = await AntiBaseProtocol.new({from: accounts[2]});
		const addressn4Wn694 = accounts[5]
		const uintYik44Li = BigInt("1795")
//		await AntiBaseProtocolnkWZS9e.renounceOwnership.call({from: accounts[2]});
//		const addressUOq4M0b = await AntiBaseProtocolnkWZS9e.transferOwnership.call(addressn4Wn694, {from: accounts[0]});
//		const uint256CIOSkgH = await AntiBaseProtocolnkWZS9e.findBurnFee.call(uintYik44Li, {from: accounts[3]});

		await expect(AntiBaseProtocolnkWZS9e.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const stringmorKUNz = "gbszLhFa7bho0tdOOSUiF9A6HyOMAzkBpX3Bo67HQ5MNdi10BbkbN785OltMyTDXRdt"
		const stringdgUYRbA = "ArnOv"
		const uintLlxgnm = BigInt("37")
		const AntiBaseProtocoluGKlhc = await AntiBaseProtocol.new(stringmorKUNz, stringdgUYRbA, uintLlxgnm, {from: accounts[2]});
		const uintaFWGOJl = BigInt("722")
		const address8vX0kk = accounts[2]
		const uintqcuBtlj = BigInt("223")
		const addressbANmDtz = accounts[4]
		await AntiBaseProtocoluGKlhc.renounceOwnership.call({from: accounts[2]});
		const address3kOQ3t = await AntiBaseProtocoluGKlhc.burnFrom.call(address8vX0kk, uintaFWGOJl, {from: accounts[1]});
		const boolBemH3tk = await AntiBaseProtocoluGKlhc.transfer.call(addressbANmDtz, uintqcuBtlj, {from: accounts[3]});
		await AntiBaseProtocoluGKlhc.onlyOwner.call({from: accounts[2]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolExoJ9KZ = await AntiBaseProtocol.new({from: accounts[3]});
		const uinteezHuk1 = BigInt("1797")
		const addressLoaTpzm = accounts[2]
		const stringOXZOPxQ = await AntiBaseProtocolExoJ9KZ.name.call({from: accounts[3]});
//		const boolnslG5LG = await AntiBaseProtocolExoJ9KZ.transfer.call(addressLoaTpzm, uinteezHuk1, {from: accounts[0]});
//		const uint8QxHix8D = await AntiBaseProtocolExoJ9KZ.decimals.call({from: accounts[3]});
//		const uint256vdkvFk = await AntiBaseProtocolExoJ9KZ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolg58D4SF = await AntiBaseProtocolExoJ9KZ.isOwner.call({from: accounts[2]});

		assert.equal(stringOXZOPxQ, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolExoJ9KZ.transfer.call(addressLoaTpzm, uinteezHuk1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolhEVQYKm = await AntiBaseProtocol.new({from: accounts[0]});
		const uintaKsF7Z = BigInt("1623")
		const addressiN8MMDQ = accounts[5]
		const addressZKX222i = accounts[1]
		const uintRyiXACa = BigInt("1195")
		const addressmTDs5c6 = accounts[4]
		const addressDILoR0b = accounts[4]
		const uintNTgdqiI = BigInt("15")
		const addressLyrOa1 = accounts[3]
		const uintxm6blBS = BigInt("1287")
		const addressdbYa35w = accounts[5]
		const addressKqPcNW7 = accounts[0]
//		const addressM442aMY = await AntiBaseProtocolhEVQYKm._approve.call(addressZKX222i, addressiN8MMDQ, uintaKsF7Z, {from: accounts[2]});
//		const addressJ5mdbFQ = await AntiBaseProtocolhEVQYKm._approve.call(addressDILoR0b, addressmTDs5c6, uintRyiXACa, {from: accounts[1]});
//		const addressgDSaxJ7 = await AntiBaseProtocolhEVQYKm.burnFrom.call(addressLyrOa1, uintNTgdqiI, {from: accounts[1]});
//		const addressJsgn5qL = await AntiBaseProtocolhEVQYKm._approve.call(addressKqPcNW7, addressdbYa35w, uintxm6blBS, {from: accounts[0]});
//		await AntiBaseProtocolhEVQYKm.renounceOwnership.call({from: accounts[4]});

		await expect(AntiBaseProtocolhEVQYKm._approve.call(addressZKX222i, addressiN8MMDQ, uintaKsF7Z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolcAHwDHT = await AntiBaseProtocol.new({from: accounts[1]});
		const uintb4oihsq = BigInt("1406")
		const addressZBvpMhi = accounts[2]
		const uint6139o2 = BigInt("505")
		const addressZTUbMhR = accounts[2]
		const addressMmwi2R7 = accounts[2]
		const uintkt7lAqy = BigInt("983")
		const addressNnnIH8 = accounts[5]
//		const boolOPeM6V6 = await AntiBaseProtocolcAHwDHT.decreaseAllowance.call(addressZBvpMhi, uintb4oihsq, {from: accounts[4]});
//		const addresst7pdt6p = await AntiBaseProtocolcAHwDHT._approve.call(addressMmwi2R7, addressZTUbMhR, uint6139o2, {from: accounts[4]});
//		const boolD6iAEbB = await AntiBaseProtocolcAHwDHT.transfer.call(addressNnnIH8, uintkt7lAqy, {from: accounts[0]});
//		const stringW4GFSG = await AntiBaseProtocolcAHwDHT.name.call({from: accounts[0]});

		await expect(AntiBaseProtocolcAHwDHT.decreaseAllowance.call(addressZBvpMhi, uintb4oihsq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolExoJ9KZ = await AntiBaseProtocol.new({from: accounts[3]});
		const uintxjxZ3Jt = BigInt("1032")
		const uintJw37rCK = BigInt("1797")
		const addressiDb0LkE = accounts[2]
		const uintYCuwW8t = BigInt("10")
		const addressX1i4JQs = accounts[1]
		const stringOXZOPxQ = await AntiBaseProtocolExoJ9KZ.name.call({from: accounts[3]});
		const uint256mrVX6w = await AntiBaseProtocolExoJ9KZ.burn.call(uintxjxZ3Jt, {from: accounts[3]});
//		const boolnslG5LG = await AntiBaseProtocolExoJ9KZ.transfer.call(addressiDb0LkE, uintJw37rCK, {from: accounts[0]});
//		const uint256vdkvFk = await AntiBaseProtocolExoJ9KZ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolg58D4SF = await AntiBaseProtocolExoJ9KZ.isOwner.call({from: accounts[2]});
//		const boolvQ98qOj = await AntiBaseProtocolExoJ9KZ.decreaseAllowance.call(addressX1i4JQs, uintYCuwW8t, {from: accounts[5]});

		assert.equal(stringOXZOPxQ, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolExoJ9KZ.transfer.call(addressiDb0LkE, uintJw37rCK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolhEVQYKm = await AntiBaseProtocol.new({from: accounts[0]});
		const addressYqGnZji = accounts[2]
		const addressUPnrF3k = accounts[1]
		const uinthLOTNZf = BigInt("1623")
		const addresshQLOR0 = accounts[5]
		const addressx5aqLgu = accounts[1]
		const uint8MWBZd = BigInt("1195")
		const addressvJyGU2c = accounts[4]
		const addressXew7Pc4 = accounts[4]
		const uintZARs8ug = BigInt("15")
		const addressQCxg7jg = accounts[3]
		const uintgWc5qim = BigInt("389")
		const addresstgBOzxW = "0x0000000000000000000000000000000000000001"
		const uintm7QsGpx = BigInt("1287")
		const addressr0dzmWv = accounts[6]
		const addressvmSfVH = accounts[0]
		const uint256QlIVAmx = await AntiBaseProtocolhEVQYKm.allowance.call(addressUPnrF3k, addressYqGnZji, {from: accounts[0]});
//		const addressM442aMY = await AntiBaseProtocolhEVQYKm._approve.call(addressx5aqLgu, addresshQLOR0, uinthLOTNZf, {from: accounts[2]});
//		const addressJ5mdbFQ = await AntiBaseProtocolhEVQYKm._approve.call(addressXew7Pc4, addressvJyGU2c, uint8MWBZd, {from: accounts[1]});
//		const addressgDSaxJ7 = await AntiBaseProtocolhEVQYKm.burnFrom.call(addressQCxg7jg, uintZARs8ug, {from: accounts[1]});
//		const addressbemWPLt = await AntiBaseProtocolhEVQYKm._burnFrom.call(addresstgBOzxW, uintgWc5qim, {from: accounts[2]});
//		const addressJsgn5qL = await AntiBaseProtocolhEVQYKm._approve.call(addressvmSfVH, addressr0dzmWv, uintm7QsGpx, {from: accounts[0]});
//		await AntiBaseProtocolhEVQYKm.renounceOwnership.call({from: accounts[4]});

		assert.equal(uint256QlIVAmx, BigInt("0"))
		await expect(AntiBaseProtocolhEVQYKm._approve.call(addressx5aqLgu, addresshQLOR0, uinthLOTNZf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolnkWZS9e = await AntiBaseProtocol.new({from: accounts[2]});
		const uintVeBo4vt = BigInt("1308")
		const addressPpH6Amw = accounts[4]
		const uintDdQYMo4 = BigInt("1887")
		const addressHjsm7V5 = accounts[5]
		const addressWCSDccK = accounts[5]
		const uintrriJ7z8 = BigInt("1795")
//		await AntiBaseProtocolnkWZS9e.renounceOwnership.call({from: accounts[2]});
//		const boolg4p09h = await AntiBaseProtocolnkWZS9e.approve.call(addressPpH6Amw, uintVeBo4vt, {from: accounts[0]});
//		const addressoap3nO5 = await AntiBaseProtocolnkWZS9e.burnFrom.call(addressHjsm7V5, uintDdQYMo4, {from: accounts[2]});
//		const addressUOq4M0b = await AntiBaseProtocolnkWZS9e.transferOwnership.call(addressWCSDccK, {from: accounts[0]});
//		const uint256CIOSkgH = await AntiBaseProtocolnkWZS9e.findBurnFee.call(uintrriJ7z8, {from: accounts[3]});

		await expect(AntiBaseProtocolnkWZS9e.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolExoJ9KZ = await AntiBaseProtocol.new({from: accounts[3]});
		const uintHljO7wc = BigInt("1836")
		const uinteAfy9X = BigInt("1797")
		const addressYzQPRY6 = accounts[2]
		const uint256ZpyrhdR = await AntiBaseProtocolExoJ9KZ.findBurnFee.call(uintHljO7wc, {from: accounts[0]});
		const stringOXZOPxQ = await AntiBaseProtocolExoJ9KZ.name.call({from: accounts[3]});
		const stringPCffsvj = await AntiBaseProtocolExoJ9KZ.symbol.call({from: accounts[2]});
//		const boolnslG5LG = await AntiBaseProtocolExoJ9KZ.transfer.call(addressYzQPRY6, uinteAfy9X, {from: accounts[0]});
//		const uint8QxHix8D = await AntiBaseProtocolExoJ9KZ.decimals.call({from: accounts[3]});
//		const uint256vdkvFk = await AntiBaseProtocolExoJ9KZ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolg58D4SF = await AntiBaseProtocolExoJ9KZ.isOwner.call({from: accounts[2]});

		assert.equal(stringOXZOPxQ, "https://t.me/antibaseprotocol")
		assert.equal(stringPCffsvj, "ABASE")
		assert.equal(uint256ZpyrhdR, BigInt("285"))
		await expect(AntiBaseProtocolExoJ9KZ.transfer.call(addressYzQPRY6, uinteAfy9X, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolExoJ9KZ = await AntiBaseProtocol.new({from: accounts[3]});
		const addressWe9LNUv = accounts[0]
		const uinttAtCIE9 = BigInt("1809")
		const addressgtSPIwW = accounts[1]
		const addressRpime4 = accounts[4]
		const stringOXZOPxQ = await AntiBaseProtocolExoJ9KZ.name.call({from: accounts[3]});
//		await AntiBaseProtocolExoJ9KZ.renounceOwnership.call({from: accounts[3]});
//		const uint8QxHix8D = await AntiBaseProtocolExoJ9KZ.decimals.call({from: accounts[3]});
//		const uint256vdkvFk = await AntiBaseProtocolExoJ9KZ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256NehRVrd = await AntiBaseProtocolExoJ9KZ.balanceOf.call(addressWe9LNUv, {from: accounts[1]});
//		const boolwhlqm97 = await AntiBaseProtocolExoJ9KZ.transferFrom.call(addressRpime4, addressgtSPIwW, uinttAtCIE9, {from: accounts[1]});
//		const boolg58D4SF = await AntiBaseProtocolExoJ9KZ.isOwner.call({from: accounts[2]});

		assert.equal(stringOXZOPxQ, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolExoJ9KZ.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolExoJ9KZ = await AntiBaseProtocol.new({from: accounts[3]});
		const uintPvTQG3X = BigInt("34")
		const uintDAYy1s = BigInt("1797")
		const addresssYp0YON = accounts[2]
		const stringOXZOPxQ = await AntiBaseProtocolExoJ9KZ.name.call({from: accounts[3]});
		const uint256M0dRonT = await AntiBaseProtocolExoJ9KZ.findRewardFee.call(uintPvTQG3X, {from: accounts[4]});
//		const boolnslG5LG = await AntiBaseProtocolExoJ9KZ.transfer.call(addresssYp0YON, uintDAYy1s, {from: accounts[0]});
//		const uint8QxHix8D = await AntiBaseProtocolExoJ9KZ.decimals.call({from: accounts[3]});
//		const uint256vdkvFk = await AntiBaseProtocolExoJ9KZ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolg58D4SF = await AntiBaseProtocolExoJ9KZ.isOwner.call({from: accounts[2]});

		assert.equal(stringOXZOPxQ, "https://t.me/antibaseprotocol")
		assert.equal(uint256M0dRonT, BigInt("5"))
		await expect(AntiBaseProtocolExoJ9KZ.transfer.call(addresssYp0YON, uintDAYy1s, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolExoJ9KZ = await AntiBaseProtocol.new({from: accounts[3]});
		const uintpw9bZ6v = BigInt("34")
		const uintrvktIT = BigInt("899")
		const addressuvp3wC = accounts[1]
		const uintJV4bTqZ = BigInt("1797")
		const addressHBmJM2Q = accounts[3]
		const stringOXZOPxQ = await AntiBaseProtocolExoJ9KZ.name.call({from: accounts[3]});
		const uint256M0dRonT = await AntiBaseProtocolExoJ9KZ.findRewardFee.call(uintpw9bZ6v, {from: accounts[4]});
		const boolNb1vEEx = await AntiBaseProtocolExoJ9KZ.increaseAllowance.call(addressuvp3wC, uintrvktIT, {from: accounts[1]});
//		await AntiBaseProtocolExoJ9KZ.renounceOwnership.call({from: accounts[5]});
//		const boolnslG5LG = await AntiBaseProtocolExoJ9KZ.transfer.call(addressHBmJM2Q, uintJV4bTqZ, {from: accounts[0]});
//		const uint8QxHix8D = await AntiBaseProtocolExoJ9KZ.decimals.call({from: accounts[3]});
//		const uint256vdkvFk = await AntiBaseProtocolExoJ9KZ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		await AntiBaseProtocolExoJ9KZ.requestGas.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolg58D4SF = await AntiBaseProtocolExoJ9KZ.isOwner.call({from: accounts[2]});

		assert.equal(boolNb1vEEx, true)
		assert.equal(stringOXZOPxQ, "https://t.me/antibaseprotocol")
		assert.equal(uint256M0dRonT, BigInt("5"))
		await expect(AntiBaseProtocolExoJ9KZ.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoleZSwVr5 = await AntiBaseProtocol.new({from: accounts[2]});
		const uintWJzTkth = BigInt("1557")
		const addressXrH6B5B = accounts[3]
		const uintfaiKpQC = BigInt("1793")
		const addressvPUuC6r = accounts[5]
		const uintZxbRvs = BigInt("2034")
		const addressOFn8ZP = await AntiBaseProtocoleZSwVr5.owner.call({from: accounts[0]});
		const stringpYLA7I9 = await AntiBaseProtocoleZSwVr5.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressK6didFB = await AntiBaseProtocoleZSwVr5.burnFrom.call(addressXrH6B5B, uintWJzTkth, {from: accounts[3]});
//		const boolbVBCBy = await AntiBaseProtocoleZSwVr5.decreaseAllowance.call(addressvPUuC6r, uintfaiKpQC, {from: accounts[1]});
//		const uint256XdGofY7 = await AntiBaseProtocoleZSwVr5.findRewardFee.call(uintZxbRvs, {from: accounts[3]});
//		const uint8UTjUY8u = await AntiBaseProtocoleZSwVr5.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressOFn8ZP, 0xBEE12EC6bD97b53F5Bc1160E3c3BFE7B2026737a)
		assert.equal(stringpYLA7I9, "ABASE")
		await expect(AntiBaseProtocoleZSwVr5.burnFrom.call(addressXrH6B5B, uintWJzTkth, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolExoJ9KZ = await AntiBaseProtocol.new({from: accounts[3]});
		const uintq5hCtTJ = BigInt("34")
		const uintHmj1c0N = BigInt("97")
		const addressy1SNQr6 = accounts[0]
		const uinttzWKZ8V = BigInt("1797")
		const addressVZKamT1 = accounts[2]
		const stringOXZOPxQ = await AntiBaseProtocolExoJ9KZ.name.call({from: accounts[3]});
		const uint256M0dRonT = await AntiBaseProtocolExoJ9KZ.findRewardFee.call(uintq5hCtTJ, {from: accounts[4]});
		const boolSxYGpEr = await AntiBaseProtocolExoJ9KZ.transfer.call(addressy1SNQr6, uintHmj1c0N, {from: accounts[3]});
//		const boolnslG5LG = await AntiBaseProtocolExoJ9KZ.transfer.call(addressVZKamT1, uinttzWKZ8V, {from: accounts[0]});
//		const uint8QxHix8D = await AntiBaseProtocolExoJ9KZ.decimals.call({from: accounts[3]});
//		const uint256vdkvFk = await AntiBaseProtocolExoJ9KZ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const stringpcStmn8 = await AntiBaseProtocolExoJ9KZ.symbol.call({from: accounts[1]});
//		const boolg58D4SF = await AntiBaseProtocolExoJ9KZ.isOwner.call({from: accounts[2]});

		assert.equal(boolSxYGpEr, true)
		assert.equal(stringOXZOPxQ, "https://t.me/antibaseprotocol")
		assert.equal(uint256M0dRonT, BigInt("5"))
		await expect(AntiBaseProtocolExoJ9KZ.transfer.call(addressVZKamT1, uinttzWKZ8V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolUgTuWVO = await AntiBaseProtocol.new({from: accounts[2]});
		const addressOXu2Fh3 = accounts[2]
		const uintnUJQUIx = BigInt("1891")
		const addresslBhqHYM = await AntiBaseProtocolUgTuWVO.transferOwnership.call(addressOXu2Fh3, {from: accounts[2]});
		const uint256sBUL16A = await AntiBaseProtocolUgTuWVO.findBurnFee.call(uintnUJQUIx, {from: accounts[4]});
		const addressLxpHapP = await AntiBaseProtocolUgTuWVO.owner.call({from: accounts[1]});

		assert.equal(addressLxpHapP, 0xBEE12EC6bD97b53F5Bc1160E3c3BFE7B2026737a)
		assert.equal(uint256sBUL16A, BigInt("285"))
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolExoJ9KZ = await AntiBaseProtocol.new({from: accounts[3]});
		const uintmWTQe0P = BigInt("97")
		const addressHkJqZXx = accounts[0]
		const uintlghvJp = BigInt("1145")
		const addressIqWeJT = accounts[3]
		const stringOXZOPxQ = await AntiBaseProtocolExoJ9KZ.name.call({from: accounts[3]});
		const boolSxYGpEr = await AntiBaseProtocolExoJ9KZ.transfer.call(addressHkJqZXx, uintmWTQe0P, {from: accounts[3]});
		const uint256vdkvFk = await AntiBaseProtocolExoJ9KZ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressczLeL3Y = await AntiBaseProtocolExoJ9KZ.burnFrom.call(addressIqWeJT, uintlghvJp, {from: accounts[0]});
//		const stringpcStmn8 = await AntiBaseProtocolExoJ9KZ.symbol.call({from: accounts[1]});
//		const boolg58D4SF = await AntiBaseProtocolExoJ9KZ.isOwner.call({from: accounts[2]});

		assert.equal(boolSxYGpEr, true)
		assert.equal(stringOXZOPxQ, "https://t.me/antibaseprotocol")
		assert.equal(uint256vdkvFk, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolExoJ9KZ.burnFrom.call(addressIqWeJT, uintlghvJp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolExoJ9KZ = await AntiBaseProtocol.new({from: accounts[3]});
		const uintN3XSo4 = BigInt("34")
		const uintZABvz5b = BigInt("97")
		const addressFNCO45a = accounts[0]
		const uinttz3o4Tq = BigInt("412")
		const addressqqr8tS = accounts[0]
		const addressaFPAGRA = accounts[3]
		const uintOd7TDc4 = BigInt("1797")
		const addressh5jY8qv = accounts[3]
		const stringOXZOPxQ = await AntiBaseProtocolExoJ9KZ.name.call({from: accounts[3]});
		const uint256M0dRonT = await AntiBaseProtocolExoJ9KZ.findRewardFee.call(uintN3XSo4, {from: accounts[4]});
		const boolSxYGpEr = await AntiBaseProtocolExoJ9KZ.transfer.call(addressFNCO45a, uintZABvz5b, {from: accounts[3]});
//		const boolJsKi33m = await AntiBaseProtocolExoJ9KZ.transferFrom.call(addressaFPAGRA, addressqqr8tS, uinttz3o4Tq, {from: accounts[4]});
//		const boolnslG5LG = await AntiBaseProtocolExoJ9KZ.transfer.call(addressh5jY8qv, uintOd7TDc4, {from: accounts[0]});
//		const uint8QxHix8D = await AntiBaseProtocolExoJ9KZ.decimals.call({from: accounts[3]});
//		const uint256vdkvFk = await AntiBaseProtocolExoJ9KZ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const stringpcStmn8 = await AntiBaseProtocolExoJ9KZ.symbol.call({from: accounts[1]});
//		const boolg58D4SF = await AntiBaseProtocolExoJ9KZ.isOwner.call({from: accounts[2]});

		assert.equal(boolSxYGpEr, true)
		assert.equal(stringOXZOPxQ, "https://t.me/antibaseprotocol")
		assert.equal(uint256M0dRonT, BigInt("5"))
		await expect(AntiBaseProtocolExoJ9KZ.transferFrom.call(addressaFPAGRA, addressqqr8tS, uinttz3o4Tq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolqaUCk11 = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const addressWqtZx4T = accounts[1]
		const addresswqhZHpn = accounts[5]
		const uintbNLuxcN = BigInt("310")
		const addressG3vUh0s = accounts[3]
		const string0F6NrL = await AntiBaseProtocolqaUCk11.name.call({from: accounts[2]});
		const uint256WiFLb4z = await AntiBaseProtocolqaUCk11.totalSupply.call({from: accounts[3]});
		const uint256Q1r6Pj6 = await AntiBaseProtocolqaUCk11.allowance.call(addresswqhZHpn, addressWqtZx4T, {from: accounts[0]});
		const boolEvW0agm = await AntiBaseProtocolqaUCk11.approve.call(addressG3vUh0s, uintbNLuxcN, {from: accounts[1]});
		const stringZJEEzRX = await AntiBaseProtocolqaUCk11.symbol.call({from: accounts[0]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolExoJ9KZ = await AntiBaseProtocol.new({from: accounts[3]});
		const uintJQxggnr = BigInt("3")
		const addressSBy4i7d = accounts[1]
		const uintnpa41do = BigInt("364")
		const addressfOkuenq = accounts[2]
		const stringOXZOPxQ = await AntiBaseProtocolExoJ9KZ.name.call({from: accounts[3]});
//		const boolSxYGpEr = await AntiBaseProtocolExoJ9KZ.transfer.call(addressSBy4i7d, uintJQxggnr, {from: accounts[3]});
//		const addressEJCZwrI = await AntiBaseProtocolExoJ9KZ.burnFrom.call(addressfOkuenq, uintnpa41do, {from: accounts[2]});

		assert.equal(stringOXZOPxQ, "https://t.me/antibaseprotocol")
		await expect(AntiBaseProtocolExoJ9KZ.transfer.call(addressSBy4i7d, uintJQxggnr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})