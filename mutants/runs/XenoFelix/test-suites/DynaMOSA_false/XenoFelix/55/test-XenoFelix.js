const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringzkiJQ1s = "dpQSOAxFSaeNt48M9PefjKTGFyopUOO1BA2q64ryDwYsjwtRnHqLKqNkonBY9Xl"
		const stringxPGsMK = "Y4pMV7sTH8TCRKzznQ4nv3LWQeSFkINFTREx"
		const uintU7Hbica = BigInt("166")
		const XenoFelixq7Ugnaq = await XenoFelix.new(stringzkiJQ1s, stringxPGsMK, uintU7Hbica, {from: accounts[4]});
		const addresszEhovE7 = accounts[2]
		await XenoFelixq7Ugnaq.pause.call({from: accounts[0]});
		const boolSOmGah = await XenoFelixq7Ugnaq.isPauser.call(addresszEhovE7, {from: accounts[3]});
		const boolbugoa29 = await XenoFelixq7Ugnaq.acceptOwnership.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const XenoFelixAMfrPGG = await XenoFelix.new({from: accounts[4]});
		const uintg6f2xz6 = BigInt("1563")
		const addressil4H3F4 = accounts[1]
		const uintFz90tGV = BigInt("1333")
		const addressTjW0B5t = accounts[3]
		const uintmFnBrUQ = BigInt("294")
		const address5Qxb4P = accounts[4]
		const uintO7J9ywq = BigInt("441")
		const addressdzbVKt2 = accounts[1]
		const boolRnJqiSv = await XenoFelixAMfrPGG.decreaseAllowance.call(addressil4H3F4, uintg6f2xz6, {from: accounts[0]});
		const boolUS0dOqL = await XenoFelixAMfrPGG.unlock.call(addressTjW0B5t, uintFz90tGV, {from: accounts[0]});
		const boolMj6jlL = await XenoFelixAMfrPGG.transfer.call(address5Qxb4P, uintmFnBrUQ, {from: accounts[3]});
		const boolZMABDWJ = await XenoFelixAMfrPGG.approve.call(addressdzbVKt2, uintO7J9ywq, {from: accounts[2]});
		await XenoFelixAMfrPGG.onlyOwner.call({from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringt8tBuK5 = ""
		const stringLOkld4 = "4uVYx52SM16f0W"
		const uint4atSF5 = BigInt("249")
		const XenoFelixozGLC1i = await XenoFelix.new(stringt8tBuK5, stringLOkld4, uint4atSF5, {from: "0x0000000000000000000000000000000000000001"});
		const addressO8IQa92 = accounts[0]
		const uint45MuZK = BigInt("1100")
		const addressDIQU8Nc = accounts[5]
		const addressluHjnt = accounts[0]
		const uintWYYdMlb = BigInt("1213")
		const addressOesssLw = accounts[0]
		const uint256IVLjHA3 = await XenoFelixozGLC1i.balanceOf.call(addressO8IQa92, {from: accounts[5]});
		const boolEMja93v = await XenoFelixozGLC1i.decreaseAllowance.call(addressDIQU8Nc, uint45MuZK, {from: accounts[3]});
		const bool5ApIO7 = await XenoFelixozGLC1i.isOwner.call(addressluHjnt, {from: accounts[4]});
		const addressfWkjiJK = await XenoFelixozGLC1i.burnFrom.call(addressOesssLw, uintWYYdMlb, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringF6PJf6K = "sKv37gWN5SPvR43Gw4tW0mkI6KM52iES4BQMDcV4MpecY7I1XVrasWthiAorTbSW4fgjHmcIfZrryV"
		const stringd74ujWu = "lFiQ8aYyHpgXk4pIqdRH4toegmLo7sa8WcgOmllBpImkr8wRHF9yyzu8Njt"
		const uintfSr3vOH = BigInt("80")
		const XenoFelix2fsR5u = await XenoFelix.new(stringF6PJf6K, stringd74ujWu, uintfSr3vOH, {from: accounts[2]});
		const addressYeyRFu9 = accounts[2]
		const addressznvt4G = accounts[2]
		const uintOh7cnEi = BigInt("693")
		const addressb0sivLR = accounts[1]
		const boolaV5iZa = await XenoFelix2fsR5u.acceptOwnership.call({from: accounts[1]});
		const boolWdBMHkb = await XenoFelix2fsR5u.paused.call({from: "0x0000000000000000000000000000000000000001"});
		const addressXs58gfO = await XenoFelix2fsR5u.removePauser.call(addressYeyRFu9, {from: accounts[3]});
		const uint256TcnznQ0 = await XenoFelix2fsR5u.balanceOf.call(addressznvt4G, {from: "0x0000000000000000000000000000000000000001"});
		const addressxvTjZGg = await XenoFelix2fsR5u.burnFrom.call(addressb0sivLR, uintOh7cnEi, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringZOFSw33 = "xeKkmTuFtJvwYRrMMd1mRNOQoVwR9kjRyzBJLnT02wAAAvk1rZYW323bRre8TKO1FnBW8Blc8wZYJ4O6Hk35USjazu5y"
		const stringhdDlzEF = "rErJpZuEEQ4k7Ns5WHnCVajjd7onN5Qmgh2TkGGcEsg"
		const uintJdX4vf = BigInt("176")
		const XenoFelixDEVJkP4 = await XenoFelix.new(stringZOFSw33, stringhdDlzEF, uintJdX4vf, {from: accounts[1]});
		await XenoFelixDEVJkP4.unpause.call({from: accounts[2]});
		const uint256yy1bSIg = await XenoFelixDEVJkP4.totalSupply.call({from: accounts[4]});
		await XenoFelixDEVJkP4.unpause.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringycOdEx = "6Ma51xpEj252PjMSffht4WIRPWmvnNU1jIFo1TxfnUwOS0"
		const stringnfWboJn = "RlVTRa2lRVGBAw8bXyktjQbb24qt7lDq5l1cDDjz4YxnHq2htxCmpgbnF"
		const uintRpOsGII = BigInt("1479")
		const uintjOBV8P = BigInt("4")
		const XenoFelix2ciRZ9 = await XenoFelix.new(stringycOdEx, stringnfWboJn, uintRpOsGII, uintjOBV8P, {from: accounts[0]});
		const uintCbpwTGH = BigInt("1767")
		const addressmHzO7Nh = accounts[0]
		const addressgPkd8GQ = accounts[1]
		const uintujxgK6M = BigInt("22")
		const addresseGKcgSJ = accounts[1]
		const addressynPiQV5 = accounts[4]
		const addressaLowb8w = accounts[3]
		const uintOqpfyu2 = BigInt("1279")
		const addressGr5LywJ = accounts[4]
		const booluT8qNds = await XenoFelix2ciRZ9.burnOwner.call(addressmHzO7Nh, uintCbpwTGH, {from: accounts[4]});
		const addressmwUjm00 = await XenoFelix2ciRZ9.transferOwnership.call(addressgPkd8GQ, {from: accounts[2]});
		const boolB3rijii = await XenoFelix2ciRZ9.transfer.call(addresseGKcgSJ, uintujxgK6M, {from: accounts[0]});
		const addresse1cdofH = await XenoFelix2ciRZ9.notFrozenAndTransaction.call(addressaLowb8w, addressynPiQV5, {from: accounts[4]});
		const boolscMqQWn = await XenoFelix2ciRZ9.transfer.call(addressGr5LywJ, uintOqpfyu2, {from: accounts[3]});

		await expect(XenoFelix2ciRZ9.burnOwner.call(addressmHzO7Nh, uintCbpwTGH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringnV5q1C5 = "NzBnJ22AVcaNYbXTS83h0R707os4FquCq2I6m2lJUufeDGiFMvdaaajKXf3GCSw3gkzP"
		const stringRy3gcCq = "qvU1STgTCWTHOw4suNehwrj4CPqO88bKkyh0"
		const uintGpZe22A = BigInt("20")
		const XenoFelixeo4exdO = await XenoFelix.new(stringnV5q1C5, stringRy3gcCq, uintGpZe22A, {from: accounts[3]});
		const addressyzc3Y4g = accounts[2]
		const uint256MMAJl5l = await XenoFelixeo4exdO.balanceOf.call(addressyzc3Y4g, {from: accounts[4]});
		await XenoFelixeo4exdO.renouncePauser.call({from: accounts[4]});
		await XenoFelixeo4exdO.whenNotPaused.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringpU0G9Bz = "hWdEipoDPJNY70Us2AnoYVdXQEPshz0AH"
		const stringqLLxcfc = "SUzDarJu2zr5BHlVzCX8PfMBw7U7NJr75xVH8vIPJ8iXSWrWU1ihzxDpRN7LQg4dlYzMYT5W5eJY8tOmtWBgMDU"
		const uintjor6hVI = BigInt("245")
		const XenoFelixtkRDhq6 = await XenoFelix.new(stringpU0G9Bz, stringqLLxcfc, uintjor6hVI, {from: accounts[5]});
		const uint256U5ZVgL9 = await XenoFelixtkRDhq6.totalSupply.call({from: accounts[0]});
		const stringSWoLGHT = await XenoFelixtkRDhq6.symbol.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringzuYSr0 = "ZtbS0O2TFFHVGgw3ahhRwAT6myj1n5aWBulXxcVunafYQOI4cg8zIyPDFebV4p3KHDbgNljevCFMvmWzIzGa0"
		const stringlneVNNa = "Qs4wYBh9h6jXVC3q2zub6fDoINYK7bSDi354b8T7Cz5yNaUiG3UGeh1x6NodMiRLSeCugJi7tuxPF"
		const uintAPcvKhQ = BigInt("1181")
		const uintqqIk3sP = BigInt("7")
		const XenoFelixHHutnao = await XenoFelix.new(stringzuYSr0, stringlneVNNa, uintAPcvKhQ, uintqqIk3sP, {from: "0x0000000000000000000000000000000000000001"});
		const uinthXqIr3F = BigInt("1513")
		const addressJWaN5Pv = accounts[1]
		const addressiuCfTqq = "0x0000000000000000000000000000000000000001"
		const uint256yRNslg = await XenoFelixHHutnao.totalSupply.call({from: accounts[4]});
		const boolttsgiG1 = await XenoFelixHHutnao.approve.call(addressJWaN5Pv, uinthXqIr3F, {from: accounts[0]});
		const boolKdA7xDj = await XenoFelixHHutnao.isPauser.call(addressiuCfTqq, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringC9cICIS = "oskNxaxlh2ky6UFFR6hvF9bTKi4"
		const stringkR2TpTn = "aNp6lTmqJLQioJ29kHzLRC7s3fqZAGHptSuxE3kXxTfQxWIw5bEr3w"
		const uintFzWgC4w = BigInt("1209")
		const uintU2LmD3d = BigInt("100")
		const XenoFelixEgYQTs0 = await XenoFelix.new(stringC9cICIS, stringkR2TpTn, uintFzWgC4w, uintU2LmD3d, {from: accounts[3]});
		await XenoFelixEgYQTs0.whenNotPaused.call({from: accounts[4]});
		const stringslitLwY = await XenoFelixEgYQTs0.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixEgYQTs0.renouncePauser.call({from: accounts[1]});

		await expect(XenoFelixEgYQTs0.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringqr8m8w = "vhIhlMA34KVZoyLY6CSJ4rvoFMmVqbxajqSkiI5aRMtRGNke7FBNpDfpg7EMUwJmmdFqpQnXe5nfib37DbteEsRh4zX"
		const stringDJgU5yf = "zl5"
		const uintsZB9I6j = BigInt("107")
		const XenoFelixe5YVsF3 = await XenoFelix.new(stringqr8m8w, stringDJgU5yf, uintsZB9I6j, {from: accounts[0]});
		const uintpMFWEo = BigInt("1980")
		const uintHXH9SFw = BigInt("875")
		const addressjNGjjAL = accounts[3]
		const addressCky2LWU = accounts[4]
		const uintwuTcJsl = BigInt("1063")
		const uint256rJIslQC = await XenoFelixe5YVsF3.burn.call(uintpMFWEo, {from: accounts[0]});
		await XenoFelixe5YVsF3.onlyPauser.call({from: accounts[3]});
		const boolQU8LnY5 = await XenoFelixe5YVsF3.transferFrom.call(addressCky2LWU, addressjNGjjAL, uintHXH9SFw, {from: accounts[4]});
		const uint2568IkiO7 = await XenoFelixe5YVsF3.burn.call(uintwuTcJsl, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uintzE30h9X = BigInt("727")
		const uintDOaZD5h = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uintzE30h9X, uintDOaZD5h, {from: accounts[2]});
		const uintntstNNJ = BigInt("1279")
		const addressKisrtAh = "0x0000000000000000000000000000000000000001"
		const uintupyxbFU = BigInt("1370")
		const uintgkp04S = BigInt("671")
		const addressUkYXJFq = accounts[5]
		const uintxhCZQcr = BigInt("1666")
		const addressugfeqWt = accounts[5]
		const addressb8VvlKQ = accounts[1]
		const boolhSkQzm = await XenoFelixIKyqhow.unlock.call(addressKisrtAh, uintntstNNJ, {from: accounts[5]});
		const boolROlBkFs = await XenoFelixIKyqhow.lock.call(addressUkYXJFq, uintgkp04S, uintupyxbFU, {from: accounts[0]});
		const boolACvnC7a = await XenoFelixIKyqhow.transfer.call(addressugfeqWt, uintxhCZQcr, {from: accounts[2]});
		const boolEqQMccu = await XenoFelixIKyqhow.isOwner.call(addressb8VvlKQ, {from: accounts[5]});

		await expect(XenoFelixIKyqhow.unlock.call(addressKisrtAh, uintntstNNJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uinteOmnuBx = BigInt("727")
		const uintDbcojtb = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uinteOmnuBx, uintDbcojtb, {from: accounts[2]});
		const uintqidamlf = BigInt("1279")
		const addressDF1egJ4 = "0x0000000000000000000000000000000000000001"
		const uintGZT5hXV = BigInt("1666")
		const addresszr79Qfd = accounts[5]
		const addressgq7K22 = accounts[1]
		const stringNwEP56q = await XenoFelixIKyqhow.name.call({from: accounts[1]});
		const boolhSkQzm = await XenoFelixIKyqhow.unlock.call(addressDF1egJ4, uintqidamlf, {from: accounts[5]});
		const boolACvnC7a = await XenoFelixIKyqhow.transfer.call(addresszr79Qfd, uintGZT5hXV, {from: accounts[2]});
		const boolEqQMccu = await XenoFelixIKyqhow.isOwner.call(addressgq7K22, {from: accounts[5]});

		assert.equal(stringNwEP56q, "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ")
		await expect(XenoFelixIKyqhow.unlock.call(addressDF1egJ4, uintqidamlf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uintmixjpoC = BigInt("727")
		const uintEbrhfyk = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uintmixjpoC, uintEbrhfyk, {from: accounts[2]});
		const uintWDAujIq = BigInt("1666")
		const addresswj2MLt = accounts[5]
		const addressdoskciJ = accounts[1]
		const boolEbVDE3 = await XenoFelixIKyqhow.paused.call({from: accounts[0]});
		const boolACvnC7a = await XenoFelixIKyqhow.transfer.call(addresswj2MLt, uintWDAujIq, {from: accounts[2]});
		const boolEqQMccu = await XenoFelixIKyqhow.isOwner.call(addressdoskciJ, {from: accounts[5]});

		assert.equal(boolACvnC7a, true)
		assert.equal(boolEbVDE3, false)
		assert.equal(boolEqQMccu, false)
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uintDDA9IKV = BigInt("727")
		const uintwoC2mn2 = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uintDDA9IKV, uintwoC2mn2, {from: accounts[2]});
		const uinto0fuAmS = BigInt("1279")
		const addressPiADwLR = "0x0000000000000000000000000000000000000002"
		const uintslABlCy = BigInt("123")
		const addressKbbiPQV = accounts[5]
		const addressMAcqapi = accounts[3]
		const uintH2ssIwO = BigInt("1370")
		const uintXA97cP = BigInt("671")
		const addressNhZxBU1 = accounts[5]
		const uintpHJJSIp = BigInt("874")
		const uintM2BiPg = BigInt("1936")
		const addresstdc62y7 = accounts[5]
		const uintCUizGY = BigInt("1666")
		const addressU7T1aY = accounts[5]
		const addresseei5uUX = accounts[1]
		const uint256NRwHaEv = await XenoFelixIKyqhow.totalSupply.call({from: accounts[2]});
		const boolhSkQzm = await XenoFelixIKyqhow.unlock.call(addressPiADwLR, uinto0fuAmS, {from: accounts[5]});
		const boolalspdEF = await XenoFelixIKyqhow.transferFrom.call(addressMAcqapi, addressKbbiPQV, uintslABlCy, {from: "0x0000000000000000000000000000000000000001"});
		const boolROlBkFs = await XenoFelixIKyqhow.lock.call(addressNhZxBU1, uintXA97cP, uintH2ssIwO, {from: accounts[0]});
		const boolQ91orXn = await XenoFelixIKyqhow.lock.call(addresstdc62y7, uintM2BiPg, uintpHJJSIp, {from: accounts[2]});
		const boolACvnC7a = await XenoFelixIKyqhow.transfer.call(addressU7T1aY, uintCUizGY, {from: accounts[2]});
		const boolEqQMccu = await XenoFelixIKyqhow.isOwner.call(addresseei5uUX, {from: accounts[5]});

		assert.equal(uint256NRwHaEv, BigInt("68954471135557702485481204845683047153119860948660850761685841410149205409792"))
		await expect(XenoFelixIKyqhow.unlock.call(addressPiADwLR, uinto0fuAmS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uintZBxAa0 = BigInt("727")
		const uintdYGl6oR = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uintZBxAa0, uintdYGl6oR, {from: accounts[2]});
		const uint4XhMbI = BigInt("1986")
		const addressOutsQi4 = accounts[4]
		const uintysooBT7 = BigInt("1666")
		const addressyEkQCzH = accounts[5]
		const addressNr88sm9 = accounts[1]
		const boolEbVDE3 = await XenoFelixIKyqhow.paused.call({from: accounts[0]});
		const boolTO0st8I = await XenoFelixIKyqhow.approve.call(addressOutsQi4, uint4XhMbI, {from: accounts[3]});
		const boolACvnC7a = await XenoFelixIKyqhow.transfer.call(addressyEkQCzH, uintysooBT7, {from: accounts[2]});
		const boolEqQMccu = await XenoFelixIKyqhow.isOwner.call(addressNr88sm9, {from: accounts[5]});

		assert.equal(boolACvnC7a, true)
		assert.equal(boolEbVDE3, false)
		assert.equal(boolEqQMccu, false)
		assert.equal(boolTO0st8I, true)
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uintMpw6qF = BigInt("727")
		const uintBnhrg9k = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uintMpw6qF, uintBnhrg9k, {from: accounts[2]});
		const uintgNsM37g = BigInt("1622")
		const addresskiSCa6l = accounts[3]
		const uintDVN5BDE = BigInt("1693")
		const addressk96jHya = accounts[5]
		const addressK5VPW7f = accounts[3]
		const uintNrqbEw7 = BigInt("1666")
		const addressePApSQe = accounts[6]
		const uintmsqPS6S = BigInt("1835")
		const addressGSEHH73 = accounts[1]
		const boolC4BamtX = await XenoFelixIKyqhow.increaseAllowance.call(addresskiSCa6l, uintgNsM37g, {from: accounts[1]});
		const boolEbVDE3 = await XenoFelixIKyqhow.paused.call({from: accounts[0]});
		const boolJCJjWXp = await XenoFelixIKyqhow.transferFrom.call(addressK5VPW7f, addressk96jHya, uintDVN5BDE, {from: accounts[2]});
		const boolACvnC7a = await XenoFelixIKyqhow.transfer.call(addressePApSQe, uintNrqbEw7, {from: accounts[2]});
		const uint256GzhG2fn = await XenoFelixIKyqhow.burn.call(uintmsqPS6S, {from: accounts[2]});
		const boolEqQMccu = await XenoFelixIKyqhow.isOwner.call(addressGSEHH73, {from: accounts[5]});

		assert.equal(boolC4BamtX, true)
		assert.equal(boolEbVDE3, false)
		await expect(XenoFelixIKyqhow.transferFrom.call(addressK5VPW7f, addressk96jHya, uintDVN5BDE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uintZ68PWLr = BigInt("727")
		const uintKJBsmNH = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uintZ68PWLr, uintKJBsmNH, {from: accounts[2]});
		const addressMiWmb0B = accounts[3]
		const addresse4FiiyB = accounts[4]
		const addressg01iS24 = accounts[1]
		const boolEbVDE3 = await XenoFelixIKyqhow.paused.call({from: accounts[0]});
		const uint256irFVRSY = await XenoFelixIKyqhow.allowance.call(addresse4FiiyB, addressMiWmb0B, {from: accounts[5]});
		const boolEqQMccu = await XenoFelixIKyqhow.isOwner.call(addressg01iS24, {from: accounts[5]});

		assert.equal(boolEbVDE3, false)
		assert.equal(boolEqQMccu, false)
		assert.equal(uint256irFVRSY, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uintkwdUZrm = BigInt("727")
		const uintcH16rKu = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uintkwdUZrm, uintcH16rKu, {from: accounts[2]});
		const uintWdenqUf = BigInt("1673")
		const addressyUIboc = accounts[5]
		const uintxd468kX = BigInt("1365")
		const addresszbTRh1i = accounts[2]
		const addressb8cluuz = accounts[2]
		const uintMIAkvN = BigInt("1560")
		const boolEbVDE3 = await XenoFelixIKyqhow.paused.call({from: accounts[0]});
		const boolACvnC7a = await XenoFelixIKyqhow.transfer.call(addressyUIboc, uintWdenqUf, {from: accounts[2]});
		const boolLa9HTlh = await XenoFelixIKyqhow.approve.call(addresszbTRh1i, uintxd468kX, {from: accounts[2]});
		const boolEqQMccu = await XenoFelixIKyqhow.isOwner.call(addressb8cluuz, {from: accounts[5]});
		const uint256KhP4Hhp = await XenoFelixIKyqhow.burn.call(uintMIAkvN, {from: accounts[5]});

		assert.equal(boolACvnC7a, true)
		assert.equal(boolEbVDE3, false)
		assert.equal(boolEqQMccu, true)
		assert.equal(boolLa9HTlh, true)
		await expect(XenoFelixIKyqhow.burn.call(uintMIAkvN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uintcKdCcaG = BigInt("727")
		const uintRkOFVlk = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uintcKdCcaG, uintRkOFVlk, {from: accounts[2]});
		const uintasDlDLd = BigInt("1083")
		const addresscCx8juu = accounts[1]
		const addressajaM7Em = accounts[2]
		const boolEbVDE3 = await XenoFelixIKyqhow.paused.call({from: accounts[0]});
		const addressRUbCsnI = await XenoFelixIKyqhow.burnFrom.call(addresscCx8juu, uintasDlDLd, {from: accounts[3]});
		const boolEqQMccu = await XenoFelixIKyqhow.isOwner.call(addressajaM7Em, {from: accounts[5]});

		assert.equal(boolEbVDE3, false)
		await expect(XenoFelixIKyqhow.burnFrom.call(addresscCx8juu, uintasDlDLd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uintGG7LONt = BigInt("727")
		const uintBLgIbLp = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uintGG7LONt, uintBLgIbLp, {from: accounts[2]});
		const addressgQJhAyC = accounts[3]
		const uintbHIKzh = BigInt("1673")
		const addressozc47T = accounts[5]
		const address281u5P = accounts[1]
		const boolEbVDE3 = await XenoFelixIKyqhow.paused.call({from: accounts[0]});
		const boolAyabwEt = await XenoFelixIKyqhow.freezeAccount.call(addressgQJhAyC, {from: accounts[2]});
		const boolACvnC7a = await XenoFelixIKyqhow.transfer.call(addressozc47T, uintbHIKzh, {from: accounts[2]});
		const boolEqQMccu = await XenoFelixIKyqhow.isOwner.call(address281u5P, {from: accounts[5]});

		assert.equal(boolACvnC7a, true)
		assert.equal(boolAyabwEt, true)
		assert.equal(boolEbVDE3, false)
		assert.equal(boolEqQMccu, false)
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uintHOvflE7 = BigInt("727")
		const uinttzY0Jjs = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uintHOvflE7, uinttzY0Jjs, {from: accounts[2]});
		const uintHnCwqSw = BigInt("307")
		const addressqrt4Yz4 = accounts[5]
		const uintVpAj5tr = BigInt("1986")
		const address9UCcoo = accounts[4]
		const addressHBK34T6 = accounts[4]
		const uintkRNE7vl = BigInt("945")
		const addressnSUMsUA = accounts[5]
		const addressmbdz6vN = accounts[0]
		const addressAL6hD1g = accounts[5]
		const addressvqZtKoU = accounts[0]
		const uintg6chXkd = BigInt("1153")
		const uintIXUq42z = BigInt("1964")
		const addressDVnO99E = accounts[1]
		const uintj9SWhW8 = BigInt("1314")
		const addressRNlbuVh = accounts[1]
		const uintsIff4eg = BigInt("1660")
		const addressfwXmTn5 = accounts[5]
		const addresstZQTRm = accounts[1]
		const boolEbVDE3 = await XenoFelixIKyqhow.paused.call({from: accounts[0]});
		await XenoFelixIKyqhow.pause.call({from: accounts[2]});
		const boolN1Xbm0E = await XenoFelixIKyqhow.burnOwner.call(addressqrt4Yz4, uintHnCwqSw, {from: accounts[1]});
		const boolTO0st8I = await XenoFelixIKyqhow.approve.call(address9UCcoo, uintVpAj5tr, {from: accounts[3]});
		const uint256zRYK1ko = await XenoFelixIKyqhow.balanceOf.call(addressHBK34T6, {from: accounts[2]});
		const boolOpou7tP = await XenoFelixIKyqhow.transferFrom.call(addressmbdz6vN, addressnSUMsUA, uintkRNE7vl, {from: accounts[0]});
		const uint256nNC9u2W = await XenoFelixIKyqhow.allowance.call(addressvqZtKoU, addressAL6hD1g, {from: accounts[0]});
		const uint256lnGr7uS = await XenoFelixIKyqhow.burn.call(uintg6chXkd, {from: accounts[2]});
		const bool05jlJk = await XenoFelixIKyqhow.burnOwner.call(addressDVnO99E, uintIXUq42z, {from: accounts[3]});
		const boolVwTfX4d = await XenoFelixIKyqhow.transfer.call(addressRNlbuVh, uintj9SWhW8, {from: accounts[4]});
		const boolACvnC7a = await XenoFelixIKyqhow.transfer.call(addressfwXmTn5, uintsIff4eg, {from: accounts[2]});
		const boolEqQMccu = await XenoFelixIKyqhow.isOwner.call(addresstZQTRm, {from: accounts[5]});

		assert.equal(boolEbVDE3, false)
		await expect(XenoFelixIKyqhow.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uintz3jKqRz = BigInt("727")
		const uintpjiSFr5 = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uintz3jKqRz, uintpjiSFr5, {from: accounts[2]});
		const addressUR4Viu2 = accounts[3]
		const addressPe3DE2m = accounts[0]
		const uintyejd7WZ = BigInt("1673")
		const addressfDlnzjm = accounts[6]
		const addressbpd9SN9 = accounts[1]
		const boolAyabwEt = await XenoFelixIKyqhow.freezeAccount.call(addressUR4Viu2, {from: accounts[2]});
		const uint256P3fR3tJ = await XenoFelixIKyqhow.balanceOf.call(addressPe3DE2m, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixIKyqhow.pause.call({from: accounts[3]});
		const boolACvnC7a = await XenoFelixIKyqhow.transfer.call(addressfDlnzjm, uintyejd7WZ, {from: accounts[2]});
		const boolEqQMccu = await XenoFelixIKyqhow.isOwner.call(addressbpd9SN9, {from: accounts[5]});

		assert.equal(boolAyabwEt, true)
		assert.equal(uint256P3fR3tJ, BigInt("0"))
		await expect(XenoFelixIKyqhow.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uintNM9LVGE = BigInt("727")
		const uintGimZhzj = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uintNM9LVGE, uintGimZhzj, {from: accounts[2]});
		const uintZ6wkLVh = BigInt("1986")
		const addressPsm7Cdd = accounts[4]
		const addressjxTQ0aq = accounts[2]
		const uintwc9Aqe = BigInt("945")
		const addresssLMPz7t = accounts[5]
		const addressn4iqWS6 = accounts[0]
		const addresshvCbl7I = accounts[2]
		const addressGWg8dG2 = accounts[5]
		const addressoGTHMzl = accounts[0]
		const uintaqHMIH8 = BigInt("1153")
		const uint9UajHx = BigInt("1110")
		const uintfhhRZkm = BigInt("609")
		const addressjIQMg6R = accounts[1]
		const uintxtscxbW = BigInt("1666")
		const addressReuac3S = accounts[5]
		const address210qJE = accounts[2]
		const boolEbVDE3 = await XenoFelixIKyqhow.paused.call({from: accounts[0]});
		const boolTO0st8I = await XenoFelixIKyqhow.approve.call(addressPsm7Cdd, uintZ6wkLVh, {from: accounts[3]});
		const addresshxcr45x = await XenoFelixIKyqhow.removePauser.call(addressjxTQ0aq, {from: accounts[2]});
		const boolOpou7tP = await XenoFelixIKyqhow.transferFrom.call(addressn4iqWS6, addresssLMPz7t, uintwc9Aqe, {from: accounts[0]});
		const addressRaA6hV = await XenoFelixIKyqhow.addPauser.call(addresshvCbl7I, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nNC9u2W = await XenoFelixIKyqhow.allowance.call(addressoGTHMzl, addressGWg8dG2, {from: accounts[0]});
		const uint256lnGr7uS = await XenoFelixIKyqhow.burn.call(uintaqHMIH8, {from: accounts[2]});
		const boolu8RcmgP = await XenoFelixIKyqhow.transferWithLock.call(addressjIQMg6R, uintfhhRZkm, uint9UajHx, {from: accounts[1]});
		const boolACvnC7a = await XenoFelixIKyqhow.transfer.call(addressReuac3S, uintxtscxbW, {from: accounts[2]});
		const boolEqQMccu = await XenoFelixIKyqhow.isOwner.call(address210qJE, {from: accounts[5]});

		assert.equal(boolEbVDE3, false)
		assert.equal(boolTO0st8I, true)
		await expect(XenoFelixIKyqhow.transferFrom.call(addressn4iqWS6, addresssLMPz7t, uintwc9Aqe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uinttb5InrN = BigInt("727")
		const uintWaimlKE = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uinttb5InrN, uintWaimlKE, {from: accounts[2]});
		const uintAZ1r50 = BigInt("1673")
		const addressAKrCy9 = accounts[6]
		const addressL4rR3O = accounts[2]
		const uint4G44o8 = BigInt("817")
		const addressKTwP0UG = accounts[1]
		const addressiof36aq = accounts[1]
		const boolEbVDE3 = await XenoFelixIKyqhow.paused.call({from: accounts[0]});
		const boolACvnC7a = await XenoFelixIKyqhow.transfer.call(addressAKrCy9, uintAZ1r50, {from: accounts[2]});
		await XenoFelixIKyqhow.renouncePauser.call({from: accounts[3]});
		const addressNK56yOS = await XenoFelixIKyqhow.removePauser.call(addressL4rR3O, {from: accounts[2]});
		await XenoFelixIKyqhow.onlyPauser.call({from: accounts[2]});
		const boolPP5i5sq = await XenoFelixIKyqhow.burnOwner.call(addressKTwP0UG, uint4G44o8, {from: accounts[4]});
		const boolEqQMccu = await XenoFelixIKyqhow.isOwner.call(addressiof36aq, {from: accounts[5]});

		assert.equal(boolACvnC7a, true)
		assert.equal(boolEbVDE3, false)
		await expect(XenoFelixIKyqhow.renouncePauser.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringk2P2jkN = "SUvfL1bqsSm8Ozqtac2CtUbFRgVXgyUAuaeRUoSwQ1AW9qx1umRBetsrJwkYa5C2A3KOM8j47kJuE1P7xgOLIQpehSe"
		const stringy4xVo4r = "RQkAIuOCv8Ded3TyWvhr5xLEzAbrTz85LAIT4sgQAO9Nl39sgk8ycUyDUFchrS"
		const uint8SJPpz = BigInt("1317")
		const uintfwXJqkt = BigInt("192")
		const XenoFelixdwrpKxm = await XenoFelix.new(stringk2P2jkN, stringy4xVo4r, uint8SJPpz, uintfwXJqkt, {from: accounts[4]});
		const uintwP3tGa7 = BigInt("759")
		const addressX312sIk = "0x0000000000000000000000000000000000000001"
		const uintnkAs3hi = BigInt("1020")
		const uintBp0SjtP = BigInt("1351")
		const addressDhvLUuR = accounts[0]
		const booloTIzu3J = await XenoFelixdwrpKxm.decreaseAllowance.call(addressX312sIk, uintwP3tGa7, {from: accounts[3]});
		const uint256Rc5DF9t = await XenoFelixdwrpKxm.burn.call(uintnkAs3hi, {from: accounts[3]});
		const booln6VwuFg = await XenoFelixdwrpKxm.decreaseAllowance.call(addressDhvLUuR, uintBp0SjtP, {from: accounts[2]});

		await expect(XenoFelixdwrpKxm.decreaseAllowance.call(addressX312sIk, uintwP3tGa7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uintKeGUqsn = BigInt("727")
		const uintJGQu4Vt = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uintKeGUqsn, uintJGQu4Vt, {from: accounts[2]});
		const uinthUaeyZJ = BigInt("969")
		const addresstRpnHrx = accounts[5]
		const addressGxCQs6q = accounts[3]
		const uintmrsGONp = BigInt("828")
		const addressfZog9X = accounts[1]
		const uint8s7ShTCp = await XenoFelixIKyqhow.decimals.call({from: accounts[3]});
		const boolonqFEap = await XenoFelixIKyqhow.transferFrom.call(addressGxCQs6q, addresstRpnHrx, uinthUaeyZJ, {from: accounts[3]});
		const boolPP5i5sq = await XenoFelixIKyqhow.burnOwner.call(addressfZog9X, uintmrsGONp, {from: accounts[4]});

		assert.equal(uint8s7ShTCp, BigInt("161"))
		await expect(XenoFelixIKyqhow.transferFrom.call(addressGxCQs6q, addresstRpnHrx, uinthUaeyZJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uintYRNwdDe = BigInt("727")
		const uintp2mjKfd = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uintYRNwdDe, uintp2mjKfd, {from: accounts[2]});
		const addressFfSyoky = accounts[3]
		const addressi8g4T3z = accounts[1]
		const address4hYkWt = accounts[3]
		const addressy1rULp = accounts[1]
		const uintgK33R5R = BigInt("1673")
		const addressJXLtJNX = accounts[7]
		const addressrAQqrx = accounts[1]
		const boolAyabwEt = await XenoFelixIKyqhow.freezeAccount.call(addressFfSyoky, {from: accounts[2]});
		const uint256ZnYbhGp = await XenoFelixIKyqhow.allowance.call(address4hYkWt, addressi8g4T3z, {from: accounts[1]});
		const uint256P3fR3tJ = await XenoFelixIKyqhow.balanceOf.call(addressy1rULp, {from: "0x0000000000000000000000000000000000000001"});
		const boolACvnC7a = await XenoFelixIKyqhow.transfer.call(addressJXLtJNX, uintgK33R5R, {from: accounts[2]});
		const stringG6u5RHo = await XenoFelixIKyqhow.symbol.call({from: accounts[1]});
		const boolEqQMccu = await XenoFelixIKyqhow.isOwner.call(addressrAQqrx, {from: accounts[5]});

		assert.equal(boolACvnC7a, true)
		assert.equal(boolAyabwEt, true)
		assert.equal(boolEqQMccu, false)
		assert.equal(stringG6u5RHo, "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT")
		assert.equal(uint256P3fR3tJ, BigInt("0"))
		assert.equal(uint256ZnYbhGp, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uintZeYl2V = BigInt("727")
		const uintrdluGll = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uintZeYl2V, uintrdluGll, {from: accounts[2]});
		const uintp5UjUL = BigInt("1618")
		const uintzYod6h = BigInt("1064")
		const addressYBeJYmU = accounts[2]
		const uintoPsd85p = BigInt("1667")
		const addressP10ScOq = accounts[6]
		const addressVMjgyPF = accounts[5]
		const boolkLRzN4 = await XenoFelixIKyqhow.lock.call(addressYBeJYmU, uintzYod6h, uintp5UjUL, {from: accounts[2]});
		const boolACvnC7a = await XenoFelixIKyqhow.transfer.call(addressP10ScOq, uintoPsd85p, {from: accounts[2]});
		const boolmdfVzUv = await XenoFelixIKyqhow.unfreezeAccount.call(addressVMjgyPF, {from: accounts[4]});

		assert.equal(boolACvnC7a, true)
		assert.equal(boolkLRzN4, true)
		await expect(XenoFelixIKyqhow.unfreezeAccount.call(addressVMjgyPF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uintJRnQGcr = BigInt("727")
		const uintijYckAA = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uintJRnQGcr, uintijYckAA, {from: accounts[2]});
		const uintZQgKOBu = BigInt("124")
		const uintLKedRvY = BigInt("850")
		const addressO0tWjEs = accounts[4]
		const uinti6LYzR7 = BigInt("969")
		const address5GuTJX = accounts[5]
		const addressKQejw8 = accounts[4]
		const uintxGBEaCH = BigInt("892")
		const boolAf8up0I = await XenoFelixIKyqhow.transferWithLock.call(addressO0tWjEs, uintLKedRvY, uintZQgKOBu, {from: accounts[2]});
		const boolonqFEap = await XenoFelixIKyqhow.transferFrom.call(addressKQejw8, address5GuTJX, uinti6LYzR7, {from: accounts[3]});
		const uint256ibph1Ht = await XenoFelixIKyqhow.burn.call(uintxGBEaCH, {from: accounts[3]});

		assert.equal(boolAf8up0I, true)
		await expect(XenoFelixIKyqhow.transferFrom.call(addressKQejw8, address5GuTJX, uinti6LYzR7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringcnhxE6q = "nBAwjpAFAnVm7MNwX3Mq2BTPbH5yRVVFbyaMQ"
		const stringvTpsDXi = "Kecr6DFVKHO3sYiLuotzs8lfXznsjzt3E1Oue14EQGLCdoNcerswLRebDHWYRdb5CK4Iorrbsrc8hsS7bfrKEDa9n7LT"
		const uintwT4ulJx = BigInt("727")
		const uinthUBKsja = BigInt("161")
		const XenoFelixIKyqhow = await XenoFelix.new(stringcnhxE6q, stringvTpsDXi, uintwT4ulJx, uinthUBKsja, {from: accounts[2]});
		const addresstgnHsji = accounts[3]
		const addressXAeovsj = accounts[3]
		const addresszd3kGya = await XenoFelixIKyqhow.addPauser.call(addresstgnHsji, {from: accounts[2]});
		const uint256rHdisIL = await XenoFelixIKyqhow.balanceOf.call(addressXAeovsj, {from: accounts[4]});

		assert.equal(uint256rHdisIL, BigInt("0"))
	});
})