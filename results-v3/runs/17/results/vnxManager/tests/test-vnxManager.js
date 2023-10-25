const vnxManager = artifacts.require("vnxManager");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('vnxManager', (accounts) => {
	it('test for vnxManager', async () => {
		const vnxManagerAyJOmpx = await vnxManager.new({from: accounts[0]});
		const uintoF1FIYS = BigInt("842")
		const addressbyLRztb = accounts[5]
		const uintBZB8AjB = BigInt("96")
		const addressEDqWZ1 = accounts[1]
		const addressqiJZJzO = accounts[2]
		const addressJpfrHSY = accounts[1]
		const addressnDlOIO = await vnxManagerAyJOmpx.addBearer.call(addressbyLRztb, uintoF1FIYS, {from: accounts[5]});
		const boolwmpOOhv = await vnxManagerAyJOmpx.hasRole.call(addressEDqWZ1, uintBZB8AjB, {from: accounts[4]});
		await vnxManagerAyJOmpx.renounceOwnership.call({from: accounts[5]});
		const boolN9RIfJQ = await vnxManagerAyJOmpx.isOwner.call({from: accounts[2]});
		const bool3ELTld = await vnxManagerAyJOmpx.transferContractOwnership.call(addressJpfrHSY, addressqiJZJzO, {from: accounts[2]});

		await expect(vnxManagerAyJOmpx.addBearer.call(addressbyLRztb, uintoF1FIYS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerOodqVZZ = await vnxManager.new({from: accounts[3]});
		const uintaF1sK3F = BigInt("1096")
		const addresszyvdUE2 = accounts[0]
		await vnxManagerOodqVZZ.onlyOwner.call({from: accounts[5]});
		const boolJszDaC7 = await vnxManagerOodqVZZ.hasRole.call(addresszyvdUE2, uintaF1sK3F, {from: accounts[3]});
		const boolETmE18U = await vnxManagerOodqVZZ.isAdmin.call({from: accounts[4]});
		const addressrGFNsv = await vnxManagerOodqVZZ.owner.call({from: accounts[3]});
		const boolFoKuBg3 = await vnxManagerOodqVZZ.isOwner.call({from: accounts[0]});

		await expect(vnxManagerOodqVZZ.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerBaZIP9v = await vnxManager.new({from: "0x0000000000000000000000000000000000000001"});
		const uinty8lSiFP = BigInt("893")
		const addresscuOehcf = accounts[4]
		const address41gfx3 = accounts[4]
		const addressgmCKUbY = accounts[4]
		const addressQc2buo = await vnxManagerBaZIP9v.removeBearer.call(addresscuOehcf, uinty8lSiFP, {from: accounts[2]});
		await vnxManagerBaZIP9v.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256inMLKSZ = await vnxManagerBaZIP9v.totalRoles.call({from: accounts[3]});
		const boolpobcena = await vnxManagerBaZIP9v.transferContractOwnership.call(addressgmCKUbY, address41gfx3, {from: accounts[0]});
	});

	it('test for vnxManager', async () => {
		const vnxManagerg3wihyf = await vnxManager.new({from: accounts[0]});
		const uintU8s36fE = BigInt("1947")
		const addressTj0hmKq = accounts[2]
		const addressPJvhjE = accounts[0]
		const boolfUDH0RI = await vnxManagerg3wihyf.hasRole.call(addressTj0hmKq, uintU8s36fE, {from: accounts[3]});
		await vnxManagerg3wihyf.onlyOwner.call({from: accounts[4]});
		await vnxManagerg3wihyf.renounceOwnership.call({from: accounts[1]});
		const addresszUQFHrQ = await vnxManagerg3wihyf.transferOwnership.call(addressPJvhjE, {from: accounts[1]});

		assert.equal(boolfUDH0RI, false)
		await expect(vnxManagerg3wihyf.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerQxTAoz = await vnxManager.new({from: accounts[4]});
		const uintI10hVyx = BigInt("788")
		const stringq2MQvMU = "5mPQD5dcjCUlf3FvKHATTQk7vRtRfT9GL9i1kXMWg4wpVprMgRadVpS4gsx1XxyzfCG3FlrAPXo1OO"
		const uintCor99ra = BigInt("1496")
		const addressaQzYdIj = accounts[4]
		const uintBE18ofs = BigInt("1629")
		const stringq8aT12T = "ppljlIR7nxZnUgREQcA0NRPszjHWVD3zOSMUyove1vevGzlt8bHs93uR"
		const addresskQRD6L0 = accounts[5]
		const uint256o9ZI0JV = await vnxManagerQxTAoz.addRole.call(stringq2MQvMU, uintI10hVyx, {from: accounts[4]});
		const boolM4GlTHl = await vnxManagerQxTAoz.isAdmin.call({from: accounts[3]});
		const addressBvmuIk3 = await vnxManagerQxTAoz.addBearer.call(addressaQzYdIj, uintCor99ra, {from: accounts[2]});
		const uint256wwFnokg = await vnxManagerQxTAoz.addRole.call(stringq8aT12T, uintBE18ofs, {from: accounts[4]});
		const addressnyUmKAw = await vnxManagerQxTAoz.transferOwnership.call(addresskQRD6L0, {from: accounts[2]});

		await expect(vnxManagerQxTAoz.addRole.call(stringq2MQvMU, uintI10hVyx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerEyGW5bc = await vnxManager.new({from: accounts[1]});
		const addressEYbkNj = accounts[2]
		await vnxManagerEyGW5bc.renounceOwnership.call({from: accounts[1]});
		const addressx8h61Sm = await vnxManagerEyGW5bc.transferOwnership.call(addressEYbkNj, {from: "0x0000000000000000000000000000000000000001"});

		await expect(vnxManagerEyGW5bc.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagercGhTzug = await vnxManager.new({from: accounts[3]});
		const uintdDaL6Uw = BigInt("978")
		const stringYBHIN29 = "IIgJbAqZaYPncdjtTZdNoqvdhFCH88FUY2KHjJWWH2D6YQnqDschueK4J7BMw4hG3Tpz9Qv6mAxwwMhu1kD"
		const addressLXq6PTL = accounts[2]
		const addressbiyQuNq = accounts[2]
		const uint256kQ5Dhkh = await vnxManagercGhTzug.totalRoles.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Om97JTt = await vnxManagercGhTzug.addRole.call(stringYBHIN29, uintdDaL6Uw, {from: accounts[2]});
		const boolcN7saKn = await vnxManagercGhTzug.transferContractOwnership.call(addressbiyQuNq, addressLXq6PTL, {from: accounts[5]});
		const boolRvAZ7kn = await vnxManagercGhTzug.isOwner.call({from: accounts[0]});

		assert.equal(uint256kQ5Dhkh, BigInt("1"))
		await expect(vnxManagercGhTzug.addRole.call(stringYBHIN29, uintdDaL6Uw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerAyJOmpx = await vnxManager.new({from: accounts[0]});
		const uintIJlW28 = BigInt("654")
		const addressJMVtPmn = accounts[4]
		const uintFrjetUh = BigInt("842")
		const addresslg52ERF = accounts[5]
		const uintOgijVLz = BigInt("96")
		const addresstZRR8IW = accounts[2]
		const addressxqVQRqp = accounts[2]
		const addressJVX6Fgy = accounts[1]
		const addressYxCUF9o = await vnxManagerAyJOmpx.removeBearer.call(addressJMVtPmn, uintIJlW28, {from: "0x0000000000000000000000000000000000000001"});
		const addressnDlOIO = await vnxManagerAyJOmpx.addBearer.call(addresslg52ERF, uintFrjetUh, {from: accounts[5]});
		const boolwmpOOhv = await vnxManagerAyJOmpx.hasRole.call(addresstZRR8IW, uintOgijVLz, {from: accounts[4]});
		const boolN9RIfJQ = await vnxManagerAyJOmpx.isOwner.call({from: accounts[2]});
		await vnxManagerAyJOmpx.onlyAdmin.call({from: accounts[2]});
		const bool3ELTld = await vnxManagerAyJOmpx.transferContractOwnership.call(addressJVX6Fgy, addressxqVQRqp, {from: accounts[2]});

		await expect(vnxManagerAyJOmpx.removeBearer.call(addressJMVtPmn, uintIJlW28, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerAyJOmpx = await vnxManager.new({from: accounts[0]});
		const uintZHgSocP = BigInt("1053")
		const addressczWnh8K = accounts[2]
		const addressaSsVcLK = accounts[2]
		const addressEIgvQtv = accounts[1]
		const boolwmpOOhv = await vnxManagerAyJOmpx.hasRole.call(addressczWnh8K, uintZHgSocP, {from: accounts[4]});
		const boolN9RIfJQ = await vnxManagerAyJOmpx.isOwner.call({from: accounts[2]});
		const bool3ELTld = await vnxManagerAyJOmpx.transferContractOwnership.call(addressEIgvQtv, addressaSsVcLK, {from: accounts[2]});

		assert.equal(boolN9RIfJQ, false)
		assert.equal(boolwmpOOhv, false)
		await expect(vnxManagerAyJOmpx.transferContractOwnership.call(addressEIgvQtv, addressaSsVcLK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerTRJMTit = await vnxManager.new({from: accounts[2]});
		const addressqXFeQG = accounts[5]
		const addressL2ck2rS = accounts[3]
		const addresskWM2kor = "0x0000000000000000000000000000000000000001"
		const uintEm0l9DA = BigInt("1224")
		const stringwpukFmK = "kTbH24gCl26Y3ON66xAbanDaknc28WCmns63WUzjxczTQLU63xhcngB"
		const addresszObbD5 = accounts[4]
		const addressjsIGkgN = accounts[3]
		const addressilTCA2k = await vnxManagerTRJMTit.transferOwnership.call(addressqXFeQG, {from: accounts[2]});
		const boolvl44NGo = await vnxManagerTRJMTit.isAdmin.call({from: accounts[0]});
		const boolp3Wu73 = await vnxManagerTRJMTit.transferContractOwnership.call(addresskWM2kor, addressL2ck2rS, {from: accounts[4]});
		const uint256uzcNU38 = await vnxManagerTRJMTit.totalRoles.call({from: accounts[4]});
		const uint256ISIqwOl = await vnxManagerTRJMTit.addRole.call(stringwpukFmK, uintEm0l9DA, {from: accounts[2]});
		const boolgPoHpuB = await vnxManagerTRJMTit.transferContractOwnership.call(addressjsIGkgN, addresszObbD5, {from: accounts[0]});

		assert.equal(boolvl44NGo, false)
		await expect(vnxManagerTRJMTit.transferContractOwnership.call(addresskWM2kor, addressL2ck2rS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagera9yqKo3 = await vnxManager.new({from: accounts[0]});
		const addressQgvUr5K = accounts[3]
		const addressqc8WElc = accounts[1]
		const uintpZQXvBu = BigInt("1760")
		const addressIQnFjUB = accounts[4]
		const addresszzrBICH = accounts[5]
		const addressItYQJRS = accounts[0]
		const addressGwWApX7 = accounts[0]
		const boolfAN94jN = await vnxManagera9yqKo3.transferContractOwnership.call(addressqc8WElc, addressQgvUr5K, {from: accounts[0]});
		const addressi7rRLJl = await vnxManagera9yqKo3.removeBearer.call(addressIQnFjUB, uintpZQXvBu, {from: accounts[2]});
		const booluZxxUdS = await vnxManagera9yqKo3.transferContractOwnership.call(addressItYQJRS, addresszzrBICH, {from: accounts[4]});
		await vnxManagera9yqKo3.renounceOwnership.call({from: accounts[4]});
		const addresszOZmdeb = await vnxManagera9yqKo3.transferOwnership.call(addressGwWApX7, {from: accounts[0]});

		await expect(vnxManagera9yqKo3.transferContractOwnership.call(addressqc8WElc, addressQgvUr5K, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for vnxManager', async () => {
		const vnxManagerz9L5GRK = await vnxManager.new({from: accounts[0]});
		const addressG5rR7V3 = accounts[3]
		const addresscmUg5yN = accounts[2]
		const addressouyDuqo = await vnxManagerz9L5GRK.owner.call({from: accounts[1]});
		const addressODkuAeh = await vnxManagerz9L5GRK.transferOwnership.call(addressG5rR7V3, {from: accounts[0]});
		await vnxManagerz9L5GRK.onlyOwner.call({from: accounts[0]});
		const addressVFN3AOt = await vnxManagerz9L5GRK.owner.call({from: accounts[3]});
		const boolmvJNzuz = await vnxManagerz9L5GRK.isAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		const addressfpW8FTa = await vnxManagerz9L5GRK.transferOwnership.call(addresscmUg5yN, {from: accounts[3]});

		assert.equal(addressouyDuqo, 0x32cC239AcA97490Cf350F41d89CE9A1E8F3D6f21)
		await expect(vnxManagerz9L5GRK.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})